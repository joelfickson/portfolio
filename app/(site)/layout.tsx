import type { Metadata } from "next";
import { Syne, Outfit, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import "../globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Joel Fickson Ngozo - Founder & Engineer",
    template: "%s | Joel Fickson Ngozo",
  },
  description:
    "Technical founder and full-stack engineer building products that move Africa forward. Founder of Sekuire, Elior Health, and Vwaza.",
  openGraph: {
    title: "Joel Fickson Ngozo",
    description:
      "Technical founder and full-stack engineer building products that move Africa forward.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@joaborun",
  },
};

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${syne.variable} ${outfit.variable} ${jetbrainsMono.variable} font-sans bg-stone-50 dark:bg-stone-950 text-stone-800 dark:text-stone-200 antialiased`}
      >
        <ThemeProvider>
          <Navigation />
          <main className="min-h-screen pt-16">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
