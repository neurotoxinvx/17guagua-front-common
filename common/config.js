/**
 * @author  lijiancheng | lijiancheng@17guagua.com
 * @version 1.0 | 2015/10/12
 * @js作用说明  接口地址
 * @param 参数说明
 * @example  使用示例
 */

var host = 'http://hot.active.qxiu.com/crowdfunding';
exports.config = {
    //主播众筹信息 用于主播raiseIngFail页面, 内容为主播众筹;
    anchorInfo: host + '/getActorInfo',
    //湖片区banner的信息
    banner: host + '/getBanner',
    // 获取众筹中主播  众筹成功主播， 众筹失败的主播数据
    fundingStar: host + '/allFunding',
    //首页注资榜
    indexZhuzi: host + '/indexZhuzi',
    // 首页助力榜
    indexZhuli: host + '/indexZhuli',
    // 首页勋章榜
    indexMedal: host + '/indexMedal',
    //主播页 注资榜
    anchorZhuzi: host + '/anchorZhuzi',
    // 主播页 花名册
    auchorMingce: host + '/auchorMingce',
    // 众筹助力榜
    userZhuli: host + '/userZhuli',
    //主播助资总额
    auchorZhuziTotal: host + '/auchorZhuziTotal',
    //主播助力总额
    auchorZhuliTotal: host + '/auchorZhuliTotal',
    //主播是否开启众筹
    auchorCheckOpen: host + '/auchorCheckOpen',
    //一起走过的路
    dailyAnchorZhuzi: host + '/dailyAnchorZhuzi',
    // 主播众筹项目状态接口
    anchorFundingState: host + '/road',
    //主播再次发起众筹
    againUrl: host + '/re',
    // 主播升档url
    upLevel: host + '/up',
    //主播重要信息
    anchorSecretInfo: host + '/getPersonalInfo',
    // 主播去拍摄
    projectEnd: host + '/end',
    //主播展示
    imageView: host + '',
    //给主播助力
    helpStrength: host + '',
    // 成功作品展示
    videoListUrl: host+ ''
};