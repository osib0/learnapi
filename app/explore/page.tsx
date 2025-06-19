import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Code, Zap, BookOpen, Package, ArrowRight, Star, Clock, Shield } from "lucide-react";
import Link from "next/link";
import { apiCategories } from "@/lib/api-data";
import Ads from "@/components/ads";
import ProfitablerateAd from "@/components/profielareaad";

export const metadata = {
  title: "API Explorer - LearAPI | Test and Learn APIs Interactively",
  description: "Explore, test, and learn from real APIs with our interactive playground. Get code examples, view responses, and understand API endpoints easily.",
  keywords: "API explorer, API testing, REST API, API documentation, developer tools, API playground",
};

export default function ExplorePage() {
  const totalEndpoints = apiCategories.reduce((total, category) => total + category.endpoints.length, 0);

  return (
    <div className="p-3 sm:p-4 lg:p-6">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="mb-6 sm:mb-8 lg:mb-12">
          <div className="flex items-center gap-2 mb-3 sm:mb-4">
            <Badge variant="secondary" className="bg-primary/10 text-primary text-xs sm:text-sm">
              🚀 Interactive API Playground
            </Badge>
          </div>
          <h1 className="text-2xl xs:text-3xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">Welcome to API Explorer</h1>
          <p className="text-muted-foreground text-sm xs:text-base sm:text-lg lg:text-xl mb-4 sm:mb-6 max-w-3xl">
            Discover, test, and learn from real APIs with our interactive playground. Get instant responses, copy-ready code examples, and comprehensive documentation - all in one
            place.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-3 sm:gap-4 mb-4 sm:mb-6">
            <div className="flex items-center gap-2 text-xs sm:text-sm">
              <Package className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
              <span className="font-medium">{apiCategories.length} Categories</span>
            </div>
            <div className="flex items-center gap-2 text-xs sm:text-sm">
              <Code className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
              <span className="font-medium">{totalEndpoints} Endpoints</span>
            </div>
            <div className="flex items-center gap-2 text-xs sm:text-sm">
              <Shield className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
              <span className="font-medium">100% Free</span>
            </div>
          </div>
        </div>
        <Ads />
        {/* Quick Start Cards */}
        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 mb-6 sm:mb-8 lg:mb-12">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="text-center pb-3 sm:pb-4">
              <div className="mx-auto mb-2 sm:mb-3 p-2 sm:p-3 bg-primary/10 rounded-full w-fit">
                <Code className="h-4 w-4 sm:h-6 sm:w-6 text-primary" />
              </div>
              <CardTitle className="text-base sm:text-lg">Interactive Testing</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <CardDescription className="text-xs sm:text-sm">
                Send real requests and see live responses with detailed status codes, headers, and timing information.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="text-center pb-3 sm:pb-4">
              <div className="mx-auto mb-2 sm:mb-3 p-2 sm:p-3 bg-primary/10 rounded-full w-fit">
                <BookOpen className="h-4 w-4 sm:h-6 sm:w-6 text-primary" />
              </div>
              <CardTitle className="text-base sm:text-lg">Code Examples</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <CardDescription className="text-xs sm:text-sm">Get copy-ready code snippets in Node.js, Python, cURL, Ruby, PHP and more programming languages.</CardDescription>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow xs:col-span-2 lg:col-span-1">
            <CardHeader className="text-center pb-3 sm:pb-4">
              <div className="mx-auto mb-2 sm:mb-3 p-2 sm:p-3 bg-primary/10 rounded-full w-fit">
                <Zap className="h-4 w-4 sm:h-6 sm:w-6 text-primary" />
              </div>
              <CardTitle className="text-base sm:text-lg">Real-time Results</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <CardDescription className="text-xs sm:text-sm">View response times, status codes, headers, and beautifully formatted JSON responses instantly.</CardDescription>
            </CardContent>
          </Card>
        </div>

        {/* API Categories */}
        <div className="mb-6 sm:mb-8 lg:mb-12">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Explore API Categories</h2>
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {apiCategories.map((category) => (
              <Card key={category.id} className="hover:shadow-lg transition-all hover:scale-105 cursor-pointer group">
                <Link href={`/explore/${category.id}/${category.endpoints[0].id}`}>
                  <CardHeader className="text-center pb-3 sm:pb-4">
                    <div className="mx-auto mb-2 sm:mb-3 p-2 sm:p-3 bg-primary/10 rounded-full w-fit group-hover:bg-primary/20 transition-colors">
                      <category.icon className="h-4 w-4 sm:h-6 sm:w-6 text-primary" />
                    </div>
                    <CardTitle className="text-base sm:text-lg">{category.name}</CardTitle>
                    <Badge variant="secondary" className="w-fit mx-auto text-xs">
                      {category.endpoints.length} endpoints
                    </Badge>
                  </CardHeader>
                  <CardContent className="text-center">
                    <CardDescription className="mb-2 sm:mb-3 text-xs sm:text-sm">
                      {category.id === "users" && "Generate random user data with complete profiles"}
                      {category.id === "quotes" && "Get inspirational quotes from famous personalities"}
                      {category.id === "products" && "Browse and search through product catalogs"}
                      {category.id === "jokes" && "Fetch programming and general jokes for fun"}
                    </CardDescription>
                    <Button variant="ghost" size="sm" className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors text-xs sm:text-sm">
                      Explore <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 ml-1" />
                    </Button>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>
        </div>

        {/* Getting Started Guide */}
        <Card className="mb-6 sm:mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
              <Star className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
              Getting Started Guide
            </CardTitle>
            <CardDescription className="text-xs sm:text-sm">Follow these simple steps to make the most of LearAPI Explorer</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start gap-3">
                  <Badge variant="outline" className="mt-1 bg-primary/10 text-xs">
                    1
                  </Badge>
                  <div>
                    <h4 className="font-medium mb-1 text-sm sm:text-base">Choose an API Category</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground">Browse through different API categories in the sidebar like Users, Quotes, Products, and Jokes.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Badge variant="outline" className="mt-1 bg-primary/10 text-xs">
                    2
                  </Badge>
                  <div>
                    <h4 className="font-medium mb-1 text-sm sm:text-base">Select an Endpoint</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground">Click on any endpoint to view its documentation, parameters, and example responses.</p>
                  </div>
                </div>
              </div>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start gap-3">
                  <Badge variant="outline" className="mt-1 bg-primary/10 text-xs">
                    3
                  </Badge>
                  <div>
                    <h4 className="font-medium mb-1 text-sm sm:text-base">Test the API</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground">Use the "Try it" button to send real requests and see live responses with timing information.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Badge variant="outline" className="mt-1 bg-primary/10 text-xs">
                    4
                  </Badge>
                  <div>
                    <h4 className="font-medium mb-1 text-sm sm:text-base">Copy Code Examples</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground">Get ready-to-use code snippets in your preferred programming language with one click.</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        <ProfitablerateAd />
        {/* Popular Endpoints */}
        <div className="mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Popular Endpoints</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
            {apiCategories.slice(0, 2).map((category) => (
              <Card key={category.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <category.icon className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                    <CardTitle className="text-base sm:text-lg">{category.endpoints[0].title}</CardTitle>
                    <Badge variant="secondary" className="bg-green-100 text-green-800 text-xs">
                      {category.endpoints[0].method}
                    </Badge>
                  </div>
                  <CardDescription className="text-xs sm:text-sm">{category.endpoints[0].description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col xs:flex-row items-start xs:items-center justify-between gap-2">
                    <code className="text-xs sm:text-sm bg-muted px-2 py-1 rounded break-all">{category.endpoints[0].url}</code>
                    <Button variant="outline" size="sm" asChild className="text-xs sm:text-sm whitespace-nowrap">
                      <Link href={`/explore/${category.id}/${category.endpoints[0].id}`}>
                        Try it <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 ml-1" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Features */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg sm:text-xl">Why Choose LearAPI Explorer?</CardTitle>
            <CardDescription className="text-xs sm:text-sm">Everything you need to learn and test APIs effectively</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              <div className="text-center">
                <Clock className="h-6 w-6 sm:h-8 sm:w-8 mx-auto mb-2 sm:mb-3 text-primary" />
                <h4 className="font-medium mb-1 sm:mb-2 text-sm sm:text-base">Real-time Testing</h4>
                <p className="text-xs sm:text-sm text-muted-foreground">Get instant responses with detailed timing and status information</p>
              </div>
              <div className="text-center">
                <Shield className="h-6 w-6 sm:h-8 sm:w-8 mx-auto mb-2 sm:mb-3 text-primary" />
                <h4 className="font-medium mb-1 sm:mb-2 text-sm sm:text-base">Secure & Reliable</h4>
                <p className="text-xs sm:text-sm text-muted-foreground">All requests are made securely with proper error handling</p>
              </div>
              <div className="text-center xs:col-span-2 lg:col-span-1">
                <BookOpen className="h-6 w-6 sm:h-8 sm:w-8 mx-auto mb-2 sm:mb-3 text-primary" />
                <h4 className="font-medium mb-1 sm:mb-2 text-sm sm:text-base">Comprehensive Docs</h4>
                <p className="text-xs sm:text-sm text-muted-foreground">Detailed documentation with examples for every endpoint</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
