import { SessionAuthProvider } from "./Providers/SessionProvider";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sumit Gupta - Full Stack Web Developer | Portfolio",
  description: "Portfolio of Sumit Gupta - Full Stack Developer specializing in Next.js, React, Node.js, blockchain, and cryptocurrency technologies.",
  keywords: [
    "Web Developer",
    "Full Stack Developer",
    "Next.js",
    "React",
    "Node.js",
    "JavaScript",
    "Tailwind CSS",
    "Blockchain",
    "Cryptocurrency",
    "Solidity",
    "Portfolio",
  ].join(", "),
  authors: [
    {
      name: "Sumit Gupta",
      url: "https://yourportfolio.com",
    },
  ],
  creator: "Sumit Gupta",
  metadataBase: new URL("https://yourportfolio.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourportfolio.com",
    siteName: "Sumit Gupta - Portfolio",
    title: "Sumit Gupta - Full Stack Web Developer",
    description: "Check out my latest web development projects and professional experience.",
    images: [
      {
        url: "https://yourportfolio.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sumit Gupta Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sumit Gupta - Full Stack Developer",
    description: "Portfolio showcasing web development and blockchain expertise",
    creator: "@SumitGupta",
    images: ["https://yourportfolio.com/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://yourportfolio.com",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect to external services for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://yourportfolio.com" />
        
        {/* Additional Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        
        {/* Favicon */}
        <link rel="icon" href="/SGlogo.jpg" />
        <link rel="apple-touch-icon" href="/SGlogo.jpg" />
        
        {/* Theme Color */}
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
      </head>
      <body className={inter.className}>
        <SessionAuthProvider>{children}</SessionAuthProvider>
      </body>
    </html>
  );
}
