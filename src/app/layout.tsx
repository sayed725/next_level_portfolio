import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sayed's Portfolio",
  description: "Portfolio of Abu Sayed Khan",
  icons: {
    icon: "/just_s_logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body className={inter.className}>
        <div className="aurora-bg">
          <div className="aurora-blob aurora-blob-1"></div>
          <div className="aurora-blob aurora-blob-2"></div>
          <div className="aurora-blob aurora-blob-3"></div>
          <div className="bg-grid fixed inset-0"></div>
        </div>
        <Navbar />
        <main className="relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
