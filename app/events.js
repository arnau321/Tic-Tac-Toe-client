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
let gameBoard = ['', 'x', '', '', '', '', '', '', '']
const emptyGameBoard = ['', '', '', '', '', '', '', '', '']
const player = 'X'
let gameCounter = 0
const turnCounter = 0
let active = false

const onStartGame = function () {
  console.log('in onStartGame')
  clearGameBoard()
  active = true
  gameCounter++

  // send new game to api goes here
  while (active === true) {
    console.log(gameBoard)
    console.log(active)
    $('.box').on('click', returnId)
    active = false
  }
}

const clearGameBoard = function () {
  gameBoard = emptyGameBoard
  $('.box').text('')
  return gameBoard
}

const returnId = function () {
  const id = parseInt($(this).data('id'))
  console.log(id)
  gameBoard[id] = 'x'
  console.log(gameBoard)
}
module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onStartGame

}
