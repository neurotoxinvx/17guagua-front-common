/**
 * @author  lijiancheng | lijiancheng@17guagua.com
 * @version 1.0 | 2015/10/9
 * @js作用说明  获取浏览器地址栏字符串
 * @param name 为 要获取的字符串
 * @example queryString(openID)
 */

exports.queryString = function queryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null)return unescape(r[2]);
    return null;
};