angular.module('todoApp', [])
.controller('alNotesCtrl',function($scope,  Note) {

  $scope.notes = Note.getNotes;

  $scope.edit = Note.setEditNote;

  $scope.deleteNote = Note.deleteNote;
})
.controller('addingNoteCtrl', function($scope, $state, $stateParams, Note) {

    $scope.save = Note.addNote;

    $scope.cancel = function(){
      $state.go('list');
    }
  })
.controller('editCtrl', function($scope, $state,  $stateParams, Note) {

  $scope.cancel= Note.cancelUpdate;

  $scope.note = Note.getEditNote();

  $scope.save = Note.update;

});
