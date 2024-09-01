Made by NikitaY (C) 01-Sep-2024, nikitay.com

## SONIC API albums cover service

This is a simple API server which returns an arist cover.

Request has to be sent to /api/album-cover?artist=ARTIST_NAME. 

Service will process the artist name normalizing and removing "the" for example. Service will then look for a matching pair specified in file database (file /data/artist-covers.json) returning a file back.

API is protected by single key, which is set in .env file (see .env.example to define yours)

If image is not found it will still return an image of a vinyl disk (see public/covers/not-found.webp), name is hardcoded in the source file.

Cheers and good luck! 