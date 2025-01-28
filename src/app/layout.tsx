import type { Metadata } from "next";
import "./globals.scss";
import "bootstrap/dist/css/bootstrap.min.css";

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
                <main>{children}</main>
            </body>
        </html>
    );
}
