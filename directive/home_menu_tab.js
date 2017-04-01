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
				<span class="tab-cartNum" ng-show="(url==='#/cart')&&num">{{num}}</span>
			</a>`,
		scope:{
			url:"=url",
			select:'=active',
			icon:"=icon",
			name:"=name",
			num:"=totallist"
		},
		replace:true
		
	}
}])
