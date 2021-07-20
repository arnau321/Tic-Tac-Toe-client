curl "https://tic-tac-toe-api-development.herokuapp.com/change-password" \
  --include \
  --request PATCH \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "credentials": {
      "old": "'"${PASSWORD}"'",
      "new": "'"${PASSWORD}"'"
    }
  }'

echo
