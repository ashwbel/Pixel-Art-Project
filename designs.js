
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



function makeGrid(x,y) {

   event.preventDefault();


// Your code goes here!

  while (pixelCanvas.firstChild) {
    pixelCanvas.removeChild(pixelCanvas.firstChild);
  }
  // Creates Grid
  for (let i = 1; i <= x; i++) {
    let rw = document.createElement('tr');
    pixelCanvas.appendChild(rw);
    for (let j = 1; j <= y; j++) {
      let cl = document.createElement('td');
      rw.appendChild(cl);
       cl.addEventListener("click", addcolor);
     }
  }
}
