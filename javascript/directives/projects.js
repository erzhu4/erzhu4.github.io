app.directive('projects', function() {
  return {
    restrict: 'E',
    scope: {
      info: '='
    },
    templateUrl: "../views/project.html"
  };
});