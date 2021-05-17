console.log('Welcome to EveryNotes');
showNotes();

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


// this functions show elements in localStorage

function showNotes() {
    let notes = localStorage.getItem("notes");
    let notesObj;
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
        <button id="${index}"onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
      </div>
      </div>`;
        // a new card is created and gets append in html
    });
    let notesElm = document.getElementById("notes");
    if (notesObj.length != 0) {
        notesElm.innerHTML = html;
    }
    else {
        notesElm.innerHTML = `<h5 style= "display: flex; align-items: center; justify-content: center;"> No notes to show. Add a new note! </h5>`;
    }
}


// function to delete note

function deleteNote(index) {
    let notes = localStorage.getItem("notes");
    let notesObj;
    if (notes == null) {
        console.log('No Notes');
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }

    notesObj.splice(index, 1);
    // Array.splice(start: number, deleteCount?: number). Removes elements from an array by taking a start value and number of elements to be removed(in this case it is one element that needs to be removed when we click on its index value).

    localStorage.setItem("notes", JSON.stringify(notesObj));
    // updating notes in local storage, in case any note gets deleted.

    showNotes();
    // displaying updated notes from local storage after deletion.
}