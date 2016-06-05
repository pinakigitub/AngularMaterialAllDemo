

(
function () {
    angular.module("MyApp").controller("LoginnCtrl", ["$scope", "$rootScope", "$http", "$filter", "$mdDialog", "$mdMedia", "$state", function ($scope, $rootScope, $http, $filter, $mdDialog, $mdMedia, $state) {
        $scope.User = {};
        $scope.isSuccessfullyloggedIn = false;
        $scope.Signin=function(event)
        {
            $scope.isSuccessfullyloggedIn = true;
            $scope.showAlert(event);
           
        }
        $scope.showAlert = function (ev) {
        
            $mdDialog.show(
              $mdDialog.alert()
                .parent(angular.element(document.querySelector('#popupContainer')))
                .clickOutsideToClose(true)
                .title('')
                .textContent('Login Successfull')
                .ariaLabel('Alert Dialog Demo')
                .ok('Got it!')
                .targetEvent($state.go("home"))
            );
            
        };
    }]);

}())