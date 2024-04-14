import "../styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Bharatiya Liberal Party | Home of Reform and Good Governance",
  description: "The Bharatiya Liberal Party is committed to bringing sweeping reforms in governance, promoting transparency, accountability, and citizen participation in India's political process.",
  keywords: "political reform, Bharatiya Liberal Party, good governance, transparency, accountability, citizen participation, India politics",
  og: {
    title: "Bharatiya Liberal Party | Home of Reform and Good Governance",
    type: "website",
    url: "http://www.yourwebsite.com/", // Replace with your actual site URL
    image: "http://www.yourwebsite.com/og-image.jpg", // Replace with the URL of an image optimized for social media
    description: "Explore the vision of the Bharatiya Liberal Party dedicated to reshaping Indian politics with a focus on integrity and public welfare."
  },
  twitter: {
    cardType: "summary_large_image", // or "summary" based on your preference
    site: "@BLPIndia", // Replace with your party's Twitter handle
    creator: "@BLPIndia" // Can be the same as site if the creator and the site are the same
  }
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
       <body className={`${inter.className} bg-slate-100`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
