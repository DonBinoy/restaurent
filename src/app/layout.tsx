import type { Metadata } from "next";
import { Playfair_Display, Inter, Montserrat } from "next/font/google";
import NoiseOverlay from "@/components/NoiseOverlay";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  weight: ["500", "600", "700", "800"],
  variable: "--font-anton", // Keeping the same CSS variable name to avoid editing globals.css again
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sankaran Bakery | Authentic Legacy Since 1950",
  description: "The OG bakery famous for traditional sweet meats.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} ${montserrat.variable} scroll-smooth antialiased`}>
      <body className="min-h-screen flex flex-col font-sans">
        <NoiseOverlay />
        {children}
      </body>
    </html>
  );
}
