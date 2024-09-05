Made by NikitaY (C) 01-Sep-2024, nikitay.com

# **SONIC API - Album Cover Service**

Welcome to **SONIC API**, a simple and efficient API service that returns an album cover image for a given artist. This service normalizes the artist's name, removes unnecessary words like "the", and fetches the album cover based on a predefined mapping of artist names to cover images.

## Overview

This API allows you to:
- Fetch an album cover image for a given artist.
- Use the API with or without an API key depending on your environment.
- Retrieve a default "not found" image when an artist's cover is not available.

## How It Works

1. The API normalizes the artist name to avoid variations (e.g., capitalization, special characters).
2. It then searches for the artist in a JSON-based artist-cover mapping file (`/data/artist-covers.json`).
3. If the artist is found, it returns the corresponding `.webp` image from the `/public/covers` folder.
4. If not found, it returns a default "not-found.webp" image.

## Getting Started

### Installation

1. Clone the repository:
```bash
git clone https://github.com/ncradio-fm/sonic-api
```

2. Set up your environment variables. Create a .env.local file using the provided env-example:
```
cp env-example .env.local
```

3. Update .env.local with your configuration:
```
API_KEY=your-api-key-here
COVERS_FILE='artist-covers.json'
```

### Running the Application
To start the development server, run:
```
npm run dev
```

This will run the server in development mode. The API will be available at http://localhost:3000

### API Request
Endpoint: 
- GET /api/album-cover?artist=<artist-name>

Headers:
- In production mode, you must provide the x-api-key header with the correct API key.

Response:
- If the artist is found: Returns a .webp image with the album cover.
- If the artist is not found: Returns a "not found" .webp image (e.g., a vinyl record).

## Example Requests
### Request:
```
GET http://localhost:3000/api/album-cover?artist=The%20Beatles
```
### Response:
- If The Beatles exists in the JSON file, returns the album cover as a .webp image.
- If The Beatles does not exist in the JSON file, returns the default "not found" image.

### Error Handling:
- 400 Bad Request: Returned if the artist parameter is not provided.
- 401 Unauthorized: Returned if the API key is missing or incorrect (in production mode).
- 500 Internal Server Error: Returned if there is an error processing the request.

## File Structure
/api/album-cover/route.ts: API route that handles requests for album covers.
/lib/albumCoverService.ts: Service that handles normalization and retrieval of album covers.
/data/artist-covers.json: Contains mappings of artist names to cover files.
/public/covers/: Stores the .webp cover images, including the default "not found" image.

## Testing
To test the API for multiple artists, you can use the provided shell script tests/test-10-artists.sh to test 10 different artists.
```
bash tests/test-10-artists.sh
```

## Adding New Artists
To add new artist cover mappings:
1. Add the artist's name and the cover file name to the artist-covers.json file.
```
{
  "name": "artist name",
  "coverFile": "artist-name-cover-file.webp"
}
```
2. Place the corresponding .webp file in the /public/covers/ folder.

## Environment Variables

- API_KEY: The API key to protect your API in production.
- COVERS_FILE: The path to the JSON file that contains the artist-to-cover mappings (artist-covers.json).

## License
This project is licensed under the MIT License. Feel free to use and modify it as per your needs.

## Author
Made by NikitaY.
(C) 01-Sep-2024, nikitay.com