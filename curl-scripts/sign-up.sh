#https://tic-tac-toe-api-production.herokuapp.com
#$ EMAIL="aa@aa.aa" PASSWORD="1" sh curl-scripts/sign-up.sh
curl "https://tic-tac-toe-api-production.herokuapp.com/sign-up" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "email": "'"${EMAIL}"'",
      "password": "'"${PASSWORD}"'",
      "password_confirmation": "'"${PASSWORD}"'"
    }
  }'

echo
