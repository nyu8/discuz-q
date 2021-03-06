<?php

/**
 * Copyright (C) 2020 Tencent Cloud.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

namespace App\Api\Controller\Users;

use App\Api\Serializer\TokenSerializer;
use App\Commands\Users\GenJwtToken;
use App\Commands\Users\RegisterUser;
use App\Events\Users\RegisteredCheck;
use App\Models\SessionToken;
use App\Notifications\Messages\Wechat\RegisterWechatMessage;
use App\Notifications\System;
use App\Repositories\UserRepository;
use App\User\Bind;
use Discuz\Api\Controller\AbstractCreateController;
use Discuz\Auth\AssertPermissionTrait;
use Discuz\Auth\Exception\PermissionDeniedException;
use Discuz\Auth\Exception\RegisterException;
use Discuz\Contracts\Setting\SettingsRepository;
use Discuz\Foundation\Application;
use Illuminate\Contracts\Bus\Dispatcher;
use Illuminate\Contracts\Events\Dispatcher as Events;
use Illuminate\Support\Arr;
use Psr\Http\Message\ServerRequestInterface;
use Tobscure\JsonApi\Document;

class RegisterController extends AbstractCreateController
{
    use AssertPermissionTrait;

    protected $bus;

    protected $users;

    protected $settings;

    protected $app;

    protected $bind;

    protected $events;

    public function __construct(Dispatcher $bus, UserRepository $users, SettingsRepository $settings, Application $app, Bind $bind, Events $events)
    {
        $this->bus = $bus;
        $this->users = $users;
        $this->settings = $settings;
        $this->app = $app;
        $this->bind = $bind;
        $this->events = $events;
    }

    public $serializer = TokenSerializer::class;

    /**
     * {@inheritdoc}
     * @throws PermissionDeniedException
     * @throws \Exception
     */
    protected function data(ServerRequestInterface $request, Document $document)
    {
        if (!(bool)$this->settings->get('register_close')) {
            throw new PermissionDeniedException('register_close');
        }
        $attributes = Arr::get($request->getParsedBody(), 'data.attributes', []);
        $attributes['register_ip'] = ip($request->getServerParams());
        $attributes['register_port'] = Arr::get($request->getServerParams(), 'REMOTE_PORT', 0);
        $type = intval(Arr::get($attributes, 'register_type'));
        //???????????????????????????
        $registerType = $this->settings->get('register_type');

        //???????????????????????????????????????????????????
        if($type != $registerType) {
            throw new RegisterException('Register Type Error');
        }

        /**??????????????????,????????????????????????????????????**/
        /**???????????????**/
        $token = Arr::get($attributes, 'token');
        /**???????????????**/
        $js_code = Arr::get($attributes, 'js_code');
        $noAES = Arr::get($attributes, 'noAES');
        $iv = Arr::get($attributes, 'iv');
        $encryptedData = Arr::get($attributes, 'encryptedData');

        //?????????????????????????????????????????????????????????????????????????????????????????????????????????
        if($registerType == 1 || $registerType == 2) {
            if(empty($token) && empty($js_code) ) {
                throw new RegisterException('Register Method Error');
            }
            if(! empty($token)) {
                //??????token
                if(empty(SessionToken::get($token))) {
                    throw new RegisterException('Register Token Error');
                }
            }
            /**????????????????????????????????????????????????????????????**/
            /*if((! empty($js_code) && (empty($iv) || empty($encryptedData)))  ||
                (! empty($iv) && (empty($js_code) || empty($encryptedData))) ||
                (! empty($encryptedData) && (empty($js_code) || empty($iv)))
            ) {
                throw new RegisterException('Register Mini Token Error');
            }*/
            if(! empty($js_code)) {
                throw new RegisterException('Register Mini Token Error');
            }
        }

        $user = $this->bus->dispatch(
            new RegisterUser($request->getAttribute('actor'), $attributes)
        );

        $rebind = Arr::get($attributes, 'rebind', 0);
        //???????????????
        if ($token) {
            $this->bind->withToken($token, $user, $rebind);
            // ?????????????????????????????????
            if (!(bool)$this->settings->get('register_validate')) {
                // Tag ???????????? (???????????????????????? ????????????????????????)
                $user->notify(new System(RegisterWechatMessage::class, $user, ['send_type' => 'wechat']));
            }
        }
        //?????????????????????
        if ($js_code && $iv && $encryptedData && ! $noAES) {
            $this->bind->bindMiniprogram($js_code, $iv, $encryptedData, $rebind, $user);
        }

        if($js_code && $noAES) {
            $this->bind->bindMiniprogramByCode($js_code,  $user);
        }


        //???????????????
        /* if ($mobileToken = Arr::get($attributes, 'mobileToken')) {
             $this->bind->mobile($mobileToken, $user);
         }*/

        // ????????????????????????
        if (!(bool)$this->settings->get('register_validate')) {
            $this->events->dispatch(new RegisteredCheck($user));
        }
        $response = $this->bus->dispatch(
            new GenJwtToken(Arr::only($attributes, 'username'))
        );
        return json_decode($response->getBody());
    }
}
