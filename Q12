<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>L0 DOM Assignment</title>
</head>
<body>

  <button id="add">Add Paragraph</button>
  <button id="remove">Remove Last Paragraph</button>

  <div id="container"></div>

  <script>
    const addBtn = document.getElementById("add");
    const removeBtn = document.getElementById("remove");
    const container = document.getElementById("container");

    addBtn.onclick = function () {
      const p = document.createElement("p");
      p.textContent = "This is a new paragraph.";
      container.appendChild(p);
    };

    removeBtn.onclick = function () {
      const last = container.lastElementChild;
      if (last) container.removeChild(last);
    };
  </script>

</body>
</html>
