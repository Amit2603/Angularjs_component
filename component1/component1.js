angular.module('app').component('componentOne',{
    templateUrl : "component1/component1.html",
    controller:function($scope)
    {
      $scope.click=0;
      $scope.change=function()
      {
        $scope.click+=1;
        $scope.title='ypu have clicked'+$scope.click;
      }
    },
    controllerAs:'vm'

});