var player1;
var player2;
var ticTacToe;
var newBoard;

function Player (code) {
  this.userPlayer = code;
}
function Game () {
  this.gameStatus = ["Start Game or select player","O turn", "X turn", "Game over"];
  this.turn = 0;
  this.score = [0, 0, 0];
  this.matchHistory = [];
}
function Board () {
  this.boardGrid = [0,0,0,0,0,0,0,0,0];
  this.winningSpot = [[1,2,3], [4,5,6],[7,8,9], [1,4,7], [2,5,8], [3,6,9], [1,5,9],[3,5,7]];
}
function checkWinner () {
  for(i=0;i<8;i++) {
    if(newBoard.boardGrid[newBoard.winningSpot[i][0]-1]==1 && newBoard.boardGrid[newBoard.winningSpot[i][1]-1]==1 && newBoard.boardGrid[newBoard.winningSpot[i][2]-1]==1){
      alert("won!")
    }

  }
}
$(document).ready(function(){
  player1 = new Player("X");
  player2 = new Player("O");
  ticTacToe = new Game();
  newBoard = new Board();

  $(".btn").click(function() {
    var currentSpot=parseInt($(this).attr('id'));
    if(!newBoard.boardGrid[currentSpot]){ //! is != or not true
      newBoard.boardGrid[currentSpot]=1;
      if(ticTacToe.turn==0){
        $(this).text("X");
        ticTacToe.turn=1;
      }
      else if (ticTacToe.turn==1) {
        $(this).text("O");
        ticTacToe.turn=0;
      }
    }
    checkWinner();

  });
});
