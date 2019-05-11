
// Select color input
var color
color  = document.getElementById('colorPicker')

// Select size input
var height ,width
height = document.getElementById('inputHeight');
width = document.getElementById('inputWidth');


// When size is submitted by the user, call makeGrid()


const submitbtn =document.getElementById('sizePicker');

submitbtn.addEventListener('submit', function (event) {
  makeGrid(height.value ,width.value)
});



function makeGrid() {

}
