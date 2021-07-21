### TIC-TAC-TOE: DESCRIPTION
This application lets the user play Tic-Tac-Toe against themselves.  The user can create an account and log in and play Tic-Tac-Toe multiple times. The games alternate from starting with X for the first game then the next game starting with O. The user can log out at any time.
This project was interesting because it practices creating an interactive user experience and connecting the game to an external server to save the games.

## IMPORTANT LINKS
- [Deployment link](https://arnau321.github.io/Tic-Tac-Toe-client/)
## SET UP STEPS
- Fork and clone this repository.
- Run npm install from terminal if necessary.
- Run grunt serve from terminal to spin up the local severer.

## SCREENSHOTS
![Login Screen](https://i.imgur.com/kF9S2fT.jpg)
![Start Screen](https://i.imgur.com/gzWYL0E.jpg)
![Game Screen](https://i.imgur.com/BrMSUqJ.jpg)
![Change Password Screen](https://i.imgur.com/c6ljHhK.jpg)
## PLANNING STORY
I started this project like any other problem.  I read the documentation completely once, then read them again while taking notes.  I continuously refer back to the documentation to keep it fresh in my mind.  
In this case I was creating a game.  So I played a couple of games on paper using the notes from the documentation to get an idea of the flow of the game which would lead to the flow of my code.  I broke the game down into sections: create user, login, game logic, user interactions, user interface, connecting to server.
Then from those categories I would break those down even further.  I try to get the problem down to its most basic elements. I would then work through each element, with lots of testing. Then I attach it to  the larger project.  Then test and retest until the element and project work as expected.  When completed I released it to my peers to test, and fix what they can break.

## WIREFRAME
![Wireframe Mobile](https://i.imgur.com/JOyIjWG.png)

## USER STORIES

1. As a user I would like to be able to sign up with email and password
2. As a user I would like to be able to sign in with email and password
3. As a user I would like to be able to sign out
4. As a game player I would like to be able to start a game of tic tac toe
5. As a game player I would like to be to place a marker on tic tac toe board
6. As a game player I would like to be to rotate turns between x and o, starting with x
7. As a game player I would like to be notified if i choose an invalid space
8. As a game player I would like to be notified of a win/loss/tie
9. As a game player I would like to be notified if i choose a space after game is over
10. As a game player I would like to be able to play again
11. Logged Out User sees
      sign up form
      sign in form
12. Logged In User sees
      sign out button
      play game button (when clicked displays the game board)

## TECHNOLOGIES USED
- jQuery
- HTML/CSS
- Bootstrap
- Sass
- Javascript

## UNSOLVED PROBLEMS
- create AI to play against

