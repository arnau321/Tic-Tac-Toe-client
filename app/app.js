// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./events')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // buttons connected to seen before login
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  // buttons connected to seen after login
  $('#sign-out').on('click', authEvents.onSignOut)
  $('#change-password').on('click', authEvents.onChangePassword)
  $('#start-game').on('click', authEvents.onStartGame)
  $('#start-game').hide()
  $('#sign-out').hide()
  $('#change-password').hide()
  $('#change-password-form').hide()
  $('#change-password-form').on('submit', authEvents.onChangePasswordSubmit)
  $('#cancel-button').on('click', authEvents.onCancelPasswordChange)
  $('#game-board').hide()
  $('#cancel-button').hide()
})
