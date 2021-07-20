const store = require('./store')

const onSignUpSuccess = function (response) {
  $('#message').text(`Thank you for signing up ${response.user.email}. You can now log in.`)
  $('#sign-up').trigger('reset')
}

const onSignUpFailure = function () {
  $('#message').text('Signed up failed')
  $('#sign-up').trigger('reset')
}
const onSignInSuccess = function (response) {
  $('#sign-in').trigger('reset')
  // saved information from response
  store.id = response.user._id
  store.token = response.user.token
  store.userEmail = response.user.email
  // shows
  $('#sign-out').show()
  $('#start-game').show()
  $('#change-password').show()
  $('#welcome-message').show()
  $('#fun-message').show()
  // hides
  $('#message').hide()
  $('#sign-in').hide()
  $('#sign-up').hide()
  $('#change-password-form').hide()
  // messages
  $('#welcome-message').text(`Shall we play a game ${response.user.email}?`)
  $('#fun-message').text('How about GLOBAL THERMONUCLEAR WAR?')
}

const onSignInFailure = function () {
  console.log('in onSignInFailure')
  $('#message').text('Signed in failed')
  $('#sign-in').trigger('reset')
}
const onSignOutSuccess = function () {
  console.log('in onSignOutSuccess ')
  // shows
  $('#message').show()
  $('#sign-in').show()
  $('#sign-up').show()
  // hides
  $('#sign-out').hide()
  $('#game-board').hide()
  $('#start-game').hide()
  $('#change-password').hide()
  $('#welcome-message').hide()
  $('#fun-message').hide()
  // message
  $('#message').text('Sign out successful.')
}

const onSignOutFailure = function () {
  console.log('in onSignOutFailure')
  $('#message').text('Signed out failed')
}

const onCreateGameSuccess = function (response) {
  store.game = response.game
  console.log('in oCGS', response.game)
}

const onCreateGameFailure = function () {
  console.log('in oCGF')
}

const onChangePasswordSubmitSuccess = function (response) {
  console.log('in onChangePasswordSubmitSuccess')
  $('#change-password-form').trigger('reset')
  $('#message').show()
  $('#message').text(store.userEmail + ' password successfully changed.')
  $('#change-password-form').hide()
  $('#game-board').hide()
  $('#start-game').show()
}
const onChangePasswordSubmitFailure = function () {
  console.log('in onChangePasswordSubmitFailure')
  $('#message').show()
  $('#message').text('Password change failed, try again.')
}
module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onSignOutSuccess,
  onSignOutFailure,
  onCreateGameSuccess,
  onCreateGameFailure,
  onChangePasswordSubmitSuccess,
  onChangePasswordSubmitFailure
}
