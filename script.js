// Title
function myTitle() {
  var x = document.getElementById("myInput").value;
  document.getElementById("title").innerHTML = x;
}
function addTitle (){
  var titles = $(".titles");
  var title = "<div class='title'>"
    .concat("<h1 class='container'>")
    .concat(".title")
    .concat("</h1>")
    .concat("</title>");

  // add titles

    var limit = titles
      .children(".title")
      .length;

    if (limit < 1) {
      titles
        .append(title);
    };
};

function removeTitle (){
  var titles = $(".titles");
  var title = "<div class='title'>"
    .concat("<h1 class='container'>")
    .concat(".title")
    .concat("</h1>")
    .concat("</title>");

  // add titles

    titles
      .children(".title")
      .last()
      .remove();

};



// columns
function addColumn (){
  var columns = $(".columns");
  var column = "<div class='column'>"
    .concat("<p class='container'>")
    .concat(".column")
    .concat("</p>")
    .concat("</column>");

  // add columns

    var limit = columns
      .children(".column")
      .length;

    if (limit < 12) {
      columns
        .append(column);
    };
};

function removeColumn (){
  var columns = $(".columns");
  var column = "<div class='column'>"
    .concat("<p class='container'>")
    .concat(".column")
    .concat("</p>")
    .concat("</column>");

  // add columns

    columns
      .children(".column")
      .last()
      .remove();

};

// rows

function addRow (){
// rows
var rows = $(".rows");
var row = "<div class='row'>"
  .concat("<p class='notification is-info'>")
  .concat(".row")
  .concat("</p>")
  .concat("</row>");

// add rows

  var limit = rows
    .children(".row")
    .length;

  if (limit < 12) {
    rows
      .append(row);
  };


}

function removeRow (){
// rows
var rows = $(".rows");
var row = "<div class='row'>"
  .concat("<p class='notification is-info'>")
  .concat(".row")
  .concat("</p>")
  .concat("</row>");


// remove rows

  rows
    .children(".row")
    .last()
    .remove();

}

