/*
京喜财富岛
根据github@MoPoQAQ 财富岛脚本修改而来。无需京喜token,只需京东cookie即可.
cron 5 0,8,13,19 * * * jd_cfd.js
更新时间：2021-4-15
活动入口：京喜APP-我的-京喜财富岛

已支持IOS双京东账号,Node.js支持N个京东账号
脚本兼容: QuantumultX, Surge, Loon, JSBox, Node.js
*/
const $ = new Env("京喜财富岛");
const JD_API_HOST = "https://m.jingxi.com/";
const notify = $.isNode() ? require('./sendNotify') : '';
const jdCookieNode = $.isNode() ? require("./jdCookie.js") : "";
$.showLog = $.getdata("cfd_showLog") ? $.getdata("cfd_showLog") === "true" : false;
$.notifyTime = $.getdata("cfd_notifyTime");
$.result = [];$.shareCodes = [];
let cookiesArr = [], cookie = '', token;


 const randomCount = $['isNode']() ? 0x14 : 0x5;
 if ($['isNode']()) {
     Object['keys'](jdCookieNode)['forEach'](_0x2ad2aa => {
         cookiesArr['push'](jdCookieNode[_0x2ad2aa]);
     });
     if (process['env']['JD_DEBUG'] && process['env']['JD_DEBUG'] === 'false') console['log'] = () => {};
     if (JSON['stringify'](process['env'])['indexOf']('GITHUB') > -0x1) process['exit'](0x0);
 } else {
     cookiesArr = [$['getdata']('CookieJD'), $['getdata']('CookieJD2'), ...jsonParse($['getdata']('CookiesJD') || '[]')['map'](_0x242882 => _0x242882['cookie'])]['filter'](_0x5c1c13 => !!_0x5c1c13);
 }!(async () => {
     var _0x3ec279 = {
         'ZDXUs': '活动太火爆了',
         'gGjkb': '任务进行中或者未到任务时间',
         'wqsmH': function(_0x35fc20, _0x17f76e) {
             return _0x35fc20(_0x17f76e);
         },
         'Bmjdn': function(_0xebc040, _0xe84196) {
             return _0xebc040 === _0xe84196;
         },
         'pNRaj': 'success',
         'PhGOf': function(_0x3b7cfc, _0x10df24) {
             return _0x3b7cfc || _0x10df24;
         },
         'kgfBH': function(_0xaf6c1b) {
             return _0xaf6c1b();
         },
         'WPUlO': function(_0x4ab2c1) {
             return _0x4ab2c1();
         },
         'PmjRL': '【提示】请先获取京东账号一cookie\x0a直接使用NobyDa的京东签到获取',
         'vmaDY': 'https://bean.m.jd.com/bean/signIndex.action',
         'usbGj': function(_0x3beace, _0x21a11c) {
             return _0x3beace(_0x21a11c);
         },
         'AzACk': 'https://raw.githubusercontent.com/gitupdate/updateTeam/master/shareCodes/cfd.json',
         'srGVc': function(_0x1fa257, _0x1cd727) {
             return _0x1fa257 <= _0x1cd727;
         },
         'HxYbh': function(_0xb36f3a, _0x446a8d) {
             return _0xb36f3a(_0x446a8d);
         },
         'QfHyc': 'VxINH',
         'GbPFP': function(_0x1668de, _0x3b7559) {
             return _0x1668de + _0x3b7559;
         },
         'TethE': function(_0x26ca1f, _0xb23fe) {
             return _0x26ca1f === _0xb23fe;
         },
         'phnqC': 'qwxqu',
         'bcMHG': function(_0x2631e4) {
             return _0x2631e4();
         },
         'SRPYs': function(_0x454ca9) {
             return _0x454ca9();
         },
         'lLWjQ': function(_0x2fb5d2, _0x48dfe9) {
             return _0x2fb5d2 < _0x48dfe9;
         },
         'uRDWg': function(_0x517bc5, _0x3d530e) {
             return _0x517bc5 !== _0x3d530e;
         },
         'qdpgS': 'ndLkY',
         'VLJkS': function(_0x39f8a3, _0x28cefa) {
             return _0x39f8a3 === _0x28cefa;
         },
         'WVqIB': 'msatf'
     };
     await _0x3ec279['WPUlO'](requireConfig);
     if (!cookiesArr[0x0]) {
         $['msg']($['name'], _0x3ec279['PmjRL'], _0x3ec279['vmaDY'], {
             'open-url': 'https://bean.m.jd.com/bean/signIndex.action'
         });
         return;
     }
     let _0x4609e7 = {},
         _0x3c6afe = await _0x3ec279['usbGj'](getAuthorShareCode, _0x3ec279['AzACk']);
     if (_0x3ec279['srGVc'](new Date()['getHours'](), 0x3)) _0x4609e7 = await _0x3ec279['HxYbh'](getAuthorShareCode, 'https://a.nz.lu/cfd.json');
     if (!_0x3c6afe) _0x3c6afe = await _0x3ec279['HxYbh'](getAuthorShareCode, 'https://cdn.jsdelivr.net/gh/gitupdate/updateTeam@master/shareCodes/cfd.json');
     $['strMyShareIds'] = [..._0x4609e7 && _0x4609e7['shareId'] || [], ..._0x3c6afe && _0x3c6afe['shareId'] || []];
     $['strGroupIds'] = [..._0x4609e7 && _0x4609e7['strGroupIds'] || [], ..._0x3c6afe && _0x3c6afe['strGroupIds'] || []];
     for (let _0x245142 = 0x0; _0x245142 < cookiesArr['length']; _0x245142++) {
         if (cookiesArr[_0x245142]) {
             if (_0x3ec279['Bmjdn']('VxINH', _0x3ec279['QfHyc'])) {
                 cookie = cookiesArr[_0x245142];
                 $['UserName'] = _0x3ec279['HxYbh'](decodeURIComponent, cookie['match'](/pt_pin=([^; ]+)(?=;?)/) && cookie['match'](/pt_pin=([^; ]+)(?=;?)/)[0x1]);
                 $['index'] = _0x3ec279['GbPFP'](_0x245142, 0x1);
                 $['nickName'] = '';
                 $['isLogin'] = !![];
                 $['nickName'] = '';
                 await _0x3ec279['WPUlO'](TotalBean);
                 console['log']('\n开始【京东账号' + $['index'] + '】' + ($['nickName'] || $['UserName']) + '\x0a');
                 if (!$['isLogin']) {
                     if (_0x3ec279['TethE'](_0x3ec279['phnqC'], 'qwxqu')) {
                         $['msg']($['name'], '【提示】cookie已失效', '京东账号' + $['index'] + ' ' + ($['nickName'] || $['UserName']) + '\x0a请重新登录获取\x0ahttps://bean.m.jd.com/bean/signIndex.action', {
                             'open-url': _0x3ec279['vmaDY']
                         });
                         if ($['isNode']()) {
                             await notify['sendNotify']($['name'] + 'cookie已失效 - ' + $['UserName'], '京东账号' + $['index'] + ' ' + $['UserName'] + '\n请重新登录获取cookie');
                         }
                         continue;
                     } else {
                         if (err) {
                             console['log']('' + JSON['stringify'](err));
                             console['log']($['name'] + ' DoTask API请求失败，请检查网路重试');
                         } else {
                             const {
                                 msg,
                                 ret
                             } = JSON['parse'](data);
                             $['log']('\x0a' + taskName + '【做日常任务】：' + (msg['indexOf'](_0x3ec279['ZDXUs']) !== -0x1 ? _0x3ec279['gGjkb'] : msg) + '\x0a' + ($['showLog'] ? data : ''));
                             _0x3ec279['wqsmH'](resolve, _0x3ec279['Bmjdn'](ret, 0x0));
                         }
                     }
                 }
                 token = await _0x3ec279['bcMHG'](getJxToken);
                 $['allTask'] = [];
                 $['info'] = {};
                 await _0x3ec279['SRPYs'](shareCodesFormat);
                 await _0x3ec279['SRPYs'](cfd);
             } else {
                 if (err) {
                     console['log']('' + JSON['stringify'](err));
                     console['log']($['name'] + ' getMoney_dwSource_1 API请求失败，请检查网路重试');
                 } else {
                     const {
                         iRet,
                         dwMoney,
                         sErrMsg
                     } = JSON['parse'](data);
                     $['log']('\x0a【' + sceneList[_key]['strSceneName'] + '】🏝岛主 : ' + (sErrMsg == _0x3ec279['pNRaj'] ? '获取财富值：¥ ' + _0x3ec279['PhGOf'](dwMoney, 0x0) : sErrMsg) + ' \x0a' + ($['showLog'] ? data : ''));
                 }
             }
         }
     }
     for (let _0x2763a2 = 0x0; _0x3ec279['lLWjQ'](_0x2763a2, cookiesArr['length']); _0x2763a2++) {
         if (_0x3ec279['uRDWg']('bBlfA', _0x3ec279['qdpgS'])) {
             cookie = cookiesArr[_0x2763a2];
             $['UserName'] = decodeURIComponent(cookie['match'](/pt_pin=([^; ]+)(?=;?)/) && cookie['match'](/pt_pin=([^; ]+)(?=;?)/)[0x1]);
             token = await getJxToken();
             $['canHelp'] = !![];
             if ($['shareCodes'] && $['shareCodes']['length']) console['log']('\x0a\x0a寻宝大作战，自己账号内部循环互助\x0a\x0a');
             for (let _0x5f3ca7 of $['shareCodes']) {
                 if (_0x3ec279['VLJkS']('blqhv', _0x3ec279['WVqIB'])) {
                     _0x3ec279['kgfBH'](resolve);
                 } else {
                     console['log']('账号' + $['UserName'] + ' 去参加 ' + _0x5f3ca7 + ' 寻宝大作战');
                     await _0x3ec279['HxYbh'](joinGroup, _0x5f3ca7);
                     await $['wait'](0x1f40);
                     if (!$['canHelp']) break;
                 }
             }
         } else {
             Object['keys'](shareCodes)['forEach'](_0x4778bf => {
                 if (shareCodes[_0x4778bf]) {
                     $['shareCodesArr']['push'](shareCodes[_0x4778bf]);
                 }
             });
         }
     }
     await $['wait'](0x1f4);
     await showMsg();
 })()['catch'](_0x3f6bff => $['logErr'](_0x3f6bff))['finally'](() => $['done']());

 function helpFriend() {
     var _0x336c6a = {
         'hJspx': function(_0xf665ba, _0x4cfd8c) {
             return _0xf665ba || _0x4cfd8c;
         },
         'TlePy': function(_0xf6bd53, _0x54d4da) {
             return _0xf6bd53 !== _0x54d4da;
         },
         'NYcnK': 'YVnQd',
         'uSMtA': function(_0x25c55e, _0x17d3c4) {
             return _0x25c55e(_0x17d3c4);
         },
         'sAZlx': function(_0x3446ee, _0x4a8b99) {
             return _0x3446ee(_0x4a8b99);
         },
         'debYl': 'uzqOb',
         'MmrwC': 'YmfXo',
         'syDkc': function(_0x828ad7, _0x28d8d0) {
             return _0x828ad7(_0x28d8d0);
         },
         'qjgPk': function(_0x582b0d) {
             return _0x582b0d();
         }
     };
     return new Promise(async _0x2c2ced => {
         if (_0x336c6a['TlePy'](_0x336c6a['NYcnK'], _0x336c6a['NYcnK'])) {
             if (data) {
                 console['log']('随机取' + randomCount + '个码放到您固定的互助码后面(不影响已有固定互助)');
                 data = JSON['parse'](data);
             }
         } else {
             $['canHelp'] = !![];
             for (let _0x331dce of $['newShareCodes']['filter'](_0x41e120 => !!_0x41e120 && !_0x41e120['includes']('GroupId'))) {
                 console['log']('去助力好友 【' + _0x331dce + '】');
                 if (token) await _0x336c6a['uSMtA'](createSuperAssistUser, _0x331dce);
                 await $['wait'](0x2710);
                 await _0x336c6a['sAZlx'](createAssistUser, _0x331dce);
                 if (!$['canHelp']) break;
                 await $['wait'](0x2ee0);
             }
             if (token) {
                 if (_0x336c6a['TlePy'](_0x336c6a['debYl'], _0x336c6a['MmrwC'])) {
                     $['canHelp'] = !![];
                     for (let _0x58229b of $['strGroupIds']) {
                         console['log']('去参加寻宝大作战 ' + _0x58229b + ' 等待10秒');
                         await _0x336c6a['syDkc'](joinGroup, _0x58229b);
                         if (!$['canHelp']) break;
                         await $['wait'](0x2710);
                     }
                 } else {
                     if (err) {
                         console['log']('' + JSON['stringify'](err));
                         console['log']($['name'] + ' UserSignRewardV2 API请求失败，请检查网路重试');
                     } else {
                         const {
                             iRet,
                             sData: {
                                 ddwMoney
                             },
                             sErrMsg
                         } = JSON['parse'](data);
                         $['log']('\n📌签到：' + sErrMsg + '，获得财富 ¥ ' + _0x336c6a['hJspx'](ddwMoney, 0x0) + '\x0a' + ($['showLog'] ? data : ''));
                     }
                 }
             }
             _0x336c6a['qjgPk'](_0x2c2ced);
         }
     });
 }
 async function cfd() {
     var _0x118e7b = {
         'lgxuF': function(_0x1ef8fb, _0x44dfec) {
             return _0x1ef8fb !== _0x44dfec;
         },
         'bKUzH': function(_0x3a45b8) {
             return _0x3a45b8();
         },
         'QWOst': function(_0x213a1b) {
             return _0x213a1b();
         },
         'fyzhP': function(_0x360481) {
             return _0x360481();
         },
         'ApUfj': function(_0x47cbf6, _0x44b82f) {
             return _0x47cbf6(_0x44b82f);
         },
         'TklUy': function(_0x483c6c, _0x578299) {
             return _0x483c6c(_0x578299);
         },
         'emHTZ': function(_0x2c227d) {
             return _0x2c227d();
         },
         'CJzuH': function(_0x46eed9) {
             return _0x46eed9();
         },
         'WbveP': function(_0x5662ec, _0x57fc0d) {
             return _0x5662ec - _0x57fc0d;
         }
     };
     try {
         if (_0x118e7b['lgxuF']('mdMAC', 'Ldrtv')) {
             const _0x34f9b1 = await _0x118e7b['bKUzH'](getUserInfo);
             await $['wait'](0x1f4);
             await _0x118e7b['QWOst'](querySignList);
             await $['wait'](0x1f4);
             await _0x118e7b['fyzhP'](getMoney);
             await $['wait'](0x1f4);
             await _0x118e7b['ApUfj'](getTaskList, 0x0);
             await $['wait'](0x1f4);
             await _0x118e7b['TklUy'](browserTask, 0x0);
             await $['wait'](0x1f4);
             await treasureHunt();
             await $['wait'](0x1f4);
             await _0x118e7b['fyzhP'](friendCircle);
             await $['wait'](0x1f4);
             await getTaskList(0x1);
             await $['wait'](0x1f4);
             await browserTask(0x1);
             await $['wait'](0x1f4);
             await _0x118e7b['emHTZ'](funCenterState);
             await $['wait'](0x1f4);
             await _0x118e7b['emHTZ'](openPeriodBox);
             await $['wait'](0x1f4);
             await _0x118e7b['CJzuH'](submitGroupId);
             await $['wait'](0x1f4);
             const _0xbf26fe = await getUserInfo(![]);
             await _0x118e7b['CJzuH'](helpFriend);
             $['result']['push']('【京东账号' + $['index'] + '】' + ($['nickName'] || $['UserName']), '【💵财富值】任务前: ' + _0x34f9b1['ddwMoney'] + '\n【💵财富值】任务后: ' + _0xbf26fe['ddwMoney'], '【💵财富值】净增值: ' + _0x118e7b['WbveP'](_0xbf26fe['ddwMoney'], _0x34f9b1['ddwMoney']) + '\x0a');
             await _0x118e7b['CJzuH'](helpAuthor3);
         } else {
             resolve();
         }
     } catch (_0x77ffc2) {
         $['logErr'](_0x77ffc2);
     }
 }

 function getAuthorShareCode(_0x2dd939) {
     var _0x5aaf37 = {
         'AzUZm': function(_0x2e5390, _0x381eea) {
             return _0x2e5390 !== _0x381eea;
         },
         'AJhnR': 'IdiXl',
         'aFKHd': 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1 Edg/87.0.4280.88',
         'vYdWQ': function(_0x47b97f, _0x37c315) {
             return _0x47b97f(_0x37c315);
         },
         'obPWC': 'tunnel',
         'kIfYd': function(_0x3fd2bf, _0xeec82d) {
             return _0x3fd2bf * _0xeec82d;
         },
         'SlXje': function(_0x5b202a) {
             return _0x5b202a();
         }
     };
     return new Promise(async _0x4655e1 => {
         var _0x353f8d = {
             'deDBP': function(_0x1c4707, _0x30aac9) {
                 return _0x5aaf37['AzUZm'](_0x1c4707, _0x30aac9);
             },
             'pnsIK': _0x5aaf37['AJhnR'],
             'vEuij': function(_0x3ae1d3, _0xd0170b) {
                 return _0x3ae1d3(_0xd0170b);
             },
             'rWfSu': function(_0x28bff1) {
                 return _0x28bff1();
             }
         };
         const _0x382cf2 = {
             'url': _0x2dd939 + '?' + new Date(),
             'timeout': 0x2710,
             'headers': {
                 'User-Agent': _0x5aaf37['aFKHd']
             }
         };
         if ($['isNode']() && process['env']['TG_PROXY_HOST'] && process['env']['TG_PROXY_PORT']) {
             const _0x4eeecc = _0x5aaf37['vYdWQ'](require, _0x5aaf37['obPWC']);
             const _0xbe49f = {
                 'https': _0x4eeecc['httpsOverHttp']({
                     'proxy': {
                         'host': process['env']['TG_PROXY_HOST'],
                         'port': _0x5aaf37['kIfYd'](process['env']['TG_PROXY_PORT'], 0x1)
                     }
                 })
             };
             Object['assign'](_0x382cf2, {
                 'agent': _0xbe49f
             });
         }
         $['get'](_0x382cf2, async (_0x4a978c, _0x795c80, _0x1960c6) => {
             try {
                 if (_0x353f8d['deDBP']('xpJvx', _0x353f8d['pnsIK'])) {
                     _0x353f8d['vEuij'](_0x4655e1, JSON['parse'](_0x1960c6));
                 } else {
                     $['logErr'](e, _0x795c80);
                 }
             } catch (_0x1f6756) {} finally {
                 if ('OkvNE' === 'OkvNE') {
                     _0x353f8d['rWfSu'](_0x4655e1);
                 } else {
                     if (_0x4a978c) {
                         console['log']('' + JSON['stringify'](_0x4a978c));
                         console['log']($['name'] + ' AchieveAward API请求失败，请检查网路重试');
                     } else {
                         const {
                             iRet,
                             sErrMsg,
                             dwExpericnce
                         } = JSON['parse'](_0x1960c6);
                         $['log']('\x0a' + strTaskDescr + '【领成就奖励】： success 获得财富值：¥ ' + dwExpericnce + '\x0a' + ($['showLog'] ? _0x1960c6 : ''));
                     }
                 }
             }
         });
         await $['wait'](0x2710);
         _0x5aaf37['SlXje'](_0x4655e1);
     });
 }

 function getRandomArrayElements(_0x44403d, _0x22cf02) {
     var _0x44be23 = {
         'YTlTD': function(_0x155767, _0x5bb885) {
             return _0x155767 - _0x5bb885;
         }
     };
     let _0x3fa384 = _0x44403d['slice'](0x0),
         _0x104184 = _0x44403d['length'],
         _0x5c22fe = _0x44be23['YTlTD'](_0x104184, _0x22cf02),
         _0xf20297, _0xc3745e;
     while (_0x104184-- > _0x5c22fe) {
         _0xc3745e = Math['floor']((_0x104184 + 0x1) * Math['random']());
         _0xf20297 = _0x3fa384[_0xc3745e];
         _0x3fa384[_0xc3745e] = _0x3fa384[_0x104184];
         _0x3fa384[_0x104184] = _0xf20297;
     }
     return _0x3fa384['slice'](_0x5c22fe);
 }
 async function helpAuthor3() {
     var _0x1c5e88 = {
         'PQRml': 'jd_jxCFD',
         'MmSbY': function(_0x28b03b, _0x44b73e) {
             return _0x28b03b(_0x44b73e);
         },
         'CyQkF': 'https://cdn.jsdelivr.net/gh/gitupdate/updateTeam@master/shareCodes/jd_super.json',
         'rngvs': function(_0x2d8f20, _0x4407a4) {
             return _0x2d8f20 > _0x4407a4;
         },
         'LciPC': 'FjsKB',
         'YHFhB': function(_0x4476b3, _0x23782d) {
             return _0x4476b3(_0x23782d);
         },
         'fTodY': 'application/json, text/plain, */*',
         'PUANK': 'https://h5.m.jd.com',
         'xKGSg': 'jdapp;iPhone;9.3.5;14.2;53f4d9c70c1c81f1c8769d2fe2fef0190a3f60d2;network/wifi;supportApplePay/0;hasUPPay/0;hasOCPay/0;model/iPhone10,2;addressid/137923973;supportBestPay/0;appBuild/167515;jdSupportDarkMode/0;pv/2217.74;apprpd/MyJD_PersonalSpace;ref/MySpace;psq/8;ads/;psn/53f4d9c70c1c81f1c8769d2fe2fef0190a3f60d2|8703;jdv/0|kong|t_1000170135|tuiguang|notset|1610674234917|1610674234;adk/;app_device/IOS;pap/JA2015_311210|9.3.5|IOS 14.2;Mozilla/5.0 (iPhone; CPU iPhone OS 14_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1',
         'UrYHj': 'zh-cn'
     };
     let _0x20a13e = await getAuthorShareCode2(),
         _0x535d73 = await _0x1c5e88['MmSbY'](getAuthorShareCode2, _0x1c5e88['CyQkF']);
     $['MyShareIds'] = [..._0x20a13e || [], ..._0x535d73 || []];
     $['MyShareIds'] = getRandomArrayElements($['MyShareIds'], _0x1c5e88['rngvs']($['MyShareIds']['length'], 0x3) ? 0x6 : $['MyShareIds']['length']);
     for (let _0x3037a0 of $['MyShareIds'] || []) {
         if (_0x1c5e88['LciPC'] === _0x1c5e88['LciPC']) {
             const _0x455b66 = {
                 'url': 'https://api.m.jd.com/client.action?clientVersion=9.3.5&client=wh5&functionId=smtfission_assist&appid=smtFission&body=' + _0x1c5e88['YHFhB'](escape, JSON['stringify'](_0x3037a0)),
                 'headers': {
                     'Host': 'api.m.jd.com',
                     'accept': _0x1c5e88['fTodY'],
                     'origin': _0x1c5e88['PUANK'],
                     'user-agent': _0x1c5e88['xKGSg'],
                     'accept-language': _0x1c5e88['UrYHj'],
                     'referer': 'https://h5.m.jd.com/babelDiy/Zeus/25C6dc6HY6if6DT7e58A1pi2Vxe4/index.html?activityId=73cf1fe89d33433d9cc8688d1892d432&assistId=R2u2OCB9eEbcCVB_CiVKhg',
                     'Cookie': cookie
                 },
                 'timeout': 0x2710
             };
             $['get'](_0x455b66);
         } else {
             if ($['getdata'](_0x1c5e88['PQRml'])) $['shareCodesArr'] = $['getdata'](_0x1c5e88['PQRml'])['split']('\x0a')['filter'](_0x26bb07 => !!_0x26bb07);
             console['log']('\nBoxJs设置的京喜财富岛邀请码:' + $['getdata'](_0x1c5e88['PQRml']) + '\x0a');
         }
     }
 }

 function getAuthorShareCode2(_0x2bfabc = 'https://gitee.com/shylocks/updateTeam/raw/main/jd_super.json') {
     var _0xb8d8df = {
         'UeNZP': 'bcQvt',
         'ilEoT': 'IDvth',
         'eLaLE': 'ekCbk',
         'rkuzt': 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1 Edg/87.0.4280.88'
     };
     return new Promise(_0x1d83a5 => {
         var _0x56ef63 = {
             'tsQjC': '未中奖',
             'ECVNn': function(_0x2564a1) {
                 return _0x2564a1();
             },
             'ZBoTk': _0xb8d8df['UeNZP'],
             'sdSHu': function(_0x96fa2b, _0xa7ab8f) {
                 return _0x96fa2b === _0xa7ab8f;
             },
             'yHFTX': _0xb8d8df['ilEoT'],
             'aZhBd': _0xb8d8df['eLaLE']
         };
         $['get']({
             'url': _0x2bfabc,
             'headers': {
                 'User-Agent': _0xb8d8df['rkuzt']
             },
             'timeout': 0x2710
         }, async (_0x116a6e, _0x5d706c, _0x44505e) => {
             var _0xbaabf0 = {
                 'hnWtl': function(_0x2029dd) {
                     return _0x56ef63['ECVNn'](_0x2029dd);
                 }
             };
             if (_0x56ef63['ZBoTk'] !== _0x56ef63['ZBoTk']) {
                 _0xbaabf0['hnWtl'](_0x1d83a5);
             } else {
                 try {
                     if (_0x116a6e) {} else {
                         if (_0x44505e) _0x44505e = JSON['parse'](_0x44505e);
                     }
                 } catch (_0x379219) {} finally {
                     if (_0x56ef63['sdSHu'](_0x56ef63['yHFTX'], _0x56ef63['aZhBd'])) {
                         if (_0x116a6e) {
                             console['log']('' + JSON['stringify'](_0x116a6e));
                             console['log']($['name'] + ' SlotMachine API请求失败，请检查网路重试');
                         } else {
                             const {
                                 iRet,
                                 sErrMsg,
                                 strAwardPoolName
                             } = JSON['parse'](_0x44505e);
                             $['log']('\n【抽奖结果】🎰 ' + (strAwardPoolName != '' ? _0x56ef63['tsQjC'] : strAwardPoolName) + ' \x0a' + ($['showLog'] ? _0x44505e : ''));
                         }
                     } else {
                         _0x1d83a5(_0x44505e || []);
                     }
                 }
             }
         });
     });
 }

 function getJxToken() {
     var _0x3bddf3 = {
         'cFqwU': 'abcdefghijklmnopqrstuvwxyz1234567890',
         'qVkco': function(_0x43298e, _0x381796) {
             return _0x43298e < _0x381796;
         },
         'rJUqy': function(_0x271e4f, _0x14471c) {
             return _0x271e4f === _0x14471c;
         },
         'Yypqr': 'GRmLM',
         'nqmvA': function(_0x26c3a3, _0x491ef6) {
             return _0x26c3a3 * _0x491ef6;
         },
         'lwLVm': function(_0x227f57) {
             return _0x227f57();
         },
         'AWgwJ': 'qhnZF',
         'vaFzZ': function(_0x3a5003, _0x4be884) {
             return _0x3a5003(_0x4be884);
         },
         'QqpYI': function(_0x203bbb, _0x6d9f2d) {
             return _0x203bbb(_0x6d9f2d);
         },
         'UFVQr': function(_0x2cb415, _0xfe7343) {
             return _0x2cb415(_0xfe7343);
         }
     };

     function _0x39185a(_0x4767bf) {
         let _0xb634cc = _0x3bddf3['cFqwU'];
         let _0x14c731 = '';
         for (let _0x151a33 = 0x0; _0x3bddf3['qVkco'](_0x151a33, _0x4767bf); _0x151a33++) {
             if (_0x3bddf3['rJUqy'](_0x3bddf3['Yypqr'], 'XhMth')) {
                 console['log']('' + JSON['stringify'](err));
                 console['log']($['name'] + ' AchieveAward API请求失败，请检查网路重试');
             } else {
                 _0x14c731 += _0xb634cc[parseInt(_0x3bddf3['nqmvA'](Math['random'](), _0xb634cc['length']))];
             }
         }
         return _0x14c731;
     }
     return new Promise(_0x1fb7f6 => {
         var _0x5e130a = {
             'nybhm': function(_0x26305e) {
                 return _0x3bddf3['lwLVm'](_0x26305e);
             }
         };
         if (_0x3bddf3['rJUqy'](_0x3bddf3['AWgwJ'], 'DIiRm')) {
             $['log']('\x0a【🏝寻宝大作战】【' + strBrandName + '】开宝箱：未达到宝箱开启条件，快去邀请好友助力吧！');
             _0x5e130a['nybhm'](_0x1fb7f6);
         } else {
             let _0x505f71 = _0x3bddf3['vaFzZ'](_0x39185a, 0x28);
             let _0x46b1bd = (+new Date())['toString']();
             if (!cookie['match'](/pt_pin=([^; ]+)(?=;?)/)) {
                 console['log']('此账号cookie填写不规范,你的pt_pin=xxx后面没分号(;)\n');
                 _0x3bddf3['QqpYI'](_0x1fb7f6, null);
             }
             let _0x2ecc0e = cookie['match'](/pt_pin=([^; ]+)(?=;?)/)[0x1];
             let _0x421d75 = $['md5']('' + _0x3bddf3['UFVQr'](decodeURIComponent, _0x2ecc0e) + _0x46b1bd + _0x505f71 + 'tPOamqCuk9NLgVPAljUyIHcPRmKlVxDy')['toString']();
             _0x3bddf3['UFVQr'](_0x1fb7f6, {
                 'timestamp': _0x46b1bd,
                 'phoneid': _0x505f71,
                 'farm_jstoken': _0x421d75
             });
         }
     });
 }

 function getUserInfo(_0x365e55 = !![]) {
     var _0x5ec671 = {
         'ngBYu': function(_0x4025ec, _0x2136a1) {
             return _0x4025ec === _0x2136a1;
         },
         'eXTmD': 'BvJID',
         'JkqTq': function(_0x31b8f4, _0x48da16) {
             return _0x31b8f4(_0x48da16);
         },
         'JSiiT': function(_0x18f080) {
             return _0x18f080();
         }
     };
     return new Promise(async _0x1cf997 => {
         $['get'](_0x5ec671['JkqTq'](taskUrl, 'user/QueryUserInfo'), (_0x2f16d7, _0x3c3baa, _0x317169) => {
             try {
                 if (_0x2f16d7) {
                     if (_0x5ec671['ngBYu']('KzgDv', 'yZDGO')) {
                         $['logErr'](e, _0x3c3baa);
                     } else {
                         console['log']('' + JSON['stringify'](_0x2f16d7));
                         console['log']($['name'] + ' QueryUserInfo API请求失败，请检查网路重试');
                     }
                 } else {
                     if ('BvJID' !== _0x5ec671['eXTmD']) {
                         console['log']('' + JSON['stringify'](_0x2f16d7));
                         console['log']($['name'] + ' createSuperAssistUser JoinScene API请求失败，请检查网路重试');
                     } else {
                         _0x317169 = JSON['parse'](_0x317169);
                         const {
                             iret,
                             SceneList = {},
                             XbStatus: {
                                 XBDetail = [],
                                 dwXBRemainCnt
                             } = {},
                             ddwMoney,
                             dwIsNewUser,
                             sErrMsg,
                             strMyShareId,
                             strPin,
                             dwLevel
                         } = _0x317169;
                         $['log']('\n获取用户信息：' + sErrMsg + '\x0a' + ($['showLog'] ? _0x317169 : ''));
                         $['log']('\n当前等级:' + dwLevel + ',财富值:' + _0x317169['ddwMoney'] + '\x0a');
                         if (_0x365e55) {
                             console['log']('财富岛好友互助码每次运行都变化,旧的可继续使用');
                             $['log']('\x0a【京东账号' + $['index'] + '（' + $['UserName'] + '）的' + $['name'] + '好友互助码】' + strMyShareId + '\x0a\x0a');
                         }
                         $['info'] = {
                             ...$['info'],
                             'SceneList': SceneList,
                             'XBDetail': XBDetail,
                             'dwXBRemainCnt': dwXBRemainCnt,
                             'ddwMoney': ddwMoney,
                             'dwIsNewUser': dwIsNewUser,
                             'strMyShareId': strMyShareId,
                             'strPin': strPin,
                             'dwLevel': dwLevel
                         };
                         _0x5ec671['JkqTq'](_0x1cf997, {
                             'SceneList': SceneList,
                             'XBDetail': XBDetail,
                             'dwXBRemainCnt': dwXBRemainCnt,
                             'ddwMoney': ddwMoney,
                             'dwIsNewUser': dwIsNewUser,
                             'strMyShareId': strMyShareId,
                             'strPin': strPin
                         });
                     }
                 }
             } catch (_0x1c9482) {
                 $['logErr'](_0x1c9482, _0x3c3baa);
             } finally {
                 _0x5ec671['JSiiT'](_0x1cf997);
             }
         });
     });
 }

 function querySignList() {
     var _0x2099df = {
         'zMWNO': function(_0x36f9fe, _0x49e015) {
             return _0x36f9fe === _0x49e015;
         },
         'lwdQw': 'TddLu',
         'hxSbK': 'fRuMZ',
         'ZFTjX': function(_0xf38191, _0x33d40e) {
             return _0xf38191(_0x33d40e);
         }
     };
     return new Promise(async _0x27a1b0 => {
         var _0x2f0315 = {
             'oPBPb': function(_0x2d9d88, _0x396e37) {
                 return _0x2099df['zMWNO'](_0x2d9d88, _0x396e37);
             },
             'kHSEJ': _0x2099df['lwdQw'],
             'PUMeF': _0x2099df['hxSbK'],
             'oJYwo': 'IBqFq'
         };
         $['get'](_0x2099df['ZFTjX'](taskUrl, 'task/QuerySignListV2'), async (_0x318bd4, _0x5eb3f9, _0x15a370) => {
             try {
                 if (_0x2f0315['oPBPb'](_0x2f0315['kHSEJ'], _0x2f0315['kHSEJ'])) {
                     if (_0x318bd4) {
                         if ('fRuMZ' === _0x2f0315['PUMeF']) {
                             console['log']('' + JSON['stringify'](_0x318bd4));
                             console['log']($['name'] + ' QuerySignListV2 API请求失败，请检查网路重试');
                         } else {
                             $['logErr'](e, _0x5eb3f9);
                         }
                     } else {
                         const {
                             iRet,
                             sData: {
                                 Sign = [{}],
                                 dwUserFlag
                             },
                             sErrMsg
                         } = JSON['parse'](_0x15a370);
                         $['log']('\x0a签到列表：' + sErrMsg + '\x0a' + ($['showLog'] ? _0x15a370 : ''));
                         const [{
                             dwStatus,
                             ddwMoney
                         }] = Sign['filter'](_0x59d55c => _0x59d55c['dwShowFlag'] === 0x1);
                         if (dwStatus === 0x0) {
                             await userSignReward(dwUserFlag, ddwMoney);
                         } else {
                             $['log']('\n📌签到：你今日已签到过啦，请明天再来');
                         }
                     }
                 } else {
                     $['logErr'](e, _0x5eb3f9);
                 }
             } catch (_0x686bac) {
                 $['logErr'](_0x686bac, _0x5eb3f9);
             } finally {
                 if (_0x2f0315['oJYwo'] !== _0x2f0315['oJYwo']) {
                     console['log']('财富岛好友互助码每次运行都变化,旧的可继续使用');
                     $['log']('\n【京东账号' + $['index'] + '（' + $['UserName'] + '）的' + $['name'] + '好友互助码】' + strMyShareId + '\x0a\x0a');
                 } else {
                     _0x27a1b0();
                 }
             }
         });
     });
 }
 async function userSignReward(_0x283fa1, _0x1e53ba) {
     var _0x5704ee = {
         'NyDJc': function(_0x34d8c5, _0x300cad) {
             return _0x34d8c5 !== _0x300cad;
         },
         'irtOm': 'oBLfl',
         'wRXue': 'sjpcE',
         'lTEbV': function(_0x28f0c6, _0x42d651) {
             return _0x28f0c6 || _0x42d651;
         },
         'JLPQY': 'AOLVG',
         'KgkmU': 'sMkRz',
         'FeYtH': function(_0xfca759, _0x2de843) {
             return _0xfca759 !== _0x2de843;
         },
         'vbHwL': 'dhWAS',
         'lfRqT': function(_0x23993f) {
             return _0x23993f();
         },
         'erhrd': function(_0x4cdd71, _0x526418, _0x49706c) {
             return _0x4cdd71(_0x526418, _0x49706c);
         }
     };
     return new Promise(async _0x15a8a5 => {
         $['get'](_0x5704ee['erhrd'](taskUrl, 'task/UserSignRewardV2', 'dwReqUserFlag=' + _0x283fa1 + '&ddwMoney=' + _0x1e53ba), async (_0x3d2622, _0x167701, _0x2c8430) => {
             if (_0x5704ee['NyDJc']('OCFzU', _0x5704ee['irtOm'])) {
                 try {
                     if (_0x3d2622) {
                         if (_0x5704ee['wRXue'] !== 'oFtBC') {
                             console['log']('' + JSON['stringify'](_0x3d2622));
                             console['log']($['name'] + ' UserSignRewardV2 API请求失败，请检查网路重试');
                         } else {
                             $['logErr'](e, _0x167701);
                         }
                     } else {
                         const {
                             iRet,
                             sData: {
                                 ddwMoney
                             },
                             sErrMsg
                         } = JSON['parse'](_0x2c8430);
                         $['log']('\x0a📌签到：' + sErrMsg + '，获得财富 ¥ ' + _0x5704ee['lTEbV'](ddwMoney, 0x0) + '\x0a' + ($['showLog'] ? _0x2c8430 : ''));
                     }
                 } catch (_0x512c92) {
                     if (_0x5704ee['JLPQY'] !== _0x5704ee['KgkmU']) {
                         $['logErr'](_0x512c92, _0x167701);
                     } else {
                         $['log']('\x0a📌签到：你今日已签到过啦，请明天再来');
                     }
                 } finally {
                     if (_0x5704ee['FeYtH'](_0x5704ee['vbHwL'], 'FWPew')) {
                         _0x5704ee['lfRqT'](_0x15a8a5);
                     } else {
                         $['logErr'](e, _0x167701);
                     }
                 }
             } else {
                 if (_0x3d2622) {
                     console['log']('' + JSON['stringify'](_0x3d2622));
                     console['log']($['name'] + ' StealMoney API请求失败，请检查网路重试');
                 } else {
                     const {
                         dwGetMoney,
                         iRet,
                         sErrMsg
                     } = JSON['parse'](_0x2c8430);
                     $['log']('\n🤏偷取好友【' + strFriendNick + '】【' + strSceneName + '】财富值：¥ ' + (dwGetMoney ? dwGetMoney : sErrMsg) + '\x0a' + ($['showLog'] ? _0x2c8430 : ''));
                 }
             }
         });
     });
 }
 async function getMoney() {
     var _0x3a3271 = {
         'GRHgj': '1001',
         'ratir': '1002',
         'luueG': '1003',
         'sEIQk': function(_0x28e88d, _0x2adbcc) {
             return _0x28e88d === _0x2adbcc;
         },
         'vIwyo': function(_0x4c09ac, _0x317fdf) {
             return _0x4c09ac(_0x317fdf);
         },
         'tbnSR': function(_0x49556d, _0x1697ea) {
             return _0x49556d === _0x1697ea;
         },
         'YpXXx': function(_0x46f085, _0x20b98e) {
             return _0x46f085 >= _0x20b98e;
         },
         'bcxNW': 'KFBoR',
         'AIssj': function(_0x286f51, _0x3b1082, _0x19c398) {
             return _0x286f51(_0x3b1082, _0x19c398);
         },
         'aGyyp': function(_0xf623e0, _0x47a031) {
             return _0xf623e0 + _0x47a031;
         },
         'Fginy': function(_0x443362, _0x3d9a36) {
             return _0x443362 + _0x3d9a36;
         },
         'sPVsg': function(_0x39e8a2, _0x5c4f6e, _0x1661ec, _0x32f565) {
             return _0x39e8a2(_0x5c4f6e, _0x1661ec, _0x32f565);
         }
     };
     let _0x244634 = $['info']['SceneList'];
     let _0x5526f0 = [],
         _0xfa28e3 = [_0x3a3271['GRHgj'], _0x3a3271['ratir'], _0x3a3271['luueG']];
     _0x5526f0 = Object['keys'](_0x244634);
     _0x5526f0 = _0xfa28e3['filter'](_0x36f71b => _0x5526f0['every'](_0x18ffd7 => _0x36f71b !== _0x18ffd7));
     console['log']('待开通场景ID列表sceneList;' + JSON['stringify'](_0x5526f0));
     for (let _0x34b124 of _0x5526f0) {
         if (_0x3a3271['sEIQk'](_0x34b124, '1002') && $['info']['dwLevel'] >= 0xb) await _0x3a3271['vIwyo'](activeScene, _0x34b124);
         if (_0x3a3271['tbnSR'](_0x34b124, '1003') && _0x3a3271['YpXXx']($['info']['dwLevel'], 0x1a)) await _0x3a3271['vIwyo'](activeScene, _0x34b124);
     }
     for (const _0x3598d1 of Object['keys']($['info']['SceneList'])) {
         if (_0x3a3271['tbnSR'](_0x3a3271['bcxNW'], 'IeTRR')) {
             $['log']('\n🎁寻宝：宝藏冷却中，请等待冷却完毕');
         } else {
             await $['wait'](0x7d0);
             await _0x3a3271['AIssj'](getMoney_dwSource_1, _0x3598d1, _0x244634);
             const _0x3c9edb = _0x3a3271['vIwyo'](eval, _0x3a3271['aGyyp'](_0x3a3271['Fginy']('(', JSON['stringify'](_0x244634[_0x3598d1]['EmployeeList'])), ')'));
             if (_0x3c9edb !== '') {
                 for (var _0x1bacbd of Object['keys'](_0x3c9edb)) {
                     await $['wait'](0x7d0);
                     await _0x3a3271['sPVsg'](getMoney_dwSource_2, _0x3598d1, _0x244634, _0x1bacbd);
                 }
             }
             await $['wait'](0x7d0);
             if (token) await _0x3a3271['AIssj'](getMoney_dwSource_3, _0x3598d1, _0x244634);
             await _0x3a3271['vIwyo'](employeeAward, _0x3598d1);
         }
     }
 }

 function getMoney_dwSource_1(_0x1fa727, _0x151d7d) {
     var _0x1d8c3b = {
         'HpYwt': function(_0x142b3e, _0xedae6) {
             return _0x142b3e(_0xedae6);
         },
         'ZMwWM': function(_0x13e676, _0x531b37) {
             return _0x13e676 * _0x531b37;
         },
         'xfapx': function(_0x3e3ff4, _0x14406c) {
             return _0x3e3ff4 === _0x14406c;
         },
         'nGNpb': 'hIrqu',
         'skzLx': 'JqkIl',
         'qrSAZ': 'yMiKW',
         'xtHHR': 'DVXCi',
         'wPvZx': 'success',
         'rayHH': function(_0x1b13a3, _0x3f5258) {
             return _0x1b13a3 || _0x3f5258;
         },
         'iJlnS': function(_0x8c34f0) {
             return _0x8c34f0();
         },
         'gAVfk': function(_0x230136, _0x54ab76, _0x7312a6) {
             return _0x230136(_0x54ab76, _0x7312a6);
         }
     };
     return new Promise(async _0x247795 => {
         $['get'](_0x1d8c3b['gAVfk'](taskUrl, 'user/GetMoney', 'dwSceneId=' + _0x1fa727 + '&strEmployeeId=undefined&dwSource=1'), async (_0x4cfe1d, _0x5669d1, _0x1faa4d) => {
             var _0x2fe44c = {
                 'KaEiw': 'abcdefghijklmnopqrstuvwxyz1234567890',
                 'sLcbz': function(_0x1b247f, _0x1da15d) {
                     return _0x1d8c3b['HpYwt'](_0x1b247f, _0x1da15d);
                 },
                 'vfXup': function(_0x17e46f, _0xf53e1a) {
                     return _0x1d8c3b['ZMwWM'](_0x17e46f, _0xf53e1a);
                 }
             };
             if (_0x1d8c3b['xfapx']('hIrqu', _0x1d8c3b['nGNpb'])) {
                 try {
                     if (_0x4cfe1d) {
                         if (_0x1d8c3b['xfapx'](_0x1d8c3b['skzLx'], 'uAkni')) {
                             let _0x1d7106 = _0x2fe44c['KaEiw'];
                             let _0xf97c29 = '';
                             for (let _0x60ec42 = 0x0; _0x60ec42 < count; _0x60ec42++) {
                                 _0xf97c29 += _0x1d7106[_0x2fe44c['sLcbz'](parseInt, _0x2fe44c['vfXup'](Math['random'](), _0x1d7106['length']))];
                             }
                             return _0xf97c29;
                         } else {
                             console['log']('' + JSON['stringify'](_0x4cfe1d));
                             console['log']($['name'] + ' getMoney_dwSource_1 API请求失败，请检查网路重试');
                         }
                     } else {
                         if (_0x1d8c3b['xfapx'](_0x1d8c3b['qrSAZ'], _0x1d8c3b['xtHHR'])) {
                             const {
                                 dwGetMoney,
                                 iRet,
                                 sErrMsg
                             } = JSON['parse'](_0x1faa4d);
                             $['log']('\x0a🤏偷取好友【' + strFriendNick + '】【' + strSceneName + '】财富值：¥ ' + (dwGetMoney ? dwGetMoney : sErrMsg) + '\x0a' + ($['showLog'] ? _0x1faa4d : ''));
                         } else {
                             const {
                                 iRet,
                                 dwMoney,
                                 sErrMsg
                             } = JSON['parse'](_0x1faa4d);
                             $['log']('\x0a【' + _0x151d7d[_0x1fa727]['strSceneName'] + '】🏝岛主 : ' + (sErrMsg == _0x1d8c3b['wPvZx'] ? '获取财富值：¥ ' + _0x1d8c3b['rayHH'](dwMoney, 0x0) : sErrMsg) + ' \x0a' + ($['showLog'] ? _0x1faa4d : ''));
                         }
                     }
                 } catch (_0x1e231e) {
                     $['logErr'](_0x1e231e, _0x5669d1);
                 } finally {
                     _0x1d8c3b['iJlnS'](_0x247795);
                 }
             } else {
                 _0x247795();
             }
         });
     });
 }

 function getMoney_dwSource_2(_0x110279, _0x4ee2a1, _0x503f3e) {
     var _0x26a1c2 = {
         'Uwvsf': '*/*',
         'EXnwG': 'keep-alive',
         'gEVWF': 'gzip, deflate, br',
         'sHVMf': 'm.jingxi.com',
         'gCpve': function(_0x517492, _0x2328ea) {
             return _0x517492 + _0x2328ea;
         },
         'EvhCV': 'zh-cn',
         'XYkoT': 'success',
         'ATtex': function(_0x33d07b, _0x580a6a) {
             return _0x33d07b || _0x580a6a;
         },
         'SNyEp': function(_0x24bbf9) {
             return _0x24bbf9();
         },
         'GCnZo': function(_0x54c301, _0x1a016e) {
             return _0x54c301 === _0x1a016e;
         },
         'WNYGZ': 'ovERD',
         'xKcJh': 'Hvdfl',
         'rnqiH': function(_0x434902, _0x318f5b, _0x42a6cd) {
             return _0x434902(_0x318f5b, _0x42a6cd);
         }
     };
     return new Promise(async _0xe41a03 => {
         var _0x548bcb = {
             'XGJGv': _0x26a1c2['Uwvsf'],
             'bhFKq': _0x26a1c2['EXnwG'],
             'dwqgP': _0x26a1c2['gEVWF'],
             'lFLNp': _0x26a1c2['sHVMf'],
             'msmvG': function(_0x32f5dd, _0x37ad15) {
                 return _0x26a1c2['gCpve'](_0x32f5dd, _0x37ad15);
             },
             'vUcVj': _0x26a1c2['EvhCV'],
             'RaPle': _0x26a1c2['XYkoT'],
             'fqdJK': function(_0x427dad, _0x1cc57f) {
                 return _0x26a1c2['ATtex'](_0x427dad, _0x1cc57f);
             },
             'pjmDx': function(_0x1e6bde) {
                 return _0x26a1c2['SNyEp'](_0x1e6bde);
             }
         };
         if (_0x26a1c2['GCnZo'](_0x26a1c2['WNYGZ'], _0x26a1c2['xKcJh'])) {
             return {
                 'url': JD_API_HOST + 'newtasksys/newtasksys_front/' + function_path + '?strZone=jxcfd&bizCode=jxcfd&source=jxcfd&dwEnv=7&_cfd_t=' + Date['now']() + '&ptag=138631.26.55&' + body + '&_ste=1&_=' + Date['now']() + '&sceneval=2&g_login_type=1&g_ty=ls',
                 'headers': {
                     'Cookie': cookie,
                     'Accept': _0x548bcb['XGJGv'],
                     'Connection': _0x548bcb['bhFKq'],
                     'Referer': 'https://st.jingxi.com/fortune_island/index.html?ptag=138631.26.55',
                     'Accept-Encoding': _0x548bcb['dwqgP'],
                     'Host': _0x548bcb['lFLNp'],
                     'User-Agent': 'jdpingou;iPhone;3.15.2;14.2.1;ea00763447803eb0f32045dcba629c248ea53bb3;network/wifi;model/iPhone13,2;appBuild/100365;ADID/00000000-0000-0000-0000-000000000000;supportApplePay/1;hasUPPay/0;pushNoticeIsOpen/0;hasOCPay/0;supportBestPay/0;session/' + _0x548bcb['msmvG'](Math['random'] * 0x62, 0x1) + ';pap/JA2015_311210;brand/apple;supportJDSHWK/1;Mozilla/5.0 (iPhone; CPU iPhone OS 14_2_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148',
                     'Accept-Language': _0x548bcb['vUcVj']
                 },
                 'timeout': 0x2710
             };
         } else {
             $['get'](_0x26a1c2['rnqiH'](taskUrl, 'user/GetMoney', 'dwSceneId=' + _0x110279 + '&strEmployeeId=' + _0x503f3e + '&dwSource=2'), async (_0x174b52, _0x52a960, _0x5d7288) => {
                 try {
                     if (_0x174b52) {
                         console['log']('' + JSON['stringify'](_0x174b52));
                         console['log']($['name'] + ' getMoney_dwSource_2 API请求失败，请检查网路重试');
                     } else {
                         const {
                             dwMoney,
                             iRet,
                             sErrMsg,
                             strPin
                         } = JSON['parse'](_0x5d7288);
                         $['log']('\x0a【' + _0x4ee2a1[_0x110279]['strSceneName'] + '】👬好友: ' + (sErrMsg == _0x548bcb['RaPle'] ? '获取普通助力财富值：¥ ' + _0x548bcb['fqdJK'](dwMoney, 0x0) : sErrMsg) + ' \x0a' + ($['showLog'] ? _0x5d7288 : ''));
                     }
                 } catch (_0x420168) {
                     $['logErr'](_0x420168, _0x52a960);
                 } finally {
                     _0x548bcb['pjmDx'](_0xe41a03);
                 }
             });
         }
     });
 }

 function getMoney_dwSource_3(_0x3d89a0, _0x1f9fc5) {
     var _0x44962b = {
         'pefVa': function(_0x5b7078, _0x34b6ee) {
             return _0x5b7078 - _0x34b6ee;
         },
         'tfuAE': function(_0x5dbc45, _0x37d251) {
             return _0x5dbc45 === _0x37d251;
         },
         'AkPfG': 'UqJWR',
         'RMHKT': function(_0x994e4, _0x32e160) {
             return _0x994e4 || _0x32e160;
         },
         'UmEdD': function(_0x44bcad, _0x5d7244) {
             return _0x44bcad !== _0x5d7244;
         },
         'zWTHa': function(_0xdb128, _0x3d2d1a, _0x3c7101) {
             return _0xdb128(_0x3d2d1a, _0x3c7101);
         },
         'WXmue': 'timestamp'
     };
     return new Promise(async _0x2cedfa => {
         if (_0x44962b['tfuAE']('WgsPO', 'muoaY')) {
             $['newShareCodes'] = $['shareCodesArr'][_0x44962b['pefVa']($['index'], 0x1)]['split']('@');
         } else {
             $['get'](_0x44962b['zWTHa'](taskUrl, 'user/GetMoney', 'dwSceneId=' + _0x3d89a0 + '&strEmployeeId=&dwSource=3&strPgtimestamp=' + token[_0x44962b['WXmue']] + '&strPhoneID=' + token['phoneid'] + '&strPgUUNum=' + token['farm_jstoken']), async (_0x2964c2, _0x325c7f, _0x4030e7) => {
                 var _0x50c924 = {
                     'RZLio': function(_0x2502b2, _0x216502) {
                         return _0x44962b['tfuAE'](_0x2502b2, _0x216502);
                     }
                 };
                 try {
                     if (_0x2964c2) {
                         if (_0x44962b['AkPfG'] === 'UqJWR') {
                             console['log']('' + JSON['stringify'](_0x2964c2));
                             console['log']($['name'] + ' getMoney_dwSource_3 API请求失败，请检查网路重试');
                         } else {
                             console['log']('普通助力(招工)结果:' + _0x4030e7);
                             const {
                                 iRet
                             } = JSON['parse'](_0x4030e7);
                             if (_0x50c924['RZLio'](iRet, 0x7d5) || iRet === 0x270f) $['canHelp'] = ![];
                         }
                     } else {
                         const {
                             iRet,
                             dwMoney,
                             sErrMsg,
                             strPin
                         } = JSON['parse'](_0x4030e7);
                         $['log']('\x0a【' + _0x1f9fc5[_0x3d89a0]['strSceneName'] + '】👬好友: ' + (sErrMsg == 'success' ? '获取超级助力财富值：¥ ' + _0x44962b['RMHKT'](dwMoney, 0x0) : sErrMsg) + ' \x0a' + ($['showLog'] ? _0x4030e7 : ''));
                     }
                 } catch (_0x2bf33a) {
                     if (_0x44962b['UmEdD']('iGJVp', 'iGJVp')) {
                         $['logErr'](_0x2bf33a, _0x325c7f);
                     } else {
                         $['logErr'](_0x2bf33a, _0x325c7f);
                     }
                 } finally {
                     _0x2cedfa();
                 }
             });
         }
     });
 }

 function employeeAward(_0x19e3b4) {
     var _0x4ba478 = {
         'LHuDY': function(_0x73f05b, _0x554c0b) {
             return _0x73f05b === _0x554c0b;
         },
         'uZBSl': '1001',
         'ENLiJ': 'strName',
         'HiYHW': '1002',
         'HFaTM': '1003',
         'jfpnm': function(_0x790c01, _0x14f41f) {
             return _0x790c01 !== _0x14f41f;
         },
         'FCerY': 'EzOrd',
         'SqHKa': function(_0x1a8cc7, _0x1671dc) {
             return _0x1a8cc7 !== _0x1671dc;
         },
         'HZKYm': 'VpEnZ',
         'FVSAD': 'QgOXm',
         'xhhMB': function(_0x30e7c8, _0x178727) {
             return _0x30e7c8 === _0x178727;
         },
         'sAekN': 'm.jingxi.com',
         'LXIuu': 'zh-cn',
         'gWjmt': 'https://st.jingxi.com/fortune_island/index.html?ptag=7155.9.47'
     };
     return new Promise(async _0x3c0b7d => {
         var _0x57af39 = {
             'MCMoD': function(_0x22672d, _0x133146) {
                 return _0x4ba478['xhhMB'](_0x22672d, _0x133146);
             }
         };
         const _0x19fc8d = {
             'url': 'https://m.jingxi.com/jxcfd/user/AdvEmployeeAward?strZone=jxcfd&bizCode=jxcfd&source=jxcfd&dwEnv=7&_cfd_t=' + +new Date() + '&ptag=138631.26.55&dwSenceId=' + _0x19e3b4 + '&_=' + +new Date() + '&_stk=_cfd_t,bizCode,dwEnv,dwSenceId,ptag,source,strZone&h5st=20210304120622242;6980827292145544;10009;tk01wb8321c0ea8nNjg0a1JqVUlvqre776hbVd8Unm3xaodPUoxF6qk2nu5+3BL0+M/NCPfMBRDekvWYG0otooxd4ZA9;3a499b12485ae55f84ace34682b6bececd1e74be6ae82d880877f9e1c861d7d9&sceneval=2&g_login_type=1',
             'headers': {
                 'Host': _0x4ba478['sAekN'],
                 'accept': '*/*',
                 'user-agent': 'jdpingou;iPad;4.2.2;14.4;network/wifi;Mozilla/5.0 (iPad; CPU OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148',
                 'accept-language': _0x4ba478['LXIuu'],
                 'referer': _0x4ba478['gWjmt'],
                 'Cookie': cookie
             }
         };
         $['get'](_0x19fc8d, async (_0x4c072e, _0x1326d8, _0x4129f0) => {
             try {
                 if (_0x4c072e) {
                     console['log']('' + JSON['stringify'](_0x4c072e));
                     console['log']($['name'] + ' employeeAward API请求失败，请检查网路重试');
                 } else {
                     const {
                         iRet,
                         sErrMsg,
                         strAwardDetail
                     } = JSON['parse'](_0x4129f0);
                     if (_0x4ba478['LHuDY'](iRet, 0x0)) {
                         switch (_0x19e3b4) {
                             case _0x4ba478['uZBSl']:
                                 console['log']('【欢乐牧场】获得 ' + strAwardDetail[_0x4ba478['ENLiJ']] + ' 红包');
                                 break;
                             case _0x4ba478['HiYHW']:
                                 console['log']('【便利店】获得 ' + strAwardDetail[_0x4ba478['ENLiJ']] + ' 红包');
                                 break;
                             case _0x4ba478['HFaTM']:
                                 console['log']('【京喜餐厅】获得 ' + strAwardDetail[_0x4ba478['ENLiJ']] + ' 红包');
                                 break;
                             default:
                                 console['log']('【未知场景】获得 ' + strAwardDetail[_0x4ba478['ENLiJ']] + ' 红包');
                         }
                     } else {
                         if (_0x4ba478['jfpnm'](_0x4ba478['FCerY'], 'NowNX')) {
                             switch (_0x19e3b4) {
                                 case '1001':
                                     console['log']('【欢乐牧场领取红包】 ' + sErrMsg);
                                     break;
                                 case '1002':
                                     console['log']('【便利店领取红包】' + sErrMsg);
                                     break;
                                 case _0x4ba478['HFaTM']:
                                     console['log']('【京喜餐厅领取红包】' + sErrMsg);
                                     break;
                                 default:
                                     console['log']('【未知场景领取红包】' + sErrMsg);
                             }
                         } else {
                             $['logErr'](e, _0x1326d8);
                         }
                     }
                     if (_0x4ba478['SqHKa'](iRet, 0x0)) {
                         if (_0x4ba478['LHuDY'](_0x4ba478['HZKYm'], _0x4ba478['FVSAD'])) {
                             console['log']('超级助力(超级工人)结果:' + _0x4129f0);
                             const {
                                 sErrMsg,
                                 iRet
                             } = JSON['parse'](_0x4129f0);
                             if (iRet === 0x7d5 || _0x57af39['MCMoD'](iRet, 0x270f)) $['canHelp'] = ![];
                         } else {
                             return;
                         }
                     }
                     await $['wait'](0x2 * 0x3e8);
                     await employeeAward(_0x19e3b4);
                 }
             } catch (_0xdd1143) {
                 $['logErr'](_0xdd1143, _0x1326d8);
             } finally {
                 _0x3c0b7d();
             }
         });
     });
 }

 function friendCircle() {
     var _0x395466 = {
         'spzSt': 'oCeMA',
         'PkLHx': 'LXdMd',
         'XUvSA': function(_0x47d309, _0x348454) {
             return _0x47d309 !== _0x348454;
         },
         'TkXtG': function(_0x4bb971, _0x513dfe) {
             return _0x4bb971(_0x513dfe);
         },
         'kksYB': 'MBbzA',
         'YFPCW': function(_0x261349, _0x366e58) {
             return _0x261349 === _0x366e58;
         },
         'YssSH': 'VOIIU',
         'ckPDQ': 'XxwYr',
         'aSnFR': function(_0x49ea96, _0x2c4b83, _0x11fe9a) {
             return _0x49ea96(_0x2c4b83, _0x11fe9a);
         }
     };
     return new Promise(async _0x311c63 => {
         var _0x103a0a = {
             'lUzIh': function(_0x310d69, _0x18feb5) {
                 return _0x310d69 === _0x18feb5;
             },
             'tsUUg': 'vpCFa',
             'gqNfz': _0x395466['spzSt'],
             'DmKWg': _0x395466['PkLHx'],
             'OVNRA': function(_0x34c3bf, _0x2c8c8b) {
                 return _0x395466['XUvSA'](_0x34c3bf, _0x2c8c8b);
             },
             'yCNIK': 'LqmEr',
             'OHHgQ': function(_0x42fa54, _0x18a8e6) {
                 return _0x395466['TkXtG'](_0x42fa54, _0x18a8e6);
             },
             'FVCsF': function(_0xf52117, _0x5482c6) {
                 return _0xf52117 !== _0x5482c6;
             },
             'iJmZd': _0x395466['kksYB'],
             'VKQWW': function(_0x3b6c91, _0x165f7a) {
                 return _0x395466['YFPCW'](_0x3b6c91, _0x165f7a);
             },
             'MnXze': _0x395466['YssSH']
         };
         if (_0x395466['YFPCW'](_0x395466['ckPDQ'], _0x395466['ckPDQ'])) {
             $['get'](_0x395466['aSnFR'](taskUrl, 'user/FriendCircle', 'dwPageIndex=1&dwPageSize=20'), async (_0x18a04e, _0x525799, _0x4f4331) => {
                 var _0x4c05db = {
                     'aBIuI': function(_0x3b5f86) {
                         return _0x3b5f86();
                     }
                 };
                 try {
                     if (_0x18a04e) {
                         if (_0x103a0a['lUzIh'](_0x103a0a['tsUUg'], _0x103a0a['gqNfz'])) {
                             _0x311c63(_0x4f4331 || {});
                         } else {
                             console['log']('' + JSON['stringify'](_0x18a04e));
                             console['log']($['name'] + ' FriendCircle API请求失败，请检查网路重试');
                         }
                     } else {
                         if (_0x103a0a['lUzIh'](_0x103a0a['DmKWg'], 'LXdMd')) {
                             const {
                                 MomentList = [], iRet, sErrMsg, strShareId
                             } = JSON['parse'](_0x4f4331);
                             for (moment of MomentList) {
                                 if (moment['strShareId'] !== strShareId && moment['dwAccessMoney'] > 0x0) {
                                     if (_0x103a0a['OVNRA']('IwVtq', _0x103a0a['yCNIK'])) {
                                         await _0x103a0a['OHHgQ'](queryFriendIsland, moment['strShareId']);
                                         await $['wait'](0x1f4);
                                     } else {
                                         if (_0x18a04e) {} else {
                                             if (_0x4f4331) _0x4f4331 = JSON['parse'](_0x4f4331);
                                         }
                                     }
                                 }
                             }
                         } else {
                             _0x4c05db['aBIuI'](_0x311c63);
                         }
                     }
                 } catch (_0x3c82b0) {
                     if (_0x103a0a['FVCsF']('wLquo', _0x103a0a['iJmZd'])) {
                         $['logErr'](_0x3c82b0, _0x525799);
                     } else {
                         _0x311c63();
                     }
                 } finally {
                     if (_0x103a0a['VKQWW'](_0x103a0a['MnXze'], 'VOIIU')) {
                         _0x311c63();
                     } else {
                         $['log']('\x0a' + taskinfo['strTaskDescr'] + '【领成就奖励】：该成就任务未达到门槛}');
                     }
                 }
             });
         } else {
             console['log']('随机取' + randomCount + '个码放到您固定的互助码后面(不影响已有固定互助)');
             data = JSON['parse'](data);
         }
     });
 }

 function queryFriendIsland(_0x798028) {
     var _0x3dbf48 = {
         'TgmTx': function(_0x191200, _0x22c2a3) {
             return _0x191200 !== _0x22c2a3;
         },
         'CObmL': 'nNkld',
         'UUxZv': function(_0x5be49c, _0x5bd3fd) {
             return _0x5be49c === _0x5bd3fd;
         },
         'XhqJe': 'success',
         'RDJJa': function(_0x41b84c, _0x33f21d) {
             return _0x41b84c(_0x33f21d);
         },
         'PYIFi': function(_0xed15fe, _0x5e9546) {
             return _0xed15fe + _0x5e9546;
         },
         'YlZmY': function(_0x3b650e, _0x59083d, _0x137322, _0x555f53, _0x381d7d) {
             return _0x3b650e(_0x59083d, _0x137322, _0x555f53, _0x381d7d);
         },
         'smyEP': 'apUlr',
         'wgDzf': function(_0x375d8a) {
             return _0x375d8a();
         },
         'hjJty': function(_0x367a0b, _0x3ec5fe, _0x86f0c6) {
             return _0x367a0b(_0x3ec5fe, _0x86f0c6);
         }
     };
     return new Promise(async _0x5521dc => {
         $['get'](_0x3dbf48['hjJty'](taskUrl, 'user/QueryFriendIsland', 'strShareId=' + _0x798028 + '&sceneval=2'), async (_0xd15d8e, _0x3617af, _0x25a4a3) => {
             try {
                 if (_0xd15d8e) {
                     if (_0x3dbf48['TgmTx']('nNkld', _0x3dbf48['CObmL'])) {
                         console['log']('' + JSON['stringify'](_0xd15d8e));
                         console['log']($['name'] + ' QuerySignListV2 API请求失败，请检查网路重试');
                     } else {
                         console['log']('' + JSON['stringify'](_0xd15d8e));
                         console['log']($['name'] + ' QueryFriendIsland API请求失败，请检查网路重试');
                     }
                 } else {
                     const {
                         SceneList = {}, dwStealMoney, sErrMsg, strFriendNick
                     } = JSON['parse'](_0x25a4a3);
                     if (_0x3dbf48['UUxZv'](sErrMsg, _0x3dbf48['XhqJe'])) {
                         const _0x1f78a9 = _0x3dbf48['RDJJa'](eval, _0x3dbf48['PYIFi']('(', JSON['stringify'](SceneList)) + ')');
                         const _0x46c7e1 = Object['keys'](SceneList);
                         for (sceneId of _0x46c7e1) {
                             await _0x3dbf48['YlZmY'](stealMoney, _0x798028, sceneId, strFriendNick, _0x1f78a9[sceneId]['strSceneName']);
                             await $['wait'](0x1f4);
                         }
                     }
                 }
             } catch (_0x5a01c6) {
                 if (_0x3dbf48['TgmTx'](_0x3dbf48['smyEP'], _0x3dbf48['smyEP'])) {
                     console['log']('' + JSON['stringify'](_0xd15d8e));
                     console['log']($['name'] + ' getMoney_dwSource_3 API请求失败，请检查网路重试');
                 } else {
                     $['logErr'](_0x5a01c6, _0x3617af);
                 }
             } finally {
                 _0x3dbf48['wgDzf'](_0x5521dc);
             }
         });
     });
 }

 function stealMoney(_0x22cf72, _0x2e1353, _0x49ea27, _0x3133a3) {
     var _0x434a8b = {
         'ZLwKl': function(_0x2a6b31) {
             return _0x2a6b31();
         },
         'QHQLp': function(_0x4d1d53, _0x1a074a) {
             return _0x4d1d53(_0x1a074a);
         },
         'aCINt': function(_0x480645, _0x49e7b6) {
             return _0x480645 !== _0x49e7b6;
         },
         'XpMvB': function(_0x393863, _0x4f692e) {
             return _0x393863 === _0x4f692e;
         },
         'LqwOj': 'bkTMT',
         'ZQQKu': function(_0x550f33) {
             return _0x550f33();
         },
         'ppXkc': function(_0x34eb2d, _0x3fd215) {
             return _0x34eb2d !== _0x3fd215;
         },
         'lnkXz': 'cMzPk',
         'fjTYO': function(_0xd3fd54, _0x4415f, _0x210157) {
             return _0xd3fd54(_0x4415f, _0x210157);
         }
     };
     return new Promise(async _0x7a3aa8 => {
         var _0x330a36 = {
             'hBjfR': function(_0x67a54e) {
                 return _0x434a8b['ZLwKl'](_0x67a54e);
             },
             'BsILC': function(_0x4658f5, _0x196433) {
                 return _0x434a8b['QHQLp'](_0x4658f5, _0x196433);
             },
             'TpMwC': function(_0x52889a, _0x264c25) {
                 return _0x434a8b['aCINt'](_0x52889a, _0x264c25);
             },
             'trSoA': 'fqlpQ',
             'xAwRl': function(_0x461c01, _0xeb7ea) {
                 return _0x434a8b['XpMvB'](_0x461c01, _0xeb7ea);
             },
             'diklf': 'ahcgQ',
             'zlTXv': _0x434a8b['LqwOj'],
             'ZNSym': function(_0x2ec303) {
                 return _0x434a8b['ZQQKu'](_0x2ec303);
             }
         };
         if (_0x434a8b['ppXkc'](_0x434a8b['lnkXz'], _0x434a8b['lnkXz'])) {
             $['msg']($['name'], '', '' + $['result']['join']('\x0a'));
         } else {
             $['get'](_0x434a8b['fjTYO'](taskUrl, 'user/StealMoney', 'strFriendId=' + _0x22cf72 + '&dwSceneId=' + _0x2e1353 + '&sceneval=2'), async (_0x526970, _0x2b2358, _0x17c807) => {
                 var _0x1ec9f5 = {
                     'Ochkg': function(_0x5ad6b8) {
                         return _0x330a36['hBjfR'](_0x5ad6b8);
                     },
                     'ldPIC': function(_0x6e5405, _0x1886b5) {
                         return _0x330a36['BsILC'](_0x6e5405, _0x1886b5);
                     }
                 };
                 try {
                     if (_0x526970) {
                         console['log']('' + JSON['stringify'](_0x526970));
                         console['log']($['name'] + ' StealMoney API请求失败，请检查网路重试');
                     } else {
                         const {
                             dwGetMoney,
                             iRet,
                             sErrMsg
                         } = JSON['parse'](_0x17c807);
                         $['log']('\x0a🤏偷取好友【' + _0x49ea27 + '】【' + _0x3133a3 + '】财富值：¥ ' + (dwGetMoney ? dwGetMoney : sErrMsg) + '\x0a' + ($['showLog'] ? _0x17c807 : ''));
                     }
                 } catch (_0x6f7d61) {
                     if (_0x330a36['TpMwC'](_0x330a36['trSoA'], 'fqlpQ')) {
                         _0x1ec9f5['Ochkg'](_0x7a3aa8);
                     } else {
                         $['logErr'](_0x6f7d61, _0x2b2358);
                     }
                 } finally {
                     if (_0x330a36['xAwRl'](_0x330a36['diklf'], _0x330a36['zlTXv'])) {
                         try {
                             _0x1ec9f5['ldPIC'](_0x7a3aa8, JSON['parse'](_0x17c807));
                         } catch (_0x385173) {} finally {
                             _0x1ec9f5['Ochkg'](_0x7a3aa8);
                         }
                     } else {
                         _0x330a36['ZNSym'](_0x7a3aa8);
                     }
                 }
             });
         }
     });
 }
 async function treasureHunt() {
     var _0x72d075 = {
         'dpwkV': 'success',
         'jhYbA': function(_0x1f0c89, _0x333232) {
             return _0x1f0c89 || _0x333232;
         },
         'Gyqep': 'ddwMoney',
         'LvlhO': function(_0x524493, _0x52c8ad) {
             return _0x524493(_0x52c8ad);
         },
         'ZwKrM': function(_0x515ddc, _0x5d325e) {
             return _0x515ddc > _0x5d325e;
         },
         'zkJNM': function(_0x48fce0, _0x583921) {
             return _0x48fce0 < _0x583921;
         },
         'dpuxZ': function(_0x24eecb, _0x35f667) {
             return _0x24eecb !== _0x35f667;
         },
         'hkCaP': 'QqXvQ',
         'BxSMO': 'daSQI',
         'xHkRP': function(_0x54679e, _0x20f3d6) {
             return _0x54679e(_0x20f3d6);
         }
     };
     if (_0x72d075['ZwKrM']($['info']['dwXBRemainCnt'], 0x0)) {
         const _0x480434 = $['info']['XBDetail'];
         for (let _0x496c78 = 0x0; _0x72d075['zkJNM'](_0x496c78, _0x480434['length']); _0x496c78++) {
             if (_0x72d075['dpuxZ']('QqXvQ', _0x72d075['hkCaP'])) {
                 const {
                     dwMoney,
                     iRet,
                     sErrMsg,
                     strPin
                 } = JSON['parse'](data);
                 $['log']('\x0a【' + sceneList[_key]['strSceneName'] + '】👬好友: ' + (sErrMsg == _0x72d075['dpwkV'] ? '获取普通助力财富值：¥ ' + _0x72d075['jhYbA'](dwMoney, 0x0) : sErrMsg) + ' \x0a' + ($['showLog'] ? data : ''));
             } else {
                 const {
                     ddwColdEndTm,
                     strIndex
                 } = _0x480434[_0x496c78];
                 const _0x325643 = Math['round'](new Date() / 0x3e8);
                 if (_0x325643 > ddwColdEndTm) {
                     if (_0x72d075['BxSMO'] !== _0x72d075['BxSMO']) {
                         if (err) {
                             console['log']('' + JSON['stringify'](err));
                             console['log']($['name'] + ' QueryUserInfo API请求失败，请检查网路重试');
                         } else {
                             data = JSON['parse'](data);
                             const {
                                 iret,
                                 SceneList = {},
                                 XbStatus: {
                                     XBDetail = [],
                                     dwXBRemainCnt
                                 } = {},
                                 ddwMoney,
                                 dwIsNewUser,
                                 sErrMsg,
                                 strMyShareId,
                                 strPin,
                                 dwLevel
                             } = data;
                             $['log']('\n获取用户信息：' + sErrMsg + '\x0a' + ($['showLog'] ? data : ''));
                             $['log']('\x0a当前等级:' + dwLevel + ',财富值:' + data[_0x72d075['Gyqep']] + '\x0a');
                             if (showInvite) {
                                 console['log']('财富岛好友互助码每次运行都变化,旧的可继续使用');
                                 $['log']('\n【京东账号' + $['index'] + '（' + $['UserName'] + '）的' + $['name'] + '好友互助码】' + strMyShareId + '\x0a\x0a');
                             }
                             $['info'] = {
                                 ...$['info'],
                                 'SceneList': SceneList,
                                 'XBDetail': XBDetail,
                                 'dwXBRemainCnt': dwXBRemainCnt,
                                 'ddwMoney': ddwMoney,
                                 'dwIsNewUser': dwIsNewUser,
                                 'strMyShareId': strMyShareId,
                                 'strPin': strPin,
                                 'dwLevel': dwLevel
                             };
                             _0x72d075['LvlhO'](resolve, {
                                 'SceneList': SceneList,
                                 'XBDetail': XBDetail,
                                 'dwXBRemainCnt': dwXBRemainCnt,
                                 'ddwMoney': ddwMoney,
                                 'dwIsNewUser': dwIsNewUser,
                                 'strMyShareId': strMyShareId,
                                 'strPin': strPin
                             });
                         }
                     } else {
                         await _0x72d075['xHkRP'](doTreasureHunt, strIndex);
                         await $['wait'](0xbb8);
                     }
                 } else {
                     $['log']('\n🎁寻宝：宝藏冷却中，请等待冷却完毕');
                 }
             }
         }
     } else {
         $['log']('\x0a🎁寻宝：寻宝次数不足');
     }
 }

 function doTreasureHunt(_0xfa2104) {
     var _0x2006ef = {
         'PMajs': function(_0x49a2c2, _0x1553b0) {
             return _0x49a2c2 === _0x1553b0;
         },
         'UipqB': function(_0x94a347, _0x109287) {
             return _0x94a347 !== _0x109287;
         },
         'YaEzv': 'RIWFf',
         'bRGze': 'yXWLX',
         'PuIuJ': 'nqmNE',
         'uuBbG': 'XCIgZ',
         'oNtYY': function(_0x15fb89, _0x4df894) {
             return _0x15fb89 || _0x4df894;
         },
         'ejowA': function(_0x56fc2e, _0x259d6a) {
             return _0x56fc2e(_0x259d6a);
         },
         'uyeOd': 'Bvtxj',
         'VQVzy': function(_0x1b6f67) {
             return _0x1b6f67();
         },
         'RNwFd': function(_0x3621f5, _0x4c6899) {
             return _0x3621f5 == _0x4c6899;
         },
         'UYHeP': function(_0x180840, _0x41c591, _0x491077) {
             return _0x180840(_0x41c591, _0x491077);
         }
     };
     return new Promise(async _0x37c679 => {
         var _0x211136 = {
             'CBIxA': function(_0x36f914) {
                 return _0x2006ef['VQVzy'](_0x36f914);
             },
             'YQdIp': function(_0x3968fc, _0x186540) {
                 return _0x2006ef['RNwFd'](_0x3968fc, _0x186540);
             },
             'yDipH': function(_0x423ba1, _0x2e4246) {
                 return _0x2006ef['oNtYY'](_0x423ba1, _0x2e4246);
             }
         };
         $['get'](_0x2006ef['UYHeP'](taskUrl, 'consume/TreasureHunt', 'strIndex=' + _0xfa2104 + '&dwIsShare=0'), async (_0x4907bc, _0x55a1e1, _0x2744e9) => {
             if (_0x2006ef['PMajs']('TlUvJ', 'TlUvJ')) {
                 try {
                     if (_0x2006ef['UipqB'](_0x2006ef['YaEzv'], _0x2006ef['bRGze'])) {
                         if (_0x4907bc) {
                             if (_0x2006ef['UipqB'](_0x2006ef['PuIuJ'], _0x2006ef['uuBbG'])) {
                                 console['log']('' + JSON['stringify'](_0x4907bc));
                                 console['log']($['name'] + ' TreasureHunt API请求失败，请检查网路重试');
                             } else {
                                 _0x211136['CBIxA'](_0x37c679);
                             }
                         } else {
                             const {
                                 iRet,
                                 dwExpericnce,
                                 sErrMsg
                             } = JSON['parse'](_0x2744e9);
                             $['log']('\x0a【' + _0xfa2104 + '】🎁寻宝：' + sErrMsg + ' ，获取随机奖励：¥ ' + _0x2006ef['oNtYY'](dwExpericnce, 0x0) + ' \x0a' + ($['showLog'] ? _0x2744e9 : ''));
                             _0x2006ef['ejowA'](_0x37c679, iRet);
                         }
                     } else {
                         const {
                             iRet,
                             dwMoney,
                             sErrMsg
                         } = JSON['parse'](_0x2744e9);
                         $['log']('\x0a【' + sceneList[_key]['strSceneName'] + '】🏝岛主 : ' + (_0x211136['YQdIp'](sErrMsg, 'success') ? '获取财富值：¥ ' + _0x211136['yDipH'](dwMoney, 0x0) : sErrMsg) + ' \x0a' + ($['showLog'] ? _0x2744e9 : ''));
                     }
                 } catch (_0x278691) {
                     if (_0x2006ef['PMajs'](_0x2006ef['uyeOd'], 'lvooc')) {
                         console['log']('' + JSON['stringify'](_0x4907bc));
                         console['log']($['name'] + ' activeScene API请求失败，请检查网路重试');
                     } else {
                         $['logErr'](_0x278691, _0x55a1e1);
                     }
                 } finally {
                     _0x2006ef['VQVzy'](_0x37c679);
                 }
             } else {
                 $['msg']($['name'], '', '' + $['result']['join']('\x0a'));
             }
         });
     });
 }

 function getTaskList(_0x40fa12) {
     var _0x1f7a0d = {
         'bsjPe': 'PYrhX',
         'BOXqy': function(_0x418bd6, _0x13daa1) {
             return _0x418bd6 === _0x13daa1;
         },
         'FwcLs': 'vnjai',
         'eZbCo': function(_0x1bbaf0, _0x5eb67d) {
             return _0x1bbaf0 !== _0x5eb67d;
         },
         'cWcfC': function(_0x3242dd) {
             return _0x3242dd();
         },
         'SDwnM': 'wPiGt',
         'gbGEt': 'GetUserTaskStatusList',
         'lXlmY': function(_0x24994a, _0x450362) {
             return _0x24994a(_0x450362);
         },
         'DrEWe': 'consume/AchieveInfo'
     };
     return new Promise(async _0x4682b0 => {
         var _0x27b6b2 = {
             'JHrHK': function(_0x524f40) {
                 return _0x524f40();
             },
             'gvkgG': _0x1f7a0d['bsjPe'],
             'hzCoC': function(_0x18f52f, _0x25b097) {
                 return _0x1f7a0d['BOXqy'](_0x18f52f, _0x25b097);
             },
             'EEqcg': _0x1f7a0d['FwcLs'],
             'DyyFA': function(_0x21b72a, _0x5c6405) {
                 return _0x1f7a0d['eZbCo'](_0x21b72a, _0x5c6405);
             },
             'BPsBW': 'caPoW',
             'MLbwT': 'Fyndo',
             'KCzIJ': function(_0x4e9dfc) {
                 return _0x1f7a0d['cWcfC'](_0x4e9dfc);
             },
             'Kobjm': function(_0x2452f2, _0x36d283) {
                 return _0x2452f2 || _0x36d283;
             },
             'edyOb': _0x1f7a0d['SDwnM'],
             'cRAMf': function(_0x23bee1, _0x1d2312) {
                 return _0x23bee1 === _0x1d2312;
             },
             'VIzZM': 'WaSBZ',
             'LcBjS': 'YsemC'
         };
         switch (_0x40fa12) {
             case 0x0:
                 $['get'](taskListUrl(_0x1f7a0d['gbGEt']), async (_0xd13bd9, _0x5e6a65, _0x162fde) => {
                     var _0x3075f7 = {
                         'Rsaux': function(_0x438a84) {
                             return _0x27b6b2['JHrHK'](_0x438a84);
                         }
                     };
                     if (_0x27b6b2['gvkgG'] === _0x27b6b2['gvkgG']) {
                         try {
                             if (_0xd13bd9) {
                                 if (_0x27b6b2['hzCoC'](_0x27b6b2['EEqcg'], _0x27b6b2['EEqcg'])) {
                                     console['log']('' + JSON['stringify'](_0xd13bd9));
                                     console['log']($['name'] + ' GetUserTaskStatusList API请求失败，请检查网路重试');
                                 } else {
                                     $['shareCodesArr']['push'](shareCodes[item]);
                                 }
                             } else {
                                 if (_0x27b6b2['DyyFA'](_0x27b6b2['BPsBW'], _0x27b6b2['BPsBW'])) {
                                     _0x3075f7['Rsaux'](_0x4682b0);
                                 } else {
                                     const {
                                         ret,
                                         data: {
                                             userTaskStatusList = []
                                         } = {},
                                         msg
                                     } = JSON['parse'](_0x162fde);
                                     $['allTask'] = userTaskStatusList['filter'](_0x4583a6 => _0x4583a6['awardStatus'] !== 0x1);
                                     $['log']('\x0a获取【📆日常任务】列表 ' + msg + '，总共' + $['allTask']['length'] + '个任务！\n' + ($['showLog'] ? _0x162fde : ''));
                                 }
                             }
                         } catch (_0x4d4a12) {
                             if (_0x27b6b2['hzCoC'](_0x27b6b2['MLbwT'], 'vQKoO')) {
                                 const {
                                     ret,
                                     data: {
                                         userTaskStatusList = []
                                     } = {},
                                     msg
                                 } = JSON['parse'](_0x162fde);
                                 $['allTask'] = userTaskStatusList['filter'](_0x5f581f => _0x5f581f['awardStatus'] !== 0x1);
                                 $['log']('\n获取【📆日常任务】列表 ' + msg + '，总共' + $['allTask']['length'] + '个任务！\n' + ($['showLog'] ? _0x162fde : ''));
                             } else {
                                 $['logErr'](_0x4d4a12, _0x5e6a65);
                             }
                         } finally {
                             _0x27b6b2['KCzIJ'](_0x4682b0);
                         }
                     } else {
                         cookiesArr['push'](jdCookieNode[item]);
                     }
                 });
                 break;
             case 0x1:
                 $['get'](_0x1f7a0d['lXlmY'](taskUrl, _0x1f7a0d['DrEWe']), async (_0x136880, _0x14f8b6, _0x19cb13) => {
                     var _0x3ba8f4 = {
                         'lixYu': function(_0x2ec70b, _0x32e081) {
                             return _0x2ec70b != _0x32e081;
                         },
                         'LTwNV': function(_0x32044d, _0x44c882) {
                             return _0x27b6b2['Kobjm'](_0x32044d, _0x44c882);
                         }
                     };
                     if (_0x27b6b2['edyOb'] === _0x27b6b2['edyOb']) {
                         try {
                             if (_0x136880) {
                                 console['log']('' + JSON['stringify'](_0x136880));
                                 console['log']($['name'] + ' AchieveInfo API请求失败，请检查网路重试');
                             } else {
                                 const {
                                     iRet,
                                     sErrMsg,
                                     taskinfo = []
                                 } = JSON['parse'](_0x19cb13);
                                 $['allTask'] = taskinfo['filter'](_0x28ca08 => _0x28ca08['dwAwardStatus'] === 0x1);
                                 $['log']('\n获取【🎖成就任务】列表 ' + sErrMsg + '，总共' + $['allTask']['length'] + '个任务！\n' + ($['showLog'] ? _0x19cb13 : ''));
                             }
                         } catch (_0x402241) {
                             if (_0x27b6b2['cRAMf'](_0x27b6b2['VIzZM'], _0x27b6b2['VIzZM'])) {
                                 $['logErr'](_0x402241, _0x14f8b6);
                             } else {
                                 const {
                                     iRet,
                                     sErrMsg,
                                     strAwardPoolName
                                 } = JSON['parse'](_0x19cb13);
                                 $['log']('\n【抽奖结果】🎰 ' + (_0x3ba8f4['lixYu'](strAwardPoolName, '') ? '未中奖' : strAwardPoolName) + ' \x0a' + ($['showLog'] ? _0x19cb13 : ''));
                             }
                         } finally {
                             if (_0x27b6b2['LcBjS'] !== 'KGMdZ') {
                                 _0x4682b0();
                             } else {
                                 if (_0x136880) {
                                     console['log']('' + JSON['stringify'](_0x136880));
                                     console['log']($['name'] + ' getMoney_dwSource_2 API请求失败，请检查网路重试');
                                 } else {
                                     const {
                                         dwMoney,
                                         iRet,
                                         sErrMsg,
                                         strPin
                                     } = JSON['parse'](_0x19cb13);
                                     $['log']('\x0a【' + sceneList[_key]['strSceneName'] + '】👬好友: ' + (sErrMsg == 'success' ? '获取普通助力财富值：¥ ' + _0x3ba8f4['LTwNV'](dwMoney, 0x0) : sErrMsg) + ' \x0a' + ($['showLog'] ? _0x19cb13 : ''));
                                 }
                             }
                         }
                     } else {
                         console['log']('' + JSON['stringify'](_0x136880));
                         console['log']($['name'] + ' GatherForture API请求失败，请检查网路重试');
                     }
                 });
                 break;
             default:
                 break;
         }
     });
 }

 function browserTask(_0x3c5b54) {
     var _0x26b3a5 = {
         'nQoQL': function(_0x32cd21) {
             return _0x32cd21();
         },
         'ANDNi': 'gjcUf',
         'fCSSA': function(_0x4af456, _0xdb8038) {
             return _0x4af456 < _0xdb8038;
         },
         'MuFgc': function(_0x53ef6a, _0xc6c720) {
             return _0x53ef6a + _0xc6c720;
         },
         'YLesJ': function(_0x2375f1, _0x484933) {
             return _0x2375f1(_0x484933);
         },
         'bclcB': function(_0x4829c4, _0x26ef9b, _0x24c374) {
             return _0x4829c4(_0x26ef9b, _0x24c374);
         },
         'dyvTG': function(_0x30e5ab, _0x54d61c) {
             return _0x30e5ab < _0x54d61c;
         },
         'eoJhO': function(_0x4ad22d, _0x10f299) {
             return _0x4ad22d === _0x10f299;
         },
         'ieVni': 'KeEUK',
         'INqmQ': 'AQxho',
         'KrGCM': function(_0x1d04ae, _0x369d49, _0xe5a573) {
             return _0x1d04ae(_0x369d49, _0xe5a573);
         },
         'GDIBG': function(_0x129624) {
             return _0x129624();
         }
     };
     return new Promise(async _0x594f75 => {
         var _0xa8b2d9 = {
             'CmzvD': function(_0x453d36) {
                 return _0x26b3a5['nQoQL'](_0x453d36);
             }
         };
         if (_0x26b3a5['ANDNi'] === _0x26b3a5['ANDNi']) {
             switch (_0x3c5b54) {
                 case 0x0:
                     const _0x5cc3cc = Math['max'](...[...$['allTask']]['map'](_0x18e49c => _0x18e49c['configTargetTimes']));
                     for (let _0x467eaa = 0x0; _0x26b3a5['fCSSA'](_0x467eaa, $['allTask']['length']); _0x467eaa++) {
                         const _0x4253c6 = $['allTask'][_0x467eaa];
                         $['log']('\n开始第' + _0x26b3a5['MuFgc'](_0x467eaa, 0x1) + '个【📆日常任务】：' + _0x4253c6['taskName']);
                         const _0x1ea2cf = [!![], !![]];
                         for (let _0x467eaa = 0x0; _0x467eaa < _0x5cc3cc; _0x467eaa++) {
                             await $['wait'](0x1f4);
                             if (_0x1ea2cf[0x0]) {
                                 _0x1ea2cf[0x0] = await _0x26b3a5['YLesJ'](doTask, _0x4253c6);
                             }
                             await $['wait'](0x1f4);
                             if (_0x1ea2cf[0x1]) {
                                 _0x1ea2cf[0x1] = await _0x26b3a5['bclcB'](awardTask, 0x0, _0x4253c6);
                             }
                             if (!_0x1ea2cf[0x0] && !_0x1ea2cf[0x1]) {
                                 break;
                             }
                         }
                         $['log']('\n结束第' + (_0x467eaa + 0x1) + '个【📆日常任务】：' + _0x4253c6['taskName'] + '\x0a');
                     }
                     break;
                 case 0x1:
                     for (let _0x4270de = 0x0; _0x26b3a5['dyvTG'](_0x4270de, $['allTask']['length']); _0x4270de++) {
                         if (_0x26b3a5['eoJhO'](_0x26b3a5['ieVni'], 'KeEUK')) {
                             const _0x4253c6 = $['allTask'][_0x4270de];
                             $['log']('\n开始第' + _0x26b3a5['MuFgc'](_0x4270de, 0x1) + '个【🎖成就任务】：' + _0x4253c6['strTaskDescr']);
                             if (_0x26b3a5['eoJhO'](_0x4253c6['dwAwardStatus'], '0')) {
                                 if (_0x26b3a5['eoJhO'](_0x26b3a5['INqmQ'], 'AQxho')) {
                                     $['log']('\x0a' + _0x4253c6['strTaskDescr'] + '【领成就奖励】：该成就任务未达到门槛}');
                                 } else {
                                     $['logErr'](e, resp);
                                 }
                             } else {
                                 await $['wait'](0x1f4);
                                 await _0x26b3a5['KrGCM'](awardTask, 0x1, _0x4253c6);
                             }
                             $['log']('\n结束第' + (_0x4270de + 0x1) + '个【🎖成就任务】：' + _0x4253c6['strTaskDescr'] + '\x0a');
                         } else {
                             _0xa8b2d9['CmzvD'](_0x594f75);
                         }
                     }
                     break;
                 default:
                     break;
             }
             _0x26b3a5['GDIBG'](_0x594f75);
         } else {
             $['logErr'](e, resp);
         }
     });
 }

 function doTask(_0x9709c5) {
     var _0x721508 = {
         'QZYuS': function(_0x2a14eb, _0x5e737e) {
             return _0x2a14eb > _0x5e737e;
         },
         'GGIYS': 'DEila',
         'ldHhB': 'yYisb',
         'aRnRt': function(_0x38613e, _0x3bd233) {
             return _0x38613e !== _0x3bd233;
         },
         'ujZlG': '活动太火爆了',
         'eTqzF': function(_0x11ecdb, _0xca6d03) {
             return _0x11ecdb(_0xca6d03);
         },
         'CoQhp': function(_0x46f364, _0x38a7f6) {
             return _0x46f364 === _0x38a7f6;
         },
         'KKCUN': 'tSOdg',
         'YzJRw': function(_0x307132, _0x1cf67c) {
             return _0x307132 >= _0x1cf67c;
         },
         'ABEeR': function(_0x4077fb, _0x2a4f39) {
             return _0x4077fb(_0x2a4f39);
         },
         'CAnnP': function(_0x20c0d9, _0x15dde8) {
             return _0x20c0d9(_0x15dde8);
         }
     };
     return new Promise(async _0x5ea0ec => {
         var _0xb66064 = {
             'LWEFe': function(_0x19a908, _0x319f61) {
                 return _0x721508['QZYuS'](_0x19a908, _0x319f61);
             },
             'XhRjo': _0x721508['GGIYS'],
             'dNZgR': _0x721508['ldHhB'],
             'BHNEj': function(_0x5d497b, _0x256c48) {
                 return _0x5d497b === _0x256c48;
             },
             'pgGJT': 'esmsE',
             'ejlJi': function(_0x2256cc, _0x2223fa) {
                 return _0x721508['aRnRt'](_0x2256cc, _0x2223fa);
             },
             'OZkPf': _0x721508['ujZlG'],
             'xweXz': '任务进行中或者未到任务时间',
             'ejrWQ': function(_0x3fc82a, _0x584efc) {
                 return _0x721508['eTqzF'](_0x3fc82a, _0x584efc);
             }
         };
         if (_0x721508['CoQhp'](_0x721508['KKCUN'], 'tSOdg')) {
             const {
                 taskId,
                 completedTimes,
                 configTargetTimes,
                 taskName
             } = _0x9709c5;
             if (_0x721508['YzJRw'](_0x721508['eTqzF'](parseInt, completedTimes), _0x721508['ABEeR'](parseInt, configTargetTimes))) {
                 _0x721508['CAnnP'](_0x5ea0ec, ![]);
                 $['log']('\x0a' + taskName + '【做日常任务】： mission success');
                 return;
             }
             $['get'](taskListUrl('DoTask', 'taskId=' + taskId), (_0x1746e9, _0x138e8a, _0x3e3a87) => {
                 try {
                     if (_0xb66064['XhRjo'] !== _0xb66064['dNZgR']) {
                         if (_0x1746e9) {
                             if (_0xb66064['BHNEj']('yhdui', _0xb66064['pgGJT'])) {
                                 console['log']('' + JSON['stringify'](_0x1746e9));
                                 console['log']($['name'] + ' Award API请求失败，请检查网路重试');
                             } else {
                                 console['log']('' + JSON['stringify'](_0x1746e9));
                                 console['log']($['name'] + ' DoTask API请求失败，请检查网路重试');
                             }
                         } else {
                             const {
                                 msg,
                                 ret
                             } = JSON['parse'](_0x3e3a87);
                             $['log']('\x0a' + taskName + '【做日常任务】：' + (_0xb66064['ejlJi'](msg['indexOf'](_0xb66064['OZkPf']), -0x1) ? _0xb66064['xweXz'] : msg) + '\x0a' + ($['showLog'] ? _0x3e3a87 : ''));
                             _0xb66064['ejrWQ'](_0x5ea0ec, ret === 0x0);
                         }
                     } else {
                         if (_0xb66064['LWEFe'](process['env']['JDCFD_SHARECODES']['indexOf']('\x0a'), -0x1)) {
                             shareCodes = process['env']['JDCFD_SHARECODES']['split']('\x0a');
                         } else {
                             shareCodes = process['env']['JDCFD_SHARECODES']['split']('&');
                         }
                     }
                 } catch (_0x18d7aa) {
                     $['logErr'](_0x18d7aa, _0x138e8a);
                 } finally {
                     _0x5ea0ec();
                 }
             });
         } else {
             _0x5ea0ec();
         }
     });
 }

 function awardTask(_0x27ab81, _0x19b8c5) {
     var _0x1a41cf = {
         'OcnPz': 'XIwap',
         'lnAnL': function(_0x43013c, _0x37f723) {
             return _0x43013c === _0x37f723;
         },
         'JALhP': 'CEXek',
         'UaLPl': 'hEpEt',
         'JbReG': function(_0x40d36a, _0x1be84f) {
             return _0x40d36a !== _0x1be84f;
         },
         'EJaVY': 'OOTVa',
         'tpSoL': function(_0x15537c) {
             return _0x15537c();
         },
         'orgvx': function(_0x4d0c8f, _0x4973ed) {
             return _0x4d0c8f(_0x4973ed);
         },
         'RxHsK': 'jdapp;iPhone;9.3.5;14.2;53f4d9c70c1c81f1c8769d2fe2fef0190a3f60d2;network/wifi;supportApplePay/0;hasUPPay/0;hasOCPay/0;model/iPhone10,2;addressid/137923973;supportBestPay/0;appBuild/167515;jdSupportDarkMode/0;pv/2217.74;apprpd/MyJD_PersonalSpace;ref/MySpace;psq/8;ads/;psn/53f4d9c70c1c81f1c8769d2fe2fef0190a3f60d2|8703;jdv/0|kong|t_1000170135|tuiguang|notset|1610674234917|1610674234;adk/;app_device/IOS;pap/JA2015_311210|9.3.5|IOS 14.2;Mozilla/5.0 (iPhone; CPU iPhone OS 14_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1',
         'WlOCc': 'wRMRW',
         'ZVFjN': 'uspxJ',
         'jZfnU': 'LEVcR',
         'JXtch': function(_0x3cc0f8) {
             return _0x3cc0f8();
         },
         'jyUtP': function(_0xca6aa5, _0x45d5a6) {
             return _0xca6aa5 == _0x45d5a6;
         },
         'xSzWG': 'success',
         'LRRNB': function(_0x40a72f, _0x4b676c, _0x17a9d2) {
             return _0x40a72f(_0x4b676c, _0x17a9d2);
         },
         'QGLPA': function(_0x5096bc, _0x35c74c, _0x3c8bf3) {
             return _0x5096bc(_0x35c74c, _0x3c8bf3);
         }
     };
     return new Promise(_0x278d8f => {
         var _0x256754 = {
             'XsIiJ': function(_0x15d266, _0x43d9ae) {
                 return _0x1a41cf['orgvx'](_0x15d266, _0x43d9ae);
             },
             'kxIQc': 'api.m.jd.com',
             'QkAXY': 'application/json, text/plain, */*',
             'OYysj': _0x1a41cf['RxHsK'],
             'QHbTG': 'https://h5.m.jd.com/babelDiy/Zeus/25C6dc6HY6if6DT7e58A1pi2Vxe4/index.html?activityId=73cf1fe89d33433d9cc8688d1892d432&assistId=R2u2OCB9eEbcCVB_CiVKhg',
             'pscdk': function(_0x232e34, _0x46b328) {
                 return _0x1a41cf['JbReG'](_0x232e34, _0x46b328);
             },
             'hDePt': _0x1a41cf['WlOCc'],
             'QAufe': _0x1a41cf['ZVFjN'],
             'oPxKT': _0x1a41cf['jZfnU'],
             'QOVDe': function(_0x2f7e43, _0x1d6f9e) {
                 return _0x1a41cf['lnAnL'](_0x2f7e43, _0x1d6f9e);
             },
             'JoPfs': 'SfBam',
             'gGqWz': function(_0x46fa35, _0x2a7574) {
                 return _0x1a41cf['JbReG'](_0x46fa35, _0x2a7574);
             },
             'HntzG': function(_0x20f871, _0x1ce649) {
                 return _0x20f871 + _0x1ce649;
             },
             'Dnujq': function(_0x127e29, _0x2fca87) {
                 return _0x127e29 === _0x2fca87;
             },
             'XbAAd': function(_0x71cb70) {
                 return _0x1a41cf['JXtch'](_0x71cb70);
             },
             'ZGfmf': function(_0x1fae1a, _0x477a7e) {
                 return _0x1a41cf['jyUtP'](_0x1fae1a, _0x477a7e);
             },
             'pNUKN': _0x1a41cf['xSzWG']
         };
         switch (_0x27ab81) {
             case 0x0:
                 const {
                     taskId, taskName
                 } = _0x19b8c5;
                 $['get'](_0x1a41cf['LRRNB'](taskListUrl, 'Award', 'taskId=' + taskId), (_0x222777, _0x2c54fc, _0x5b4592) => {
                     if (_0x256754['pscdk'](_0x256754['hDePt'], _0x256754['QAufe'])) {
                         try {
                             if (_0x256754['pscdk'](_0x256754['oPxKT'], 'nSaRQ')) {
                                 if (_0x222777) {
                                     console['log']('' + JSON['stringify'](_0x222777));
                                     console['log']($['name'] + ' Award API请求失败，请检查网路重试');
                                 } else {
                                     if (_0x256754['QOVDe'](_0x256754['JoPfs'], 'WPgJH')) {
                                         const _0x3a5071 = {
                                             'url': 'https://api.m.jd.com/client.action?clientVersion=9.3.5&client=wh5&functionId=smtfission_assist&appid=smtFission&body=' + _0x256754['XsIiJ'](escape, JSON['stringify'](vo)),
                                             'headers': {
                                                 'Host': _0x256754['kxIQc'],
                                                 'accept': _0x256754['QkAXY'],
                                                 'origin': 'https://h5.m.jd.com',
                                                 'user-agent': _0x256754['OYysj'],
                                                 'accept-language': 'zh-cn',
                                                 'referer': _0x256754['QHbTG'],
                                                 'Cookie': cookie
                                             },
                                             'timeout': 0x2710
                                         };
                                         $['get'](_0x3a5071);
                                     } else {
                                         const {
                                             msg,
                                             ret,
                                             data: {
                                                 prizeInfo = ''
                                             } = {}
                                         } = JSON['parse'](_0x5b4592);
                                         let _0x4858b5 = '';
                                         if (_0x256754['gGqWz'](msg['indexOf']('活动太火爆了'), -0x1)) {
                                             _0x4858b5 = '任务为成就任务或者未到任务时间';
                                         } else {
                                             _0x4858b5 = _0x256754['HntzG'](msg, prizeInfo) ? ' 获得财富值 ¥ ' + JSON['parse'](prizeInfo)['ddwMoney'] : '';
                                         }
                                         $['log']('\x0a' + taskName + '【领日常奖励】：' + _0x4858b5 + '\x0a' + ($['showLog'] ? _0x5b4592 : ''));
                                         _0x256754['XsIiJ'](_0x278d8f, _0x256754['Dnujq'](ret, 0x0));
                                     }
                                 }
                             } else {
                                 $['logErr'](e, _0x2c54fc);
                             }
                         } catch (_0x1506f2) {
                             $['logErr'](_0x1506f2, _0x2c54fc);
                         } finally {
                             _0x256754['XbAAd'](_0x278d8f);
                         }
                     } else {
                         $['logErr'](e, _0x2c54fc);
                     }
                 });
                 break;
             case 0x1:
                 const {
                     strTaskIndex, strTaskDescr
                 } = _0x19b8c5;
                 $['get'](_0x1a41cf['QGLPA'](taskUrl, 'consume/AchieveAward', 'strTaskIndex=' + strTaskIndex), (_0x516177, _0x39fb19, _0x39305e) => {
                     try {
                         if (_0x516177) {
                             if (_0x1a41cf['OcnPz'] !== 'XIwap') {
                                 const {
                                     iRet,
                                     dwMoney,
                                     sErrMsg,
                                     strPin
                                 } = JSON['parse'](_0x39305e);
                                 $['log']('\x0a【' + sceneList[_key]['strSceneName'] + '】👬好友: ' + (_0x256754['ZGfmf'](sErrMsg, _0x256754['pNUKN']) ? '获取超级助力财富值：¥ ' + (dwMoney || 0x0) : sErrMsg) + ' \x0a' + ($['showLog'] ? _0x39305e : ''));
                             } else {
                                 console['log']('' + JSON['stringify'](_0x516177));
                                 console['log']($['name'] + ' AchieveAward API请求失败，请检查网路重试');
                             }
                         } else {
                             if (_0x1a41cf['lnAnL']('CEXek', _0x1a41cf['JALhP'])) {
                                 const {
                                     iRet,
                                     sErrMsg,
                                     dwExpericnce
                                 } = JSON['parse'](_0x39305e);
                                 $['log']('\x0a' + strTaskDescr + '【领成就奖励】： success 获得财富值：¥ ' + dwExpericnce + '\x0a' + ($['showLog'] ? _0x39305e : ''));
                             } else {
                                 console['log']('' + JSON['stringify'](_0x516177));
                                 console['log']($['name'] + ' OpenGroup API请求失败，请检查网路重试');
                             }
                         }
                     } catch (_0x355e7e) {
                         if (_0x1a41cf['UaLPl'] === 'hEpEt') {
                             $['logErr'](_0x355e7e, _0x39fb19);
                         } else {
                             console['log']('' + JSON['stringify'](_0x516177));
                             console['log']($['name'] + ' QueryFriendIsland API请求失败，请检查网路重试');
                         }
                     } finally {
                         if (_0x1a41cf['JbReG'](_0x1a41cf['EJaVY'], _0x1a41cf['EJaVY'])) {
                             if (_0x516177) {
                                 console['log']('' + JSON['stringify'](_0x516177));
                                 console['log']($['name'] + ' createAssistUser JoinScene API请求失败，请检查网路重试');
                             } else {
                                 console['log']('普通助力(招工)结果:' + _0x39305e);
                                 const {
                                     iRet
                                 } = JSON['parse'](_0x39305e);
                                 if (_0x256754['Dnujq'](iRet, 0x7d5) || iRet === 0x270f) $['canHelp'] = ![];
                             }
                         } else {
                             _0x1a41cf['tpSoL'](_0x278d8f);
                         }
                     }
                 });
                 break;
             default:
                 break;
         }
     });
 }

 function funCenterState() {
     var _0x5559fe = {
         'Zhvje': function(_0x578460, _0x660b0b) {
             return _0x578460 == _0x660b0b;
         },
         'eCgdc': function(_0x3281e1, _0x467ab7) {
             return _0x3281e1 !== _0x467ab7;
         },
         'nLPJU': 'uenYH',
         'yqner': function(_0x18e232, _0x37a08d, _0x102929, _0x5ef1bf) {
             return _0x18e232(_0x37a08d, _0x102929, _0x5ef1bf);
         },
         'jQBul': 'SZKkd',
         'LJGfl': 'cpUOQ',
         'XDjqp': function(_0x422e37, _0x247703, _0x1b048a) {
             return _0x422e37(_0x247703, _0x1b048a);
         }
     };
     return new Promise(_0x103542 => {
         if (_0x5559fe['LJGfl'] === 'ertqE') {
             $['logErr'](e, resp);
         } else {
             $['get'](_0x5559fe['XDjqp'](taskUrl, 'consume/FunCenterState', 'strType=1'), async (_0x33b5dd, _0x34c27e, _0x476abf) => {
                 try {
                     if (_0x33b5dd) {
                         console['log']('' + JSON['stringify'](_0x33b5dd));
                         console['log']($['name'] + ' FunCenterState API请求失败，请检查网路重试');
                     } else {
                         const {
                             SlotMachine: {
                                 ddwConfVersion,
                                 dwFreeCount,
                                 strCouponPool,
                                 strGoodsPool
                             } = {},
                             iRet,
                             sErrMsg
                         } = JSON['parse'](_0x476abf);
                         if (_0x5559fe['Zhvje'](dwFreeCount, 0x1)) {
                             if (_0x5559fe['eCgdc']('CBJpU', _0x5559fe['nLPJU'])) {
                                 await $['wait'](0x1f4);
                                 await _0x5559fe['yqner'](soltMachine, strCouponPool, strGoodsPool, ddwConfVersion);
                             } else {
                                 $['log']('\n🎁寻宝：寻宝次数不足');
                             }
                         }
                     }
                 } catch (_0x4fd81c) {
                     $['logErr'](_0x4fd81c, _0x34c27e);
                 } finally {
                     if (_0x5559fe['eCgdc'](_0x5559fe['jQBul'], 'SZKkd')) {
                         return;
                     } else {
                         _0x103542();
                     }
                 }
             });
         }
     });
 }

 function soltMachine(_0x42f360, _0x1b9e46, _0x435bda) {
     var _0x40c71b = {
         'MPaqM': 'FNlYG',
         'XYola': function(_0x216eac, _0x3d898d) {
             return _0x216eac != _0x3d898d;
         },
         'OenqI': '未中奖',
         'uTrXC': function(_0x10685a, _0x90775b) {
             return _0x10685a !== _0x90775b;
         },
         'LDTzQ': 'APkeI',
         'eqyXw': 'GQmWc',
         'ptUVg': function(_0x35dfb8, _0x14791f) {
             return _0x35dfb8 + _0x14791f;
         },
         'piWIb': function(_0x547b9a, _0x529ccc, _0x5d8eb5) {
             return _0x547b9a(_0x529ccc, _0x5d8eb5);
         }
     };
     return new Promise(_0x4dd2f9 => {
         var _0x1b234c = {
             'swEhP': function(_0x276dfc, _0x16f703) {
                 return _0x276dfc === _0x16f703;
             },
             'jrzGl': function(_0x1b0a86, _0xed1943) {
                 return _0x40c71b['ptUVg'](_0x1b0a86, _0xed1943);
             }
         };
         $['get'](_0x40c71b['piWIb'](taskUrl, 'consume/SlotMachine', 'strCouponPool=' + _0x42f360 + '&strGoodsPool=' + _0x1b9e46 + '&ddwConfVersion=' + _0x435bda), async (_0x3ca439, _0x3941e7, _0x424fb5) => {
             try {
                 if (_0x3ca439) {
                     console['log']('' + JSON['stringify'](_0x3ca439));
                     console['log']($['name'] + ' SlotMachine API请求失败，请检查网路重试');
                 } else {
                     if (_0x40c71b['MPaqM'] !== _0x40c71b['MPaqM']) {
                         if (_0x3ca439) {
                             console['log']('' + JSON['stringify'](_0x3ca439));
                             console['log']($['name'] + ' createSuperAssistUser JoinScene API请求失败，请检查网路重试');
                         } else {
                             console['log']('超级助力(超级工人)结果:' + _0x424fb5);
                             const {
                                 sErrMsg,
                                 iRet
                             } = JSON['parse'](_0x424fb5);
                             if (iRet === 0x7d5 || _0x1b234c['swEhP'](iRet, 0x270f)) $['canHelp'] = ![];
                         }
                     } else {
                         const {
                             iRet,
                             sErrMsg,
                             strAwardPoolName
                         } = JSON['parse'](_0x424fb5);
                         $['log']('\n【抽奖结果】🎰 ' + (_0x40c71b['XYola'](strAwardPoolName, '') ? _0x40c71b['OenqI'] : strAwardPoolName) + ' \x0a' + ($['showLog'] ? _0x424fb5 : ''));
                     }
                 }
             } catch (_0x1e4e16) {
                 $['logErr'](_0x1e4e16, _0x3941e7);
             } finally {
                 if (_0x40c71b['uTrXC'](_0x40c71b['LDTzQ'], _0x40c71b['eqyXw'])) {
                     _0x4dd2f9();
                 } else {
                     str = _0x1b234c['jrzGl'](msg, prizeInfo) ? ' 获得财富值 ¥ ' + JSON['parse'](prizeInfo)['ddwMoney'] : '';
                 }
             }
         });
     });
 }

 function createAssistUser(_0x3e250b) {
     var _0xfb5a92 = {
         'yWeBf': function(_0x3686e9, _0x7174f5) {
             return _0x3686e9 === _0x7174f5;
         },
         'BpxBM': 'dweLu',
         'nkFzn': 'qLFzN',
         'dlMyQ': function(_0x24fd33, _0x47d030) {
             return _0x24fd33 === _0x47d030;
         },
         'ONOjw': function(_0x4ab573, _0x56370e) {
             return _0x4ab573 === _0x56370e;
         },
         'GxAUz': 'Cygrp',
         'qgMnt': function(_0x636a8c, _0x203edf) {
             return _0x636a8c(_0x203edf);
         }
     };
     return new Promise(_0x183264 => {
         var _0x258995 = {
             'ssRaW': function(_0x1ae4a8, _0x224cd9) {
                 return _0xfb5a92['yWeBf'](_0x1ae4a8, _0x224cd9);
             },
             'WISel': _0xfb5a92['BpxBM'],
             'IXMsX': _0xfb5a92['nkFzn'],
             'oQoZM': function(_0x12139c, _0x97a326) {
                 return _0xfb5a92['dlMyQ'](_0x12139c, _0x97a326);
             }
         };
         if (_0xfb5a92['ONOjw'](_0xfb5a92['GxAUz'], 'ijFet')) {
             if (data) data = JSON['parse'](data);
         } else {
             $['get'](taskUrl('user/JoinScene', 'strShareId=' + _0xfb5a92['qgMnt'](escape, _0x3e250b) + '&dwSceneId=1001'), async (_0x3ad83f, _0x25d359, _0x1c711b) => {
                 try {
                     if (_0x3ad83f) {
                         if (_0x258995['ssRaW'](_0x258995['WISel'], _0x258995['IXMsX'])) {
                             console['log']('' + JSON['stringify'](_0x3ad83f));
                             console['log']($['name'] + ' employeeAward API请求失败，请检查网路重试');
                         } else {
                             console['log']('' + JSON['stringify'](_0x3ad83f));
                             console['log']($['name'] + ' createAssistUser JoinScene API请求失败，请检查网路重试');
                         }
                     } else {
                         console['log']('普通助力(招工)结果:' + _0x1c711b);
                         const {
                             iRet
                         } = JSON['parse'](_0x1c711b);
                         if (_0x258995['oQoZM'](iRet, 0x7d5) || _0x258995['oQoZM'](iRet, 0x270f)) $['canHelp'] = ![];
                     }
                 } catch (_0x57df06) {} finally {
                     _0x183264();
                 }
             });
         }
     });
 }

 function createSuperAssistUser(_0x3c1eeb) {
     var _0x5b6863 = {
         'mpvoW': 'HH:mm',
         'kUJXZ': '活动太火爆了',
         'TVjmy': function(_0x3114cc, _0x488587) {
             return _0x3114cc !== _0x488587;
         },
         'MOTpj': 'ZOJBs',
         'twZYJ': 'UwZrs',
         'DYLPL': function(_0x1ecbb0, _0x29cccc) {
             return _0x1ecbb0 === _0x29cccc;
         },
         'ahEji': 'LJDvt',
         'DgUkJ': function(_0x2c464b) {
             return _0x2c464b();
         },
         'ASHwR': function(_0x498d7f, _0x59e13c) {
             return _0x498d7f !== _0x59e13c;
         },
         'adtIa': 'jRYCR',
         'ndiFI': 'GqXeE',
         'cxbXR': function(_0x473162, _0x342ab7, _0x2d33a4) {
             return _0x473162(_0x342ab7, _0x2d33a4);
         },
         'PCaCB': 'user/JoinScene',
         'ARTtN': 'timestamp',
         'IVbMF': 'phoneid',
         'rpiYQ': 'farm_jstoken',
         'JufPS': function(_0x2fda32, _0x128f51) {
             return _0x2fda32(_0x128f51);
         }
     };
     return new Promise(_0x5c324c => {
         var _0x22d755 = {
             'heQvd': _0x5b6863['mpvoW'],
             'gOBeL': _0x5b6863['kUJXZ'],
             'nBlBJ': function(_0x3c652e, _0x59235a) {
                 return _0x3c652e + _0x59235a;
             },
             'WCpgf': function(_0x1d8b67, _0x219f19) {
                 return _0x1d8b67(_0x219f19);
             },
             'jDhFz': function(_0x5d1a05, _0x2dfc44) {
                 return _0x5b6863['TVjmy'](_0x5d1a05, _0x2dfc44);
             },
             'TLOom': _0x5b6863['MOTpj'],
             'KpDYu': _0x5b6863['twZYJ'],
             'TtmIG': function(_0x8e4a38, _0x1b2c7e) {
                 return _0x5b6863['DYLPL'](_0x8e4a38, _0x1b2c7e);
             },
             'VriWb': _0x5b6863['ahEji'],
             'RxYng': function(_0x2bca44) {
                 return _0x5b6863['DgUkJ'](_0x2bca44);
             }
         };
         if (_0x5b6863['ASHwR'](_0x5b6863['adtIa'], _0x5b6863['ndiFI'])) {
             $['get'](_0x5b6863['cxbXR'](taskUrl, _0x5b6863['PCaCB'], 'strPgtimestamp=' + token[_0x5b6863['ARTtN']] + '&strPhoneID=' + token[_0x5b6863['IVbMF']] + '&strPgUUNum=' + token[_0x5b6863['rpiYQ']] + '&strShareId=' + _0x5b6863['JufPS'](escape, _0x3c1eeb) + '&dwSceneId=1001&dwType=2'), async (_0x1903c2, _0x2b61e4, _0x1b2885) => {
                 var _0x227090 = {
                     'ehuSt': function(_0x5b8f85, _0x42b04b) {
                         return _0x5b8f85(_0x42b04b);
                     },
                     'UHpvQ': _0x22d755['heQvd'],
                     'HcoPb': function(_0x1b61be, _0x4764e9) {
                         return _0x1b61be !== _0x4764e9;
                     },
                     'LbSVy': _0x22d755['gOBeL'],
                     'LVZfi': '任务为成就任务或者未到任务时间',
                     'xUkkW': function(_0x1b7312, _0x84fbe7) {
                         return _0x22d755['nBlBJ'](_0x1b7312, _0x84fbe7);
                     },
                     'vvNWr': function(_0x392cbc, _0x32bd4b) {
                         return _0x22d755['WCpgf'](_0x392cbc, _0x32bd4b);
                     },
                     'QzCWY': function(_0x36f000, _0x5e3e96) {
                         return _0x36f000 === _0x5e3e96;
                     }
                 };
                 try {
                     if (_0x22d755['jDhFz'](_0x22d755['TLOom'], 'kbznQ')) {
                         if (_0x1903c2) {
                             if (_0x22d755['jDhFz']('nzCUW', _0x22d755['KpDYu'])) {
                                 console['log']('' + JSON['stringify'](_0x1903c2));
                                 console['log']($['name'] + ' createSuperAssistUser JoinScene API请求失败，请检查网路重试');
                             } else {
                                 console['log']('此账号cookie填写不规范,你的pt_pin=xxx后面没分号(;)\n');
                                 _0x227090['ehuSt'](_0x5c324c, null);
                             }
                         } else {
                             console['log']('超级助力(超级工人)结果:' + _0x1b2885);
                             const {
                                 sErrMsg,
                                 iRet
                             } = JSON['parse'](_0x1b2885);
                             if (iRet === 0x7d5 || _0x22d755['TtmIG'](iRet, 0x270f)) $['canHelp'] = ![];
                         }
                     } else {
                         const _0x4d4253 = $['notifyTime']['split'](',')['map'](_0x195378 => _0x195378['split'](':'));
                         const _0x5f2fc7 = $['time'](_0x227090['UHpvQ'])['split'](':');
                         $['log']('\x0a' + JSON['stringify'](_0x4d4253));
                         $['log']('\x0a' + JSON['stringify'](_0x5f2fc7));
                         if (_0x4d4253['some'](_0x2ab91d => _0x2ab91d[0x0] === _0x5f2fc7[0x0] && (!_0x2ab91d[0x1] || _0x2ab91d[0x1] === _0x5f2fc7[0x1]))) {
                             $['msg']($['name'], '', '' + $['result']['join']('\x0a'));
                         }
                     }
                 } catch (_0x5c5a02) {
                     $['logErr'](_0x5c5a02, _0x2b61e4);
                 } finally {
                     if (_0x22d755['VriWb'] !== _0x22d755['VriWb']) {
                         const {
                             msg,
                             ret,
                             data: {
                                 prizeInfo = ''
                             } = {}
                         } = JSON['parse'](_0x1b2885);
                         let _0x36eee6 = '';
                         if (_0x227090['HcoPb'](msg['indexOf'](_0x227090['LbSVy']), -0x1)) {
                             _0x36eee6 = _0x227090['LVZfi'];
                         } else {
                             _0x36eee6 = _0x227090['xUkkW'](msg, prizeInfo) ? ' 获得财富值 ¥ ' + JSON['parse'](prizeInfo)['ddwMoney'] : '';
                         }
                         $['log']('\x0a' + taskName + '【领日常奖励】：' + _0x36eee6 + '\x0a' + ($['showLog'] ? _0x1b2885 : ''));
                         _0x227090['vvNWr'](_0x5c324c, _0x227090['QzCWY'](ret, 0x0));
                     } else {
                         _0x22d755['RxYng'](_0x5c324c);
                     }
                 }
             });
         } else {
             $['logErr'](e, resp);
         }
     });
 }

 function joinGroup(_0x583e18) {
     var _0x3454a3 = {
         'tPnfL': function(_0x8ad927, _0x1b8a5e) {
             return _0x8ad927 !== _0x1b8a5e;
         },
         'GsxBg': '任务进行中或者未到任务时间',
         'QHxkm': function(_0x29f081, _0x2932b8) {
             return _0x29f081(_0x2932b8);
         },
         'Izyoj': 'ddwMoney',
         'gJnsj': function(_0x3ac1b4, _0x212c48) {
             return _0x3ac1b4 === _0x212c48;
         },
         'hlssn': 'XIXzF',
         'evccc': 'wEiKc',
         'aecTa': 'TxXuE',
         'BwbzR': function(_0x497dda, _0x2eb7ac) {
             return _0x497dda === _0x2eb7ac;
         },
         'OlsNR': 'CRaLk',
         'alfRM': function(_0x1d3902, _0x3f0d24) {
             return _0x1d3902(_0x3f0d24);
         },
         'gTLOO': function(_0x389949, _0x4706c9) {
             return _0x389949 || _0x4706c9;
         },
         'GFFjj': function(_0x10a851, _0x3f9637, _0x4e3151) {
             return _0x10a851(_0x3f9637, _0x4e3151);
         },
         'uaKqz': 'timestamp',
         'ClnXL': 'phoneid'
     };
     return new Promise(async _0x36ba94 => {
         $['get'](_0x3454a3['GFFjj'](taskUrl, 'user/JoinGroup', 'strGroupId=' + _0x583e18 + '&dwIsNewUser=0&pgtimestamp=' + token[_0x3454a3['uaKqz']] + '&phoneID=' + token[_0x3454a3['ClnXL']] + '&pgUUNum=' + token['farm_jstoken']), (_0x553645, _0x190122, _0x498c98) => {
             var _0x4ead8d = {
                 'XXhUz': function(_0x50d7c4, _0x1b81d2) {
                     return _0x3454a3['tPnfL'](_0x50d7c4, _0x1b81d2);
                 },
                 'rYYmC': _0x3454a3['GsxBg'],
                 'GvafP': function(_0x141eaf, _0x4dce4f) {
                     return _0x3454a3['QHxkm'](_0x141eaf, _0x4dce4f);
                 },
                 'mJIXS': _0x3454a3['Izyoj']
             };
             if (_0x3454a3['gJnsj']('XIXzF', _0x3454a3['hlssn'])) {
                 try {
                     if (_0x3454a3['tPnfL']('LPvIl', _0x3454a3['evccc'])) {
                         if (_0x553645) {
                             console['log']('' + JSON['stringify'](_0x553645));
                             console['log']($['name'] + ' joinGroup API请求失败，请检查网路重试');
                         } else {
                             const {
                                 sErrMsg,
                                 iRet
                             } = _0x498c98 = JSON['parse'](_0x498c98);
                             if (iRet === 0x7d5 || iRet === 0x270f) $['canHelp'] = ![];
                             $['log']('iRet:' + iRet + ' ' + sErrMsg);
                         }
                     } else {
                         const {
                             msg,
                             ret
                         } = JSON['parse'](_0x498c98);
                         $['log']('\x0a' + taskName + '【做日常任务】：' + (_0x4ead8d['XXhUz'](msg['indexOf']('活动太火爆了'), -0x1) ? _0x4ead8d['rYYmC'] : msg) + '\x0a' + ($['showLog'] ? _0x498c98 : ''));
                         _0x4ead8d['GvafP'](_0x36ba94, ret === 0x0);
                     }
                 } catch (_0x344248) {
                     if (_0x3454a3['gJnsj']('qxvLg', _0x3454a3['aecTa'])) {
                         _0x36ba94(_0x498c98);
                     } else {
                         $['logErr'](_0x344248, _0x190122);
                     }
                 } finally {
                     if (_0x3454a3['BwbzR']('dxQJY', _0x3454a3['OlsNR'])) {
                         _0x498c98 = JSON['parse'](_0x498c98);
                         const {
                             iret,
                             SceneList = {},
                             XbStatus: {
                                 XBDetail = [],
                                 dwXBRemainCnt
                             } = {},
                             ddwMoney,
                             dwIsNewUser,
                             sErrMsg,
                             strMyShareId,
                             strPin,
                             dwLevel
                         } = _0x498c98;
                         $['log']('\n获取用户信息：' + sErrMsg + '\x0a' + ($['showLog'] ? _0x498c98 : ''));
                         $['log']('\n当前等级:' + dwLevel + ',财富值:' + _0x498c98[_0x4ead8d['mJIXS']] + '\x0a');
                         if (showInvite) {
                             console['log']('财富岛好友互助码每次运行都变化,旧的可继续使用');
                             $['log']('\n【京东账号' + $['index'] + '（' + $['UserName'] + '）的' + $['name'] + '好友互助码】' + strMyShareId + '\x0a\x0a');
                         }
                         $['info'] = {
                             ...$['info'],
                             'SceneList': SceneList,
                             'XBDetail': XBDetail,
                             'dwXBRemainCnt': dwXBRemainCnt,
                             'ddwMoney': ddwMoney,
                             'dwIsNewUser': dwIsNewUser,
                             'strMyShareId': strMyShareId,
                             'strPin': strPin,
                             'dwLevel': dwLevel
                         };
                         _0x36ba94({
                             'SceneList': SceneList,
                             'XBDetail': XBDetail,
                             'dwXBRemainCnt': dwXBRemainCnt,
                             'ddwMoney': ddwMoney,
                             'dwIsNewUser': dwIsNewUser,
                             'strMyShareId': strMyShareId,
                             'strPin': strPin
                         });
                     } else {
                         _0x3454a3['alfRM'](_0x36ba94, _0x3454a3['gTLOO'](_0x498c98, {}));
                     }
                 }
             } else {
                 const {
                     sErrMsg
                 } = JSON['parse'](_0x498c98);
                 $['log']('\n【🏝寻宝大作战】' + sErrMsg + '\x0a' + ($['showLog'] ? _0x498c98 : ''));
                 _0x36ba94(0x0);
             }
         });
     });
 }

 function submitGroupId() {
     var _0x161b05 = {
         'Fplhc': function(_0x5c124e, _0x3cbb66) {
             return _0x5c124e === _0x3cbb66;
         },
         'NPyyB': 'zHNjd',
         'eOpHZ': function(_0x452501) {
             return _0x452501();
         },
         'XRkuP': 'fcHLF',
         'cBhtr': 'GlCmO',
         'xLMPq': function(_0x28f98a, _0x4a8742) {
             return _0x28f98a + _0x4a8742;
         },
         'khBLr': function(_0x14f468, _0x26bf05) {
             return _0x14f468 + _0x26bf05;
         },
         'HfNlm': '(每天都变化,旧的不可用)\x0a\x0a',
         'tSNDt': function(_0x385216) {
             return _0x385216();
         },
         'vOAfm': function(_0x221636, _0x46c0dd) {
             return _0x221636(_0x46c0dd);
         }
     };
     return new Promise(_0x36223a => {
         $['get'](_0x161b05['vOAfm'](taskUrl, 'user/GatherForture'), async (_0x2cd1d8, _0x5c85b4, _0xdbf65b) => {
             try {
                 if (_0x2cd1d8) {
                     console['log']('' + JSON['stringify'](_0x2cd1d8));
                     console['log']($['name'] + ' GatherForture API请求失败，请检查网路重试');
                 } else {
                     const {
                         GroupInfo: {
                             strGroupId
                         },
                         strPin
                     } = JSON['parse'](_0xdbf65b);
                     if (!strGroupId) {
                         if (_0x161b05['Fplhc'](_0x161b05['NPyyB'], _0x161b05['NPyyB'])) {
                             const _0x12e508 = await _0x161b05['eOpHZ'](openGroup);
                             if (_0x12e508 === 0x0) {
                                 await _0x161b05['eOpHZ'](submitGroupId);
                             } else {
                                 if (_0x161b05['Fplhc'](_0x161b05['XRkuP'], _0x161b05['cBhtr'])) {
                                     $['logErr'](e);
                                 } else {
                                     _0x161b05['eOpHZ'](_0x36223a);
                                 }
                             }
                         } else {
                             _0x36223a();
                         }
                     } else {
                         $['log'](_0x161b05['xLMPq'](_0x161b05['khBLr']('\n\n你的【🏝寻宝大作战】互助码: ', strGroupId), _0x161b05['HfNlm']));
                         $['shareCodes']['push'](strGroupId);
                     }
                 }
             } catch (_0x4e8135) {
                 $['logErr'](_0x4e8135, _0x5c85b4);
             } finally {
                 _0x161b05['tSNDt'](_0x36223a);
             }
         });
     });
 }

 function openGroup() {
     var _0x407ce4 = {
         'gUlRF': function(_0xdcceca, _0x20d257) {
             return _0xdcceca !== _0x20d257;
         },
         'Jqdtn': function(_0x1f1d16, _0x3b70f5) {
             return _0x1f1d16(_0x3b70f5);
         },
         'Rftbr': function(_0x2f40f0) {
             return _0x2f40f0();
         },
         'tCRDI': function(_0x97e8c1) {
             return _0x97e8c1();
         },
         'Hqezl': 'wgMXX',
         'vRoGA': function(_0x48e513, _0x4bffa8, _0x5a08f7) {
             return _0x48e513(_0x4bffa8, _0x5a08f7);
         }
     };
     return new Promise(async _0x4ef761 => {
         var _0x3e13c9 = {
             'qBMcw': function(_0x30b4b8, _0x259104) {
                 return _0x407ce4['gUlRF'](_0x30b4b8, _0x259104);
             },
             'pOAJu': 'VTJwD',
             'SlWeX': 'VTzsY',
             'ysqfp': function(_0x56cce6, _0x595bc4) {
                 return _0x407ce4['Jqdtn'](_0x56cce6, _0x595bc4);
             },
             'PzgSQ': function(_0x30afdc) {
                 return _0x407ce4['Rftbr'](_0x30afdc);
             },
             'cLzwX': function(_0xc9c3ea) {
                 return _0x407ce4['tCRDI'](_0xc9c3ea);
             }
         };
         if (_0x407ce4['Hqezl'] !== 'SJItR') {
             $['get'](_0x407ce4['vRoGA'](taskUrl, 'user/OpenGroup', 'dwIsNewUser=' + $['info']['dwIsNewUser']), async (_0x1983b2, _0x2d6329, _0x1b487c) => {
                 var _0x440ee8 = {
                     'EmUgY': function(_0x37bdcf, _0x2d86f1) {
                         return _0x37bdcf || _0x2d86f1;
                     }
                 };
                 try {
                     if (_0x1983b2) {
                         console['log']('' + JSON['stringify'](_0x1983b2));
                         console['log']($['name'] + ' OpenGroup API请求失败，请检查网路重试');
                     } else {
                         if (_0x3e13c9['qBMcw'](_0x3e13c9['pOAJu'], _0x3e13c9['SlWeX'])) {
                             const {
                                 sErrMsg
                             } = JSON['parse'](_0x1b487c);
                             $['log']('\n【🏝寻宝大作战】' + sErrMsg + '\x0a' + ($['showLog'] ? _0x1b487c : ''));
                             _0x3e13c9['ysqfp'](_0x4ef761, 0x0);
                         } else {
                             const {
                                 iRet,
                                 sData: {
                                     ddwMoney
                                 },
                                 sErrMsg
                             } = JSON['parse'](_0x1b487c);
                             $['log']('\n📌签到：' + sErrMsg + '，获得财富 ¥ ' + _0x440ee8['EmUgY'](ddwMoney, 0x0) + '\x0a' + ($['showLog'] ? _0x1b487c : ''));
                         }
                     }
                 } catch (_0x2fe329) {
                     $['logErr'](_0x2fe329, _0x2d6329);
                 } finally {
                     _0x3e13c9['PzgSQ'](_0x4ef761);
                 }
             });
         } else {
             _0x3e13c9['cLzwX'](_0x4ef761);
         }
     });
 }

 function openPeriodBox() {
     var _0x2d3848 = {
         'iFXjq': 'success',
         'eOajl': function(_0xc8fcde, _0x450622) {
             return _0xc8fcde === _0x450622;
         },
         'aZvJW': 'VsyWI',
         'bsPxE': 'dxMtn',
         'GxLQC': 'qwAlr',
         'Rvkxy': function(_0x24b831, _0x1d215b) {
             return _0x24b831 < _0x1d215b;
         },
         'xavpC': 'ysKHA',
         'lOoDT': function(_0x49bc58, _0x48bae3) {
             return _0x49bc58 == _0x48bae3;
         },
         'vdpcs': function(_0x27a857, _0x2acde8) {
             return _0x27a857 === _0x2acde8;
         },
         'HwlHs': 'DtGNK',
         'AyUjD': function(_0x3997f5, _0x5c59cb, _0x58c4bb) {
             return _0x3997f5(_0x5c59cb, _0x58c4bb);
         },
         'klWDy': function(_0x4888b9, _0x258dbf) {
             return _0x4888b9 == _0x258dbf;
         },
         'WgWDi': function(_0x139237) {
             return _0x139237();
         },
         'GeBfe': function(_0x42244a, _0x3cda50) {
             return _0x42244a(_0x3cda50);
         },
         'WSduE': function(_0x3e1c60, _0x1c8e59) {
             return _0x3e1c60 * _0x1c8e59;
         }
     };
     return new Promise(async _0x40cb2d => {
         var _0x26228a = {
             'FQNFz': function(_0xabb5ed) {
                 return _0x2d3848['WgWDi'](_0xabb5ed);
             },
             'KhBFV': function(_0x3f96c8, _0xcaf6c0) {
                 return _0x2d3848['GeBfe'](_0x3f96c8, _0xcaf6c0);
             },
             'kLlVs': function(_0x1b25a9, _0x3223cb) {
                 return _0x2d3848['WSduE'](_0x1b25a9, _0x3223cb);
             }
         };
         $['get'](taskUrl('user/GatherForture'), async (_0x2e3b8c, _0x5be00c, _0x441501) => {
             var _0x14a3c8 = {
                 'MpIqS': 'IsfKL',
                 'cqUMQ': _0x2d3848['iFXjq']
             };
             try {
                 if (_0x2d3848['eOajl'](_0x2d3848['aZvJW'], 'VsyWI')) {
                     if (_0x2e3b8c) {
                         if (_0x2d3848['bsPxE'] === _0x2d3848['GxLQC']) {
                             _0x40cb2d();
                         } else {
                             console['log']('' + JSON['stringify'](_0x2e3b8c));
                             console['log']($['name'] + ' GatherForture API请求失败，请检查网路重试');
                         }
                     } else {
                         if ('vNAcI' === 'btmmK') {
                             $['logErr'](e, _0x5be00c);
                         } else {
                             const {
                                 PeriodBox = [{}]
                             } = JSON['parse'](_0x441501);
                             for (var _0x13a82d = 0x0; _0x2d3848['Rvkxy'](_0x13a82d, PeriodBox['length']); _0x13a82d++) {
                                 if (_0x2d3848['eOajl']('ajlXk', _0x2d3848['xavpC'])) {
                                     _0x26228a['FQNFz'](_0x40cb2d);
                                 } else {
                                     const {
                                         dwStatus,
                                         dwSeq,
                                         strBrandName
                                     } = PeriodBox[_0x13a82d];
                                     if (_0x2d3848['lOoDT'](dwStatus, 0x2)) {
                                         if (_0x2d3848['vdpcs'](_0x2d3848['HwlHs'], _0x2d3848['HwlHs'])) {
                                             await $['wait'](0x3e8);
                                             await $['get'](_0x2d3848['AyUjD'](taskUrl, 'user/OpenPeriodBox', 'dwSeq=' + dwSeq), async (_0x2e3b8c, _0x5be00c, _0x441501) => {
                                                 if ('IsfKL' === _0x14a3c8['MpIqS']) {
                                                     try {
                                                         const {
                                                             dwMoney,
                                                             iRet,
                                                             sErrMsg
                                                         } = JSON['parse'](_0x441501);
                                                         $['log']('\x0a【🏝寻宝大作战】【' + strBrandName + '】开宝箱：' + (sErrMsg == _0x14a3c8['cqUMQ'] ? ' 获得财富值 ¥ ' + dwMoney : sErrMsg) + '\x0a' + ($['showLog'] ? _0x441501 : ''));
                                                     } catch (_0x4bf73c) {
                                                         if ('KHZrw' !== 'VLaVO') {
                                                             $['logErr'](_0x4bf73c, _0x5be00c);
                                                         } else {
                                                             console['log']('' + JSON['stringify'](_0x2e3b8c));
                                                             console['log']($['name'] + ' DoTask API请求失败，请检查网路重试');
                                                         }
                                                     } finally {
                                                         _0x40cb2d();
                                                     }
                                                 } else {
                                                     console['log']('' + JSON['stringify'](_0x2e3b8c));
                                                     console['log']($['name'] + ' getMoney_dwSource_2 API请求失败，请检查网路重试');
                                                 }
                                             });
                                         } else {
                                             console['log']('' + JSON['stringify'](_0x2e3b8c));
                                             console['log']($['name'] + ' UserSignRewardV2 API请求失败，请检查网路重试');
                                         }
                                     } else if (_0x2d3848['klWDy'](dwStatus, 0x3)) {
                                         $['log']('\n【🏝寻宝大作战】【' + strBrandName + '】开宝箱：宝箱已开启过！');
                                     } else {
                                         $['log']('\x0a【🏝寻宝大作战】【' + strBrandName + '】开宝箱：未达到宝箱开启条件，快去邀请好友助力吧！');
                                         _0x40cb2d();
                                     }
                                 }
                             }
                         }
                     }
                 } else {
                     str += _sym[_0x26228a['KhBFV'](parseInt, _0x26228a['kLlVs'](Math['random'](), _sym['length']))];
                 }
             } catch (_0x2b8da6) {
                 $['logErr'](_0x2b8da6, _0x5be00c);
             } finally {
                 _0x40cb2d();
             }
         });
     });
 }

 function activeScene(_0x368eaf) {
     var _0x2fd1b4 = {
         'hZicF': function(_0x2d1639, _0x5f2639) {
             return _0x2d1639 !== _0x5f2639;
         },
         'WPsGE': 'Otjbb',
         'AkJNk': 'asbBC',
         'yKBNk': 'ynFTB',
         'Zfxvw': 'xwBku',
         'xcJXI': function(_0x5c49d0, _0x298625) {
             return _0x5c49d0(_0x298625);
         },
         'AsGiH': '*/*',
         'KDLbR': 'keep-alive',
         'hGPLA': 'https://st.jingxi.com/fortune_island/index.html',
         'ncnsy': 'gzip, deflate, br',
         'gpYNL': 'm.jingxi.com',
         'HsQPL': function(_0x17eafd, _0xd64776) {
             return _0x17eafd + _0xd64776;
         },
         'mmGNu': function(_0x4cedd0, _0x568844) {
             return _0x4cedd0 * _0x568844;
         },
         'HzIyA': 'zh-cn'
     };
     return new Promise(_0x4bcd35 => {
         var _0x28e670 = {
             'hOfds': function(_0x50db25) {
                 return _0x50db25();
             },
             'JfjMu': function(_0x537e37, _0x353d98) {
                 return _0x2fd1b4['hZicF'](_0x537e37, _0x353d98);
             },
             'xlMbd': _0x2fd1b4['WPsGE'],
             'LpJnP': _0x2fd1b4['AkJNk'],
             'Lpoib': _0x2fd1b4['yKBNk'],
             'NArAu': function(_0x249a59, _0x438dbe) {
                 return _0x249a59 === _0x438dbe;
             }
         };
         if (_0x2fd1b4['Zfxvw'] !== 'Chjdf') {
             const _0x52e925 = {
                 'url': JD_API_HOST + 'jxcfd/user/ActiveScene?strZone=jxcfd&bizCode=jxcfd&source=jxcfd&dwEnv=7&_cfd_t=' + Date['now']() + '&ptag=&dwSceneId=' + _0x2fd1b4['xcJXI'](Number, _0x368eaf) + '&_stk=_cfd_t,bizCode,dwEnv,dwSceneId,ptag,source,strZone&_ste=1&h5st=20210304125239873;1540797227618115;10009;tk01we7831daaa8nRzRiUm4rZjRynBiuCHXtzWJmGCtVH2P+YnfnjoIsTWS87p85/fH4kcisjwWpqa10pRs3zMclNzix;5a9afbeb82bbb4e5e62cfe4b72965b5a2bf12cc3c56817b53e93a1cead562dc4&_=' + Date['now']() + '&sceneval=2&g_login_type=1',
                 'headers': {
                     'Cookie': cookie,
                     'Accept': _0x2fd1b4['AsGiH'],
                     'Connection': _0x2fd1b4['KDLbR'],
                     'Referer': _0x2fd1b4['hGPLA'],
                     'Accept-Encoding': _0x2fd1b4['ncnsy'],
                     'Host': _0x2fd1b4['gpYNL'],
                     'User-Agent': 'jdpingou;iPhone;3.15.2;14.2.1;ea00763447803eb0f32045dcba629c248ea53bb3;network/wifi;model/iPhone13,2;appBuild/100365;ADID/00000000-0000-0000-0000-000000000000;supportApplePay/1;hasUPPay/0;pushNoticeIsOpen/0;hasOCPay/0;supportBestPay/0;session/' + _0x2fd1b4['HsQPL'](_0x2fd1b4['mmGNu'](Math['random'], 0x62), 0x1) + ';pap/JA2015_311210;brand/apple;supportJDSHWK/1;Mozilla/5.0 (iPhone; CPU iPhone OS 14_2_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148',
                     'Accept-Language': _0x2fd1b4['HzIyA']
                 }
             };
             $['get'](_0x52e925, (_0x2d049e, _0xb5f7bf, _0x140aa3) => {
                 try {
                     if (_0x2d049e) {
                         if (_0x28e670['JfjMu'](_0x28e670['xlMbd'], _0x28e670['LpJnP'])) {
                             console['log']('' + JSON['stringify'](_0x2d049e));
                             console['log']($['name'] + ' activeScene API请求失败，请检查网路重试');
                         } else {
                             console['log']('' + JSON['stringify'](_0x2d049e));
                             console['log']($['name'] + ' QueryUserInfo API请求失败，请检查网路重试');
                         }
                     } else {
                         if (_0x28e670['JfjMu']('LMMRN', _0x28e670['Lpoib'])) {
                             console['log']('开通场景结果:' + _0x140aa3 + '\x0a');
                         } else {
                             _0x28e670['hOfds'](_0x4bcd35);
                         }
                     }
                 } catch (_0x581dc9) {
                     $['logErr'](_0x581dc9, _0xb5f7bf);
                 } finally {
                     _0x4bcd35();
                 }
             });
         } else {
             if (err) {
                 console['log']('' + JSON['stringify'](err));
                 console['log']($['name'] + ' joinGroup API请求失败，请检查网路重试');
             } else {
                 const {
                     sErrMsg,
                     iRet
                 } = data = JSON['parse'](data);
                 if (iRet === 0x7d5 || _0x28e670['NArAu'](iRet, 0x270f)) $['canHelp'] = ![];
                 $['log']('iRet:' + iRet + ' ' + sErrMsg);
             }
         }
     });
 }

 function taskUrl(_0x87c722, _0x24e915) {
     var _0x19cb99 = {
         'HhOeF': '*/*',
         'TJajr': 'https://st.jingxi.com/fortune_island/index.html?ptag=138631.26.55',
         'qFYZx': 'm.jingxi.com',
         'QySwO': function(_0x263365, _0x4c3b3b) {
             return _0x263365 + _0x4c3b3b;
         },
         'fKZJw': function(_0x187e2a, _0x516716) {
             return _0x187e2a * _0x516716;
         }
     };
     return {
         'url': JD_API_HOST + 'jxcfd/' + _0x87c722 + '?strZone=jxcfd&bizCode=jxcfd&source=jxcfd&dwEnv=7&_cfd_t=' + Date['now']() + '&ptag=138631.26.55&' + _0x24e915 + '&_ste=1&_=' + Date['now']() + '&sceneval=2&g_login_type=1&g_ty=ls',
         'headers': {
             'Cookie': cookie,
             'Accept': _0x19cb99['HhOeF'],
             'Connection': 'keep-alive',
             'Referer': _0x19cb99['TJajr'],
             'Accept-Encoding': 'gzip, deflate, br',
             'Host': _0x19cb99['qFYZx'],
             'User-Agent': 'jdpingou;iPhone;3.15.2;14.2.1;ea00763447803eb0f32045dcba629c248ea53bb3;network/wifi;model/iPhone13,2;appBuild/100365;ADID/00000000-0000-0000-0000-000000000000;supportApplePay/1;hasUPPay/0;pushNoticeIsOpen/0;hasOCPay/0;supportBestPay/0;session/' + _0x19cb99['QySwO'](_0x19cb99['fKZJw'](Math['random'], 0x62), 0x1) + ';pap/JA2015_311210;brand/apple;supportJDSHWK/1;Mozilla/5.0 (iPhone; CPU iPhone OS 14_2_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148',
             'Accept-Language': 'zh-cn'
         },
         'timeout': 0x2710
     };
 }

 function taskListUrl(_0x3f48ee, _0x572a36) {
     var _0x54c371 = {
         'AbcZS': 'keep-alive',
         'TvNiq': 'gzip, deflate, br',
         'HbSSc': 'zh-cn'
     };
     return {
         'url': JD_API_HOST + 'newtasksys/newtasksys_front/' + _0x3f48ee + '?strZone=jxcfd&bizCode=jxcfd&source=jxcfd&dwEnv=7&_cfd_t=' + Date['now']() + '&ptag=138631.26.55&' + _0x572a36 + '&_ste=1&_=' + Date['now']() + '&sceneval=2&g_login_type=1&g_ty=ls',
         'headers': {
             'Cookie': cookie,
             'Accept': '*/*',
             'Connection': _0x54c371['AbcZS'],
             'Referer': 'https://st.jingxi.com/fortune_island/index.html?ptag=138631.26.55',
             'Accept-Encoding': _0x54c371['TvNiq'],
             'Host': 'm.jingxi.com',
             'User-Agent': 'jdpingou;iPhone;3.15.2;14.2.1;ea00763447803eb0f32045dcba629c248ea53bb3;network/wifi;model/iPhone13,2;appBuild/100365;ADID/00000000-0000-0000-0000-000000000000;supportApplePay/1;hasUPPay/0;pushNoticeIsOpen/0;hasOCPay/0;supportBestPay/0;session/' + (Math['random'] * 0x62 + 0x1) + ';pap/JA2015_311210;brand/apple;supportJDSHWK/1;Mozilla/5.0 (iPhone; CPU iPhone OS 14_2_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148',
             'Accept-Language': _0x54c371['HbSSc']
         },
         'timeout': 0x2710
     };
 }

 function showMsg() {
     var _0x3cc3a6 = {
         'JMiRt': function(_0x128202, _0x35a10e) {
             return _0x128202 === _0x35a10e;
         },
         'KMPie': 'RXkNW',
         'EJjqm': 'zVbRr',
         'uBmEa': 'ulnbv'
     };
     return new Promise(async _0x1757e0 => {
         if ($['result']['length']) {
             if (_0x3cc3a6['JMiRt'](_0x3cc3a6['KMPie'], 'RXkNW')) {
                 if ($['notifyTime']) {
                     const _0x48cb28 = $['notifyTime']['split'](',')['map'](_0x4291a6 => _0x4291a6['split'](':'));
                     const _0x3ac9b7 = $['time']('HH:mm')['split'](':');
                     $['log']('\x0a' + JSON['stringify'](_0x48cb28));
                     $['log']('\x0a' + JSON['stringify'](_0x3ac9b7));
                     if (_0x48cb28['some'](_0x33b68f => _0x33b68f[0x0] === _0x3ac9b7[0x0] && (!_0x33b68f[0x1] || _0x33b68f[0x1] === _0x3ac9b7[0x1]))) {
                         $['msg']($['name'], '', '' + $['result']['join']('\x0a'));
                     }
                 } else {
                     if (_0x3cc3a6['EJjqm'] !== _0x3cc3a6['uBmEa']) {
                         $['msg']($['name'], '', '' + $['result']['join']('\x0a'));
                     } else {
                         $['logErr'](e, resp);
                     }
                 }
                 if ($['isNode']() && process['env']['CFD_NOTIFY_CONTROL']) await notify['sendNotify']($['name'] + ' - 账号' + $['index'] + ' - ' + $['nickName'], '' + $['result']['join']('\x0a'));
             } else {
                 shareCodes = process['env']['JDCFD_SHARECODES']['split']('\x0a');
             }
         }
         _0x1757e0();
     });
 }

 function readShareCode() {
     var _0x4fe44f = {
         'cVGKu': function(_0x443196, _0x5b438b) {
             return _0x443196 + _0x5b438b;
         },
         'zpFiH': 'owwXz',
         'ESLAs': function(_0x4e2004, _0x3fba5) {
             return _0x4e2004 === _0x3fba5;
         },
         'ldWjb': 'nQhDI',
         'DeJCH': function(_0x267649, _0x2e9917) {
             return _0x267649 !== _0x2e9917;
         },
         'dhgYl': 'jnFEU',
         'pjGaM': 'MlCav',
         'cvLxz': function(_0x4a747f, _0x30fdbf) {
             return _0x4a747f(_0x30fdbf);
         },
         'dyHCC': function(_0x31b983) {
             return _0x31b983();
         }
     };
     console['log']('开始');
     return new Promise(async _0x2ffec9 => {
         var _0x218f1a = {
             'nEodq': 'success',
             'NGusn': function(_0x434d3e, _0x4f4699) {
                 return _0x4fe44f['cVGKu'](_0x434d3e, _0x4f4699);
             },
             'TQGrP': '\n\n你的【🏝寻宝大作战】互助码: ',
             'gLjSt': _0x4fe44f['zpFiH'],
             'uwKDo': 'yGTdr',
             'uswfl': function(_0x35db26, _0x150413) {
                 return _0x4fe44f['ESLAs'](_0x35db26, _0x150413);
             },
             'KdvQP': _0x4fe44f['ldWjb'],
             'JVaJk': 'GRMvU',
             'mvQMu': function(_0x250ca2, _0xb29bab) {
                 return _0x4fe44f['DeJCH'](_0x250ca2, _0xb29bab);
             },
             'sONvp': _0x4fe44f['dhgYl'],
             'Yjqdi': _0x4fe44f['pjGaM'],
             'xzQLO': function(_0x178bc1, _0x143cbd) {
                 return _0x4fe44f['cvLxz'](_0x178bc1, _0x143cbd);
             }
         };
         $['get']({
             'url': 'http://share.turinglabs.net/api/v3/jxcfd/query/' + randomCount + '/',
             'timeout': 0x2710
         }, (_0x7c1b45, _0x2194ba, _0x123f7e) => {
             var _0x4866c1 = {
                 'tyPWP': _0x218f1a['nEodq'],
                 'flynh': function(_0x27d895, _0xcebc51) {
                     return _0x218f1a['NGusn'](_0x27d895, _0xcebc51);
                 },
                 'LaAtF': _0x218f1a['TQGrP']
             };
             if (_0x218f1a['gLjSt'] === _0x218f1a['uwKDo']) {
                 $['logErr'](e, _0x2194ba);
             } else {
                 try {
                     if (_0x7c1b45) {
                         console['log']('' + JSON['stringify'](_0x7c1b45));
                         console['log']($['name'] + ' API请求失败，请检查网路重试');
                     } else {
                         if (_0x218f1a['uswfl'](_0x218f1a['KdvQP'], _0x218f1a['JVaJk'])) {
                             try {
                                 const {
                                     dwMoney,
                                     iRet,
                                     sErrMsg
                                 } = JSON['parse'](_0x123f7e);
                                 $['log']('\n【🏝寻宝大作战】【' + strBrandName + '】开宝箱：' + (sErrMsg == _0x4866c1['tyPWP'] ? ' 获得财富值 ¥ ' + dwMoney : sErrMsg) + '\x0a' + ($['showLog'] ? _0x123f7e : ''));
                             } catch (_0x3857e5) {
                                 $['logErr'](_0x3857e5, _0x2194ba);
                             } finally {
                                 _0x2ffec9();
                             }
                         } else {
                             if (_0x123f7e) {
                                 console['log']('随机取' + randomCount + '个码放到您固定的互助码后面(不影响已有固定互助)');
                                 _0x123f7e = JSON['parse'](_0x123f7e);
                             }
                         }
                     }
                 } catch (_0x31d16f) {
                     if (_0x218f1a['mvQMu'](_0x218f1a['sONvp'], _0x218f1a['sONvp'])) {
                         if (_0x7c1b45) {
                             console['log']('' + JSON['stringify'](_0x7c1b45));
                             console['log']($['name'] + ' API请求失败，请检查网路重试');
                         } else {
                             if (_0x123f7e) {
                                 console['log']('随机取' + randomCount + '个码放到您固定的互助码后面(不影响已有固定互助)');
                                 _0x123f7e = JSON['parse'](_0x123f7e);
                             }
                         }
                     } else {
                         $['logErr'](_0x31d16f, _0x2194ba);
                     }
                 } finally {
                     if (_0x218f1a['uswfl'](_0x218f1a['Yjqdi'], _0x218f1a['Yjqdi'])) {
                         _0x218f1a['xzQLO'](_0x2ffec9, _0x123f7e);
                     } else {
                         $['log'](_0x4866c1['flynh'](_0x4866c1['LaAtF'], strGroupId) + '(每天都变化,旧的不可用)\n\n');
                         $['shareCodes']['push'](strGroupId);
                     }
                 }
             }
         });
         await $['wait'](0x2710);
         _0x4fe44f['dyHCC'](_0x2ffec9);
     });
 }

 function shareCodesFormat() {
     var _0x6bed88 = {
         'jbXFN': function(_0x2c9e47, _0x18d2a8) {
             return _0x2c9e47(_0x18d2a8);
         },
         'XoNPb': function(_0x3eb604, _0x2ecb3e) {
             return _0x3eb604 === _0x2ecb3e;
         },
         'sSBzL': 'WJoZL',
         'mvTut': 'WLYEc',
         'DDHkF': function(_0x4effd8, _0x1e1df1) {
             return _0x4effd8 - _0x1e1df1;
         },
         'VzweK': function(_0x326b25, _0x5be28d) {
             return _0x326b25 - _0x5be28d;
         },
         'GzsoH': function(_0x32f640) {
             return _0x32f640();
         },
         'eQlcu': function(_0x11ebe7, _0x1f1bea) {
             return _0x11ebe7 !== _0x1f1bea;
         },
         'ldtZd': 'Gukqm'
     };
     return new Promise(async _0x302e8b => {
         var _0x17b94a = {
             'xCuXR': function(_0x3e13f6, _0x2210b9) {
                 return _0x6bed88['jbXFN'](_0x3e13f6, _0x2210b9);
             }
         };
         if (_0x6bed88['XoNPb'](_0x6bed88['sSBzL'], _0x6bed88['mvTut'])) {
             console['log']('' + JSON['stringify'](err));
             console['log']($['name'] + ' getMoney_dwSource_1 API请求失败，请检查网路重试');
         } else {
             $['newShareCodes'] = [];
             if ($['shareCodesArr'][_0x6bed88['DDHkF']($['index'], 0x1)]) {
                 $['newShareCodes'] = $['shareCodesArr'][_0x6bed88['VzweK']($['index'], 0x1)]['split']('@');
             } else {
                 console['log']('由于您第' + $['index'] + '个京东账号未提供shareCode,将采纳本脚本自带的助力码\n');
                 $['newShareCodes'] = $['strMyShareIds'];
             }
             const _0x13e0a0 = await _0x6bed88['GzsoH'](readShareCode);
             if (_0x13e0a0 && _0x6bed88['XoNPb'](_0x13e0a0['code'], 0xc8)) {
                 if (_0x6bed88['eQlcu'](_0x6bed88['ldtZd'], _0x6bed88['ldtZd'])) {
                     if (err) {
                         console['log']('' + JSON['stringify'](err));
                         console['log']($['name'] + ' OpenGroup API请求失败，请检查网路重试');
                     } else {
                         const {
                             sErrMsg
                         } = JSON['parse'](data);
                         $['log']('\x0a【🏝寻宝大作战】' + sErrMsg + '\x0a' + ($['showLog'] ? data : ''));
                         _0x17b94a['xCuXR'](_0x302e8b, 0x0);
                     }
                 } else {
                     $['newShareCodes'] = [...new Set([...$['newShareCodes'], ...$['strMyShareIds'], 'F19A97051D9D4E3F4BC86C5593B4CEE805C15D6AD9893767974D954098578CEA', ..._0x13e0a0['data'] || []])];
                 }
             }
             console['log']('第' + $['index'] + '个京东账号将要助力的好友' + JSON['stringify']($['newShareCodes']));
             _0x302e8b();
         }
     });
 }

 function requireConfig() {
     var _0x1fa6d8 = {
         'Pggpt': function(_0x323483, _0x4a002e) {
             return _0x323483 === _0x4a002e;
         },
         'kRINB': 'false',
         'IxUOn': 'GITHUB',
         'FXaGo': 'F19A97051D9D4E3F4BC86C5593B4CEE805C15D6AD9893767974D954098578CEA',
         'BuOcC': function(_0x3b0297, _0x3a4636) {
             return _0x3b0297 === _0x3a4636;
         },
         'RTCqH': 'DkGmk',
         'sxNCw': 'IVLXU',
         'sHEoP': function(_0x156c84, _0x1c83f1) {
             return _0x156c84 > _0x1c83f1;
         },
         'huVSM': 'lsUJv',
         'zqQqx': function(_0x24ede2, _0x2c6e95) {
             return _0x24ede2 === _0x2c6e95;
         },
         'yqWYU': 'eNmuB',
         'wUtNb': 'uvvHx',
         'aFyyx': 'jd_jxCFD'
     };
     return new Promise(_0x4c3920 => {
         var _0x48b3b0 = {
             'lnksc': _0x1fa6d8['FXaGo']
         };
         if (_0x1fa6d8['BuOcC']('goMdY', _0x1fa6d8['RTCqH'])) {
             $['newShareCodes'] = [...new Set([...$['newShareCodes'], ...$['strMyShareIds'], _0x48b3b0['lnksc'], ...readShareCodeRes['data'] || []])];
         } else {
             console['log']('开始获取' + $['name'] + '配置文件\n');
             let _0x2c2f75 = [];
             if ($['isNode']() && process['env']['JDCFD_SHARECODES']) {
                 if (_0x1fa6d8['sxNCw'] === 'IVLXU') {
                     if (_0x1fa6d8['sHEoP'](process['env']['JDCFD_SHARECODES']['indexOf']('\x0a'), -0x1)) {
                         if (_0x1fa6d8['huVSM'] === 'lsUJv') {
                             _0x2c2f75 = process['env']['JDCFD_SHARECODES']['split']('\x0a');
                         } else {
                             console['log']('' + JSON['stringify'](err));
                             console['log']($['name'] + ' GatherForture API请求失败，请检查网路重试');
                         }
                     } else {
                         if (_0x1fa6d8['zqQqx'](_0x1fa6d8['yqWYU'], _0x1fa6d8['wUtNb'])) {
                             Object['keys'](jdCookieNode)['forEach'](_0x41485b => {
                                 cookiesArr['push'](jdCookieNode[_0x41485b]);
                             });
                             if (process['env']['JD_DEBUG'] && _0x1fa6d8['Pggpt'](process['env']['JD_DEBUG'], _0x1fa6d8['kRINB'])) console['log'] = () => {};
                             if (JSON['stringify'](process['env'])['indexOf'](_0x1fa6d8['IxUOn']) > -0x1) process['exit'](0x0);
                         } else {
                             _0x2c2f75 = process['env']['JDCFD_SHARECODES']['split']('&');
                         }
                     }
                 } else {
                     if (err) {
                         console['log']('' + JSON['stringify'](err));
                         console['log']($['name'] + ' activeScene API请求失败，请检查网路重试');
                     } else {
                         console['log']('开通场景结果:' + data + '\x0a');
                     }
                 }
             }
             $['shareCodesArr'] = [];
             if ($['isNode']()) {
                 Object['keys'](_0x2c2f75)['forEach'](_0xee19dd => {
                     if (_0x2c2f75[_0xee19dd]) {
                         $['shareCodesArr']['push'](_0x2c2f75[_0xee19dd]);
                     }
                 });
             } else {
                 if ($['getdata'](_0x1fa6d8['aFyyx'])) $['shareCodesArr'] = $['getdata'](_0x1fa6d8['aFyyx'])['split']('\x0a')['filter'](_0x191c68 => !!_0x191c68);
                 console['log']('\x0aBoxJs设置的京喜财富岛邀请码:' + $['getdata']('jd_jxCFD') + '\x0a');
             }
             console['log']('您提供了' + $['shareCodesArr']['length'] + '个账号的' + $['name'] + '助力码\n');
             _0x4c3920();
         }
     });
 };
 _0xodj = 'jsjiami.com.v6'



function TotalBean() {
  return new Promise(async resolve => {
    const options = {
      url: "https://me-api.jd.com/user_new/info/GetJDUserInfoUnion",
      headers: {
        Host: "me-api.jd.com",
        Accept: "*/*",
        Connection: "keep-alive",
        Cookie: cookie,
        "User-Agent": $.isNode() ? (process.env.JD_USER_AGENT ? process.env.JD_USER_AGENT : (require('./USER_AGENTS').USER_AGENT)) : ($.getdata('JDUA') ? $.getdata('JDUA') : "jdapp;iPhone;9.4.4;14.3;network/4g;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1"),
        "Accept-Language": "zh-cn",
        "Referer": "https://home.m.jd.com/myJd/newhome.action?sceneval=2&ufc=&",
        "Accept-Encoding": "gzip, deflate, br"
      }
    }
    $.get(options, (err, resp, data) => {
      try {
        if (err) {
          $.logErr(err)
        } else {
          if (data) {
            data = JSON.parse(data);
            if (data['retcode'] === "1001") {
              $.isLogin = false; //cookie过期
              return;
            }
            if (data['retcode'] === "0" && data.data && data.data.hasOwnProperty("userInfo")) {
              $.nickName = data.data.userInfo.baseInfo.nickname;
            }
          } else {
            $.log('京东服务器返回空数据');
          }
        }
      } catch (e) {
        $.logErr(e)
      } finally {
        resolve();
      }
    })
  })
}
function jsonParse(str) {
  if (typeof str == "string") {
    try {
      return JSON.parse(str);
    } catch (e) {
      console.log(e);
      $.msg($.name, '', '请勿随意在BoxJs输入框修改内容\n建议通过脚本去获取cookie')
      return [];
    }
  }
}


!function(n){"use strict";function t(n,t){var r=(65535&n)+(65535&t);return(n>>16)+(t>>16)+(r>>16)<<16|65535&r}function r(n,t){return n<<t|n>>>32-t}function e(n,e,o,u,c,f){return t(r(t(t(e,n),t(u,f)),c),o)}function o(n,t,r,o,u,c,f){return e(t&r|~t&o,n,t,u,c,f)}function u(n,t,r,o,u,c,f){return e(t&o|r&~o,n,t,u,c,f)}function c(n,t,r,o,u,c,f){return e(t^r^o,n,t,u,c,f)}function f(n,t,r,o,u,c,f){return e(r^(t|~o),n,t,u,c,f)}function i(n,r){n[r>>5]|=128<<r%32,n[14+(r+64>>>9<<4)]=r;var e,i,a,d,h,l=1732584193,g=-271733879,v=-1732584194,m=271733878;for(e=0;e<n.length;e+=16)i=l,a=g,d=v,h=m,g=f(g=f(g=f(g=f(g=c(g=c(g=c(g=c(g=u(g=u(g=u(g=u(g=o(g=o(g=o(g=o(g,v=o(v,m=o(m,l=o(l,g,v,m,n[e],7,-680876936),g,v,n[e+1],12,-389564586),l,g,n[e+2],17,606105819),m,l,n[e+3],22,-1044525330),v=o(v,m=o(m,l=o(l,g,v,m,n[e+4],7,-176418897),g,v,n[e+5],12,1200080426),l,g,n[e+6],17,-1473231341),m,l,n[e+7],22,-45705983),v=o(v,m=o(m,l=o(l,g,v,m,n[e+8],7,1770035416),g,v,n[e+9],12,-1958414417),l,g,n[e+10],17,-42063),m,l,n[e+11],22,-1990404162),v=o(v,m=o(m,l=o(l,g,v,m,n[e+12],7,1804603682),g,v,n[e+13],12,-40341101),l,g,n[e+14],17,-1502002290),m,l,n[e+15],22,1236535329),v=u(v,m=u(m,l=u(l,g,v,m,n[e+1],5,-165796510),g,v,n[e+6],9,-1069501632),l,g,n[e+11],14,643717713),m,l,n[e],20,-373897302),v=u(v,m=u(m,l=u(l,g,v,m,n[e+5],5,-701558691),g,v,n[e+10],9,38016083),l,g,n[e+15],14,-660478335),m,l,n[e+4],20,-405537848),v=u(v,m=u(m,l=u(l,g,v,m,n[e+9],5,568446438),g,v,n[e+14],9,-1019803690),l,g,n[e+3],14,-187363961),m,l,n[e+8],20,1163531501),v=u(v,m=u(m,l=u(l,g,v,m,n[e+13],5,-1444681467),g,v,n[e+2],9,-51403784),l,g,n[e+7],14,1735328473),m,l,n[e+12],20,-1926607734),v=c(v,m=c(m,l=c(l,g,v,m,n[e+5],4,-378558),g,v,n[e+8],11,-2022574463),l,g,n[e+11],16,1839030562),m,l,n[e+14],23,-35309556),v=c(v,m=c(m,l=c(l,g,v,m,n[e+1],4,-1530992060),g,v,n[e+4],11,1272893353),l,g,n[e+7],16,-155497632),m,l,n[e+10],23,-1094730640),v=c(v,m=c(m,l=c(l,g,v,m,n[e+13],4,681279174),g,v,n[e],11,-358537222),l,g,n[e+3],16,-722521979),m,l,n[e+6],23,76029189),v=c(v,m=c(m,l=c(l,g,v,m,n[e+9],4,-640364487),g,v,n[e+12],11,-421815835),l,g,n[e+15],16,530742520),m,l,n[e+2],23,-995338651),v=f(v,m=f(m,l=f(l,g,v,m,n[e],6,-198630844),g,v,n[e+7],10,1126891415),l,g,n[e+14],15,-1416354905),m,l,n[e+5],21,-57434055),v=f(v,m=f(m,l=f(l,g,v,m,n[e+12],6,1700485571),g,v,n[e+3],10,-1894986606),l,g,n[e+10],15,-1051523),m,l,n[e+1],21,-2054922799),v=f(v,m=f(m,l=f(l,g,v,m,n[e+8],6,1873313359),g,v,n[e+15],10,-30611744),l,g,n[e+6],15,-1560198380),m,l,n[e+13],21,1309151649),v=f(v,m=f(m,l=f(l,g,v,m,n[e+4],6,-145523070),g,v,n[e+11],10,-1120210379),l,g,n[e+2],15,718787259),m,l,n[e+9],21,-343485551),l=t(l,i),g=t(g,a),v=t(v,d),m=t(m,h);return[l,g,v,m]}function a(n){var t,r="",e=32*n.length;for(t=0;t<e;t+=8)r+=String.fromCharCode(n[t>>5]>>>t%32&255);return r}function d(n){var t,r=[];for(r[(n.length>>2)-1]=void 0,t=0;t<r.length;t+=1)r[t]=0;var e=8*n.length;for(t=0;t<e;t+=8)r[t>>5]|=(255&n.charCodeAt(t/8))<<t%32;return r}function h(n){return a(i(d(n),8*n.length))}function l(n,t){var r,e,o=d(n),u=[],c=[];for(u[15]=c[15]=void 0,o.length>16&&(o=i(o,8*n.length)),r=0;r<16;r+=1)u[r]=909522486^o[r],c[r]=1549556828^o[r];return e=i(u.concat(d(t)),512+8*t.length),a(i(c.concat(e),640))}function g(n){var t,r,e="";for(r=0;r<n.length;r+=1)t=n.charCodeAt(r),e+="0123456789abcdef".charAt(t>>>4&15)+"0123456789abcdef".charAt(15&t);return e}function v(n){return unescape(encodeURIComponent(n))}function m(n){return h(v(n))}function p(n){return g(m(n))}function s(n,t){return l(v(n),v(t))}function C(n,t){return g(s(n,t))}function A(n,t,r){return t?r?s(t,n):C(t,n):r?m(n):p(n)}$.md5=A}(this);
// prettier-ignore
function Env(t,e){"undefined"!=typeof process&&JSON.stringify(process.env).indexOf("GITHUB")>-1&&process.exit(0);class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`🔔${this.name}, 开始!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),n={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(n,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t,e=null){const s=e?new Date(e):new Date;let i={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in i)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[e]:("00"+i[e]).substr((""+i[e]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","==============📣系统通知📣=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`❗️${this.name}, 错误!`,t.stack):this.log("",`❗️${this.name}, 错误!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`🔔${this.name}, 结束! 🕛 ${s} 秒`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}
