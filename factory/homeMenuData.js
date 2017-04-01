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
			name:'品牌',
			url:'#/brand',
			active:false,
			icon:'ion-ios-flame-outline'
		},
		{
			name:'红包',
			url:'#/money',
			active:false,
			icon:'ion-ios-briefcase-outline'
		},
		{
			name:'购物车',
			url:'#/cart',
			active:false,
			icon:'ion-ios-cart-outline',
			totalnum:0
		},
		{
			name:'我的',
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



