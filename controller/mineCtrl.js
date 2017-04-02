app.controller('mineCtrl', ['$scope', 'mineInfoData', '$ionicModal',function(scope,infoData,ionicModal){
	
	//取缓存的用户数据
	var user=infoData.getInfo();
	
	scope.login=false;
	
	//进行弹框显示
	ionicModal.fromTemplateUrl('/view/infomodal.html', {
	    scope: scope,
	    animation: 'slide-in-up'
	}).then(function(modal) {
	    scope.modal = modal;
	    if(!user.userId) {
	    	//用户未登录弹出登录框
	 		scope.modal.show();
	    }
	});
	
	//点击让登录框出来
	scope.show=function(){
		scope.modal.show();
	}
		
		
	
}])