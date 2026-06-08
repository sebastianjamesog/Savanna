import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import QuoteModal from "@/components/QuoteModal";

export const metadata = {
  title: "Savanna Crest Global General Trading LLC | Global Procurement Solutions",
  description: "Savanna Crest Global General Trading LLC provides industrial equipment, machinery, vehicles, chemicals, medical supplies, and procurement solutions across the Middle East and Africa.",
  keywords: [
    "global procurement",
    "industrial supply",
    "construction equipment",
    "agricultural machinery",
    "medical equipment supplier",
    "industrial chemicals",
    "international trade",
    "Middle East procurement",
    "Africa procurement"
  ]
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-on-surface font-body-md">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <QuoteModal />
      </body>
    </html>
  );
}
