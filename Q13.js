<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>L0 - Save and Load User Notes</title>
</head>
<body>

  <h2>User Notes</h2>

  <!-- Text area where user types notes -->
  <textarea id="notes" rows="10" cols="40" placeholder="Write your notes here..."></textarea>
  <br><br>

  <!-- Buttons for actions -->
  <button id="saveBtn">Save Notes</button>
  <button id="loadBtn">Load Notes</button>
  <button id="clearBtn">Clear Notes</button>

  <script>
    // Getting references to HTML elements
    const notesArea = document.getElementById("notes");
    const saveBtn = document.getElementById("saveBtn");
    const loadBtn = document.getElementById("loadBtn");
    const clearBtn = document.getElementById("clearBtn");

    // On page load, automatically check for saved notes and display them
    window.onload = function () {
      const savedNotes = localStorage.getItem("userNotes");
      if (savedNotes) {
        notesArea.value = savedNotes;
      }
    };

    // Save notes to localStorage
    saveBtn.onclick = function () {
      const text = notesArea.value.trim();

      // Do not save empty notes (validation)
      if (text === "") {
        alert("Please write something before saving.");
        return;
      }

      localStorage.setItem("userNotes", text);
      alert("Notes saved successfully!");
    };

    // Load notes manually when button is clicked
    loadBtn.onclick = function () {
      const savedNotes = localStorage.getItem("userNotes");
      if (savedNotes) {
        notesArea.value = savedNotes;
      } else {
        alert("No saved notes found.");
      }
    };

    // Clear notes from localStorage and text area
    clearBtn.onclick = function () {
      localStorage.removeItem("userNotes");
      notesArea.value = "";
      alert("Notes cleared.");
    };
  </script>

</body>
</html>
