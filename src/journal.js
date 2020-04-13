// Busines Logic

export function journal () {

function BlogPosts() {
  this.titles = [];
  this.bodies = [];
}

this.titles.push("#title")
this.bodies.push("#body")


}


// UI Logic (main.js)

$(document).ready(function() {
  $("form#journal-form").submit(function(event) {
    event.preventDefault();

    var inputtedTitles = $("#title input['text]").val();
    var inputtedBody = $("#body input['text']").val();
    var 
  
  });
});


// output




