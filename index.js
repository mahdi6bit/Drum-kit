// Mahdi Khodadadi
let drumItems = document.querySelectorAll(".drum").length;
for (let i = 0; i < drumItems; i++) {
  //MOUSE(CLICK) PROCESSES***
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    let thisButtonClick = this.innerHTML;
    makeSounds(thisButtonClick);
    animationButton(thisButtonClick);
  });
  //KEYBOARD(EVENT) PROCESSES***
  document
    .querySelectorAll(".drum")
    [i].addEventListener("keydown", function (event) {
      makeSounds(event.key);
      animationButton(event.key);
    });
}
// PLAY SOUND FOR THE CURRENT KEY***
function makeSounds(key) {
  switch (key) {
    case "w":
      let tom1 = new Audio("./sounds/tom-1.mp3");
      tom1.volume = volumeLevel;
      tom1.play();
      break;

    case "a":
      let tom2 = new Audio("./sounds/tom-2.mp3");
      tom2.volume = volumeLevel;
      tom2.play();
      break;

    case "s":
      let tom3 = new Audio("./sounds/tom-3.mp3");
      tom3.volume = volumeLevel;
      tom3.play();
      break;

    case "d":
      let tom4 = new Audio("./sounds/tom-4.mp3");
      tom4.volume = volumeLevel;
      tom4.play();
      break;

    case "j":
      let snare = new Audio("./sounds/snare.mp3");
      snare.volume = volumeLevel;
      snare.play();
      break;

    case "k":
      let crash = new Audio("./sounds/crash.mp3");
      crash.volume = volumeLevel;
      crash.play();
      break;

    case "l":
      let kickBass = new Audio("./sounds/kick-bass.mp3");
      kickBass.volume = volumeLevel;
      kickBass.play();
      break;

    default:
      console.log(clickButton);
      break;
  }
}
// ANIMATION BUTTON
function animationButton(currentKey) {
  let activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("passed");
  // REMOVE ANIMATION BUTTON
  setTimeout(function () {
    activeButton.classList.remove("passed");
  }, 100);
}
// SOUND KIT CONTROL***
let volumeLevel = 0.5;
const controller = document.querySelector("#volume");
let volumeValue = document.querySelector("#volume-value");

controller.addEventListener("input", function () {
  volumeLevel = this.value / 100;
  volumeValue.textContent = `${this.value}%`;
});

const alertMahdi6Bit = document.querySelector(".fake");
alertMahdi6Bit.addEventListener("click", function () {
  alert("این صفحه توسط مهدی خدادادی طراحی شده است");
});
