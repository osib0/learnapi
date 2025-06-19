import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import AutoNotificationAd from "@/components/popenderad";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LearAPI - Explore & Learn Real APIs Instantly",
  description: "Interactive API playground with real-time response, code snippets & more. Perfect for developers to discover, test, and learn about public APIs.",
  keywords: "API, REST API, API testing, API explorer, developer tools, API documentation, tutorials, examples",
  authors: [{ name: "LearAPI Team" }],
  openGraph: {
    title: "LearAPI - Explore & Learn Real APIs Instantly",
    description: "Interactive API playground with real-time response, code snippets & more.",
    type: "website",
  },
  generator: "v0.dev",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <AutoNotificationAd />
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
