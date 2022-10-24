var myApp = angular.module('myApp', []);

myApp.controller('jsonCtrl', function($scope, $http) {
    $http.get('employees.json').success(function(data) {
        $scope.employees = data;
    });

    $scope.addEmp = function() {
        $scope.employees.push({name: $scope.empName, city: $scope.empCity, sdt: $scope.empsdt});
    }
    $scope.reversedMessage = function() {
        return $scope.empName.split("").reverse().join("");
    }
});