/**
 * Created by yj.huang on 14-9-30.
 */
var home = angular.module('Home', ['ngRoute']);
home.config(['$routeProvider',
    function ($routeProvider) {

        $routeProvider
            .when(
            '/about', {
                templateUrl: 'views/about.html',
                reloadOnSearch: false
            }).when(
            '/test', {
                templateUrl: 'views/test.html',
                reloadOnSearch: false
            });
    }]);