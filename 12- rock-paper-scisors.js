   let score = JSON.parse(localStorage.getItem("score")) || {
      wins: 0,
      losses: 0,
      ties: 0,
    };

    playGame();

  let isautoplaying = false;
  let intervalid;
    function Autoplay(){
      if(!isautoplaying){
intervalid = setInterval(function(){
const playrMove = pickComputerMove();
playrGame(playrMove);
isautoplaying = true;
},1000)
 }else{
clearInterval(intervalid);
isautoplaying = false;
      }
  };

  document.querySelector('.js-rock-button')
    addEventListener('click', () => {
      playrGame('Rock');
    });
    document.querySelector('.js-paper-button')
    addEventListener('click', () => {
      playrGame('paper');
    });
    document.querySelector('.js-scissors-button')
    addEventListener('click', () => {
      playrGame('scissors');
    });
    
document.body.addEventListener('keydown', (event) => {
     if (event.key === 'r') {
       playrGame('Rock');
     }else if(event.key === 'p'){
       playrGame('paper');
     } else if(event.key === 's'){
          playrGame('scissors');
     }
    });
    function playrGame(playrMove) {
      const computerMove = pickComputerMove();
      let Result = "";

      if (playrMove === "scissors") {
        if (computerMove === "Rock") {
          Result = "you lose";
        } else if (computerMove === "paper") {
          Result = "tie";
        } else if (computerMove === "scissors") {
          Result = "you win";
        }
      } else if (playrMove === "paper") {
        if (computerMove === "Rock") {
          Result = "you lose";
        } else if (computerMove === "paper") {
          Result = "you win";
        } else if (computerMove === "scissors") {
          Result = "tie";
        }
      } else if (playrMove === "Rock") {
        if (computerMove === "Rock") {
          Result = "you win";
        } else if (computerMove === "paper") {
          Result = "you lose";
        } else if (computerMove === "scissors") {
          Result = "tie";
        }
      }
      if (Result === "you win") {
        score.wins += 1;
      } else if (Result === "you lose") {
        score.losses += 1;
      } else if (Result === "tie") {
        score.ties += 1;
      }
      localStorage.setItem("score", JSON.stringify(score));

      playGame();
      document.querySelector(".js-result").innerHTML = Result;

      document.querySelector(".js-reset") .innerHTML 
      = `You 
  <img src="./${computerMove}-emoji.png" class="img">
  <img src="./${playrMove}-emoji.png" class="img">
  computer`;
}

    function playGame() {
      document.querySelector(
        ".js-score"
      ).innerHTML = `wins: ${score.wins} looses: ${score.losses} ties: ${score.ties}`;
    }

    function resetScore() {
      score = { wins: 0, losses: 0, ties: 0 };
      localStorage.setItem("score", JSON.stringify(score));
      playGame();
      document.querySelector(".js-result").innerHTML = "";
      document.querySelector(".js-moves").innerHTML = "";
    };
    function pickComputerMove() {
      const randomNumber = Math.random();
      let computerMove = "";
      if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = "Rock";
      } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = "paper";
      } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
        computerMove = "scissors";
      }
      return computerMove;
    }