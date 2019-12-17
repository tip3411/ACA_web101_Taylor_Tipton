let gameMarker = "X";
var id = 1;

function changeToX() {
  gameMarker = "X";
}

function changeToY() {
  gameMarker = "Y";
}

function placeMark() {
  var currentBox = document.getElementById(id);
  currentBox.innerHTML = gameMarker;
  id += 1;
}