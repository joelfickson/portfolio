import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import { Instrument_Sans, Literata } from "next/font/google";
import "../globals.css";

const literata = Literata({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-literata",
  display: "swap",
});

const instrument = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap",
});

const description =
  "Engineer and founder. Developer Success Engineer at Vercel and founder of Chia, Kazuni, Sekuire, Vwaza and Luwawa. From Malawi, living in Berlin.";

export const metadata: Metadata = {
  metadataBase: new URL("https://joelfickson.com"),
  title: {
    default: "Joel Fickson Ngozo - Engineer and founder",
    template: "%s | Joel Fickson Ngozo",
  },
  description,
  openGraph: {
    title: "Joel Fickson Ngozo",
    description,
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
        className={`${literata.variable} ${instrument.variable} bg-bg font-serif text-ink antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Joel Fickson Ngozo",
              url: "https://joelfickson.com",
              jobTitle: "Developer Success Engineer",
              worksFor: {
                "@type": "Organization",
                name: "Vercel",
                url: "https://vercel.com",
              },
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
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
