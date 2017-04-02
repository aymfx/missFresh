app.factory('mineInfoData',['$http',function(http){
	//取得local数据
	var logininofo=Save('user-inofo');
	
	return {
		getInfo:function(){
			return logininofo;
		}
	}
	
}])
