let notesUrl = "https://study-buddy-app-backend.onrender.com";

document.addEventListener("DOMContentLoaded", () => {
  displayNotes();

  // Add a click event listener to the "Add" button
  const addButton = document.getElementById("add-note-form");
  addButton.addEventListener("submit", addNote);
});

let noteList = []; // Your array to store notes

async function displayNotes() {
  try {
    let response = await fetch(`${notesUrl}/notes`);
    // console.log(notes)
    let JSONData = await response.json();
    // console.log(obj)
    let notes = JSONData.data;
    noteList = notes;
    console.log(notes);
    updateUI();
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

const colours = ["purple", "green"];
let currentRowColor = "green"; // Initialize with the first color

function addColour(index) {
  if (index % 2 === 0) {
    // Toggle between colors for each row
    currentRowColor = currentRowColor === "green" ? "purple" : "green";
  }
  return currentRowColor;
}

async function addNote(e) {
  e.preventDefault();
  const title = document.getElementById("titleInput").value;
  const noteBody = document.getElementById("noteBodyInput").value;
  if (title === null || noteBody === null) {
    // The user canceled the input, do nothing
    return alert("Wrong input");
  }

  // Create a JavaScript object for the new note
  const newNote = {
    title: title,
    note: noteBody,
  };

  try {
    const response = await fetch(`${notesUrl}/notes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newNote),
    });

    if (response.ok) {
      // Note successfully added, you can update the UI if needed.
      console.log("Note added successfully.");
      // Add the new note to your local array
      noteList.push(newNote);

      console.log("noteList after adding:", noteList);

      // Update the UI to display the new note
      displayNotes();
      // Fetch and display all notes from the server again
    } else {
      console.error("Failed to add the note.");
    }
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

// Function to update the UI and display notes
function updateUI() {
  const displayNoteList = document.getElementById("display-note");

  // Clear the current display
  displayNoteList.innerHTML = "";

  displayNoteList.innerHTML = noteList
    .map((noteResource, index) => {
      let colour = addColour(index);
      return `<li>
      <a
        ><div class="note-tile ${colour}">
          <h3 id="note-title">${noteResource.title}</h3>
          <p id="note-body">${noteResource.note}</p>
          <div id="btn-container">
            <img
              src="./assets/images/pencil-icon.png"
              alt="edit-icon"
              id="edit-note"
              class="note-button"
              onclick="editNote(${noteResource.id})"
            /><img
              src="./assets/images/trash-icon.png"
              alt="delete-icon"
              id="delete-note"
              class="note-button"
              onclick="deleteNote(${noteResource.id})"
            />
          </div></div
      ></a>
    </li>`;
    })
    .reverse()
    .join("");
}

// Function to delete a note
async function deleteNote(noteId) {
  try {
    const response = await fetch(`${notesUrl}/notes/${noteId}`, {
      method: "DELETE",
    });

    if (response.ok) {
      // Remove the deleted note from the local noteList array
      noteList = noteList.filter((note) => note.id !== noteId);

      // Update the UI to reflect the changes
      updateUI();
    } else {
      console.error("Failed to delete the note.");
    }
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

async function editNote(noteId) {
  openEditForm();
  async function submitEditedNote() {
    // e.preventDefault(); // Prevent the default form submission behavior
    const title = document.getElementById("editTitleInput").value;
    const note = document.getElementById("editBodyInput").value;
    console.log(title);
    console.log(note);
    const editNote = {
      title: title,
      note: note,
    };
    if (title && note) {
      try {
        const response = await fetch(`${notesUrl}/notes/${noteId}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(editNote),
        });
        console.log(response);
        if (response.ok) {
          // Update the UI to reflect the changes
          updateUI();
        } else {
          console.error("Failed to update the note.");
        }
      } catch (error) {
        console.error("An error occurred:", error);
      }
    }
  }
  const editForm = document.getElementById("edit-submit-button");
  console.log(editForm);
  editForm.addEventListener("click", submitEditedNote);
}

function openAddForm() {
  document.getElementById("add-note-form").style.visibility = "visible";
}

function closeAddForm() {
  document.getElementById("add-note-form").style.visibility = "hidden";
}

function openEditForm() {
  document.getElementById("edit-note-form").style.visibility = "visible";
}

function closeEditForm() {
  document.getElementById("edit-note-form").style.visibility = "hidden";
}
