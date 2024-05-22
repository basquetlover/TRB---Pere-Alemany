let keys = {
  65: "a",
  68: "d",
  77: "m",
  73: "i",
  78: "n",

};

let konamiCode = ["a","d","m","i","n"];
let keyCount = 0;

let timerID;

document.addEventListener("keydown", checkCode, false);

// function checkCode(e) {
//   let keyPressed = keys[e.keyCode];

//   if (keyPressed === konamiCode[keyCount]) {
//     keyCount++;

//     // clear timer
//     window.clearTimeout(timerID);

//     // start timer with a 1 second delay before resetting state
//     timerID = window.setTimeout(resetKeyState, 1000);

//     // check if we are still on the right path
//     if (keyCount === konamiCode.length) {
//       cheatCodeActivated();
//       resetKeyState();
//     }
//   } else {
//     resetKeyState();
//   }
// }

function checkCode(e) {
  let keyPressed = keys[e.keyCode];

  if (keyPressed === konamiCode[keyCount]) {
    keyCount++;

    // clear timer
    window.clearTimeout(timerID);

    // start timer with a 1 second delay before resetting state
    timerID = window.setTimeout(resetKeyState, 1000);

    // check if we are still on the right path
    if (keyCount === konamiCode.length) {
      cheatCodeActivated();
      resetKeyState();
    }
  } else {
    resetKeyState();
  }
}

function cheatCodeActivated() {
  console.log("codigo admin activado")
  if (document.getElementById("info").classList.contains("active")){
    document.getElementById("info").classList.remove("active");
  }else{
  document.getElementById("info").classList.add("active");
    }
}

function resetKeyState() {
  console.log("Resetting state!");
  window.clearTimeout(timerID);
  keyCount = 0;
}