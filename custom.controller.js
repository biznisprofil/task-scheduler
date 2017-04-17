(function () {
  var app = angular.module('directivesModule', []);
  app.controller('TaskController', ['$scope', function ($scope) {

    $scope.tasks = [
      {
        name: 'Clean',
        description: 'Clean all machines'
      },
      {
        name: 'Oil',
        description: 'Put oil on spare parts'
      },
      {
        name: 'Check',
        description: 'Check all items'
      }
    ];
  }])
}());
