#$ CELLS="["","","","","","","","",""]" OVER="false" TOKEN="22e65c7d310134e24637f1ffa4cafe17" sh curl-scripts/create-new-game.sh
# {"expose":true,"statusCode":400,"status":400,"body":"{\n    \"credentials\": {\n      \"cells\": \"[\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\"]\",\n      \"over\": \"false\"\n      \"owner\": \"22e65c7d310134e24637f1ffa4cafe17\"\n    }\n  }","type":"entity.parse.failed"}

curl "https://tic-tac-toe-api-development.herokuapp.com/games" \
  --include \
  --request POST \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{ }'

echo
