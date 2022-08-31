var app = angular.module("myapp", []);
app.controller("myctrl", function ($scope) {
    $scope.fname = "";
    $scope.mail = "";
    $scope.web = "";
    $scope.image = "";

    $scope.details = {
        info: []
    };

    $scope.addValues = function() {
        $scope.details.info.push({fn: angular.copy($scope.fname), ml: angular.copy($scope.mail),
             wb: angular.copy($scope.web), imag: angular.copy($scope.image)});

        $scope.fname = "";
        $scope.mail = "";
        $scope.web = "";
        $scope.image = "";

    };

});