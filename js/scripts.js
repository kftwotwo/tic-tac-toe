var player1;
var player2;
var ticTacToe;
var newBoard;

function Player (code) {
  this.userPlayer = code;
  this.score = 0;
}
function Game () {
  this.gameStatus = ["Start Game or select player","O turn", "X turn", "Game over", "Play Again"];
  this.gamestate = []
  this.turn = 1;
  this.matchHistory = [];
  this.winner = 0;
}
function Board () {
  this.boardGrid = [0,0,0,0,0,0,0,0,0];
  this.winningSpot = [[0,1,2], [3,4,5],[6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8],[2,4,6]];
}
function checkWinner () {
  for(i=0;i<8;i++) {
    if(newBoard.boardGrid[newBoard.winningSpot[i][0]]==1 && newBoard.boardGrid[newBoard.winningSpot[i][1]]==1 && newBoard.boardGrid[newBoard.winningSpot[i][2]]==1){
      player1.score++;
      ticTacToe.winner =1;
      return true;
    }
    else if (newBoard.boardGrid[newBoard.winningSpot[i][0]]==2 && newBoard.boardGrid[newBoard.winningSpot[i][1]]==2 && newBoard.boardGrid[newBoard.winningSpot[i][2]]==2) {
      player2.score++;
      ticTacToe.winner =2;
      return true;
    }
  }
}

function noMovesLeft(){
  if (newBoard.boardGrid.indexOf(0)===-1){
    return true;
  }
}
$(document).ready(function(){
  player1 = new Player("X");
  player2 = new Player("O");
  ticTacToe = new Game();
  newBoard = new Board();
  $(".status").text(ticTacToe.gameStatus[0]);
  $(".ticButton .btn").click(function() {
    var currentSpot=parseInt($(this).attr('id'));
    if(!newBoard.boardGrid[currentSpot]){ //! is != or not true
      newBoard.boardGrid[currentSpot]=ticTacToe.turn;
      if(ticTacToe.turn==1){
        $(this).text("X");
        ticTacToe.turn=2;
        $(".status").text(ticTacToe.gameStatus[1]);
      }
      else if (ticTacToe.turn==2) {
        $(this).text("O");
        ticTacToe.turn=1;
        $(".status").text(ticTacToe.gameStatus[2]);
      }
    }
     if (checkWinner()) {
       $(".output").text("Player "+ticTacToe.winner+ " Won!!!");
       $("#modal1").openModal({dismissible: false});
       $(".status").text(ticTacToe.gameStatus[3]);
     }
     else if (noMovesLeft()){
       $(".output").text("The game is a tie! ");
       $("#modal1").openModal({dismissible: false})
     }
    $(".xScore").text(player1.score);
    $(".oScore").text(player2.score);
  });

  $(".newGame").click(function(){
    newBoard.boardGrid= [0,0,0,0,0,0,0,0,0];
    ticTacToe.turn=1;
    ticTacToe.winner=0;
    $(".ticButton .btn").each(function(){
      $(this).text("");
      $('#modal1').closeModal();
      $(".status").text(ticTacToe.gameStatus[4]);
    });
  });
});
