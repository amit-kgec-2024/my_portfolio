import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Amit Mandal — Software Developer",
  description: "Portfolio of Amit Mandal — Software Developer crafting immersive digital experiences.",
  keywords: ["developer", "portfolio", "creative", "frontend", "react", "nextjs"],
  authors: [{ name: "Amit Mandal" }],
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ background: "#0A0A0F", color: "#F5F3EE", margin: 0 }}>
        {children}
      </body>
    </html>
  );
}
