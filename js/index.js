//创建全局的方法
var app = angular.module('fruit', ['ionic','ngRoute']); //依赖注入 ionic这个js模块

//全局变量控制

app.run(['$rootScope','homeMenuData',function(root,menudata){
	
	//拿到菜单的menu的值
	root.menuItems=menudata.all;
	
}])






//进行路由配置
app.config(['$routeProvider',function(route){
	route.
	when('/home',{
		templateUrl:'/view/home.html',
		controller:'homeCtrl'
	}).
	when('/brand',{
		templateUrl:'/view/brand.html',
		controller:'brandCtrl'
	}).
	when('/money',{
		templateUrl:'/view/money.html',
		controller:'moneyCtrl'
	}).
	when('/cart',{
		templateUrl:'/view/cart.html',
		controller:'cartCtrl'
	}).
	when('/mine',{
		templateUrl:'/view/mine.html',
		controller:'mineCtrl'
	}).
	otherwise({
		redirectTo:'/home'
	})
}])




