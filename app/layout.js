import { SessionAuthProvider } from "./Providers/SessionProvider";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sumiit Gupta",
  description: "Portfolio of Sumiit Gupta",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionAuthProvider>{children}</SessionAuthProvider>
      </body>
    </html>
  );
}
