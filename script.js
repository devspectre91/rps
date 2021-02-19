let scores = document.querySelectorAll("h2");
let userDashboard = scores[0];
let computerDashboard = scores[1];
userDashboard.innerText = "User Wins: 0";
computerDashboard.innerText = "Computer Wins: 0"
let userScore = 0;
let computerScore = 0;
let result = document.querySelector(".result");
let gameOptions = document.querySelectorAll("i");

for (let i = 0; i < 3; i++) {
    gameOptions[i].addEventListener("click", handleClick);
}



function handleClick(e) {
    let event = e.target;
    resetGame();
    let randomNumber = Math.floor(Math.random() * 3) + 3;

    let userSelected = event;
    let computerSelected = gameOptions[randomNumber];

    userSelected.style.color = "crimson";
    computerSelected.style.color = "crimson";

    if (userSelected.className == computerSelected.className) {

        declareWinner("tie");
    }
    else {
        if (userSelected.className.includes("rock") === true) {
            console.log("hi from 1");
            console.log((computerSelected.className.includes("scissors") === true));
            if (computerSelected.className.includes("scissors") === true) {
                declareWinner("user");
            }
            else { declareWinner("computer"); }
        }
        if (userSelected.className.includes("paper") === true) {
            console.log("hi from 2");
            if (computerSelected.className.includes("scissors") === true) { declareWinner("computer"); }
            else { declareWinner("user"); }
        }
        if (userSelected.className.includes("scissors") === true) {

            console.log("hi from 3");
            if (computerSelected.className.includes("rock") === true) { declareWinner("computer"); }
            else { declareWinner("user"); }
        }


    }
}

function resetGame() {
    gameOptions.forEach((x) => { x.style.color = "black" });
    result.style.display = "none";
    document.body.style.backgroundColor = "white";
}

function declareWinner(str) {
    if (str == "tie") {
        result.style.display = "inline-block";
        result.innerText = "Its a Tie!";
        result.style.color = "darkmagenta";

    }

    else if (str == "user") {
        userScore++;
        console.log("The computer score is" + userScore);
        userDashboard.innerText = `User Wins: ${userScore}`;
        result.style.display = "inline-block";
        result.innerText = "You Won!";
        result.style.color = "darkmagenta";
        document.body.style.backgroundColor = "lightgreen";
    }

    else if (str == "computer") {
        computerScore++;
        console.log("The computer score is" + computerScore);
        computerDashboard.innerText = `Computer Wins: ${computerScore}`;
        result.style.display = "inline-block";
        result.innerText = "Computer Won!";
        result.style.color = "red";
        document.body.style.backgroundColor = "red";
    }
}

