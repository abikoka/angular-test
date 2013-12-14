'use strict';

/* App Module */

var phonecatApp = angular.module('phonecatApp', [
  'ngRoute',
  'phonecatControllers',
  'phonecatFilters',
  'pascalprecht.translate'
]);

phonecatApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/phones', {
        templateUrl: 'partials/phone-list.html',
        controller: 'PhoneListCtrl'
      }).
      when('/phones/:phoneId', {
        templateUrl: 'partials/phone-detail.html',
        controller: 'PhoneDetailCtrl'
      }).
      otherwise({
        redirectTo: '/phones'
      });
  }]);

phonecatApp.config(['$translateProvider', function ($translateProvider) {
  $translateProvider.translations('en', {
    SPEC_AVAILABILITY_AND_NETWORKS: 'Availabity and networks',
    SPEC_AVAILABILITY: 'Availability',
    SPEC_BATTERY: 'Battery',
    SPEC_BATTERY_TYPE: 'Battery',
    SPEC_BATTERY_TALK_TIME: 'Talk Time',
    SPEC_BATTERY_STANDBY_TIME_MAX: 'Standby time (max)',
    SPEC_STORAGE_AND_MEMORY: 'Storage and Memory',
    SPEC_STORAGE_AND_MEMORY_RAM: 'RAM',
    SPEC_STORAGE_AND_MEMORY_INTERNAL_STORAGE: 'Internal Storage',
    SPEC_CONNECTIVITY: 'Connectivity',
    SPEC_CONNECTIVITY_NETWORK_SUPPORT: 'Network Support',
    SPEC_CONNECTIVITY_WiFi: 'WiFi',
    SPEC_CONNECTIVITY_BLUETOOTH: 'Bluetooth',
    SPEC_CONNECTIVITY_INFRARED: 'Infrared',
    SPEC_CONNECTIVITY_GPS: 'GPS',
    SPEC_ANDROID: 'Android',
    SPEC_ANDROID_OS_VERSION: 'OS Version',
    SPEC_ANDROID_UI: 'UI',
    SPEC_SIZE_AND_WEIGHT: 'Size and Weight',
    SPEC_SIZE_AND_WEIGHT_DIMENSIONS: 'Dimensions',
    SPEC_SIZE_AND_WEIGHT_WEIGHT: 'Weight',
    SPEC_DISPLAY: 'Display',
    SPEC_DISPLAY_SCREEN_SIZE: 'Screen size',
    SPEC_DISPLAY_SCREEN_RESOLUTION: 'Screen resolution',
    SPEC_DISPLAY_TOUCH_SCREEN: 'Touch screen',
    SPEC_HARDWARE: 'Hardware',
    SPEC_HARDWARE_CPU: 'CPU',
    SPEC_HARDWARE_USB: 'USB',
    SPEC_HARDWARE_AUDIO_HEADPHONE_JACK: 'Audio / headphone jack',
    SPEC_HARDWARE_FM_RADIO: 'FM Radio',
    SPEC_HARDWARE_ACCELEROMETER: 'Accelerometer',
    CAMERA: 'Camera',
    CAMERA_PRIMARY: 'Primary',
    CAMERA_FEATURES: 'Features',
    ADDITIONAL_FEATURES: 'Additional Features'
  });
  $translateProvider.translations('jp', {
    SPEC_AVAILABILITY_AND_NETWORKS: '可動性とネットワーク',
    SPEC_AVAILABILITY: '利用形態リスト',
    SPEC_BATTERY: 'バッテリ',
    SPEC_BATTERY_TYPE: 'バッテリ種別',
    SPEC_BATTERY_TALK_TIME: '連続通話時間',
    SPEC_BATTERY_STANDBY_TIME_MAX: '待受時間 (最大)',
    SPEC_STORAGE_AND_MEMORY: 'ストレージ/メモリ',
    SPEC_STORAGE_AND_MEMORY_RAM: 'RAM',
    SPEC_STORAGE_AND_MEMORY_INTERNAL_STORAGE: '内部ストレージ',
    SPEC_CONNECTIVITY: 'ネットワーク接続',
    SPEC_CONNECTIVITY_NETWORK_SUPPORT: 'サポート済みネットワーク',
    SPEC_CONNECTIVITY_WiFi: 'WiFi',
    SPEC_CONNECTIVITY_BLUETOOTH: 'Bluetooth',
    SPEC_CONNECTIVITY_INFRARED: '赤外線',
    SPEC_CONNECTIVITY_GPS: 'GPS',
    SPEC_ANDROID: 'Android',
    SPEC_ANDROID_OS_VERSION: 'OS バージョン',
    SPEC_ANDROID_UI: 'UI',
    SPEC_SIZE_AND_WEIGHT: 'サイズと重さ',
    SPEC_SIZE_AND_WEIGHT_DIMENSIONS: 'サイズ',
    SPEC_SIZE_AND_WEIGHT_WEIGHT: '重さ',
    SPEC_DISPLAY: 'ディスプレイサイズ',
    SPEC_DISPLAY_SCREEN_SIZE: 'スクリーンサイズ',
    SPEC_DISPLAY_SCREEN_RESOLUTION: '解像度',
    SPEC_DISPLAY_TOUCH_SCREEN: 'タッチスクリーン',
    SPEC_HARDWARE: 'スペック',
    SPEC_HARDWARE_CPU: 'CPU',
    SPEC_HARDWARE_USB: 'USB',
    SPEC_HARDWARE_AUDIO_HEADPHONE_JACK: 'イヤホン / イヤホンジャック',
    SPEC_HARDWARE_FM_RADIO: 'FM ラジオ',
    SPEC_HARDWARE_ACCELEROMETER: '加速度センサ',
    SPEC_CAMERA: 'カメラ',
    SPEC_CAMERA_PRIMARY: 'メインカメラ',
    SPEC_CAMERA_FEATURES: '画素数',
    SPEC_ADDITIONAL_FEATURES: '拡張性'
  });
  $translateProvider.preferredLanguage('en');
}]);

phonecatApp.controller('Ctrl', ['$scope', '$translate', '$controller', function ($scope, $translate, $controller) {
  $scope.changeLanguage = function (key) {
    $translate.uses(key);
    var ctrl = $controller('PhoneDetailCtrl', {$scope: $scope});
  };
}]);
