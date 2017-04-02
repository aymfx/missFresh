app.directive('lySinglecart',['pros',"$rootScope",function(pros,root){
	return {
				restrict:'E',
				link:function(scope,ele,attr){
					scope.select=false;
					
					scope.plus=function(){
						scope.product.num++;
						root.totallist+=1;
						pros.setCartData(scope.product.name,scope.product);
						
					}
					
					scope.minus=function(){
						scope.product.num--;
						root.totallist-=1;
						console.log(scope.product.num);
						//移除购物车节点
						if(scope.product.num==0 && scope.flag){
							ele[0].remove();
						}
						pros.setCartData(scope.product.name,scope.product);
					}
					
					
					
					
				},
				templateUrl:'/view/singleCart.html',
				scope:{
					product:"=product",
					flag:"@flag"
				},
				replace:true
				
			}
	
}])
