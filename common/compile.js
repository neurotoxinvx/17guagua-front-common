/**
 * @author  lijiancheng | lijiancheng@17guagua.com
 * @version 1.0 | 2015/10/9
 * @js作用说明
 * @param template 为string类型模版
 * @param data 为 json格式数据
 * @example compile('<p>#{str}</p>', {str: '呵呵'}) -->  '<p>呵呵</p>'
 */

exports.compile = function compile(template, data) {
    return template.replace(/#\{(.+?)\}/ig, function () {
        var key = arguments[1].replace(/\s/ig, "");
        var ret = arguments[0];
        var list = key.split("||");
        for (var i = 0, len = list.length; i < len; i += 1) {
            if (/^default:.*$/.test(list[i])) {
                ret = list[i].replace(/^default:/, "");
                break
            } else {
                if (data[list[i]] !== undefined) {
                    ret = data[list[i]];
                    break
                }
            }
        }
        return ret
    })
};