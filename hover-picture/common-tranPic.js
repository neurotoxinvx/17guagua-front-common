/*
author: Neurotoxin
E-mail: wanghongyu@17guagua.com
desc: 图片hover效果的变换
*/
exports.tranPic = {
	config: {
		obj: ".wrap", /*外层容器*/
		picture: ["./img/1.jpg","./img/2.jpg","./img/3.jpg","./img/4.jpg"], /*图片路径*/
		word: ["我是第一个","我是第二个","我是第三个","我是第四个"], /*标题的文字，目前只支持显示1行文字，如果需要显示2行或者更多，请自行修改li h3中的height及margin-top*/
		xSize: 65, /*hover上的时候图片放大比例*/
		posi: ["left:0;top:0;","right:0;top:0;","left:0;bottom:0;","right:0;bottom:0;"] /*4张图的定位，请勿修改*/
	},
	init: function(){
		var that = this;

		that.htmlBuild(that.config);
	},
	htmlBuild: function(par){
		var that = this;

		var tpl = '';

		for(var i = 0;i < 4; i++){
			tpl += '<li class="word" style="width:50%;height:50%;position:absolute;transition: all 0.5s cubic-bezier(0.77, 0, 0.175, 1) 0s;'+
				  'background: url('+ par.picture[i] +') no-repeat center center;'+ par.posi[i] +'"><h3>'+ par.word[i] + '</h3></li>';
		}
		$(par.obj).html(tpl);

		that.hoverFun(that.config);
	},
	hoverFun: function(par){
		var max = par.xSize,
			min = 100 - par.xSize;

		$(par.obj).find('li').hover(function(){
			var _this = $(this),
				_li = $('li'),
				_this_num = $(this).index();

			switch(_this_num){
				case 0:
					_this.css({
						'width': max + '%',
						'height': max + '%',
						'z-index': 9
					});

					_li.eq(1).css({
						'width': min + '%',
						'height': max +'%',
						'z-index': 8
					});

					_li.eq(2).css({
						'width': max + '%',
						'height': min + '%',
						'z-index': 8
					});

					_li.eq(3).css({
						'width': min + '%',
						'height': min + '%',
						'z-index': 8
					});

				break;

				case 1:
					_this.css({
						'width': max + '%',
						'height': max + '%',
						'z-index': 9
					});

					_li.eq(0).css({
						'width': min + '%',
						'height': max + '%',
						'z-index': 8
					});

					_li.eq(2).css({
						'width': min + '%',
						'height': min + '%',
						'z-index': 8
					});

					_li.eq(3).css({
						'width': max + '%',
						'height': min + '%',
						'z-index': 8
					});

				break;	

				case 2:
					_this.css({
						'width': max + '%',
						'height': max + '%',
						'z-index': 9
					});

					_li.eq(0).css({
						'width': max + '%',
						'height': min + '%',
						'z-index': 8
					});

					_li.eq(1).css({
						'width': min + '%',
						'height': min + '%',
						'z-index': 8
					});

					_li.eq(3).css({
						'width': min + '%',
						'height': max + '%',
						'z-index': 8
					});

				break;	

				case 3:
					_this.css({
						'width': max + '%',
						'height': max + '%',
						'z-index': 9
					});

					_li.eq(0).css({
						'width': min + '%',
						'height': min + '%',
						'z-index': 8
					});

					_li.eq(1).css({
						'width': max + '%',
						'height': min + '%',
						'z-index': 8
					});

					_li.eq(2).css({
						'width': min + '%',
						'height': max + '%',
						'z-index': 8
					});

				break;	
			}

			_this.find('h3').addClass('show');
		},function(){
			$(par.obj).find('li').css({
				'width': '50%',
				'height': '50%',
				'z-index': 8
			});

			$(par.obj).find('h3').removeClass('show');
		});
	}
};