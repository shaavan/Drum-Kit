var buttonList = document.querySelectorAll(".drum")

for(var i=0; i<buttonList.length; i++){

    // Event listener to responds with sound when clicked.

    buttonList[i].addEventListener("click", function() {

        // functions reads the inner HTML of the object that is being clicked upon.
        // "this" -> is equal to the button that is being clicked.
        var buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
        
    });
}

// Event listener to responds with sound when a particular key is pressed.
document.addEventListener("keydown", function (event) {
    // For the keydown event, this function reads to event "key" that is
    // pressed and use it as the input for the following functions.
    makeSound(event.key);
    buttonAnimation(event.key);
})

// This function is responsible for creating sound when a event occurs (button press, or click).

function makeSound(char) {
    // This takes the inner HTML of the button or pressed key's name (eg, "w") as the input to find
    // the key binding the button corresponds to, and play the appropriate sound.
    switch (char) {
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
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        case "l":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        default:
            console.log(char);
    }
}

// Creates animation for the button when an event occurs (key press or click).
function buttonAnimation(key) {
    // Takes the inner HTML of the button or pressed key's name (eg, "w") as
    // input to figure which key the button corresponds to.

    // Use it to select the appropriate button.
    var activeButton = document.querySelector("." + key);

    // Adds the pressed class to the button.
    activeButton.classList.add("pressed");

    // Removes the class after a delay of 100ms to give the button an animated feel.
    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 100)
}