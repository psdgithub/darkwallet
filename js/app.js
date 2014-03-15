'use strict';


// Declare app level module which depends on filters, and services
angular.module('DarkWallet', [
  'ngRoute', 'mm.foundation',
  'ngProgress', 'ngAnimate', 'toaster',
  'DarkWallet.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/dashboard', {templateUrl: 'partials/dashboard.html', controller: 'DashboardCtrl'});
  $routeProvider.when('/wallet', {templateUrl: 'partials/wallet.html', controller: 'HistoryCtrl'});
  $routeProvider.when('/contacts', {templateUrl: 'partials/contacts.html', controller: 'ContactsCtrl'});
  $routeProvider.when('/lobby', {templateUrl: 'partials/lobby.html', controller: 'LobbyCtrl'});
  $routeProvider.when('/new_wallet', {templateUrl: 'partials/new_wallet.html', controller: 'NewWalletCtrl'});
  $routeProvider.when('/popup', {templateUrl: 'partials/popup.html', controller: 'PopupCtrl'});
  $routeProvider.when('/send', {templateUrl: 'partials/send.html', controller: 'WalletSendCtrl'});
  $routeProvider.when('/settings', {templateUrl: 'partials/settings.html', controller: 'WalletSettingsCtrl'});
  $routeProvider.otherwise({redirectTo: '/dashboard'});
}]);
