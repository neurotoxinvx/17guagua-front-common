/**
 * @author  lijiancheng | lijiancheng@17guagua.com
 * @version 1.0 | 2015/10/9
 * @js作用说明 cookie相关操作
 * @param 参数说明
 * @example  使用示例
 */

exports.cookie = {
    set: function(cookieKey, cookieValue, cookieOpts){
        var arr = [];
        var d, t;
        var cfg = {
            'expire': null,
            'customExpire': null,
            'path': null,
            'domain': null,
            'secure': null,
            'encode': true
        };
        $.extend(cfg, cookieOpts);

        if (cfg.encode == true) {
            cookieValue = escape(cookieValue);
        }
        arr.push(cookieKey + '=' + cookieValue);

        if (cfg.path != null) {
            arr.push('path=' + cfg.path);
        }
        if (cfg.domain != null) {
            arr.push('domain=' + cfg.domain);
        }
        if (cfg.secure != null) {
            arr.push(cfg.secure);
        }
        if (cfg.expire != null) {
            d = new Date();
            t = d.getTime() + cfg.expire * 3600000; //cfg.expire * 1小时
            d.setTime(t);
            arr.push('expires=' + d.toGMTString());
        }
        if(cfg.customExpire != null){
            arr.push('expires=' + cfg.customExpire.toGMTString());
        }
        document.cookie = arr.join(';');
    },
    get: function(cookieKey){
        cookieKey = cookieKey.replace(/([\.\[\]\$])/g, '\\\$1');
        var rep = new RegExp(cookieKey + '=([^;]*)?;', 'i');
        var co = document.cookie + ';';
        var res = co.match(rep);
        if (res) {
            return res[1] || "";
        }
        else {
            return null;
        }
    },
    remove: function(cookieKey, cookieOpts){
        cookieOpts = cookieOpts || {};
        cookieOpts.expire = -10;
        this.set(cookieKey, '', cookieOpts);
    }
};