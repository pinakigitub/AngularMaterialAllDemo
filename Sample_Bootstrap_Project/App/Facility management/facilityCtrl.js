(
function () {
    angular.module("MyApp").controller("FacilityCtrl", ["$scope", "$rootScope", "$http", "$filter", "$state", "$timeout", function ($scope, $rootScope, $http, $filter, $state, $timeout) {
        $scope.user = {};
        
        $scope.user.status = true;

        $scope.typeList = [
    { id: 1, name: 'Bob' },
    { id: 2, name: 'Alice' },
    { id: 3, name: 'Steve' }
        ];
        $scope.selectedUser = { id: 1, name: 'Bob' };
        $scope.items = [
   { id: 1, name: 'Bob' },
   { id: 2, name: 'Alice' },
   { id: 3, name: 'Steve' }];
        
        $scope.selected = [1];
        $scope.toggle = function (item, list) {
            var idx = list.indexOf(item);
            if (idx > -1) {
                list.splice(idx, 1);
            }
            else {
                list.push(item);
            }
        };
        $scope.exists = function (item, list) {
            return list.indexOf(item) > -1;
        };
        $scope.isIndeterminate = function () {
            return ($scope.selected.length !== 0 &&
                $scope.selected.length !== $scope.items.length);
        };
        $scope.isChecked = function () {
            return $scope.selected.length === $scope.items.length;
        };
        $scope.toggleAll = function () {
            if ($scope.selected.length === $scope.items.length) {
                $scope.selected = [];
            } else if ($scope.selected.length === 0 || $scope.selected.length > 0) {
                $scope.selected = $scope.items.slice(0);
            }
        };

        $scope.myDate = new Date();
        $scope.minDate = new Date(
            $scope.myDate.getFullYear(),
            $scope.myDate.getMonth() - 2,
            $scope.myDate.getDate());
        $scope.maxDate = new Date(
            $scope.myDate.getFullYear(),
            $scope.myDate.getMonth() + 2,
            $scope.myDate.getDate());
        $scope.onlyWeekendsPredicate = function (date) {
            var day = date.getDay();
            return day === 0 || day === 6;
        }

        $scope.pinaki = "Save to DB";

        $scope.startLoading=function()
        {
            $scope.loginLoading = true;
            $timeout(function () {
                $scope.loginLoading = false;
            }, 3000);
        }

    }]);

}())