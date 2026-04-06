import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";


export const metadata: Metadata = {
  title: "Samuel Soares Dos Santos",
  description: "Meu Site pessoal",
};

const fonteGoogleSans = localFont({
  src: [
    {
      path: "../assets/fonts/GoogleSansCode-VariableFont_wght.ttf",
      weight: "100 900",
      style: "normal",
    },
  ],
  
  variable: "--fontGoogleSans" 
});

const fonteTitulos = localFont({
  src: [
    {
      path: "../assets/fonts/titulos.ttf",
      weight: "100 900",
      style: "normal",
    },
  ],
  
  variable: "--fontTitles" 
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fonteGoogleSans.variable} ${fonteTitulos.variable}`}
    >
      
      <body>{children}</body>
    </html>
  );
}
