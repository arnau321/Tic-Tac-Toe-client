'use strict'
// array of 9 for 9 squares in tic-tac-toe board
const gameBoard = ['x', '', 'x', 'o', 'o', 'o', '', 'x', 'o']


const checkForWin = function (arrayOfBoxes) {
  // horizontal wins
  if ((arrayOfBoxes[0] === arrayOfBoxes[1] && arrayOfBoxes[1] === arrayOfBoxes[2]) &&
      (arrayOfBoxes[0] === 'x' || arrayOfBoxes[0] === 'o')) {
    console.log('you win h1')
    return arrayOfBoxes
  } else if ((arrayOfBoxes[3] === arrayOfBoxes[4] && arrayOfBoxes[4] === arrayOfBoxes[5]) &&
      (arrayOfBoxes[3] === 'x' || arrayOfBoxes[3] === 'o')) {
    console.log('you win h2')
    return arrayOfBoxes
  } else if ((arrayOfBoxes[6] === arrayOfBoxes[7] && arrayOfBoxes[7] === arrayOfBoxes[8]) &&
      (arrayOfBoxes[6] === 'x' || arrayOfBoxes[6] === 'o')) {
    console.log('you win h3')
    return arrayOfBoxes
  // vertical wins
  } else if ((arrayOfBoxes[0] === arrayOfBoxes[3] && arrayOfBoxes[3] === arrayOfBoxes[6]) &&
      (arrayOfBoxes[0] === 'x' || arrayOfBoxes[0] === 'o')) {
    console.log('you win v1')
    return arrayOfBoxes
  } else if ((arrayOfBoxes[1] === arrayOfBoxes[4] && arrayOfBoxes[4] === arrayOfBoxes[7]) &&
      (arrayOfBoxes[1] === 'x' || arrayOfBoxes[1] === 'o')) {
    console.log('you win v2')
    return arrayOfBoxes
  } else if ((arrayOfBoxes[2] === arrayOfBoxes[5] && arrayOfBoxes[5] === arrayOfBoxes[8]) &&
      (arrayOfBoxes[0] === 'x' || arrayOfBoxes[0] === 'o')) {
    console.log('you win v3')
    return arrayOfBoxes
  // diagonal wins
  } else if ((arrayOfBoxes[0] === arrayOfBoxes[4] && arrayOfBoxes[4] === arrayOfBoxes[8]) &&
      (arrayOfBoxes[0] === 'x' || arrayOfBoxes[0] === 'o')) {
    console.log('you win d1')
    return arrayOfBoxes
  } else if ((arrayOfBoxes[2] === arrayOfBoxes[4] && arrayOfBoxes[4] === arrayOfBoxes[6]) &&
      (arrayOfBoxes[0] === 'x' || arrayOfBoxes[0] === 'o')) {
    console.log('you win d1')
    return arrayOfBoxes
  } else {
    return arrayOfBoxes
  }
}



console.log(checkForWin(gameBoard))

