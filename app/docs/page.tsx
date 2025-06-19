import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CodeBlock } from "@/components/code-block"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Book, Code, Zap, Shield, ArrowRight, CheckCircle, AlertTriangle, Info } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Documentation - LearAPI | Complete API Learning Guide",
  description:
    "Comprehensive documentation for LearAPI. Learn how to use our API explorer, understand endpoints, and get started with API testing.",
  keywords: "API documentation, API guide, REST API tutorial, API testing guide, developer documentation",
}

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-3 sm:px-4 py-8 sm:py-12 max-w-6xl">
        {/* Hero Section */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="flex justify-center mb-3 sm:mb-4">
            <div className="p-2 sm:p-3 bg-primary/10 rounded-full">
              <Book className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
            </div>
          </div>
          <h1 className="text-2xl xs:text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">Documentation</h1>
          <p className="text-sm xs:text-base sm:text-xl text-muted-foreground mb-4 sm:mb-6 max-w-3xl mx-auto">
            Everything you need to know about using LearAPI Explorer. From getting started to advanced features.
          </p>
          <div className="flex flex-col xs:flex-row flex-wrap justify-center gap-3 sm:gap-4">
            <Button asChild size="sm" className="text-xs sm:text-sm">
              <Link href="/explore">
                Start Exploring <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
              </Link>
            </Button>
            <Button variant="outline" asChild size="sm" className="text-xs sm:text-sm">
              <Link href="#quick-start">Quick Start Guide</Link>
            </Button>
          </div>
        </div>

        <Tabs defaultValue="getting-started" className="space-y-6 sm:space-y-8">
          <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 text-xs sm:text-sm">
            <TabsTrigger value="getting-started" className="text-xs sm:text-sm">
              Getting Started
            </TabsTrigger>
            <TabsTrigger value="api-reference" className="text-xs sm:text-sm">
              API Reference
            </TabsTrigger>
            <TabsTrigger value="examples" className="text-xs sm:text-sm">
              Examples
            </TabsTrigger>
            <TabsTrigger value="best-practices" className="text-xs sm:text-sm">
              Best Practices
            </TabsTrigger>
            <TabsTrigger value="troubleshooting" className="text-xs sm:text-sm">
              Troubleshooting
            </TabsTrigger>
          </TabsList>

          <TabsContent value="getting-started" className="space-y-6 sm:space-y-8">
            <Card id="quick-start">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                  <Zap className="h-4 w-4 sm:h-5 sm:w-5" />
                  Quick Start
                </CardTitle>
                <CardDescription className="text-xs sm:text-sm">
                  Get up and running with LearAPI Explorer in minutes
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <h4 className="font-semibold mb-2 sm:mb-3 text-sm sm:text-base">1. Choose an API Category</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground mb-2 sm:mb-3">
                      Navigate to the Explorer and select from our available API categories:
                    </p>
                    <ul className="text-xs sm:text-sm space-y-1">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-600" />
                        <strong>Users:</strong> Random user data generation
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-600" />
                        <strong>Quotes:</strong> Inspirational quotes
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-600" />
                        <strong>Products:</strong> E-commerce product data
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-600" />
                        <strong>Jokes:</strong> Programming and general jokes
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 sm:mb-3 text-sm sm:text-base">2. Test an Endpoint</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground mb-2 sm:mb-3">
                      Click on any endpoint to view its details and test it:
                    </p>
                    <ul className="text-xs sm:text-sm space-y-1">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-600" />
                        View endpoint documentation
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-600" />
                        Configure parameters
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-600" />
                        Send real requests
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-600" />
                        View live responses
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">Understanding the Interface</CardTitle>
                <CardDescription className="text-xs sm:text-sm">
                  Learn about the different sections of the API Explorer
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 sm:space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                  <div className="p-3 sm:p-4 border rounded-lg">
                    <h4 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">Sidebar Navigation</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      Browse API categories and endpoints. Use the search bar to quickly find specific endpoints.
                    </p>
                  </div>
                  <div className="p-3 sm:p-4 border rounded-lg">
                    <h4 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">Request Panel</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      Configure parameters, headers, and request body. Click "Try it" to send requests.
                    </p>
                  </div>
                  <div className="p-3 sm:p-4 border rounded-lg sm:col-span-2 lg:col-span-1">
                    <h4 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">Response Viewer</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      View formatted JSON responses, status codes, headers, and response times.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">Features Overview</CardTitle>
                <CardDescription className="text-xs sm:text-sm">
                  Discover all the powerful features available in LearAPI Explorer
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div className="space-y-2 sm:space-y-3">
                    <div className="flex items-start gap-2 sm:gap-3">
                      <Code className="h-4 w-4 sm:h-5 sm:w-5 text-primary mt-0.5" />
                      <div>
                        <h4 className="font-medium text-sm sm:text-base">Code Generation</h4>
                        <p className="text-xs sm:text-sm text-muted-foreground">
                          Get ready-to-use code snippets in multiple programming languages
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2 sm:gap-3">
                      <Zap className="h-4 w-4 sm:h-5 sm:w-5 text-primary mt-0.5" />
                      <div>
                        <h4 className="font-medium text-sm sm:text-base">Real-time Testing</h4>
                        <p className="text-xs sm:text-sm text-muted-foreground">
                          Send actual HTTP requests and see live responses
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2 sm:space-y-3">
                    <div className="flex items-start gap-2 sm:gap-3">
                      <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-primary mt-0.5" />
                      <div>
                        <h4 className="font-medium text-sm sm:text-base">Secure Requests</h4>
                        <p className="text-xs sm:text-sm text-muted-foreground">
                          All requests are made securely with proper error handling
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2 sm:gap-3">
                      <Book className="h-4 w-4 sm:h-5 sm:w-5 text-primary mt-0.5" />
                      <div>
                        <h4 className="font-medium text-sm sm:text-base">Comprehensive Docs</h4>
                        <p className="text-xs sm:text-sm text-muted-foreground">
                          Detailed documentation for every endpoint with examples
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="api-reference" className="space-y-6 sm:space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">Available APIs</CardTitle>
                <CardDescription className="text-xs sm:text-sm">
                  Complete reference for all available API endpoints
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 sm:space-y-6">
                <div className="space-y-3 sm:space-y-4">
                  <div className="border rounded-lg p-3 sm:p-4">
                    <div className="flex flex-col xs:flex-row xs:items-center gap-2 mb-2">
                      <Badge className="bg-green-100 text-green-800 w-fit text-xs">GET</Badge>
                      <h4 className="font-semibold text-sm sm:text-base">Random User API</h4>
                    </div>
                    <p className="text-xs sm:text-sm text-muted-foreground mb-2">
                      Generate random user data with complete profiles including names, addresses, and contact
                      information.
                    </p>
                    <code className="text-xs sm:text-sm bg-muted px-2 py-1 rounded break-all">
                      https://randomuser.me/api/
                    </code>
                  </div>

                  <div className="border rounded-lg p-3 sm:p-4">
                    <div className="flex flex-col xs:flex-row xs:items-center gap-2 mb-2">
                      <Badge className="bg-green-100 text-green-800 w-fit text-xs">GET</Badge>
                      <h4 className="font-semibold text-sm sm:text-base">Quotable API</h4>
                    </div>
                    <p className="text-xs sm:text-sm text-muted-foreground mb-2">
                      Fetch inspirational quotes from famous personalities with author information and tags.
                    </p>
                    <code className="text-xs sm:text-sm bg-muted px-2 py-1 rounded break-all">
                      https://api.quotable.io/random
                    </code>
                  </div>

                  <div className="border rounded-lg p-3 sm:p-4">
                    <div className="flex flex-col xs:flex-row xs:items-center gap-2 mb-2">
                      <Badge className="bg-green-100 text-green-800 w-fit text-xs">GET</Badge>
                      <h4 className="font-semibold text-sm sm:text-base">Fake Store API</h4>
                    </div>
                    <p className="text-xs sm:text-sm text-muted-foreground mb-2">
                      Access product catalog data with prices, descriptions, images, and ratings.
                    </p>
                    <code className="text-xs sm:text-sm bg-muted px-2 py-1 rounded break-all">
                      https://fakestoreapi.com/products
                    </code>
                  </div>

                  <div className="border rounded-lg p-3 sm:p-4">
                    <div className="flex flex-col xs:flex-row xs:items-center gap-2 mb-2">
                      <Badge className="bg-green-100 text-green-800 w-fit text-xs">GET</Badge>
                      <h4 className="font-semibold text-sm sm:text-base">Official Joke API</h4>
                    </div>
                    <p className="text-xs sm:text-sm text-muted-foreground mb-2">
                      Get programming jokes and general humor with setup and punchline format.
                    </p>
                    <code className="text-xs sm:text-sm bg-muted px-2 py-1 rounded break-all">
                      https://official-joke-api.appspot.com/random_joke
                    </code>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="examples" className="space-y-6 sm:space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">Code Examples</CardTitle>
                <CardDescription className="text-xs sm:text-sm">
                  Ready-to-use code snippets for different programming languages
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="javascript" className="w-full">
                  <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 text-xs">
                    <TabsTrigger value="javascript" className="text-xs">
                      JavaScript
                    </TabsTrigger>
                    <TabsTrigger value="python" className="text-xs">
                      Python
                    </TabsTrigger>
                    <TabsTrigger value="curl" className="text-xs">
                      cURL
                    </TabsTrigger>
                    <TabsTrigger value="php" className="text-xs">
                      PHP
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="javascript" className="space-y-3 sm:space-y-4">
                    <h4 className="font-semibold text-sm sm:text-base">Fetch Random User</h4>
                    <CodeBlock
                      language="javascript"
                      code={`// Using fetch API
const response = await fetch('https://randomuser.me/api/');
const data = await response.json();
console.log(data.results[0]);

// Using axios
const axios = require('axios');
const response = await axios.get('https://randomuser.me/api/');
console.log(response.data.results[0]);`}
                    />
                  </TabsContent>

                  <TabsContent value="python" className="space-y-3 sm:space-y-4">
                    <h4 className="font-semibold text-sm sm:text-base">Fetch Random User</h4>
                    <CodeBlock
                      language="python"
                      code={`import requests

# Make the request
response = requests.get('https://randomuser.me/api/')
data = response.json()

# Print user information
user = data['results'][0]
print(f"Name: {user['name']['first']} {user['name']['last']}")
print(f"Email: {user['email']}")
print(f"Location: {user['location']['city']}, {user['location']['country']}")`}
                    />
                  </TabsContent>

                  <TabsContent value="curl" className="space-y-3 sm:space-y-4">
                    <h4 className="font-semibold text-sm sm:text-base">Fetch Random User</h4>
                    <CodeBlock
                      language="bash"
                      code={`# Basic request
curl -X GET "https://randomuser.me/api/"

# With headers
curl -X GET \\
  -H "Content-Type: application/json" \\
  "https://randomuser.me/api/"

# Multiple users
curl -X GET "https://randomuser.me/api/?results=5"`}
                    />
                  </TabsContent>

                  <TabsContent value="php" className="space-y-3 sm:space-y-4">
                    <h4 className="font-semibold text-sm sm:text-base">Fetch Random User</h4>
                    <CodeBlock
                      language="php"
                      code={`<?php
// Using file_get_contents
$response = file_get_contents('https://randomuser.me/api/');
$data = json_decode($response, true);
$user = $data['results'][0];

echo "Name: " . $user['name']['first'] . " " . $user['name']['last'] . "\\n";
echo "Email: " . $user['email'] . "\\n";

// Using cURL
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, 'https://randomuser.me/api/');
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$response = curl_exec($ch);
curl_close($ch);

$data = json_decode($response, true);
print_r($data['results'][0]);
?>`}
                    />
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="best-practices" className="space-y-6 sm:space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">API Best Practices</CardTitle>
                <CardDescription className="text-xs sm:text-sm">
                  Guidelines for effective API usage and testing
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 sm:space-y-6">
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-start gap-2 sm:gap-3">
                    <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-sm sm:text-base">Handle Errors Gracefully</h4>
                      <p className="text-xs sm:text-sm text-muted-foreground">
                        Always implement proper error handling for network requests and API responses.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 sm:gap-3">
                    <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-sm sm:text-base">Respect Rate Limits</h4>
                      <p className="text-xs sm:text-sm text-muted-foreground">
                        Be mindful of API rate limits and implement appropriate delays between requests.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 sm:gap-3">
                    <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-sm sm:text-base">Use HTTPS</h4>
                      <p className="text-xs sm:text-sm text-muted-foreground">
                        Always use HTTPS endpoints for secure data transmission.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 sm:gap-3">
                    <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-sm sm:text-base">Validate Responses</h4>
                      <p className="text-xs sm:text-sm text-muted-foreground">
                        Always validate API responses before using the data in your application.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="troubleshooting" className="space-y-6 sm:space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">Common Issues & Solutions</CardTitle>
                <CardDescription className="text-xs sm:text-sm">
                  Troubleshooting guide for common problems
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 sm:space-y-6">
                <div className="space-y-3 sm:space-y-4">
                  <div className="border rounded-lg p-3 sm:p-4">
                    <div className="flex items-start gap-2 sm:gap-3 mb-2">
                      <AlertTriangle className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-600 mt-0.5" />
                      <h4 className="font-semibold text-sm sm:text-base">CORS Errors</h4>
                    </div>
                    <p className="text-xs sm:text-sm text-muted-foreground mb-2">
                      If you encounter CORS errors when making requests from your browser:
                    </p>
                    <ul className="text-xs sm:text-sm space-y-1 ml-4 sm:ml-6">
                      <li>• Use server-side requests instead of client-side</li>
                      <li>• Configure CORS headers on your server</li>
                      <li>• Use a proxy server for development</li>
                    </ul>
                  </div>

                  <div className="border rounded-lg p-3 sm:p-4">
                    <div className="flex items-start gap-2 sm:gap-3 mb-2">
                      <AlertTriangle className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-600 mt-0.5" />
                      <h4 className="font-semibold text-sm sm:text-base">Rate Limiting</h4>
                    </div>
                    <p className="text-xs sm:text-sm text-muted-foreground mb-2">
                      If you receive 429 (Too Many Requests) errors:
                    </p>
                    <ul className="text-xs sm:text-sm space-y-1 ml-4 sm:ml-6">
                      <li>• Wait before making additional requests</li>
                      <li>• Implement exponential backoff</li>
                      <li>• Check the API's rate limit documentation</li>
                    </ul>
                  </div>

                  <div className="border rounded-lg p-3 sm:p-4">
                    <div className="flex items-start gap-2 sm:gap-3 mb-2">
                      <Info className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 mt-0.5" />
                      <h4 className="font-semibold text-sm sm:text-base">Network Timeouts</h4>
                    </div>
                    <p className="text-xs sm:text-sm text-muted-foreground mb-2">If requests are timing out:</p>
                    <ul className="text-xs sm:text-sm space-y-1 ml-4 sm:ml-6">
                      <li>• Increase timeout values in your code</li>
                      <li>• Check your internet connection</li>
                      <li>• Verify the API endpoint is accessible</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      <Footer />
    </div>
  )
}
