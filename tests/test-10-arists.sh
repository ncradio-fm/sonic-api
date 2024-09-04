#!/bin/bash

# List of artists with long names or spaces from the JSON
artists=(
  "30 seconds to mars"
  "all american rejects"
  "florence and machine"
  "frankie goes to hollywood"
  "bruce hornsby & range"
  "mumford & sons"
  "peter bjorn and john"
  "foo fighters"
  "kaiser chiefs"
  "orchestral manoeuvres in dark"
)

# Base URL for the API request
base_url="http://localhost:3000/api/album-cover?artist="

# Loop through the artist names and send curl request
for artist in "${artists[@]}"; do
  # URL encode the artist name (replace spaces with %20)
  artist_encoded=$(echo "$artist" | sed 's/ /%20/g')

  # Send the request and capture the HTTP status code
  response=$(curl -s -o /dev/null -w "%{http_code}" "${base_url}${artist_encoded}")

  # Print the result based on the response code
  if [ "$response" -eq 200 ]; then
    echo "SONIC-API [TEST]: [+] Success - Cover image found for artist '$artist'"
  else
    echo "SONIC-API [TEST]: [-] Error - Failed to fetch cover image for artist '$artist' (HTTP Code: $response)"
  fi
done
