/**
 * @ngdoc function
 * @name adminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the adminApp
 */
angular.module('adminApp')
  .controller('MainCtrl', function ($scope,$http) {

    $scope.data = '';
    $scope.time = 0;
    $("#table").css("display","none");

    $scope.search=function(){
      var http = $http(
        {
          method: 'get',
          url: 'source/search.php?search='+$scope.data+'&type='+$scope.select
        }
      ).then(
        function successCallback(response) {
          $("#table").css("display","");
          $("#table").html(response.data);
          if($scope.time==0){
            $('#table').DataTable(
              {
                "paging":   false,
                "ordering": true,
                "info":     false,
                "search": false,
                "filter": false
              }
            );
          }
          $scope.time++;

        },
        function errorCallback(response) {

        }
      );
    }
  }
);
