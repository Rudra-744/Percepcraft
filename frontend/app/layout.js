import { Inter, Plus_Jakarta_Sans, Fraunces } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/ui/ScrollToTop";

// Existing font — unchanged
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

// Footer: Plus Jakarta Sans
const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

// Footer: Fraunces — variable font, axes sirf tab kaam karta hai jab weight="variable"
const fraunces = Fraunces({
  subsets: ["latin"],
  weight: "variable",      // ✅ axes ke liye weight must be "variable"
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz"],          // ✅ ab error nahi aayega
});

export const metadata = {
  title: "Perceptcraft | Creative Design & Business Solutions",
  description:
    "We have almost 12+ years of experience helping in designing services and business solutions to make a good plan and grow your business.",
  openGraph: {
    title: "Perceptcraft | Creative Design & Business Solutions",
    description:
      "Grow your business with our expert design and tech solutions.",
    url: "https://yourclientdomain.com",
    siteName: "Perceptcraft",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        suppressHydrationWarning
        className={`
          ${inter.variable}
          ${plusJakarta.variable}
          ${fraunces.variable}
          font-sans antialiased
          bg-linear-to-br from-[#FFFdf6] via-[#E8F8F2] to-[#F1F0FE]
          min-h-screen flex flex-col overflow-x-clip w-full relative
        `}
      >
        <div className="w-full relative overflow-x-clip flex-1 flex flex-col">
          <Header />
          <main className="flex-1 w-full relative">{children}</main>
          <Footer />
        </div>
        <div className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50">
          <ScrollToTop />
        </div>
      </body>
    </html>
  );
}