"use client";
import Link from "next/link";
import { Github, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import logo from "@/public/logo-light.png";
import logodark from "@/public/logo-dark.png";
import { useTheme } from "next-themes";

export function Footer() {
  const { theme } = useTheme();
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-3 sm:px-4 py-8 sm:py-12">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
          <div className="col-span-2 sm:col-span-1 space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              {theme?.includes("light") ? <Image src={logo} alt="logo" /> : <Image src={logodark} alt="logo" />}
            </Link>
            <p className="text-xs sm:text-sm text-muted-foreground">Professional API learning platform for developers worldwide.</p>
          </div>

          <div>
            <h3 className="font-semibold mb-3 sm:mb-4 text-sm">Learn</h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link href="/explore" className="text-muted-foreground hover:text-primary">
                  Explore APIs
                </Link>
              </li>
              <li>
                <Link href="/docs" className="text-muted-foreground hover:text-primary">
                  Documentation
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3 sm:mb-4 text-sm">Support</h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-primary">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3 sm:mb-4 text-sm">Connect</h3>
            <div className="flex flex-wrap gap-2">
              <Button variant="ghost" size="sm" asChild>
                <Link href="https://github.com/Osib06/learnapi" target="_blank" rel="noopener noreferrer">
                  <Github className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                  <span className="text-xs sm:text-sm">GitHub</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-xs sm:text-sm text-muted-foreground">
          <p>&copy; 2025 LearnAPI. All rights reserved.</p>
          <p className="mt-1 sm:mt-2 text-xs">
            Developed by <span className="font-semibold text-primary">Osib</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
