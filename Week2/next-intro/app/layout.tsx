import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div>
          <h3>This is coming from app/layout.tsx</h3>
          <p>Page content is rendered below this container as children</p>
          <ul>
            <li>
              <Link className="text-sm" href="/home">
                Home
              </Link>
            </li>
            <li>
              <Link className="text-sm" href="/server">
                Server Components
              </Link>
            </li>
            <li>
              <Link className="text-sm" href="/client">
                Client Components
              </Link>
            </li>
            <li>
              <Link className="text-sm" href="/posts">
                Posts
              </Link>
            </li>
          </ul>
        </div>
        {children}
      </body>
    </html>
  );
}
