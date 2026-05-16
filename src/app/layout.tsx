import type { Metadata } from "next";
import { Inter, Playfair_Display,Bodoni_Moda,Be_Vietnam_Pro} from "next/font/google";
import { Footer } from "@/components/site/footer";
import { HeaderAnimated } from "@/components/site/header-animated";
import { JsonLd } from "@/components/site/json-ld";
import { Providers } from "@/components/providers";
import { buildMetadata } from "@/lib/metadata";
import { organizationJsonLd } from "@/lib/structured-data";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

const BeVietnamPro = Be_Vietnam_Pro({
  variable: "--font-BeVietnamPro",
  weight:["100","200","300"],
  subsets: ["latin"],
});

const BodoniModa = Bodoni_Moda({
  variable: "--font-Bodoni_Moda",
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
      className={`${BeVietnamPro.variable} ${BodoniModa.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-background text-foreground">
        <JsonLd data={organizationJsonLd()} />
        <Providers>
          <div className="flex min-h-screen flex-col">
            <HeaderAnimated />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
