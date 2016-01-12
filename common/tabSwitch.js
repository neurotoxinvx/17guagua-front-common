/*
 * author: Neurotoxin
 * E-mail: wanghongyu@17guagua.com
 * 文件说明: 选项卡切换插件
 * */

exports.tabSwitch = function(hd,bd,onclass){
    $(hd).on("click",function(){
        var _this = $(this);
        $(hd).removeClass(onclass);
        _this.addClass(onclass);
        $(bd).hide();
        $(bd).eq(_this.index()).show();
    });
};