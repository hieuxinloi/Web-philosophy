import type { Metadata } from "next";
import { Inter, Open_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lợi ích kinh tế và Quan hệ lợi ích kinh tế ở Việt Nam",
  description: "Chương 5 - Mục 5.3: Lợi ích kinh tế và Quan hệ lợi ích kinh tế ở Việt Nam",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body
        className={`${inter.variable} ${openSans.variable} antialiased bg-white text-slate-800`}
      >
        {children}
      </body>
    </html>
  );
}
