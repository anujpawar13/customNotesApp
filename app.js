console.log('Welcome to EveryNotes');

// adding a text when someone clicks add note

let addBtn = document.getElementById('addBtn');
addBtn.addEventListener("click", function (e) {
    let addTxt = document.getElementById('addTxt');
    let notes = localStorage.getItem("notes");
    let notesObj;
    if (notes == null) {
        console.log('No Notes');
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addTxt.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    // to save these notes in local storage as a string 

    addTxt.value = "";
    console.log(notesObj);
    // to change the value to blank when someone clicks on add notes button

    // after this process, when notes are written and 'add notes' btn is presses, then this value gets stored in local storage
    showNotes();
});

function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        console.log('No Notes');
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function (element, index) {
        html += `
        <div class="card" style="width: 20rem;">
      <div class="card-body">
        <h5 class="card-title">Note ${index + 1} title</h5>
        <p class="card-text">${element}</p>
        <button href="#" class="btn btn-primary">Delete Note</button>
      </div>
      </div>`;
        // a new card is created and gets append in html
    });
    let notesElm = document.getElementById("notes");
    if (notes.length != 0) {
        notesElm.innerHTML = html;
    }
}