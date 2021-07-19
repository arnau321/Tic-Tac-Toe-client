const store = require('./store')

const signUp = function (data) {
  console.log(data)
  return $.ajax({
    url: 'https://tic-tac-toe-api-development.herokuapp.com/sign-up',
    method: 'POST',
    data: data
  })
}

const signIn = function (data) {
  console.log(data)
  return $.ajax({
    url: 'https://tic-tac-toe-api-development.herokuapp.com/sign-in',
    method: 'POST',
    data: data
  })
}

const signOut = function () {
  return $.ajax({
    url: 'https://tic-tac-toe-api-development.herokuapp.com/sign-out',
    method: 'DELETE',
    headers: { Authorization: 'Bearer ' + store.token }
  })
}

const createGame = function () {
  console.log('in  create api')
  /* return $.ajax({
    url: 'https://tic-tac-toe-api-development.herokuapp.com/games',
    method: 'POST',
    game: {

    }
  }) */
}

const updateGame = function () {
  console.log('in update api')
  /* return $.ajax({
    url: 'https://tic-tac-toe-api-development.herokuapp.com/games/' + _id,
    method: 'POST',
    game: {

    }
  }) */
}

module.exports = {
  signUp,
  signIn,
  signOut,
  createGame,
  updateGame

}
