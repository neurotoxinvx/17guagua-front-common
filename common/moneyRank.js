
/**
 * @author  lijiancheng | lijiancheng@17guagua.com
 * @version 1.0 | 2015/12/22
 * @desc  注资榜排行
 * @param 参数说明
 * @example  new rank({url: 'http://page.qxiu.com', wrap: '#ep ul', length: 12, data: {anchorId: queryString('anchorId')})
 */
var config = require('./config').config;
var ds = require('./ds').ds;
var queryString = require('./queryString').queryString;
var compile = require('./compile').compile;
var moneyRank = function(op){
    this.opt = {
        url: '', //默认排行榜接口是注资榜的接口
        wrap: '', //容器的id 默认是注资排行榜的id
        length: 0, // 默认 名单长度是0 即无限制  设计图上是12,
        data: {},
        tpl: '<li>'+
                '<span class="rank">#{rank}</span>'+
                '<span class="username">#{nickName}</span>'+
                '<span class="donate_money">#{num}元</span>'+
             '</li>'
    };
    this.opt = $.extend(this.opt, op);
    this.init();
};
moneyRank.prototype = {
    init: function(){
        var that = this;
        var req = ds(that.opt.url, that.opt.data);
        req.done(function(data){
            if(data.retcode != 0){
                return;
            }
            that.makeDom(data.result.content);
        })
    },
    makeDom: function(arr){
        var that = this;
        var html = '';
        var maxLength = 0;

        if(that.opt.length ==  0){
            maxLength = arr.length;
        }else{
            maxLength = that.opt.length;
        }
        // class="pink"
        for(var i = 0; i < maxLength; i++){
            html += compile(that.opt.tpl, {
                rank: i+1,
                nickName: arr[i].nickName,
                num: arr[i].num
            })
        }

        $(that.opt.wrap).html(html);
        $(that.opt.wrap).children('li:lt(3)').addClass('pink');
    }
};
exports.rank = moneyRank;