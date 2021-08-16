
//Detecting button click
var btn = document.querySelectorAll(".drum");    //querySelectorAll gets an array.

// for (var i = 0; i < btn.length; ++i) {
//   btn[i].addEventListener("click", handleClickAndPress);   handleClick without()
// }

for (var i = 0; i < btn.length; ++i) {
  btn[i].addEventListener("click", function() {
    var buttonInnerHtml = this.innerHTML;
    makeSound(buttonInnerHtml);
    buttonAnimation(buttonInnerHtml);
  });
}

//Detecting key press

// an input pass in the function, and call the input.key. the name of the input doesnt matter.
document.addEventListener("keydown", function(event) {
  var keyPress = event.key;
  makeSound(keyPress);
  buttonAnimation(keyPress);
});

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 200);

}

function makeSound (key) {
  switch (key) {
    case "w":
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
      break;

    case "a":
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
      break;

    case "s":
        var tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
      break;

    case "d":
        var tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
      break;

    case "j":
        var crash = new Audio("sounds/crash.mp3");
        crash.play();
      break;

    case "k":
        var kick = new Audio("sounds/kick-bass.mp3");
        kick.play();
      break;

    case "l":
        var snare = new Audio("sounds/snare.mp3");
        snare.play();
      break;

    default:
        console.log("key");

  }
}
