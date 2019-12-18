var cookies = 0;
function cookieClick (number) {
  cookies += number;
  document.getElementById("cookies").innerHTML = cookies;
};
//cursors
var cursors = 0;
function buyCursor () {
  var cursorCost = Math.floor(10 * Math.pow(1.1,cursors));     //works out the cost of this cursor
  if (cookies >= cursorCost) {
    cookies -= cursorCost;
    cursors++;
    document.getElementById('cursors').innerHTML = cursors;  //updates the number of cursors for the user
    document.getElementById('cookies').innerHTML = cookies;  //updates the number of cookies for the user
  }
  var nextCost = Math.floor(10 * Math.pow(1.1,cursors));       //works out the cost of the next cursor
    document.getElementById('cursorCost').innerHTML = nextCost;  //updates the cursor cost for the user  
};

//##### SAVE #####
function save () {
  let save = {
    cookies: cookies,
    cursors: cursors,    
  };
  //localStorage only stores STRINGS:
  localStorage.setItem("save",JSON.stringify(save));
};
//### LOAD ###
function load () {
  let savegame = JSON.parse(localStorage.getItem("save"));
  if (typeof savegame.cookies !== "undefined") cookies = savegame.cookies;
  if (typeof savegame.cursors !== "undefined") cursors = savegame.cursors;
};

function deleteSavedGame () {
  localStorage.removeItem("save");
};
//######### GAME LOOP ##########
window.setInterval(function(){
  cookieClick(cursors);
}, 1000);