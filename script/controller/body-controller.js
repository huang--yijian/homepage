/**
 * Created by yj.huang on 14-9-30.
 */
home.controller('BodyController', function ($scope, $compile, $location) {
    $scope.$on(
        "$routeChangeSuccess",
        function () {
            $scope.currentPage = $location.path();
        }
    );

    $scope.init = function() {
        $scope.currentPage = $location.path();
    }

    $scope.init();
});