import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { QuickActions } from "@/components/quick-actions";
import "./globals.css";

export const metadata: Metadata = {
  title: "Laredo, TX | Laredo Family Foot Center: Professional Podiatrists",
  description:
    "Laredo Family Foot Center manages and treats foot pain that has been caused by injuries or skin infections such as fractures, Athlete's Foot, Bunions, and more.",
  icons: {
    icon: [
      {
        url: "/icon.png",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "Dr. Daniel Bell, DPM | Foot & Ankle Care | Laredo, TX",
    description:
      "Professional foot and ankle care in Laredo, TX. Dr. Daniel Bell specializes in foot pain, heel pain, ankle injuries, and diabetic foot care since 1994.",
    url: "https://preview-lffc.laredowebdesigns.com",
    siteName: "Family Foot Center of Laredo",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Family Foot Center of Laredo — Dr. Daniel Bell, DPM",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Daniel Bell, DPM | Foot & Ankle Care | Laredo, TX",
    images: ["/og-image.png"],
  },
};

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: [{ media: "(prefers-color-scheme: light)", color: "#880303" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <SiteHeader />
        {children}
        <SiteFooter />
        <QuickActions />
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
