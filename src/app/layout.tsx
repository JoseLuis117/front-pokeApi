import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Electrolize } from "next/font/google";
import "./globals.css";
import SessionProvider from "@/components/Providers";
import { getServerSession } from "next-auth";

const inter = Electrolize({ weight: ["400"], display: 'swap', subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
  icons:{
    other: [
      {
        rel: "stylesheet",
        url: "@fortawesome/free-solid-svg-icons",
      }
    ]
  }
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider session={session}>{children}</SessionProvider>
      </body>
    </html>
  );
}
