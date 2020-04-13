// User Interface Logic

import { journal } from './journal';

$(document).ready(function() {
  $("form#journal-form").submit(function(event) {
    event.preventDefault();
    var inputtedTitles = $("input#title").val();
    var inputtedBody = $("input#body").val();
    var newEntry = new Entry(inputtedTitles, inputtedBody); 


    journalEntry.addEntry(newEntry);
    
    displayEntryDetails(journalEntry);

    console.log(newEntry);

   

  });

});
