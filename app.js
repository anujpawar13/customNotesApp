console.log('Welcome to EveryNotes');

// adding a text when someone clicks add note

// let addBtn = document.getElementById('addBtn');
// addBtn.addEventListener("click", function(e){
//     let addTxt = document.getElementById("addTxt");
//     let notes = localStorage.getItem("notes");
//     if(notes == null){
//         notesObj = [0];
//     }
//     else{
//         notesObj = JSON.parse(notes);
//     }
//     notesObj.push(addTxt.value);
//     localStorage.setItem("notes", JSON.stringify(notesObj));
//     // to save these notes in local storage as a string 

//     addTxt.value = "";
//     // to change the value to blank when someone clicks on add notes button

//     // after this process, when notes are written and 'add notes' btn is presses, then this value gets stored in local storage 
// })



let addBtn = document.getElementById('addBtn');
addBtn.addEventListener("click", function(e){

    let addTxt = document.getElementById('addTxt');
    let notes = localStorage.getItem(addTxt.value);
    let notesObj;
    if(notes == null){
        notesObj = [];
    }
    else{
        notesObj = JSON.parse(notes);
    }

    notesObj.push(addTxt.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value = "";
    console.log(notesObj);
})
