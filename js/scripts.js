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

$(document).ready(function(){
  $(".btn").click(function() {
  $(this).text("X");
  });
});
