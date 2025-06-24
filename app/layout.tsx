import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
// import AutoNotificationAd from "@/components/popenderad";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LearnAPI - Explore & Learn Real APIs Instantly",
  description: "Interactive API playground with real-time response, code snippets & more. Perfect for developers to discover, test, and learn about public APIs.",
  keywords: "API, REST API, API testing, API explorer, developer tools, API documentation, tutorials, examples",
  authors: [{ name: "LearnAPI Team" }],
  openGraph: {
    title: "LearnAPI - Explore & Learn Real APIs Instantly",
    description: "Interactive API playground with real-time response, code snippets & more.",
    type: "website",
    url: "https://learnapi.springlab.in/",
    images: [
      {
        url: "http://localhost:3000/_next/static/media/logo-dark.1bd389eb.png",
        width: 1200,
        height: 630,
        alt: "LearnAPI Preview",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {/* <AutoNotificationAd /> */}
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
