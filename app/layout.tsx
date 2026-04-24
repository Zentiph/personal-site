import type { Metadata } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

const plexSans = IBM_Plex_Sans({
  variable: "--font-sans",
  weight: "400",
  subsets: ["latin"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  weight: "400",
  subsets: ["latin"],
});

function getMetadataBase() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  if (!siteUrl) {
    console.error("Missing NEXT_PUBLIC_SITE_URL");
    return "http://localhost:3000";
  }
  return new URL(siteUrl);
}

export const metadata: Metadata = {
  metadataBase: getMetadataBase(),
  title: "Gavin Borne",
  description: "Gavin Borne's portfolio site",
  openGraph: {
    images: ["/me.jpeg"],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plexSans.variable} ${plexMono.variable} scroll-pt-24`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Gavin Borne",
              url: "https://gavinborne.com",
              email: "gavin.bor0925@gmail.com",
              sameAs: [
                "https://github.com/Zentiph",
                "https://linkedin.com/in/gavin-borne",
              ],
              jobTitle: "Full-Stack Developer",
            }),
          }}
        />
        <link rel="preconnect" href="https://api.github.com" />
      </head>

      <body className={"antialiased font-sans"}>{children}</body>
    </html>
  );
}
