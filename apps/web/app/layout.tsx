import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "The DEV Side — Where Ideas Go Live",
    template: "%s | The DEV Side",
  },
  description:
    "The DEV Side is a student-led software team building modern, functional, and scalable digital solutions — from enterprise systems to intelligent web applications.",
  keywords: [
    "The DEV Side",
    "software development",
    "student developers",
    "web development",
    "enterprise solutions",
    "ERP",
  ],
  authors: [{ name: "The DEV Side" }],
  creator: "The DEV Side",
  metadataBase: new URL("https://thedevside.dev"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://thedevside.dev",
    title: "The DEV Side — Where Ideas Go Live",
    description:
      "Student-led software team building modern, scalable digital solutions.",
    siteName: "The DEV Side",
  },
  twitter: {
    card: "summary_large_image",
    title: "The DEV Side — Where Ideas Go Live",
    description:
      "Student-led software team building modern, scalable digital solutions.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("dark", "font-sans", geist.variable)}>
      <body className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
