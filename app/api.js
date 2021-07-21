const store = require('./store')
const config = require('./config')

const signUp = function (data) {
  console.log(data)
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: data
  })
}

const signIn = function (data) {
  console.log(data)
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data: data
  })
}

const signOut = function () {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: { Authorization: 'Bearer ' + store.token }
  })
}

const createGame = function () {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: { Authorization: 'Bearer ' + store.token },
    data: { }
  })
}

const updateGame = function (game) {
  return $.ajax({
    url: config.apiUrl + '/games/' + store.game._id,
    method: 'PATCH',
    headers: { Authorization: 'Bearer ' + store.token },
    data: game
  })
}

const changePassword = function (data) {
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    headers: { Authorization: 'Bearer ' + store.token },
    data: data
  })
}

const getNumberOfGames = function () {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'GET',
    headers: { Authorization: 'Bearer ' + store.token }
  })
}

module.exports = {
  signUp,
  signIn,
  signOut,
  createGame,
  updateGame,
  changePassword,
  getNumberOfGames
}
