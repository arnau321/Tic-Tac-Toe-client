#$ CELLS="["","","","","","","","",""]" OVER="false" TOKEN="22e65c7d310134e24637f1ffa4cafe17" sh curl-scripts/create-new-game.sh
curl "https://tic-tac-toe-api-development.herokuapp.com/games" \
  --include \
  --request POST \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
      "game": {
        "cell": {
          "index": 0,
          "value": "x"
        },
      "over": false
      }
  }'

echo
