//function to create a table of rows based on number passed in to the function

(function createTable(rows) {
  const table = document.querySelector('.table');
  const tblBody = document.createElement('tbody');

  // creating all cells
  for (var i = 0; i < rows; i++) {
    // creates a table row
    var row = document.createElement('tr');

    for (var j = 0; j < rows*2-1; j++) {
      // Create a <td> element and a text node, make the text
      // node the contents of the <td>, and put the <td> at
      // the end of the table row
      let toggle = true
      var cell = document.createElement('td');
      var cellText = document.createTextNode(toggle?'-':'0');
      cell.appendChild(cellText);
      row.appendChild(cell);
    }

    // add the row to the end of the table body
    tblBody.appendChild(row);
  }

  // put the <tbody> in the <table>
  table.appendChild(tblBody);

  // sets the border attribute of table to 2;
  table.setAttribute('border', '1');
})(3);
