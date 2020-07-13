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


function tata (){
// rows
var rows = $(".rows");
var row = "<div class='row'>"
  .concat("<p class='notification is-info'>")
  .concat(".row")
  .concat("</p>")
  .concat("</row>");

// add rows
$(".add").on("click", function(){
  var limit = rows
    .children(".row")
    .length;

  if (limit < 12) {
    rows
      .append(row);
  }
});

// remove rows
$(".remove").on("click", function(){
  rows
    .children(".row")
    .last()
    .remove();
});

}

