'use strict';

angular.module('myApp.viewDemo', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/viewDemo', {
    templateUrl: 'viewDemo/viewDemo.html',
    controller: 'viewDemoCtrl'
  });
}])

.controller('viewDemoCtrl', [function() {

}]);
