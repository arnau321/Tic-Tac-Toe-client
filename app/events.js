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
const gameOverEventListener = document.getElementById('listen')

const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signUp(data)
    .then(ui.onSignUpSuccess)
    .catch(ui.onSignUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signIn(data)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInFailure)
}
const onSignOut = function () {
  api.signOut()
    .then(ui.onSignOutSuccess)
    .catch(ui.onSignOutFailure)
}

const onStartGame = function () {
  // hides
  $('#fun-message').hide()
  $('#welcome-message').hide()
  $('#message').hide()
  // show
  $('#game-board').show()
  $('#message-bottom').text('Game started.  Good Luck')
  console.log('count0', gameCounter)
  gameCounter++
  console.log('count1 ', gameCounter)
  // checks game counter to set initial player
  if (gameCounter % 2 === 0) {
    player = 'O'
  } else {
    player = 'X'
  }
  api.createGame()
    .then(ui.onCreateGameSuccess)
    .catch(ui.onCreateGameFailure)
  // event listener for end of game removed
  gameOverEventListener.removeEventListener('click', gameOver)
  // event listener for adding game pieces added
  eventListener.addEventListener('click', setGamePiece)
}
// for onStartGameFunction
const setGamePiece = function (event) {
  moveCounter++
  const id = event.target.id
  const intId = parseInt(id)
  // check if space empty
  if (gameBoard[id] === '') {
    $('#message-bottom').hide()
    // sets x or o to array position
    gameBoard[id] = player
    // set x or o to html box
    event.target.innerText = player
    win = checkForWin(gameBoard, player)
    // change to lower case due to server requirements
    const lowerCasePlayer = player.toLowerCase()
    // creates game form due to api requirements
    const game = {
      game: {
        cell: {
          index: intId,
          value: lowerCasePlayer
        },
        over: win
      }
    }
    api.updateGame(game)
    // checks for empty space in array
    if (moveCounter === 9) {
      moveCounter = 0

      eventListener.removeEventListener('click', setGamePiece)
      gameOverEventListener.addEventListener('click', gameOver)
      $('#message-bottom').show()
      $('#message-bottom').text('Tie')
    }
    if (win === true) {
      eventListener.removeEventListener('click', setGamePiece)
      gameOverEventListener.addEventListener('click', gameOver)
      moveCounter = 0
      $('#message-bottom').show()
      $('#message-bottom').text(player + ' Wins!!!')
    } else {
      // change player
      player = player === 'X' ? 'O' : 'X'
    }
  } else {
    // if click on box that is already occupied
    moveCounter--
    $('#message-bottom').show()
    $('#message-bottom').text('Nope')
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
    return true
  } else if ((arrayOfBoxes[3] === arrayOfBoxes[4]) && (arrayOfBoxes[4] === arrayOfBoxes[5]) &&
      (arrayOfBoxes[3] === player)) {
    return true
  } else if ((arrayOfBoxes[6] === arrayOfBoxes[7]) && (arrayOfBoxes[7] === arrayOfBoxes[8]) &&
      (arrayOfBoxes[6] === player)) {
    return true
  // vertical wins
  } else if ((arrayOfBoxes[0] === arrayOfBoxes[3]) && (arrayOfBoxes[3] === arrayOfBoxes[6]) &&
      (arrayOfBoxes[0] === player)) {
    return true
  } else if ((arrayOfBoxes[1] === arrayOfBoxes[4]) && (arrayOfBoxes[4] === arrayOfBoxes[7]) &&
      (arrayOfBoxes[1] === player)) {
    return true
  } else if ((arrayOfBoxes[2] === arrayOfBoxes[5]) && (arrayOfBoxes[5] === arrayOfBoxes[8]) &&
      (arrayOfBoxes[2] === player)) {
    return true
  // diagonal wins
  } else if ((arrayOfBoxes[0] === arrayOfBoxes[4]) && (arrayOfBoxes[4] === arrayOfBoxes[8]) &&
      (arrayOfBoxes[0] === player)) {
    return true
  } else if ((arrayOfBoxes[2] === arrayOfBoxes[4]) && (arrayOfBoxes[4] === arrayOfBoxes[6]) &&
      (arrayOfBoxes[2] === player)) {
    return true
  } else {
    return false
  }
}
// for setGamePiece function
const gameOver = function () {
  $('#message-bottom').text('Game is over.  Start new game')
}

const onChangePassword = function (event) {
  // email address shown in form
  $('#change-password-email').text(store.userEmail)
  // show
  $('#cancel-button').show()
  $('#change-password-form').show()
  // hides
  $('#fun-message').hide()
  $('#message').hide()
  $('#welcome-message').hide()
  $('#start-game').hide()
  $('#game-board').hide()
  $('#show-number-of-games').hide()
}
const onChangePasswordSubmit = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.changePassword(data)
    .then(ui.onChangePasswordSubmitSuccess)
    .catch(ui.onChangePasswordSubmitFailure)
}
const onCancelPasswordChange = function () {
  // hides
  $('#change-password-form').hide()
  $('#cancel-button').hide()
  // show
  $('#start-game').show()
  $('#show-number-of-games').show()
}

const onNumberOfGames = function () {
  api.getNumberOfGames()
    .then(ui.onGetNumberOfGamesSuccess)
    .catch(ui.onGetNumberOfGamesFailure)
}
module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onStartGame,
  onChangePassword,
  onChangePasswordSubmit,
  onCancelPasswordChange,
  onNumberOfGames
}
