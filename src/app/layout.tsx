import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://albert-william-saputra-portfolio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Albert William Saputra | Fullstack Developer",
    template: "%s | Albert William Saputra",
  },
  description:
    "Personal portfolio of Albert William Saputra, an Informatics student, fullstack developer, and AI/computer vision enthusiast.",
  keywords: [
    "Albert William Saputra",
    "Fullstack Developer",
    "Computer Vision",
    "AI",
    "Next.js",
    "Universitas Ma Chung",
    "Portfolio",
  ],
  authors: [{ name: "Albert William Saputra" }],
  creator: "Albert William Saputra",
  manifest: "/site.webmanifest",
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Albert William Saputra | Fullstack Developer",
    description:
      "Fullstack developer and AI/computer vision enthusiast building useful applications with AI, data, and modern web technology.",
    siteName: "Albert William Saputra Portfolio",
    images: [
      {
        url: "/photos/albert-profile.png",
        width: 768,
        height: 1344,
        alt: "Albert William Saputra",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Albert William Saputra | Fullstack Developer",
    description:
      "Informatics student focused on fullstack development, databases, data science, and computer vision.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#F8FAFC",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${plusJakartaSans.variable} ${jetBrainsMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
