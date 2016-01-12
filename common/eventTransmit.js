/**
 * @author  lijiancheng | lijiancheng@17guagua.com
 * @version 1.0 | 2015/10/12
 * @js作用说明 事件接受和发布
 * @param 参数说明
 * @example  使用示例
 */

var o = $({});
//接收
$.subscribe = function() {
    o.on.apply(o, arguments);
};

//发布
$.publish = function(etype) {
    var i = etype.indexOf('/'),
        args = Array.prototype.slice.call(arguments, 1);

    while (i != -1) {
        var target = etype.substring(0, i+1);
        i = etype.indexOf('/', i+1);

        var newArgs = [target].concat(args);

        o.trigger.apply(o, newArgs);
    }

    o.trigger.apply(o, arguments);
};