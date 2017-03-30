//创建一个数据工厂，关于menu的
app.factory('homeMenuData',function(){
	var list=[
		{
			name:'首页',
			url:'#/home',
			active:false,
			icon:'ion-ios-home-outline'
		},
		{
			name:'首页',
			url:'#/brand',
			active:false,
			icon:'ion-ios-flame-outline'
		},
		{
			name:'首页',
			url:'#/money',
			active:false,
			icon:'ion-ios-briefcase-outline'
		},
		{
			name:'首页',
			url:'#/cart',
			active:false,
			icon:'ion-ios-cart-outline'
		},
		{
			name:'首页',
			url:'#/mine',
			active:false,
			icon:'ion-social-reddit-outline'
		},
	];
	
	return {
		all:list,
		rest:function(){
			list.forEach(function(x){
				x.active=false;
			})
			
		}
	}
})
