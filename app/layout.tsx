import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Samuel Soares Dos Santos",
  description: "Meu Site pessoal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
    >
      
      <body>{children}</body>
    </html>
  );
}
