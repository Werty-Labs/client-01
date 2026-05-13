import type { Metadata } from "next";
import { Inter, Playfair_Display,Bodoni_Moda} from "next/font/google";
import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";
import { JsonLd } from "@/components/site/json-ld";
import { Providers } from "@/components/providers";
import { buildMetadata } from "@/lib/metadata";
import { organizationJsonLd } from "@/lib/structured-data";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfairDisplay = Bodoni_Moda({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = buildMetadata({
  title: siteConfig.name,
  description: siteConfig.description,
  path: "/",
  image: siteConfig.defaultOgImage,
  keywords: siteConfig.keywords,
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfairDisplay.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-background text-foreground">
        <JsonLd data={organizationJsonLd()} />
        <Providers>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
