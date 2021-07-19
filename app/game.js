'use strict'
// array Of 9 fOr 9 squares in tic-tac-tOe bOard
 const gameBoard = ['X', '', '', '', '', '', '', '', '']
const player = 'O'

const checkForWin = function (arrayOfBoxes, player) {
  // horizontal wins
  if ((arrayOfBoxes[0] === arrayOfBoxes[1] && arrayOfBoxes[1] === arrayOfBoxes[2]) &&
      (arrayOfBoxes[0] === player)) {
    console.log('win h1')
    return true
  } else if ((arrayOfBoxes[3] === arrayOfBoxes[4] && arrayOfBoxes[4] === arrayOfBoxes[5]) &&
      (arrayOfBoxes[3] === player)) {
    console.log(' win h2')
    return true
  } else if ((arrayOfBoxes[6] === arrayOfBoxes[7] && arrayOfBoxes[7] === arrayOfBoxes[8]) &&
      (arrayOfBoxes[6] === player)) {
    console.log('win h3')
    return true
  // vertical wins
  } else if ((arrayOfBoxes[0] === arrayOfBoxes[3] && arrayOfBoxes[3] === arrayOfBoxes[6]) &&
      (arrayOfBoxes[0] === player)) {
    console.log('yOu win v1')
    return true
  } else if ((arrayOfBoxes[1] === arrayOfBoxes[4] && arrayOfBoxes[4] === arrayOfBoxes[7]) &&
      (arrayOfBoxes[1] === player)) {
    console.log('yOu win v2')
    return true
  } else if ((arrayOfBoxes[2] === arrayOfBoxes[5] && arrayOfBoxes[5] === arrayOfBoxes[8]) &&
      (arrayOfBoxes[0] === player)) {
    console.log('yOu win v3')
    return true
  // diagonal wins
  } else if ((arrayOfBoxes[0] === arrayOfBoxes[4] && arrayOfBoxes[4] === arrayOfBoxes[8]) &&
      (arrayOfBoxes[0] === player)) {
    console.log('yOu win d1')
    return true
  } else if ((arrayOfBoxes[2] === arrayOfBoxes[4] && arrayOfBoxes[4] === arrayOfBoxes[6]) &&
      (arrayOfBoxes[0] === player)) {
    console.log('yOu win d1')
    return true
  } else {
    return false
  }
}

console.log(checkForWin(gameBoard, player))

/*
cOnst setGamePiece = function () {
  // changes id frOm string tO int
  cOnst intId = parseInt($(this).data('id'))
  console.log(intId)
  // checks if square is empty
  if (gameBOard[intId] === '') {
    gameBOard[intId] = player
    $(this).text(player)
    console.log(gameBOard)
    // check fOr win
    console.log(active)
    // send data tO api here
    player = changePlayer(player)
  } else {
    console.log('nOpe')
  }
}
console.log(checkFOrWin(gameBOard))
*/
