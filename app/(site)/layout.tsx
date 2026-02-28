import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import { JetBrains_Mono, Outfit, Syne } from "next/font/google";
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
  metadataBase: new URL("https://joelfickson.com"),
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
    url: "/",
    images: [{ url: "/og.jpg", width: 1200, height: 630 }],
    locale: "en_US",
    siteName: "Joel Fickson Ngozo",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@joelfickson",
    site: "@joelfickson",
    images: ["/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  alternates: {
    canonical: "/",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Joel Fickson Ngozo",
              url: "https://joelfickson.com",
              jobTitle: "Founder & Software Engineer",
              sameAs: [
                "https://github.com/joelfickson",
                "https://linkedin.com/in/joelfickson",
                "https://x.com/joelfickson",
              ],
            }),
          }}
        />
        <ThemeProvider>
          <Navigation />
          <main className="site-shell min-h-screen pt-16 overflow-x-clip">
            <div className="ambient-orb ambient-orb-a" />
            <div className="ambient-orb ambient-orb-b" />
            <div className="relative z-10">{children}</div>
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
