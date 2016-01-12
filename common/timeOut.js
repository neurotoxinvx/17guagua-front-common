/**
 * @author  Neurotoxin | wanghongyu@17guagua.com
 * @version 1.0 | 2015/12/07
 * @js作用说明  分钟，秒针倒计时
 */

exports.timer = function(intDiff,time){
    var inter = null;
    inter = window.setInterval(function(){
        intDiff--;
        var minute=0,
            second=0;//时间默认值
        if(intDiff > 0){
            minute = Math.floor(intDiff / 60);
            second = Math.floor(intDiff) - (minute * 60);
        }
        if (minute <= 9) minute = '0' + minute;
        if (second <= 9) second = '0' + second;
        $(time).html(minute + ':' + second);
        if(intDiff<0){
            window.clearInterval(inter);
            $(time).html('00:00');
        }
    }, 1000);
};