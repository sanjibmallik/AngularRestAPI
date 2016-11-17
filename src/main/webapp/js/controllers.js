'use strict';

/* Controllers */


var app = angular.module('hotNgApp.controllers', []);

app.run(function ($rootScope, $templateCache) {
    $rootScope.$on('$viewContentLoaded', function () {
        $templateCache.removeAll();
    });
});


app.controller('MyCtrl1', ['$scope', 'UserFactory', function ($scope, UserFactory) {
    $scope.bla = 'bla from controller';
    UserFactory.get({}, function (userFactory) {
        $scope.firstname = userFactory.firstName;
        $scope.lastName = userFactory.lastName;
        $scope.fullName = firstName+" "+lastName;
    })
}]);
//USER LOGIN CONTROLLER
app.controller('loginCtrl', ['$scope', 'UserFactory', function ($scope, UserFactory) {
    $scope.userLoginFormSubmit =function(){
        alert("inside controller");
        console.log($scope.userLoginForm);
    }

}]);
