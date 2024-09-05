import Image from "next/image";

export default function Home() {
  return (
    <div>
      <p>
        Welcome to <strong>SONIC API</strong>, a simple and efficient API service that
        returns an album cover image for a given artist. This service normalizes the
        artist's name, removes unnecessary words like "the", and fetches the album
        cover based on a predefined mapping of artist names to cover images.
      </p>

      <h2>Overview</h2>
      <ul>
        <li>Fetch an album cover image for a given artist.</li>
        <li>Use the API with or without an API key depending on your environment.</li>
        <li>Retrieve a default "not found" image when an artist's cover is not available.</li>
      </ul>

      <h2>How It Works</h2>
      <ol>
        <li>The API normalizes the artist name to avoid variations (e.g., capitalization, special characters).</li>
        <li>It searches for the artist in a JSON-based artist-cover mapping file (`/data/artist-covers.json`).</li>
        <li>If the artist is found, it returns the corresponding `.webp` image from the `/public/covers` folder.</li>
        <li>If not found, it returns a default "not-found.webp" image.</li>
      </ol>

      <h2>Getting Started</h2>
      <h3>Installation</h3>
      <ol>
        <li>Clone the repository:</li>
        <pre><code>git clone https://github.com/ncradio-fm/sonic-api</code></pre>
        <li>Set up your environment variables. Create a <code>.env.local</code> file using the provided env-example:</li>
        <pre><code>cp env-example .env.local</code></pre>
        <li>Update <code>.env.local</code> with your configuration:</li>
        <pre><code>
        API_KEY=your-api-key-here<br/>
        COVERS_FILE='artist-covers.json'
        </code></pre>
      </ol>

      <h3>Running the Application</h3>
      <p>To start the development server, run:</p>
      <pre><code>npm run dev</code></pre>
      <p>This will run the server in development mode. The API will be available at <code>http://localhost:3000</code>.</p>

      <h3>API Request</h3>
      <p>Endpoint:</p>
      <pre><code>GET /api/album-cover?artist=&lt;artist-name&gt;</code></pre>

      <h3>Headers</h3>
      <ul>
        <li>In production mode, you must provide the <code>x-api-key</code> header with the correct API key.</li>
      </ul>

      <h3>Example Requests</h3>
      <p>Request:</p>
      <pre><code>GET http://localhost:3000/api/album-cover?artist=The%20Beatles</code></pre>

      <p>Response:</p>
      <ul>
        <li>If The Beatles exists in the JSON file, returns the album cover as a <code>.webp</code> image.</li>
        <li>If The Beatles does not exist in the JSON file, returns the default "not found" image.</li>
      </ul>

      <h3>Error Handling</h3>
      <ul>
        <li><strong>400 Bad Request</strong>: Returned if the <code>artist</code> parameter is not provided.</li>
        <li><strong>401 Unauthorized</strong>: Returned if the API key is missing or incorrect (in production mode).</li>
        <li><strong>500 Internal Server Error</strong>: Returned if there is an error processing the request.</li>
      </ul>

      <h2>Environment Variables</h2>
      <ul>
        <li><strong>API_KEY</strong>: The API key to protect your API in production.</li>
        <li><strong>COVERS_FILE</strong>: The path to the JSON file that contains the artist-to-cover mappings (<code>artist-covers.json</code>).</li>
      </ul>

      <h2>API Usage Example (Production)</h2>
      <p>To call the API in production, you need to include the <code>x-api-key</code> header with your request. Below is an example using <code>curl</code>:</p>
      <pre><code>
      curl -H "x-api-key: your-api-key-here" "https://your-production-url/api/album-cover?artist=The%20Beatles"
      </code></pre>

      <p>This will send a GET request to the API to fetch the album cover for the artist <code>The Beatles</code>, with the API key provided in the headers.</p>
      <p>Ensure that you replace <code>your-api-key-here</code> with the actual API key and <code>your-production-url</code> with the correct production URL of your API.</p>

      <h2>Author</h2>
      <p>
        Made by <strong>NikitaY</strong>. <br />
        (C) 01-Sep-2024, <a href="https://nikitay.com">nikitay.com</a>
      </p>
    </div>
  );
}
