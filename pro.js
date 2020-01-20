"use strict";
/*function test() {
var h = document.getElementById('ih');
var w = document.getElementById('iw');
var col = document.getElementById('co');

    
if(h.value === w.value){
    chBackcolor(col.value);
    //alert("matched"+col.value);
   
   // document.body.style.backgroundColor=col.value; 
}
else{
    alert("Not Matched");
}
               }

function chBackcolor(color) {
   document.body.style.background = color;
}
*/
// function that builds a grid in the "container"
function createGrid(x,y) {
    
    for (var rows = 0; rows < x; rows++) {
        for (var columns = 0; columns < y; columns++) {
            $("#container").append("<div class='grid'></div>");

        };
    };
    $(".grid").width(960/x);
    $(".grid").height(960/y);
};

// function that clears the grid
function clearGrid(){
    $(".grid").remove();
};  

// function that prompts the user to select the number of boxes in a new grid
// the function then also creates that new grid
function refreshGrid(){
//    var z = prompt("How many boxes per side?");
  var h = document.getElementById('ih');
var w = document.getElementById('iw');

    clearGrid();
    createGrid(w.value , h.value);
};

// create a 16x16 grid when the page loads
// creates a hover effect that changes the color of a square to black when the mouse passes over it, leaving a (pixel) trail through the grid
// allows the click of a button to prompt the user to create a new grid
$(document).ready(function() {
            var col = document.getElementById("co");
    
    $(".grid").click(function() {
        $(this).css("background-color", col.value);
        });

    $(".newGrid").click(function() {
        refreshGrid();

        $(".grid").click(function() {
            
        $(this).css("background-color", col.value);
        });
    });
});

