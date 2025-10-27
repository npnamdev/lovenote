import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "THƯ MỜI CƯỚI ĐẶNG DUẨN & PHƯƠNG THANH",
  openGraph: {
    title: "THƯ MỜI CƯỚI ĐẶNG DUẨN & PHƯƠNG THANH",
    url: "https://khanhchau.site",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/dpufemrnq/image/upload/v1761554804/seo_nnutqo.png",
        width: 1200,
        height: 630,
        alt: "THƯ MỜI CƯỚI ĐẶNG DUẨN & PHƯƠNG THANH",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "THƯ MỜI CƯỚI ĐẶNG DUẨN & PHƯƠNG THANH",
    images: ["https://res.cloudinary.com/dpufemrnq/image/upload/v1761554804/seo_nnutqo.png"],
  },

  alternates: {
    canonical: "https://wedding-invitation-card-ctzi.vercel.app",
  },

  metadataBase: new URL("https://wedding-invitation-card-ctzi.vercel.app"),
};


export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  interactiveWidget: "resizes-visual",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <head>
        <meta property="fb:app_id" content="966242223397117" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body>
        {children}
        <Toaster position="top-center" duration={7000} closeButton />
      </body>
    </html>
  );
}
