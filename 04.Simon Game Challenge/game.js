var gamePattern = [];

//Create A New Pattern
var buttonColours = ["red", "blue", "green", "yellow"];

var userClickedPattern = [];

var level = 0;
var started = false;


//1. Use jQuery to detect when any of the buttons are clicked and trigger a handler function.
//2. Inside the handler, create a new variable called userChosenColour to store the id of the button that got clicked.
// --> So if the Green button was clicked, userChosenColour will equal its id which is "green".
$(".btn").click(function () {

    var userChosenColor = $(this).attr("id");

    userClickedPattern.push(userChosenColor);

    console.log(userClickedPattern);

    /* Solution A */
    // playSound(userClickedPattern[userClickedPattern.length - 1]);

    /* Solution B */
    animatePress(userChosenColor);
    checkAnswer(userClickedPattern.length - 1);
});

//1. Use jQuery to detect when a keyboard key has been pressed, when that happens for the first time, call nextSequence().
$(document).keypress(function () {
    console.log("keyboard key has been pressed");


    if (!started) {
        $("#level-title").text("Let's Start!");
        setTimeout(nextSequence, 700);
        started = true;
    }
});




//2. Inside the new function generate a new random number between 0 and 3,
//and store it in a variable called randomNumber.
function nextSequence() {
    userClickedPattern.length = 0;

    level++;
    $("#level-title").text("Level " + level);

    var randomNumber = Math.floor(Math.random() * 4);

    //3. Create a new variable called randomChosenColour and use the randomNumber 
    //from step 2 to select a random colour from the buttonColours array.
    var randomChosenColour = buttonColours[randomNumber];


    //6. Add the new randomChosenColour generated in step 4 to the end of the gamePattern.
    gamePattern.push(randomChosenColour);

    //1. Use jQuery to select the button with the same id as the randomChosenColour.
    //2. Use Google/Stackoverflow to figure out how you can use jQuery to animate a flash to the button selected in step 1.
    $("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(randomChosenColour);
    // animatePress(randomChosenColour);
};


function playSound(name) {
    /* Solution A */
    // switch (name) {
    //     case "green":
    //         var green = new Audio('sounds/green.mp3');
    //         green.play();
    //         break;

    //  case "blue":
    //         var blue = new Audio('sounds/blue.mp3');
    //         blue.play();
    //         break;

    //         case "yellow":
    //         var yellow = new Audio('sounds/yellow.mp3');
    //         yellow.play();
    //         break;

    //  case "red":
    //         var red = new Audio('sounds/red.mp3');
    //         red.play();
    //         break;

    //     default:console.log(userClickedPattern[userClickedPattern.length - 1]);
    //         break;
    // }

    /* Sloution B */
    var audio = new Audio('sounds/' + name + '.mp3');
    audio.play();

};

/* add animatePress */
function animatePress(currentColour) {
    $("#" + currentColour).addClass("pressed");

    setTimeout(function () {
        $("#" + currentColour).removeClass("pressed");
    }, 100);
};



function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        console.log("Suceess");
        playSound(userClickedPattern[currentLevel]);

        if (userClickedPattern.length === gamePattern.length) {
            $("#level-title").text("You're doing great!");
            setTimeout(nextSequence, 1000);
        };


    } else {
        console.log("Wrong");
        var errorAudio = new Audio('sounds/wrong.mp3');
        errorAudio.play();

        $("#level-title").text("Ops. Wrong button. Press any key to re-start the game.");
        $('body').addClass('game-over');

        setTimeout(function() {
            $('body').removeClass('game-over'), 2000
        }, 2000);
        
        startOver();

        // setTimeout(location.reload.bind(location), 2000);

    }
};

function startOver() {
    level = 0;
    gamePattern.length = 0;
    started = false;
}