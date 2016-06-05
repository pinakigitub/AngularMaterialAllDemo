(
function () {
    angular.module("MyApp").controller("MyCTRL", ["$scope", "$rootScope", "$http", "$filter", "$state", function ($scope, $rootScope, $http, $filter, $state) {
        
        $scope.Loginn = function () {
            $state.go("loginn");
        }

    }]);

}())