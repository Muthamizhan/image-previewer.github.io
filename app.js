/*use strict*/

var app = angular.module('StarterApp', ['ngMaterial']);

 app.controller('AppCtrl', ['$scope', '$mdSidenav',
    function($scope, $mdSidenav) {
        $scope.toggleSidenav = function(menuId) {
            $mdSidenav(menuId).toggle();
        };


        this.tab = 1;
        this.selectTab = function(setTab) {
            this.tab = setTab;
            setTimeout(function(){ $mdSidenav('left').close(); },300);
        };
        this.isSelected = function(checkTab) {
            return this.tab === checkTab;
        };


    }
]);