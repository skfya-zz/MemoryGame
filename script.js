var pattern = [1, 2, 3, 4, 5, 6, 7, 8];
var progress = 0; 
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;
var clueHoldTime = 1000;
const cluePauseTime = 333;
const nextClueWaitTime = 1000;
var guessCounter = 0;
var strikes = 0;

function generatePattern(){
  for (var i=0; i<pattern.length; i++){
    pattern[i] = Math.floor(Math.random()*9) + 1;
  }
}

function startGame(){
    generatePattern();
    progress = 0;
    gamePlaying = true;
    document.getElementById("startBtn").classList.add("hidden");
    document.getElementById("stopBtn").classList.remove("hidden");
    clueHoldTime = 1000;
    playClueSequence();
}

function stopGame(){
    gamePlaying = false;
    document.getElementById("startBtn").classList.remove("hidden");
    document.getElementById("stopBtn").classList.add("hidden");
}

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}

function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

const freqMap = {
  1: 220,
  2: 246.9,
  3: 261.6,
  4: 293.7,
  5: 329.6,
  6: 349.2,
  7: 392,
  8: 440,
  9: 493.9
}

function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}

function startTone(btn){
  if(!tonePlaying){
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    tonePlaying = true
  }
}

function stopTone(){
    g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
    tonePlaying = false
}

var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence(){
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime;
    delay += cluePauseTime;
    clueHoldTime -= 25;
  }
}

function wrong(){
  strikes++;
  alert("Wrong! Try again from the start.");
  progress = 0;
  guessCounter = 0;
  clueHoldTime = 1000;
  playClueSequence();
}

function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
}

function winGame(){
  stopGame();
  alert("Game Over. Congrats, you won!");
}

function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }
  if (pattern[guessCounter] == btn){
    if (guessCounter == progress){
      if (progress == pattern.length-1){
        winGame();
      } else {
        progress++;
        playClueSequence();
      }
    } else {
      guessCounter++;
    }
  } else {
    if (strikes < 2){
      wrong();
    } else {
      loseGame();
    }
  }
}