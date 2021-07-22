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
  // clears form fields after submit
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
  $('#show-number-of-games').show()
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
  $('#message').text('Signed in failed')
  $('#sign-in').trigger('reset')
}
const onSignOutSuccess = function () {
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
  $('#show-number-of-games').hide()
  $('#change-password-form').hide()
  $('#cancel-button').hide()
  // message
  $('#message').text('Sign out successful.')
}

const onSignOutFailure = function () {
  $('#message').show()
  $('#message').text('Signed out failed')
}

const onCreateGameSuccess = function (response) {
  store.game = response.game
}

const onCreateGameFailure = function () {
  $('#message').show()
  $('#message').text('Create game failed')
}

const onChangePasswordSubmitSuccess = function (response) {
  $('#change-password-form').trigger('reset')
  // shows
  $('#start-game').show()
  $('#message').show()
  $('#show-number-of-games').show()
  // hides
  $('#change-password-form').hide()
  $('#cancel-button').hide()
  $('#game-board').hide()
  // message
  $('#message').text(store.userEmail + ' password successfully changed.')
}
const onChangePasswordSubmitFailure = function () {
  $('#change-password-form').trigger('reset')
  $('#message').show()
  $('#message').text('Password change failed, try again.')
}
const onGetNumberOfGamesSuccess = function (response) {
  // get array length to determine number of games played
  const numberOfGames = response.games.length
  // hide
  $('#message').hide()
  // show
  $('#fun-message').show()
  // message
  $('#fun-message').text(`Number of Games: ${numberOfGames.toString()}`)
}
const onGetNumberOfGamesFailure = function () {
  $('#fun-message').show()
  $('#message').text('Cannot get number of games.')
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
  onChangePasswordSubmitFailure,
  onGetNumberOfGamesSuccess,
  onGetNumberOfGamesFailure
}
