export const metadata = {
  title: 'SONIC API Manual',
  description: 'Welcome to the SONIC API manual page',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <style>{`
          body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
            color: #333;
          }
          header {
            background-color: #282c34;
            padding: 20px;
            text-align: center;
            color: white;
          }
          main {
            padding: 20px;
            max-width: 800px;
            margin: 0 auto;
            background-color: white;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          }
          footer {
            background-color: #282c34;
            color: white;
            text-align: center;
            padding: 10px;
            position: fixed;
            bottom: 0;
            width: 100%;
          }
        `}</style>
      </head>
      <body>
        <header>
          <img src="/favicon.ico" alt="SONIC API Logo" width="48" />
          <h1>{metadata.title}</h1>
          <p>{metadata.description}</p>
        </header>
        <main>{children}</main>
      </body>
    </html>
  )
}
