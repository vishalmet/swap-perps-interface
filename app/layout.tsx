import type { Metadata } from "next";
import "./globals.css";
import Header from '@/components/Header';

export const metadata: Metadata = {
  title: "Kanalabs - Advanced DeFi & Trading Platform",
  description: "Kanalabs is a cutting-edge DeFi platform offering advanced trading, swapping, and perpetual futures trading with multi-chain support. Trade with confidence on Ethereum, Polygon, BSC, and more.",
  keywords: ["DeFi", "trading", "cryptocurrency", "swap", "perpetuals", "Ethereum", "Polygon", "BSC", "blockchain", "finance"],
  authors: [{ name: "Kanalabs Team" }],
  creator: "Kanalabs",
  publisher: "Kanalabs",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kanalabss.vercel.app",
    siteName: "Kanalabs",
    title: "Kanalabs - Advanced DeFi & Trading Platform",
    description: "Kanalabs is a cutting-edge DeFi platform offering advanced trading, swapping, and perpetual futures trading with multi-chain support.",
    images: [
      {
        url: "/icon.png",
        width: 512,
        height: 512,
        alt: "Kanalabs Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kanalabs - Advanced DeFi & Trading Platform",
    description: "Cutting-edge DeFi platform for advanced trading, swapping, and perpetual futures trading with multi-chain support.",
    images: ["/icon.png"],
    creator: "@kanalabs",
    site: "@kanalabs",
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  manifest: "/manifest.json",
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#080A0A",
  colorScheme: "dark",
  category: "finance",
  classification: "DeFi Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-[#080A0A] font-manrope font-mono">
        <Header />
        {children}
      </body>
    </html>
  );
}
