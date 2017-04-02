app.factory('pros',['$http','$rootScope',function(http,root){
	
	//防止再次刷新
	var coreData = null;
		
	var coreCart=Save("cartData");
	
	
	// 拿到num
	
	for (var key in coreCart) {
		root.totallist+=coreCart[key].num;
	}
	
		
	//发送请求拿到数据
		function getData(scope){
			http({
				url:'http://as-vip.missfresh.cn/v2/product/home/index?device_id=622b4131593f18679751dd33379bc36f&env=web&platform=web&tdk=14909310892294005035&uuid=622b4131593f18679751dd33379bc36f&version=2.3.6',
				method:'post',
				data:{
					lat:"30.31686",
					lng:"120.27371"
				}
			}).success(function(data){
				  console.log("我拿到了数据了",data.product_list)
				  data.product_list.forEach(function(x){
				  			x.num=0;
			  			for (var key in coreCart) {
				  		if(coreCart[key].name===x.name){
				  				x.num=coreCart[key].num;		
				  			}
				  		}
				  })
				  
				  coreData=data.product_list;
				  scope.products=coreData;
				  
			})
			
			
			
		}
		return{
				getData:getData,
				freshData:function(){
					console.log(coreData);
					return coreData;
				},
				getCart:function(){
					var arr=[];
					console.log(coreCart);
					for (var key in coreCart) {
						arr.push(coreCart[key]);
					}
					return arr;
				},
				setCartData:function(name,value){
					coreCart[name]=value;
					if(value.num==0){
						for (let i=0;i<coreData.length;i++) {
							for (var key in coreCart) {
								if(coreData[i].name==key){
									coreData[i].num=coreCart[key].num;
								}
								
							}
								
								
						}
						delete coreCart[name];
					}
					Save("cartData",coreCart)
				}
				
		}
			
}])






