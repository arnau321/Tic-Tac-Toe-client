const store = require('./store')
const config = require('./config')

const signUp = function (data) {
  console.log(data)
  return $.ajax({
    url: 'https://tic-tac-toe-api-production.herokuapp.com/sign-up',
    method: 'POST',
    data: data
  })
}

const signIn = function (data) {
  console.log(data)
  return $.ajax({
    url: 'https://tic-tac-toe-api-production.herokuapp.com/sign-in',
    method: 'POST',
    data: data
  })
}

const signOut = function () {
  return $.ajax({
    url: 'https://tic-tac-toe-api-production.herokuapp.com/sign-out',
    method: 'DELETE',
    headers: { Authorization: 'Bearer ' + store.token }
  })
}

module.exports = {
  signUp,
  signIn,
  signOut

}
