var title = document.querySelector("h1");
var playerOne = document.querySelector(".dice");
var playerTwo = document.firstElementChild.lastElementChild.firstElementChild.lastElementChild;
var imageOne = document.querySelector(".img1");
var imageTwo = document.querySelector(".img2");
var buttonSystem = document.querySelector(".btn");



// function rollDice() {
//     var n = Math.random();
//     var roll = Math.floor(n * 6 + 1);

//     if (roll === 1) {
//         imageOne.setAttribute("src", "images/dice1.png");
//     }
//     else if (roll === 2) {
//         imageOne.setAttribute("src", "images/dice2.png");
//     }
//     else if (roll === 3) {
//         imageOne.setAttribute("src", "images/dice3.png");
//     }
//     else if (roll === 4) {
//         imageOne.setAttribute("src", "images/dice4.png");
//     }
//     else if (roll === 5) {
//         imageOne.setAttribute("src", "images/dice5.png");
//     }
//     else {
//         imageOne.setAttribute("src", "images/dice6.png");
//     }

//     return roll;
// }

// var rollDiceFinal = rollDice();
// // console.log(rollDiceFinal);


// function rollDiceTwo() {
//     var nTwo = Math.random();
//     var rollTwo = Math.floor(nTwo * 6 + 1);

//     if (rollTwo === 1) {
//         imageTwo.setAttribute("src", "images/dice1.png");
//     }
//     else if (rollTwo === 2) {
//         imageTwo.setAttribute("src", "images/dice2.png");
//     }
//     else if (rollTwo === 3) {
//         imageTwo.setAttribute("src", "images/dice3.png");
//     }
//     else if (rollTwo === 4) {
//         imageTwo.setAttribute("src", "images/dice4.png");
//     }
//     else if (rollTwo === 5) {
//         imageTwo.setAttribute("src", "images/dice5.png");
//     }
//     else {
//         imageTwo.setAttribute("src", "images/dice6.png");
//     }

//     return rollTwo;
// }

// var rollDiceFinalTwo = rollDiceTwo();
// // console.log(rollDiceFinalTwo);


// function titleChange() {

//     if (rollDiceFinal > rollDiceFinalTwo) {
//         title.textContent = "🏆 Player 1 Wins!";
//     }
//     else if (rollDiceFinal < rollDiceFinalTwo) {
//         title.textContent = "🏆 Player 2 Wins!";
//     }
//     else {
//         title.textContent = "🤪 Draw!";
//     }
// }
// var titleChangeSystem = titleChange();
// // console.log(titleChangeSystem);

buttonSystem.addEventListener("click", function () {
    function rollDice() {
        var n = Math.random();
        var roll = Math.floor(n * 6 + 1);
    
        if (roll === 1) {
            imageOne.setAttribute("src", "images/dice1.png");
        }
        else if (roll === 2) {
            imageOne.setAttribute("src", "images/dice2.png");
        }
        else if (roll === 3) {
            imageOne.setAttribute("src", "images/dice3.png");
        }
        else if (roll === 4) {
            imageOne.setAttribute("src", "images/dice4.png");
        }
        else if (roll === 5) {
            imageOne.setAttribute("src", "images/dice5.png");
        }
        else {
            imageOne.setAttribute("src", "images/dice6.png");
        }
    
        return roll;
    }
    
    var rollDiceFinal = rollDice();
    // console.log(rollDiceFinal);
    
    
    function rollDiceTwo() {
        var nTwo = Math.random();
        var rollTwo = Math.floor(nTwo * 6 + 1);
    
        if (rollTwo === 1) {
            imageTwo.setAttribute("src", "images/dice1.png");
        }
        else if (rollTwo === 2) {
            imageTwo.setAttribute("src", "images/dice2.png");
        }
        else if (rollTwo === 3) {
            imageTwo.setAttribute("src", "images/dice3.png");
        }
        else if (rollTwo === 4) {
            imageTwo.setAttribute("src", "images/dice4.png");
        }
        else if (rollTwo === 5) {
            imageTwo.setAttribute("src", "images/dice5.png");
        }
        else {
            imageTwo.setAttribute("src", "images/dice6.png");
        }
    
        return rollTwo;
    }
    
    var rollDiceFinalTwo = rollDiceTwo();
    // console.log(rollDiceFinalTwo);
    
    
    function titleChange() {
    
        if (rollDiceFinal > rollDiceFinalTwo) {
            title.textContent = "🏆 Player 1 Wins!";
        }
        else if (rollDiceFinal < rollDiceFinalTwo) {
            title.textContent = "🏆 Player 2 Wins!";
        }
        else {
            title.textContent = "🤪 Draw!";
        }
    }
    var titleChangeSystem = titleChange();
    // console.log(titleChangeSystem);
}
);





// function rollDiceTwo(rollTwo) {
//     var nTwo = Math.random();
//     var rollTwo = Math.floor(nTwo * 6 + 1);

//     while (rollTwo <= 6) {
//         imageTwo.setAttribute("src", "images/dice" + rollTwo + ".png");
//     }

//     return rollTwo;
// }
// var rollDiceFinalTwo = rollDiceTwo();
// console.log(rollDiceFinalTwo);



