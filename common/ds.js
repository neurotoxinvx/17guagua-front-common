/**
 * @author  lijiancheng | lijiancheng@17guagua.com
 * @version 1.0 | 2015/12/15
 * @desc  $.ajax的简写  ds 为 Data Switching 数据交换 的缩写
 * @param 参数说明
 * @example  使用示例
 */
exports.ds = function(url, data, type, options){
    var d = {
        t : Math.random()
    };

    $.extend(data, d);

    var obj = $.extend({}, options, {
        url : url,
        data : data,
        cache : false,
        type : type || 'GET',
        dataType : 'json'
    });
    return $.ajax(obj);
};