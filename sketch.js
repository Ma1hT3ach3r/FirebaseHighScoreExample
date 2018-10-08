// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/7lEU1UEw3YI

var canvas;
var score;
var button;
var initialInput;
var submitButton;
var database;

function setup() {
  canvas = createCanvas(100, 100);
  score = 0;
  createP('Click the button to get points.')
  button = createButton('click');
  button.mousePressed(increaseScore);
  initialInput = createInput('initials');
  submitButton = createButton('submit');
  submitButton.mousePressed(submitScore);

  var config = {
     apiKey: "AIzaSyCpc62qCavkQL38Cy44h2dyDMAIA9u0sW8",
    authDomain: "highscoreexample.firebaseapp.com",
    databaseURL: "https://highscoreexample.firebaseio.com",
    projectId: "highscoreexample",
    storageBucket: "highscoreexample.appspot.com",
    messagingSenderId: "173504280108"
  };
  firebase.initializeApp(config);
  database = firebase.database();
}

function submitScore() {
  var data = {
    initials: initialInput.value(),
    score: score
  }
  console.log(data);
  var ref = database.ref('scores');
  ref.push(data);
}

function increaseScore() {
  score++;
}

function draw() {
  background(0);
  textAlign(CENTER);
  textSize(32);
  fill(255);
  text(score, width / 2, height / 2);
}
