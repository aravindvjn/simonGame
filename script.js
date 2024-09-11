var array = [];
var yourArray = [];
var colors = ["green", "red", "blue", "yellow"];
var colourSelected;
const levelText = document.getElementById("level-title");
let level = 1;

$(document).keydown(() => {
  startListener();
});
const startListener= ()=>{
  level=1;
  array = [];
  yourArray = [];
  levelText.innerHTML = "LEVEL 1";
  if (array.length === 0) {
    setTimeout(() => {
      computerMove();
    }, 200);
  }
}
$("#level-title").click(()=>{
  startListener();
});

$(".btn").click((event) => {
  yourArray.push(event.target.id);
  if (event.target.id === "green") {
    $(".green").addClass("selectedAn");
  } else if (event.target.id === "red") {
    $(".red").addClass("selectedAn");
  } else if (event.target.id === "blue") {
    $(".blue").addClass("selectedAn");
  } else if (event.target.id === "yellow") {
    $(".yellow").addClass("selectedAn");
  }
  setTimeout(() => {
    $(".btn").removeClass("selectedAn");
  }, 200);
  var it = false;
  var that = false;
  colourSounds(event.target.id);
  for (var i = 0; i < yourArray.length; i++) {
    if (yourArray[i] !== array[i]) {
      it = true;
    }
  }
  for (var i = 0; i < array.length; i++) {
    if (yourArray[i] === array[i]) {
      that = true;
    } else {
      that = false;
    }
  }
  if (it) {
    levelText.innerHTML = "YOU LOSE";
    level=1;
    array = [];
    yourArray = [];
    $("body").css("background-color", "red");
    setTimeout(() => {
      $("body").css("background-color", "#011F3F");
    }, 1000);
    sound("./sounds/wrong.mp3");
  } else if (that) {
    yourArray = [];
    level++;
    levelText.innerHTML = `LEVEL ${level}`;
    setTimeout(() => {
      computerMove();
    }, 1000);
  }
});

function computerMove() {
  colourSelected = colors[Math.floor(Math.random() * 4)];
  if (colourSelected === "green") {
    $(".green").addClass("selectedAn");
  } else if (colourSelected === "red") {
    $(".red").addClass("selectedAn");
  } else if (colourSelected === "blue") {
    $(".blue").addClass("selectedAn");
  } else if (colourSelected === "yellow") {
    $(".yellow").addClass("selectedAn");
  }
  colourSounds(colourSelected);
  array.push(colourSelected);
  setTimeout(() => {
    $(".btn").removeClass("selectedAn");
  }, 200);
}

function sound(bgm) {
  var audio = new Audio(bgm);
  audio.play();
}

function colourSounds(key) {
  switch (key) {
    case "green":
      sound("./sounds/green.mp3");
      break;
    case "red":
      sound("./sounds/red.mp3");
      break;
    case "yellow":
      sound("./sounds/yellow.mp3");
      break;
    case "blue":
      sound("./sounds/blue.mp3");
      break;
  }
}
