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

namespace App\Api\Controller\SwitchSkin;

use App\Events\Setting\Saved;
use App\Events\Setting\Saving;
use App\Models\User;
use App\Models\setting;
use App\Models\Permission;
use App\Validators\SetSettingValidator;
use Discuz\Auth\AssertPermissionTrait;
use Discuz\Auth\Exception\PermissionDeniedException;
use Discuz\Contracts\Setting\SettingsRepository;
use Discuz\Foundation\Application;
use Discuz\Http\DiscuzResponseFactory;
use Exception;
use Illuminate\Contracts\Events\Dispatcher as Events;
use Illuminate\Support\Arr;
use Illuminate\Support\Collection;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Server\RequestHandlerInterface;

class SwitchSkinController implements RequestHandlerInterface
{
    use AssertPermissionTrait;

    /**
     * The user performing the action.
     *
     * @var User
     */
    public $actor;

    /**
     * @param Events $events
     * @param SettingsRepository $settings
     * @param SetSettingValidator $validator
     */
    public function __construct(Events $events, SettingsRepository $settings, User $actor, Application $app)
    {
        $this->events = $events;
        $this->settings = $settings;
        $this->actor = $actor;
        $this->app = $app;
    }

    /**
     * @param ServerRequestInterface $request
     * @return ResponseInterface
     * @throws PermissionDeniedException
     * @throws Exception
     */
    public function handle(ServerRequestInterface $request): ResponseInterface
    {
        $this->assertAdmin($request->getAttribute('actor'));
        $actor = $request->getAttribute('actor');
        $body = $request->getParsedBody();
        $data = Arr::get($body, 'data', []);
        $attributes = Arr::get($data, 'attributes', []);

        $public_path = public_path();
        $last_path = dirname($public_path);
        $link_skin_public = $last_path . DIRECTORY_SEPARATOR .'public_'. $attributes['skin'];

        $oldSkinPath = $public_path . DIRECTORY_SEPARATOR . 'skin.conf';
        if(file_exists($oldSkinPath)){
            $oldSiteSkin = file_get_contents($oldSkinPath);
        }else{
            $oldSiteSkin = 1;
        }

        // ??????public_1???public_2??????????????????????????????????????????????????????????????????
        $public_blue_skin = $last_path . DIRECTORY_SEPARATOR .'public_1'. DIRECTORY_SEPARATOR . 'skin.conf';
        if(!file_exists($public_blue_skin)){
            touch($public_blue_skin);
            $readBlueSkin = fopen($public_blue_skin, 'w');
            fwrite($readBlueSkin, 1);
        }

        $public_red_skin = $last_path . DIRECTORY_SEPARATOR .'public_2'. DIRECTORY_SEPARATOR . 'skin.conf';
        if(!file_exists($public_red_skin)){
            touch($public_red_skin);
            $readRedSkin = fopen($public_red_skin, 'w');
            fwrite($readRedSkin, 2);
        }

        if($oldSiteSkin == $attributes['skin']){
            throw new Exception("???????????????????????????????????????");
        }

        $status = false;
        $old_skin_public = $last_path . DIRECTORY_SEPARATOR .'public_'. $oldSiteSkin;
        if(strtoupper(substr(PHP_OS, 0, 3)) === 'WIN'){
            // ??????????????????????????????
            $this->check_dir($link_skin_public, $public_path);
            $this->copy_dir($link_skin_public, $public_path, $old_skin_public);
            if(is_dir($public_path)){
                if($dh = opendir($public_path)){
                    $skin_file = 'skin.conf';
                    if(file_exists($skin_file)){
                        $site_skin = file_get_contents($skin_file);
                        if($site_skin == $attributes['skin']){
                            $status = true;
                        }
                    }else{
                        throw new Exception("?????????????????????????????????????????????????????????????????????");
                    }
                }
            }
        }else{
            $cmd = '\\cp -r '. $link_skin_public . DIRECTORY_SEPARATOR . '* ' . $public_path. DIRECTORY_SEPARATOR;
            $message = shell_exec($cmd);
            if($message){
                // ??????????????????(????????????)??????????????????????????????public???????????????
                $restoreCmd = '\\cp -r '. $old_skin_public . DIRECTORY_SEPARATOR . '* ' . $public_path. DIRECTORY_SEPARATOR;
                $restoreMessage = shell_exec($restoreCmd);
                if($restoreMessage){
                    throw new Exception("??????????????????????????????????????????????????????????????????????????????:$cmd");
                }else{
                    throw new Exception("????????????????????????????????????????????????:$cmd");
                }
            }
            $skin_file = $public_path . DIRECTORY_SEPARATOR .'skin.conf';
            if(file_exists($skin_file)){
                $site_skin = file_get_contents($skin_file);
                if($site_skin == $attributes['skin']){
                    $status = true;
                }else{
                    throw new Exception("????????????????????????????????????????????????:$cmd");
                }
            }else{
                throw new Exception("?????????????????????????????????????????????????????????????????????");
            }
        }

        if($status){
            $result = [
                'data' => [
                    'attributes' => [
                        'site_skin' => (int)$attributes['skin'],
                        'code' => 200,
                        'message' => '?????????????????????',
                    ],
                ]
            ];
        }else{
            $result = [
                'data' => [
                    'attributes' => [
                        'site_skin' => 1,
                        'code' => 500,
                        'message' => '?????????????????????',
                    ],
                ]
            ];
        }

        return DiscuzResponseFactory::JsonResponse($result);
    }


    // ????????????
    public function copy_dir($from_dir, $to_dir, $old_skin_public)
    {
        if(!$this->copy_dir_impl($from_dir, $to_dir)){
            if(!$this->copy_dir_impl($old_skin_public, $from_dir)){
                throw new Exception("?????????????????????????????????????????????");
            }
        }
    }

    public function copy_dir_impl($from_dir, $to_dir)
    {
        if(!is_dir($from_dir)){
            return false;
        }

        $from_files = scandir($from_dir);
         //?????????????????????????????????????????????
        if(!file_exists($to_dir)){
            @mkdir($to_dir);
        }

        if(empty($from_files)){
            return false;
        }

        foreach ($from_files as $file){
            if($file == '.' || $file == '..' ){
                continue;
            }

            if(is_dir($from_dir .'/'. $file)){
                //?????????????????????????????????
                $this->copy_dir_impl($from_dir .'/'. $file, $to_dir .'/'. $file);
            }else{
                //??????copy??????????????????
                $copyResult = false;
                try {
                    $copyResult = copy($from_dir .'/'. $file, $to_dir .'/'. $file);
                } catch (Exception $e) {
                }

                if(!$copyResult){
                    return $copyResult;
                }

            }
        }

        return true;
    }

    // ????????????????????????-WIN
    public function check_dir($from_dir, $to_dir)
    {
        if(!is_dir($from_dir)){
            return false;
        }

        $from_files = scandir($from_dir);
         //?????????????????????????????????????????????
        if(!file_exists($to_dir)){
            @mkdir($to_dir);
        }
        if(!empty($from_files)){
            foreach ($from_files as $file){
                if($file == '.' || $file == '..' ){
                    continue;
                }

                if(is_dir($from_dir .'/'. $file)){
                    //?????????????????????????????????
                    $this->check_dir($from_dir .'/'. $file, $to_dir .'/'. $file);
                }else{
                    //??????copy??????????????????
                    $filePath = $to_dir .'/'. $file;
                    if(!file_exists($filePath)){
                        touch($filePath);
                    }
                    $fileWritable = is_writable($filePath);
                    if(!$fileWritable){
                        throw new Exception("{$filePath}??????????????????????????????????????????????????????");
                    }
                }
            }
        }
    }
}
