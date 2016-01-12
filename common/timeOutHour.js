/**
 * @author  Neurotoxin | wanghongyu@17guagua.com
 * @version 1.0 | 2015/12/07
 * @js作用说明  小时，分钟，秒针倒计时
 */

exports.timerHour = function(intDiff,o_hour){
    var inter = null;
    inter = window.setInterval(function(){
        intDiff--;
        var hour=0,
            minute=0,
            second=0;//时间默认值
        if(intDiff > 0){
            hour = Math.floor(intDiff / (60 * 60));
            minute = Math.floor(intDiff / 60) - (hour * 60);
            second = Math.floor(intDiff) - (hour * 60 * 60) - (minute * 60);
        }
        if (minute <= 9) minute = '0' + minute;
        if (second <= 9) second = '0' + second;
        $(o_hour).html(hour + ':' + minute + ':' + second);
        if(intDiff<0){
            window.clearInterval(inter);
            $(o_hour).html('');
        }
    }, 1000);
};
