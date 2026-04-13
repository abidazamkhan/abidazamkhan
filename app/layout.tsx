import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
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
  title: {
    template: "%s | Abid Azam Khan",
    default: "Abid Azam Khan | Senior Full-Stack Developer",
  },
  description:
    "Explore the portfolio of Abid Azam Khan, a Senior Software Engineer specializing in high-performance web, mobile, and desktop applications.",
  alternates: {
    canonical: "https://abidazam.com",
  },
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
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
              name: "Abid Azam Khan",
              jobTitle: "Senior Full-Stack Developer & CEO",
              worksFor: {
                "@type": "Organization",
                name: "UNIPIXER",
              },
              knowsAbout: [
                "Software Engineering",
                "Full-Stack Development",
                "Mobile App Development",
                "Desktop App Development",
                "System Architecture",
                "Next.js",
                "React",
                "Node.js",
              ],

            }),
          }}
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-1BCJBQX035"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-1BCJBQX035');
          `}
        </Script>
      </head>
      <body className="min-h-full" suppressHydrationWarning>{children}</body>
    </html>
  );
}
