// 'use strict';
// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('HsinchuIS', ['ionic', 'ngRoute'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
.controller('MainController', function($scope, $route, $routeParams, $location) {
    // init
    $scope.$route = $route;
    $scope.$location = $location;
    $scope.$routeParams = $routeParams;
    $scope.page = 'select_lang';
    $scope.map = undefined;

    $scope.list = function(){
      $scope.page = 'near_search';
    }

    $scope.set_page = function(page){
      $scope.page = page;
    }

    window.create_map = $scope.create_map=function(){
      var mapOptions = {
          center: new google.maps.LatLng(43.07493,-89.381388),
          zoom: 16,
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          streetViewControl: false,
          minZoom: 8,
          maxZoom: 8,
          zoom: 8,
          zoomControl: false,
          mapTypeControl: false
      };
      if(!$scope.map){
        var google_map_container=$('<div></div>').css({
          width: '100%',
          height: '100%'
        });
        var map = new google.maps.Map(google_map_container[0], mapOptions);
        $scope.map = google_map_container;
        $scope.map.map = map;
      }
      return $scope.map;
    }
})
;
