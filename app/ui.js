const store = require('./store')

// variables for onStartGame function
const gameBoard = ['', '', '', '', '', '', '', '', '']
store.gameBoard = gameBoard
let player
let gameCounter = 0
let win = false
let moveCounter = 0
const eventListener = document.getElementById('listen')

const onSignUpSuccess = function (response) {
  console.log('in onSignUpSuccess')
  $('#message').text(`Thank you for signing up ${response.user.email}. You can now log in.`)
  $('#sign-up').trigger('reset')
}

const onSignUpFailure = function () {
  console.log('in onSignUpFailure')
  $('#message').text('Signed up failed')
  $('#sign-up').trigger('reset')
}
const onSignInSuccess = function (response) {
  console.log('in onSignInSuccess ', response)
  $('#welcome-message').show()
  $('#fun-message').show()
  $('#welcome-message').text(`Shall we play a game ${response.user.email}?`)
  $('#fun-message').text('How about GLOBAL THERMONUCLEAR WAR?')
  store.token = response.user.token
  $('#sign-in').trigger('reset')
  $('#message').hide()
  $('#sign-in').hide()
  $('#sign-up').hide()
  $('#sign-out').show()
  $('#start-game').show()
}

const onSignInFailure = function () {
  console.log('in onSignInFailure')
  $('#message').text('Signed in failed')
  $('#sign-in').trigger('reset')
}
const onSignOutSuccess = function () {
  console.log('in onSignOutSuccess ')
  $('#message').show()
  $('#message').text('Sign out successful.')
  $('#sign-in').show()
  $('#sign-up').show()
  $('#sign-out').hide()
  $('#game-board').hide()
  $('#start-game').hide()
}

const onSignOutFailure = function () {
  console.log('in onSignOutFailure')
  $('#message').text('Signed out failed')
}

const onCreateGameSuccess = function () {
  console.log('in oCGS')
  gameCounter++
  // checks game counter to set initial player
  if (gameCounter % 2 === 0) {
    player = 'O'
  } else {
    player = 'X'
  }
  eventListener.addEventListener('click', setGamePiece)


}
const setGamePiece = function (event) {
  moveCounter++
  const id = event.target.id
  console.log(id)
  // check if space is open
  if (gameBoard[id] === '') {
    gameBoard[id] = player
    // send game update to api goes here
    event.target.innerText = player
    win = checkForWin(gameBoard, player)
    if (moveCounter === 9) {
      moveCounter = 0
      eventListener.removeEventListener('click', setGamePiece)
      $('#message-bottom').show()
      $('#message-bottom').text('Tie')
    }
    if (win === true) {
      eventListener.removeEventListener('click', setGamePiece)
      moveCounter = 0
      $('#message-bottom').show()
      $('#message-bottom').text(player + ' Wins!!!')
    } else {
    // change player
      player = player === 'X' ? 'O' : 'X'
    }
  }
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

const onCreateGameFailure = function () {
  console.log('in oCGF')
}
module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onSignOutSuccess,
  onSignOutFailure,
  onCreateGameSuccess,
  onCreateGameFailure
}
