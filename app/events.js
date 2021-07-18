const getFormFields = require('../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const store = require('./store')
const { data } = require('jquery')

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

// variables
const gameBoard = ['', '', '', '', '', '', '', '', '']
let player
let gameCounter = 0
let active = false

const onStartGame = function () {
  console.log('in onStartGame')
  active = true
  gameCounter++
  clearGameBoard()
  // checks game counter to set initial player
  if (gameCounter % 2 === 0) {
    player = 'O'
  } else {
    player = 'X'
  }
  // send new game to api goes here
  console.log(player)
  console.log(gameBoard)
  console.log(active)
  console.log(gameCounter)
  $('.box').on('click', setGamePiece)
}

const setGamePiece = function () {
  // changes id from string to int
  const intId = parseInt($(this).data('id'))
  console.log(intId)
  // checks if square is empty
  if (gameBoard[intId] === '') {
    gameBoard[intId] = player
    $(this).text(player)
    console.log(gameBoard)
    // check for win
    console.log(active)
    // send data to api here
    player = changePlayer(player)
  } else {
    console.log('nope')
  }
}

// clears array and user interface
const clearGameBoard = function () {
  for (let i = 0; i < gameBoard.length; i++) {
    gameBoard[i] = ''
  }
  $('.box').text('')
  return gameBoard
}
// changes from x to o turn to turn
const changePlayer = function (p) {
  console.log('in changePlayer')
  if (p === 'X') {
    p = 'O'
    return p
  } else {
    p = 'X'
    return p
  }
}

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onStartGame

}
