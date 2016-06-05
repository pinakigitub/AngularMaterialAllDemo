(
function () {
    angular.module("MyApp").controller("HomeCtrl", ["$scope", "$rootScope", "$http", "$filter", "$state", function ($scope, $rootScope, $http, $filter, $state) {

        $scope.login = function () {
            // start loading
            $scope.loginLoading = true;
            
        }

    }]);

}())