const store = require('./store')

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
  $('#message').text(`Sign in successful ${response.user.email}`)
  store.token = response.user.token
  $('#sign-in').trigger('reset')
  $('#sign-in').hide()
  $('#sign-up').hide()
  $('#sign-out').show()
}

const onSignInFailure = function () {
  console.log('in onSignInFailure')
  $('#message').text('Signed in failed')
  $('#sign-in').trigger('reset')
}
const onSignOutSuccess = function (response) {
  console.log('in onSignOutSuccess ', response)
  $('#message').text('Sign out successful.')
  $('#sign-in').show()
  $('#sign-up').show()
  $('#sign-out').hide()
}

const onSignOutFailure = function () {
  console.log('in onSignOutFailure')
  $('#message').text('Signed out failed')
}
module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onSignOutSuccess,
  onSignOutFailure
}
