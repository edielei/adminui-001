$(function(){
	var w=$(window),m=$('#menus').find('.m'),ms=$('#all .left'),mr=$('#all .right'),menuleft=$('#nav,#menus'),nav=$('#menus').find('h3'),tg=$('#tg'),tgall=$('#all .left,#all .right,#nav,#menus,#tg');
	
	rw(w,ms,mr,nav,m);
	w.resize(function(){rw(w,ms,mr,nav,m);});
	
	//折叠菜单
	$('#nav div').click(function(){
		menuleft.hide();
		ms.width(24);
		mr.css('left','34px');
		mr.add('#mkj').width(w.width()-40);
		tg.show();
	});
	tg.find('div').click(function(){
		tgall.removeAttr('style');
		var l=ms.outerWidth(true)+14;
		mr.add('#mkj').width(w.width()-l);
	});
	
	
	//左侧菜单
	nav.slice(0,-1).click(function(){
		var a=$(this).next('.m'),b=$(this).find('div');
		if(a.is(':visible')){			
			a.slideUp(0).nextAll('.m:first').slideDown(0);
			b.removeClass('s');	//当前的图标减少变加号
			a.nextAll('h3:first').find('div').addClass('s');
		}else{	//如果没有显示
			nav.find('div.s').removeClass('s');	//减号变加号
			b.addClass('s');	//加号变减号
			a.slideDown(0).siblings('.m').slideUp(0);
		}
	});
	//最后一个菜单项特殊处理
	nav.last().click(function(){
		var a=$(this).next('.m');
		if(a.is(':visible')){
			$(this).prevAll('h3:first').click();
		}else{
			nav.find('div.s').removeClass('s');
			$(this).find('div').addClass('s');
			a.slideDown(0).siblings('.m').slideUp(0);
		}
	});
});

//Dom加载及窗口发生变化都执行
function rw(a,b,c,d,e){
	var f=a.height()-64;
	$('#center').height(f);	//设置中间区域高度
	var g=b.outerWidth(true)+14;	//14,分别是左菜单的两个距离2*4px+右边区域的4px+自身边框2px
	c.add('#mkj').width(a.width()-g);	//设置中间右边内容区域宽度
	mm(d,e,b);
}

//设置二级菜单区域高度
function mm(a,b,c){
	var d=a.outerHeight(true) * (a.length+1);	//获取所有菜单h3的总高度，+1是包括主要菜单的高度
	b.height(c.height()-d);	//设置二级菜单的区域高度
}