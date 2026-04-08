import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Personal Hotspot | Portfolio",
  description:
    "Explore my portfolio of innovative web development projects and creative solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://core.unipixer.com" />
        <link rel="dns-prefetch" href="https://core.unipixer.com" />
        <link rel="icon" href="/personal-hotspot/images/favicon.ico" />
        <link rel="stylesheet" href="/vendor/css/bundle.min.css" />
        <link rel="stylesheet" href="/vendor/css/LineIcons.min.css" />
        <link rel="stylesheet" href="/vendor/css/jquery.fancybox.min.css" />
        <link rel="stylesheet" href="/vendor/css/owl.carousel.min.css" />
        <link rel="stylesheet" href="/personal-hotspot/css/tootik.min.css" />
        <link rel="stylesheet" href="/personal-hotspot/css/line-awesome.min.css" />
        <link rel="stylesheet" href="/personal-hotspot/css/jquery.pagepiling.css" />
        <link rel="stylesheet" href="/personal-hotspot/css/style.css" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Portfolio Developer",
              jobTitle: "Web Developer & Designer",
              knowsAbout: [
                "Web Development",
                "UI/UX Design",
                "JavaScript",
                "React",
                "Node.js",
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
