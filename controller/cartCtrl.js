app.controller('cartCtrl', ['$scope',"pros", function(scope,pros){
		
		scope.products=pros.getCart();
		
		
}])