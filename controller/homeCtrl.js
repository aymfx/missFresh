app.controller('homeCtrl', ['$scope','pros',function(scope,pros){
		var list=pros.freshData();	
		console.log('wowowowowoo');
		if(list){
			scope.products=list;
			return;
		}
		pros.getData(scope);
	
}])