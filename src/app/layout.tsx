import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Extract text",
  description: "Extract texts from images",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
