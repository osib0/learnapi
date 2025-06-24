"use client";

import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { Github, Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import logo from "@/public/logo-light.png";
import logodark from "@/public/logo-dark.png";
import Image from "next/image";
import { useTheme } from "next-themes";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useTheme();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-3 sm:px-4 h-14 sm:h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image src={theme === "dark" ? logodark : logo} alt="logo" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6">
          <Link href="/explore" className="text-sm font-medium hover:text-primary transition-colors">
            Explore APIs
          </Link>
          <Link href="/docs" className="text-sm font-medium hover:text-primary transition-colors">
            Documentation
          </Link>
          <Link href="/contact" className="text-sm font-medium hover:text-primary transition-colors">
            Contact
          </Link>
        </nav>

        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon" asChild className="hidden md:flex">
            <Link href="https://github.com/Osib06/learnapi" target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
          </Button>
          <ModeToggle />

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="h-8 w-8 sm:h-10 sm:w-10">
                <Menu className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] sm:w-[300px]">
              <nav className="flex flex-col space-y-4 mt-8">
                <Link href="/explore" className="text-sm font-medium hover:text-primary transition-colors py-2" onClick={() => setIsOpen(false)}>
                  Explore APIs
                </Link>
                <Link href="/docs" className="text-sm font-medium hover:text-primary transition-colors py-2" onClick={() => setIsOpen(false)}>
                  Documentation
                </Link>
                <Link href="/contact" className="text-sm font-medium hover:text-primary transition-colors py-2" onClick={() => setIsOpen(false)}>
                  Contact
                </Link>
                <div className="border-t pt-4">
                  <Button variant="ghost" size="sm" asChild className="justify-start w-full">
                    <Link href="https://github.com/Osib06/learnapi" target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      GitHub
                    </Link>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
