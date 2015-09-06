app.controller("toolsController", ["$scope",

	function($scope){

		$scope.text = "ERIC ZHU";

		$scope.show = function(data){
			$scope.text = data;
			$(".section").removeClass("show");
			$("." + data +"-container").addClass("show");
		};

	}
]);