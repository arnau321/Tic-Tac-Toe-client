const getFormFields = require('../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const store = require('./store')
const { data } = require('jquery')
// variables for onStartGame function
const gameBoard = ['', '', '', '', '', '', '', '', '']
let player
let gameCounter = 0
let win = false
let moveCounter = 0
const eventListener = document.getElementById('listen')

const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  api.signUp(data)
    .then(ui.onSignUpSuccess)
    .catch(ui.onSignUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  api.signIn(data)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInFailure)
}
const onSignOut = function () {
  console.log('in onSignOut')
  api.signOut()
    .then(ui.onSignOutSuccess)
    .catch(ui.onSignOutFailure)
}

const onStartGame = function () {
  console.log('in onStartGame')
  gameCounter++
  clearGameBoard()
  // checks game counter to set initial player
  if (gameCounter % 2 === 0) {
    player = 'O'
  } else {
    player = 'X'
  }
  // send new game to api goes here
  // creates event listeners on boxes
  eventListener.addEventListener('click', setGamePiece)
  // $('.box').on('click', setGamePiece)
}
// for onStartGameFunction
const setGamePiece = function (event) {
  console.log('in setGP')
  moveCounter++
  const id = event.target.id
  console.log(id)
  // check if space is open
  if (gameBoard[id] === '') {
    gameBoard[id] = player
    // send game update to api goes here
    event.target.innerText = player
    win = checkForWin(gameBoard, player)
    console.log(win)
    console.log('mc = ', moveCounter)
    if (moveCounter === 9) {
      moveCounter = 0
      eventListener.removeEventListener('click', setGamePiece)
      console.log('tie')
    }
    if (win === true) {
      eventListener.removeEventListener('click', setGamePiece)
      moveCounter = 0
      console.log('Wins ', player)
    } else {
      // change player
      player = player === 'X' ? 'O' : 'X'
    }
  }
}
// for onStartGame function
// clears array and user interface
const clearGameBoard = function () {
  for (let i = 0; i < gameBoard.length; i++) {
    gameBoard[i] = ''
  }
  $('.box').text('')
  return gameBoard
}
// for setGamePiece function
// checks for winners
const checkForWin = function (arrayOfBoxes, player) {
  // horizontal wins
  if ((arrayOfBoxes[0] === arrayOfBoxes[1]) && (arrayOfBoxes[1] === arrayOfBoxes[2]) &&
      (arrayOfBoxes[0] === player)) {
    console.log('win h1')
    return true
  } else if ((arrayOfBoxes[3] === arrayOfBoxes[4]) && (arrayOfBoxes[4] === arrayOfBoxes[5]) &&
      (arrayOfBoxes[3] === player)) {
    console.log(' win h2')
    return true
  } else if ((arrayOfBoxes[6] === arrayOfBoxes[7]) && (arrayOfBoxes[7] === arrayOfBoxes[8]) &&
      (arrayOfBoxes[6] === player)) {
    console.log('win h3')
    return true
  // vertical wins
  } else if ((arrayOfBoxes[0] === arrayOfBoxes[3]) && (arrayOfBoxes[3] === arrayOfBoxes[6]) &&
      (arrayOfBoxes[0] === player)) {
    console.log('win v1')
    return true
  } else if ((arrayOfBoxes[1] === arrayOfBoxes[4]) && (arrayOfBoxes[4] === arrayOfBoxes[7]) &&
      (arrayOfBoxes[1] === player)) {
    console.log('win v2')
    return true
  } else if ((arrayOfBoxes[2] === arrayOfBoxes[5]) && (arrayOfBoxes[5] === arrayOfBoxes[8]) &&
      (arrayOfBoxes[2] === player)) {
    console.log('win v3')
    return true
  // diagonal wins
  } else if ((arrayOfBoxes[0] === arrayOfBoxes[4]) && (arrayOfBoxes[4] === arrayOfBoxes[8]) &&
      (arrayOfBoxes[0] === player)) {
    console.log('win d1')
    return true
  } else if ((arrayOfBoxes[2] === arrayOfBoxes[4]) && (arrayOfBoxes[4] === arrayOfBoxes[6]) &&
      (arrayOfBoxes[2] === player)) {
    console.log('win d2')
    return true
  } else {
    return false
  }
}
module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onStartGame

}
