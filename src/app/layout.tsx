import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "A.L Solucções Informática",
  description: "Fento em NextJs pelo Állan Oliviera",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <link rel="shortcut icon" href="logo.ico" type="image/x-icon" />
      <body className={inter.className}>{children}</body>
    </html>
  );
}

