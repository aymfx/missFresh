/*			<a class="tab-item active" href="#/home">
				<i class="icon ion-ios-home-outline "></i> 首页
			</a>
			<a class="tab-item" href="#/brand">
				<i class="icon ion-ios-flame-outline" ></i> 品牌团
			</a>
			<a class="tab-item" href="#/money">
				<i class="icon ion-ios-briefcase-outline"></i> 红包
			</a>
			<a class="tab-item" href="#/cart">
				<i class="icon ion-ios-cart-outline"></i> 购物车
			</a>
			<a class="tab-item" href="#/mine">
				<i class="icon ion-social-reddit-outline"></i> 我的
			</a>*/
			
//创建一个点击事件进行切换
app.directive('lyMenutab',['$rootScope','$http','homeMenuData',function(root,http,homedata){
	return {
		restrict:'E',
		link:function(scope,ele,attr){
			  str=location.hash;
			  if(str==scope.url){
			  	   scope.select=true;
			  	 
			  }
			  ele.bind("click",function(){
			  		scope.$apply(function(){
			  			homedata.rest();
			  			scope.select=true;
			  		})
			  })
		},
		template:`<a class="tab-item "  ng-class="{active:select}" ng-href={{url}}>
				<i class="icon {{icon}}"></i> {{name}}
			</a>`,
		scope:{
			url:"=url",
			select:'=active',
			icon:"=icon",
			name:"=name"
			
		},
		replace:true
		
	}
}])
