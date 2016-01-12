/*
 * author: Neurotoxin
 * E-mail: wanghongyu@17guagua.com
 * description：获取服务器时间，处理服务器时间
 * */

exports.getServerTime = function(time){
    var date = new Date(time.split(' ')[0].split('-')[0],(time.split(' ')[0].split('-')[1]-1),time.split(' ')[0].split('-')[2],time.split(' ')[1].split(':')[0],time.split(' ')[1].split(':')[1],time.split(' ')[1].split(':')[2]);
    return date;
};