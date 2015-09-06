app.controller("toolsController", ["$scope", function($scope){

	$scope.text = "default text"

	$scope.projectClick = function($index){
		$scope.text = "clicked";

	};

}]);