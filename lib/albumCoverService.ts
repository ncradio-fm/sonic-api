// lib/albumCoverService.ts
import { promises as fs } from "fs";
import path from "path";

const COVERS_FILE = process.env.COVERS_FILE || "";
interface ArtistCover {
  name: string;
  coverFile: string;
}

interface ArtistCoversData {
  artists: ArtistCover[];
}

// Getting the artist covers data (name-file pair)
async function getArtistCovers(): Promise<ArtistCoversData> {
  const filePath = path.join(process.cwd(), "data", COVERS_FILE);
  const jsonData = await fs.readFile(filePath, "utf8");
  return JSON.parse(jsonData) as ArtistCoversData;
}

// Normalizing the artist name
function normalizeArtistName(name: string): string {
  // Convert to lowercase
  let normalized = name.toLowerCase();

  // Remove all occurrences of "the" (as a word) from the name
  normalized = normalized.replace(/\bthe\b\s*/g, "");

  // Remove any special characters and extra spaces
  normalized = normalized
    .replace(/[^\w\s]/g, "")
    .replace(/\s+/g, " ")
    .trim();

  return normalized;
}

// Getting the album cover
export async function getAlbumCover(artist: string): Promise<Buffer> {
  const normalizedArtist = normalizeArtistName(artist);
  const artistCovers = await getArtistCovers();

  const artistCover = artistCovers.artists.find(
    (a) => normalizeArtistName(a.name) === normalizedArtist
  );

  let imagePath: string;

  if (artistCover) {
    imagePath = path.join(
      process.cwd(),
      "public",
      "covers",
      artistCover.coverFile
    );
  } else {
    imagePath = path.join(process.cwd(), "public", "covers", "not-found.webp");
  }

  return fs.readFile(imagePath);
}
