import type { Metadata } from "next";
import { Geist, Geist_Mono, Kaushan_Script } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import { RecipeListProvider } from "@/context/RecipeList";
import { Toaster } from "@/components/ui/sonner";
import Footer from "@/components/Footer";

const kaushanScript = Kaushan_Script({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-kuaschan-script",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RecipeHub",
  description: "Welcome to RecipeHub, where a world of delicious recipes awaits your exploration!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <RecipeListProvider>
        <html lang="en">
          <body
            className={`${geistSans.variable} ${geistMono.variable} ${kaushanScript.variable} antialiased bg-black`}
            >
            <Navbar />
            <main className="max_width pt-20">{children}</main>
            <Footer />
            <Toaster position="top-center" richColors closeButton/>
          </body>
        </html>
    </RecipeListProvider>
  );
}
