import type { Metadata } from "next";
import "./globals.css";

import {
  ClerkProvider,
} from "@clerk/nextjs";

export const metadata: Metadata = {
  title: "Trustly",
  description: "Your trusty job and internship seeker platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <link rel="shortcut icon" href="/logo.svg" type="image/x-icon" />
        <body>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
