"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Code, ArrowLeft, Search, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "@/components/theme-toggle";
import { apiCategories } from "@/lib/api-data";
import { Suspense } from "react";
import Image from "next/image";
import logo from "@/public/logo-light.png";
import logodark from "@/public/logo-dark.png";
import { useTheme } from "next-themes";

function SidebarContent() {
  const [searchQuery, setSearchQuery] = React.useState("");
  const pathname = usePathname();

  // Filter endpoints based on search
  const filteredCategories = React.useMemo(() => {
    if (!searchQuery) return apiCategories;

    return apiCategories
      .map((category) => ({
        ...category,
        endpoints: category.endpoints.filter(
          (endpoint) => endpoint.title.toLowerCase().includes(searchQuery.toLowerCase()) || endpoint.description.toLowerCase().includes(searchQuery.toLowerCase())
        ),
      }))
      .filter((category) => category.endpoints.length > 0);
  }, [searchQuery]);

  // Get method color
  const getMethodColor = (method: string) => {
    switch (method.toUpperCase()) {
      case "GET":
        return "bg-green-100 text-green-800";
      case "POST":
        return "bg-blue-100 text-blue-800";
      case "PUT":
        return "bg-orange-100 text-orange-800";
      case "DELETE":
        return "bg-red-100 text-red-800";
      case "PATCH":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="flex flex-col h-full">
      {/* Search */}
      <div className="p-3 sm:p-4 border-b">
        <div className="relative">
          <Search className="absolute left-2 sm:left-3 top-1/2 h-3 w-3 sm:h-4 sm:w-4 -translate-y-1/2 text-muted-foreground" />
          <Input placeholder="Search endpoints..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="pl-8 sm:pl-9 text-xs sm:text-sm h-8 sm:h-10" />
        </div>
      </div>

      {/* Categories */}
      <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-4 sm:space-y-6">
        {filteredCategories.map((category) => (
          <div key={category.id}>
            <div className="flex items-center gap-2 mb-2 sm:mb-3">
              <category.icon className="h-3 w-3 sm:h-4 sm:w-4" />
              <h3 className="font-semibold text-sm sm:text-base">{category.name}</h3>
              <Badge variant="secondary" className="ml-auto text-xs">
                {category.endpoints.length}
              </Badge>
            </div>
            <div className="space-y-1 sm:space-y-2">
              {category.endpoints.map((endpoint) => (
                <Link
                  key={endpoint.id}
                  href={`/explore/${category.id}/${endpoint.id}`}
                  className={`block p-2 sm:p-3 rounded-lg border transition-colors hover:bg-accent ${pathname.includes(endpoint.id) ? "bg-accent border-primary" : ""}`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <Badge variant="secondary" className={`text-xs ${getMethodColor(endpoint.method)}`}>
                      {endpoint.method}
                    </Badge>
                    <span className="font-medium text-xs sm:text-sm truncate">{endpoint.title}</span>
                  </div>
                  <p className="text-xs text-muted-foreground line-clamp-2">{endpoint.description}</p>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ExploreLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  const { theme } = useTheme();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex h-14 sm:h-16 items-center justify-between px-3 sm:px-4">
          <div className="flex items-center space-x-2 sm:space-x-4">
            <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon" className="h-8 w-8 sm:h-10 sm:w-10">
                  <Menu className="h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[280px] sm:w-80 p-0">
                <Suspense fallback={<div>Loading...</div>}>
                  <SidebarContent />
                </Suspense>
              </SheetContent>
            </Sheet>

            <Button variant="ghost" size="sm" asChild className="text-xs sm:text-sm">
              <Link href="/">
                <ArrowLeft className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                <span className="hidden xs:inline">Back to Home</span>
                <span className="xs:hidden">Back</span>
              </Link>
            </Button>
            <Link href="/" className="flex items-center space-x-2">
              <Image src={theme === "dark" ? logodark : logo} alt="logo" />
            </Link>
          </div>
          <ThemeToggle />
        </div>
      </header>

      <div className="flex">
        {/* Desktop Sidebar */}
        <aside className="hidden lg:block w-80 border-r bg-muted/10 min-h-[calc(100vh-4rem)]">
          <Suspense fallback={<div className="p-4">Loading sidebar...</div>}>
            <SidebarContent />
          </Suspense>
        </aside>

        {/* Main Content */}
        <main className="flex-1 min-h-[calc(100vh-3.5rem)] sm:min-h-[calc(100vh-4rem)]">
          <Suspense fallback={<div className="p-4 sm:p-6">Loading...</div>}>{children}</Suspense>
        </main>
      </div>
    </div>
  );
}
