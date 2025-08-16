import { Geist } from "next/font/google";
import "./globals.css";
import { BASE_URL } from "@/lib/env";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export async function metadata() {
  const siteName = "Hizratech";
  const siteDesc = "Webiste resmi hizratech";
  const siteUrl = BASE_URL;
  const siteImage = `${siteUrl}/images/logo.png`;

  return {
    title: {
      default: siteName,
      template: `%s | ${siteName}`,
    },
    description: siteDesc,
    icons: {
      icon: siteImage,
    },
    openGraph: {
      title: siteName,
      description: siteDesc,
      type: "website",
      siteName,
      url: siteUrl,
      locale: "id_ID",
      images: [
        {
          url: siteImage,
          width: 800,
          height: 800,
          alt: siteName,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: siteName,
      description: siteDesc,
      images: [siteImage],
    },
  };
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
