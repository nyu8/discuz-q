<?php
/**
 * Copyright (C) 2021 Tencent Cloud.
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

namespace App\Api\Controller\WalletV3;


use App\Api\Serializer\UserWalletLogSerializer;
use App\Common\ResponseCode;
use App\Models\User;
use App\Models\UserWalletLog;
use App\Repositories\UserRepository;
use App\Repositories\UserWalletLogsRepository;
use Discuz\Base\DzqController;
use Discuz\Http\UrlGenerator;
use Illuminate\Contracts\Bus\Dispatcher;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Arr;
use Illuminate\Support\Str;
use Tobscure\JsonApi\Parameters;
use App\Api\Controller\ThreadsV3\ThreadHelper;

class ListUserWalletLogsController extends DzqController
{
    protected $bus;
    protected $url;
    protected $cash;
    protected $walletLogs;
    protected $sumChangeAvailableAmount;
    protected $walletLogType;

    public $include = [
        'user',
        'order',
        'order.user'
    ];

    public $optionalInclude = [
        'user',
        'userWallet',
        'sourceUser',
        'userWalletCash',
        'order.thread',
        'order.thread.user',
        'order.thread.firstPost',
    ];

    public $sort = [
        'created_at'    =>  'desc'
    ];

    public $sortFields = [
        'created_at',
        'updated_at'
    ];

    public $titleLength = 10;

    public function __construct(Dispatcher $bus, UrlGenerator $url, UserWalletLogsRepository $walletLogs)
    {
        $this->bus = $bus;
        $this->url = $url;
        $this->walletLogs = $walletLogs;
    }

    // ????????????
    protected function checkRequestPermissions(UserRepository $userRepo)
    {
        $actor = $this->user;
        if ($actor->isGuest()) {
            $this->outPut(ResponseCode::JUMP_TO_LOGIN);
        }
        return true;
    }


    public function main()
    {
        $user_wallet_log_serializer = $this->app->make(UserWalletLogSerializer::class);
        $user_wallet_log_serializer->setRequest($this->request);

        $this->walletLogType  = $this->inPut('walletLogType');
        $filter         = $this->inPut('filter') ?: [];
        $page           = $this->inPut('page') ?: 1;
        $perPage        = $this->inPut('perPage') ?: 5;
        $requestInclude = explode(',', 'userWallet,order.thread.firstPost');

        if(!empty($this->inPut('include')) && is_array($requestInclude) && array_diff($requestInclude, $this->optionalInclude)){       //??????include ??????optionalinclude ?????????
            return $this->outPut(ResponseCode::NET_ERROR);
        }
        $sort           = (new Parameters($this->request->getQueryParams()))->getSort($this->sortFields) ?: $this->sort;
        $include        = !empty($requestInclude)
                            ? array_unique(array_merge($this->include, $requestInclude))
                            : $this->include;

        $walletLogs = $this->search($this->user, $filter, $sort, $page, $perPage);

        // ????????????
        if (in_array('order.thread.firstPost', $include)) {
            $walletLogs['pageData']->load('order.thread.firstPost')
                ->map(function (UserWalletLog $log) {
                    if ($log->order && $log->order->thread) {
                        if ($log->order->thread->title) {
                            $title = Str::limit($log->order->thread->title);
                        } else {
                            $title = Str::limit($log->order->thread->firstPost->content);
                            $title = str_replace("\n", '', $title);
                        }

                        $log->order->thread->title = strip_tags($title);
                    }
                });
        }

        $data = $this->camelData($walletLogs);

        $data = $this->filterData($data);

        return $this->outPut(ResponseCode::SUCCESS,'', $data);
    }


    public function search($actor, $filter, $sort, $page = 0, $perPage = 0)
    {
        $query = $this->walletLogs->query();
        $this->applyFilters($query, $filter, $actor);

        // ????????????????????????
        $this->sumChangeAvailableAmount = number_format($query->sum('change_available_amount'), 2);

        foreach ((array)$sort as $field => $order) {
            $query->orderBy(Str::snake($field), $order);
        }
        return $this->pagination($page, $perPage, $query, false);
    }


    private function applyFilters(Builder $query, array $filter, User $actor)
    {
        $log_user           = (int)Arr::get($filter, 'user'); //??????
        $log_change_desc    = Arr::get($filter, 'changeDesc'); //????????????
        $log_change_type    = Arr::get($filter, 'changeType', []); //????????????
        $log_username       = Arr::get($filter, 'username'); //?????????????????????
        $log_start_time     = Arr::get($filter, 'startTime'); //???????????????????????????
        $log_end_time       = Arr::get($filter, 'endTime'); //???????????????????????????
        $log_source_user_id         = Arr::get($filter, 'sourceUserId');
        $log_change_type_exclude    = Arr::get($filter, 'changeTypeExclude');//??????????????????
        // ?????????????????????
        $expend_type = [
            UserWalletLog::TYPE_EXPEND_ARTIFICIAL,       //		????????????
            UserWalletLog::TYPE_EXPEND_REWARD,           //			????????????
            UserWalletLog::TYPE_EXPEND_THREAD,           //			??????????????????
            UserWalletLog::TYPE_EXPEND_RENEW,            //			??????????????????
            UserWalletLog::TYPE_EXPEND_QUESTION,         //		??????????????????
            UserWalletLog::TYPE_EXPEND_ONLOOKER,         //		??????????????????
            UserWalletLog::TYPE_EXPEND_TEXT,             //			?????????????????????
            UserWalletLog::TYPE_EXPEND_LONG,             //			?????????????????????
            UserWalletLog::TYPE_REDPACKET_EXPEND,        //		????????????
            UserWalletLog::TYPE_QUESTION_REWARD_EXPEND   //	??????????????????
        ];
        // ?????????????????????
        $freeze_type = [
            UserWalletLog::TYPE_QUESTION_FREEZE,       //		????????????
            UserWalletLog::TYPE_CASH_FREEZE,       //		????????????
            UserWalletLog::TYPE_TEXT_FREEZE,       //		?????????????????????
            UserWalletLog::TYPE_LONG_FREEZE,       //		?????????????????????
            UserWalletLog::TYPE_REDPACKET_FREEZE,       //		????????????
            UserWalletLog::TYPE_QUESTION_REWARD_FREEZE,       //		??????????????????
            UserWalletLog::TYPE_MERGE_FREEZE       //		??????????????????
        ];


//        $query->when($log_user, function ($query) use ($log_user) {
//            $query->where('user_id', $log_user);
//        });
        $query->when($actor, function ($query) use ($actor) {
            $query->where('user_id', $actor->id);
        });

        $query->when($log_change_desc, function ($query) use ($log_change_desc) {
            $query->where('change_desc', 'like', "%$log_change_desc%");
        });

        if ($this->walletLogType == 'income') {
            $query->where('change_available_amount', '>', 0);
        } elseif ($this->walletLogType == 'expend') {
            $query->whereIn('change_type', $expend_type);
        } elseif ($this->walletLogType == 'freeze') {
            $query->whereIn('change_type', $freeze_type);
        }
        if (!empty($log_change_type)) {
            $query->when($log_change_type, function ($query) use ($log_change_type) {
                $query->whereIn('change_type', $log_change_type);
            });
        }

        $query->when(!is_null($log_change_type_exclude), function ($query) use ($log_change_type_exclude) {
            $log_change_type_exclude = explode(',', $log_change_type_exclude);
            $query->whereNotIn('change_type', $log_change_type_exclude);
        });
        $query->when($log_start_time, function ($query) use ($log_start_time) {
            $query->where('created_at', '>=', $log_start_time);
        });
        $query->when($log_end_time, function ($query) use ($log_end_time) {
            $query->where('created_at', '<=', $log_end_time.' 23:59:59');
        });
        $query->when($log_username, function ($query) use ($log_username) {
            $query->whereIn('user_wallet_logs.user_id',
                            User::where('users.username', $log_username)
                                ->select('id', 'username')
                                ->get()
                            );
        });
        if (Arr::has($filter, 'source_username')) { // ????????? "0" ?????????
            $log_source_username = Arr::get($filter, 'source_username');
            $query->whereIn('user_wallet_logs.source_user_id',
                            User::query()
                                ->where('users.username', 'like', '%' . $log_source_username . '%')
                                ->pluck('id')
                            );
        }
        $query->when($log_source_user_id, function ($query) use ($log_source_user_id) {
            $query->where('source_user_id', '=', $log_source_user_id);
        });
    }

    public function filterData($data){
        foreach ($data['pageData'] as $key => $val) {

            if(!empty($val['order']['thread']['title'])) {
                $title = str_replace(['<r>', '</r>', '<t>', '</t>'], ['', '', '', ''], $val['order']['thread']['title']);
                list($searches, $replaces) = ThreadHelper::getThreadSearchReplace($title);
                $title = str_replace($searches, $replaces, $title);
            }elseif (!empty($val['order']['thread']['firstPost']['content'])) {
                $title = str_replace(['<r>', '</r>', '<t>', '</t>'], ['', '', '', ''], $val['order']['thread']['firstPost']['content']);
                list($searches, $replaces) = ThreadHelper::getThreadSearchReplace($title);
                $title = str_replace($searches, $replaces, $title);
            } else {
                $title = '';
            }

            $amount = 0;
            switch ($this->walletLogType){
                case in_array($this->walletLogType, ['income', 'freeze']):
                    $amount = $val['changeAvailableAmount'];
                    break;
                case 'expend':
                    //?????????????????????
                    if(in_array($val['changeType'], [UserWalletLog::TYPE_EXPEND_TEXT, UserWalletLog::TYPE_EXPEND_LONG, UserWalletLog::TYPE_REDPACKET_EXPEND, UserWalletLog::TYPE_QUESTION_REWARD_EXPEND])){
                        $amount = $val['changeFreezeAmount'];
                    }else{
                        $amount = $val['changeAvailableAmount'];
                    }
                    break;
            }

            $pageData = [
                'id'            =>  $val['id'],
                'title'         =>  $title,
                'amount'        =>  $amount,
                'changeType'    =>  !empty($val['changeType']) ? $val['changeType'] : '',
                'changeDesc'    =>  !empty($val['changeDesc']) ? $val['changeDesc'] : '',
                'status'        =>  !empty($val['order']['status']) ? $val['order']['status'] : '',
                'createdAt'     =>  !empty($val['createdAt']) ? $val['createdAt'] : 0,
            ];
            $data['pageData'][$key] =  $pageData;
        }

        return $data;
    }


}
