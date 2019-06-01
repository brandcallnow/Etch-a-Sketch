//Start of JavaScript
const body = document.querySelector("body");
const parentDiv = document.createElement("div");
const containerDiv = document.createElement("div");
containerDiv.classList.add("grid");

var x = prompt("What's your desired grid size?");
var y = parseInt(x);



for (var i = 1; i < (y + 1); i++) {
  row = document.createElement("div");
  row.classList.add("row");
  for (var j = 1; j < (y + 1); j++) {
    grid = document.createElement("div");
    grid.classList.add("grid-item");
    grid.classList.add("color");
    row.appendChild(grid);

  }
  containerDiv.appendChild(row);
  "\n";
}

const btn = document.createElement("button");
btn.classList.add("colorReset");
btn.innerHTML = "Reset Color";
containerDiv.appendChild(btn);
parentDiv.appendChild(containerDiv);
body.appendChild(parentDiv);

var color = document.querySelectorAll(".color");
color.forEach((color) => {
  var bgc = Math.floor(Math.random() * 255) + 1;
  var rgb = Math.floor(Math.random() * 255) + 1;
  var rgba = Math.floor(Math.random() * 255) + 1;
  color.addEventListener('mouseenter', (e) => {
    color.style.cssText = 'background: rgb(' + bgc + ',' + rgb + ',' + rgba + ')';
  });
});


btn.addEventListener('click', function (e) {

  color.forEach((color) => {

    color.style.cssText = 'background: white;';

  })
})
