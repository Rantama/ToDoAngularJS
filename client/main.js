var todo = angular.module("todoApp", ['ui.router', 'ngResource']);

angular.module('todoApp').config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('addingNote',  {
      url: '/addingNote',
      templateUrl: 'index.html',
      controller: 'addingNoteCtrl'
    })

    .state("alNotes", {
      url:'/alNotes',
      templateUrl: 'app/alNotes.html',
      controller: 'alNotesCtrl'

    })
    .state('edit', {
      url: '/edit',
      templateUrl: 'index.html',
      controller:'editCtrl'
    });
})
