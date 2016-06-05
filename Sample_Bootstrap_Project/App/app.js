/// <reference path="Facility management/FacilityList.html" />
/// <reference path="Loginn/Loginn.html" />




(
function () {
    var app = angular.module("MyApp", ["ui.router", "ngMaterial", "ngAnimate", "angular-ladda", "ngMessages"])

    //angular.module("MyApp").config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {
        
    //    $stateProvider.state('loginn',
    //        {
    //            url: "/",
    //            templateUrl: "/Loginn/Loginn.html",
    //            controller: "LoginnCtrl" 
    //        }
    //        );

    //}]);
    app.config(function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("/");
        $stateProvider.state('home', {
            url: "/",
            templateUrl: "/Sample_Bootstrap_Project/App/Home/home.html",
            controller: "HomeCtrl"
        });
      
        
        $stateProvider.state('facility', {
            url: "/Facility",
            templateUrl: "/Sample_Bootstrap_Project/App/Facility management/FacilityList.html",
            controller: "FacilityCtrl"
        });
        $stateProvider.state('loginn', {
            url: "/Loginn",
            templateUrl: "/Sample_Bootstrap_Project/App/Loginn/Loginn.html",
            controller: "LoginnCtrl"
        });


    });

    app.directive('disableNgAnimate', ['$animate', function ($animate) {
        return {
            restrict: 'A',
            link: function (scope, element) {
                $animate.enabled(false, element);
            }
        };
    }]);
}())