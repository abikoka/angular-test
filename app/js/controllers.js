'use strict';

/* Controllers */

var phonecatControllers = angular.module('phonecatControllers', []);

phonecatControllers.controller('PhoneListCtrl', ['$scope', '$http',
  function PhoneListCtrl($scope, $http) {
    $http.get('phones/phones.json').success(function(data) {
      $scope.phones = data;
    });

    $scope.orderProp = 'age';
  }]);

phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', '$http', '$translate',
  function($scope, $routeParams, $http, $translate) {
    $http.get('locale/'+ $translate.uses() + '/phones/' + $routeParams.phoneId + '.json').success(function(data) {
      $scope.phone = data;
    });
  }]);
