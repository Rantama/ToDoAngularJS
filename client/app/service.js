angular.module('todoApp')
.constant("notesUrl", "http://localhost:3000/notes/")
.config(function($httpProvider) {
    $httpProvider.defaults.withCredentials = true;
})

.service("noteService", function($resource, noteUrl){
  var notesResource = $resource(noteUrl + ":id", {
  			id: "@_id"
}
});


  var notes = resource.query();
  var deleteNote =function(note) {
    note.$delete().then(function() {
      notes.splice(notes.indexOf(note),1);
    });
  },

  var createNote = function(note) {
    new resource(note).$save()then(function(newNote){
      notes.push(newNote);
      var editNote = null;

    })
  }

  var updateNote =function() {
    editNote.$save().then(function(note) {
      newNote.editDate = new Date();
       notes[notes.indexOf(newNote)] = newNote;
       $state.go('addingNote');
     })
   },
   setEditNote: function(note){

     editNote =note;

     $state.go('edit');
   },
   getEditNote: function(){
     return editNote;
   },
   cancelUpdate: function(){
     editNote = null;
     $state.go('addingNote');

   }

 };
});
