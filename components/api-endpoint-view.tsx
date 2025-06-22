"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Copy, Play, Clock, CheckCircle, AlertCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { CodeBlock } from "@/components/code-block";
import { JsonViewer } from "@/components/json-viewer";
import type { ApiEndpoint } from "@/lib/types";

interface ApiEndpointViewProps {
  endpoint: ApiEndpoint;
}

export function ApiEndpointView({ endpoint }: ApiEndpointViewProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState<any>(null);
  const [responseTime, setResponseTime] = useState<number | null>(null);
  const [statusCode, setStatusCode] = useState<number | null>(null);
  const [headers, setHeaders] = useState<Record<string, string>>({});
  const [requestBody, setRequestBody] = useState("");
  const [requestHeaders, setRequestHeaders] = useState('{"Content-Type": "application/json"}');
  const { toast } = useToast();

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied!",
      description: `${label} copied to clipboard`,
    });
  };

  const executeRequest = async () => {
    setIsLoading(true);
    const startTime = Date.now();

    try {
      // Simulate API request
      await new Promise((resolve) => setTimeout(resolve, 1000 + Math.random() * 1000));

      const endTime = Date.now();
      setResponseTime(endTime - startTime);
      setStatusCode(200);
      setHeaders({
        "content-type": "application/json",
        "content-length": "332",
        server: "nginx/1.18.0",
      });

      // Replace with osib details for user APIs
      let customResponse = endpoint.sampleResponse;
      if (endpoint.id.includes("user") || endpoint.url.includes("randomuser")) {
        if (customResponse.results && customResponse.results[0]) {
          customResponse = {
            ...customResponse,
            results: [
              {
                ...customResponse.results[0],
                name: {
                  title: "Mr",
                  first: "Osib",
                  last: "Developer",
                },
                email: "osib@learnapi.com",
                location: {
                  ...customResponse.results[0].location,
                  city: "Karachi",
                  country: "Pakistan",
                },
                phone: "+92 300 1234567",
              },
            ],
          };
        }
      }

      // Replace with osib details for quotes
      if (endpoint.id.includes("quote") || endpoint.url.includes("quotable")) {
        if (customResponse.content) {
          customResponse = {
            ...customResponse,
            content: "Code is poetry written in logic.",
            author: "Osib",
            tags: ["programming", "inspiration", "development"],
          };
        }
      }

      setResponse(customResponse);

      toast({
        title: "Request successful!",
        description: `Response received in ${endTime - startTime}ms`,
      });
    } catch (error) {
      setStatusCode(500);
      setResponse({ error: "Request failed" });
      toast({
        title: "Request failed",
        description: "An error occurred while making the request",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const getMethodColor = (method: string) => {
    switch (method.toUpperCase()) {
      case "GET":
        return "bg-green-500";
      case "POST":
        return "bg-blue-500";
      case "PUT":
        return "bg-yellow-500";
      case "DELETE":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="p-3 sm:p-4 lg:p-6 max-w-6xl mx-auto">
      {/* Header */}
      <div className="mb-4 sm:mb-6">
        <div className="flex flex-col xs:flex-row xs:items-center gap-2 sm:gap-3 mb-2">
          <Badge className={`${getMethodColor(endpoint.method)} text-white text-xs sm:text-sm`}>{endpoint.method}</Badge>
          <h1 className="text-lg xs:text-xl sm:text-2xl font-bold break-words">{endpoint.title}</h1>
        </div>
        <p className="text-muted-foreground mb-3 sm:mb-4 text-xs sm:text-sm">{endpoint.description}</p>

        <div className="flex flex-col xs:flex-row xs:items-center gap-2 p-2 sm:p-3 bg-muted rounded-lg font-mono text-xs sm:text-sm break-all">
          <span className="text-muted-foreground">URL:</span>
          <code className="flex-1">{endpoint.url}</code>
          <Button variant="ghost" size="sm" onClick={() => copyToClipboard(endpoint.url, "URL")} className="h-6 w-6 sm:h-8 sm:w-8 p-0" aria-label="Copy URL">
            <Copy className="h-3 w-3 sm:h-4 sm:w-4" />
          </Button>
        </div>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="overview" className="space-y-4 sm:space-y-6">
        {/* Tabs triggers */}
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 text-xs sm:text-sm overflow-x-auto scrollbar-hide">
          <TabsTrigger value="overview" className="whitespace-nowrap text-xs sm:text-sm">
            Overview
          </TabsTrigger>
          <TabsTrigger value="request" className="whitespace-nowrap text-xs sm:text-sm">
            Request
          </TabsTrigger>
          <TabsTrigger value="response" className="whitespace-nowrap text-xs sm:text-sm">
            Response
          </TabsTrigger>
          <TabsTrigger value="code" className="whitespace-nowrap text-xs sm:text-sm">
            Code Examples
          </TabsTrigger>
        </TabsList>

        {/* Tabs content */}
        <TabsContent value="overview" className="space-y-4 sm:space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg sm:text-xl">Endpoint Information</CardTitle>
              <CardDescription className="text-xs sm:text-sm">Basic information about this API endpoint</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 sm:space-y-4">
              <div className="grid grid-cols-1 xs:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <Label className="text-xs sm:text-sm font-medium">Method</Label>
                  <p className="text-xs sm:text-sm text-muted-foreground">{endpoint.method}</p>
                </div>
                <div>
                  <Label className="text-xs sm:text-sm font-medium">Content Type</Label>
                  <p className="text-xs sm:text-sm text-muted-foreground">application/json</p>
                </div>
              </div>

              {endpoint.parameters && endpoint.parameters.length > 0 && (
                <div>
                  <Label className="text-xs sm:text-sm font-medium mb-2 block">Parameters</Label>
                  <div className="space-y-2">
                    {endpoint.parameters.map((param, index) => (
                      <div key={index} className="flex flex-col xs:flex-row xs:items-center xs:justify-between gap-2 p-2 border rounded">
                        <div className="flex flex-col xs:flex-row xs:items-center gap-1 xs:gap-2">
                          <span className="font-mono text-xs sm:text-sm">{param.name}</span>
                          {param.required && (
                            <Badge variant="destructive" className="text-xs w-fit">
                              Required
                            </Badge>
                          )}
                        </div>
                        <span className="text-xs sm:text-sm text-muted-foreground">{param.type}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg sm:text-xl">Sample Response</CardTitle>
              <CardDescription className="text-xs sm:text-sm">Example response from this endpoint</CardDescription>
            </CardHeader>
            <CardContent>
              <JsonViewer data={endpoint.sampleResponse} />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="request" className="space-y-4 sm:space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg sm:text-xl">Request Headers</CardTitle>
            </CardHeader>
            <CardContent>
              <Textarea value={requestHeaders} onChange={(e) => setRequestHeaders(e.target.value)} className="font-mono text-xs sm:text-sm" rows={4} aria-label="Request headers" />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg sm:text-xl">Request Body</CardTitle>
            </CardHeader>
            <CardContent>
              <Textarea value={requestBody} onChange={(e) => setRequestBody(e.target.value)} className="font-mono text-xs sm:text-sm" rows={6} aria-label="Request body" />
            </CardContent>
          </Card>

          <Button onClick={executeRequest} disabled={isLoading} className="w-full sm:w-auto" aria-label="Send API request">
            {isLoading ? (
              <>
                <Clock className="mr-2 h-4 w-4 animate-spin" /> Loading...
              </>
            ) : (
              <>
                <Play className="mr-2 h-4 w-4" /> Send Request
              </>
            )}
          </Button>
        </TabsContent>

        <TabsContent value="response" className="space-y-4 sm:space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg sm:text-xl">Response Details</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-2 text-xs sm:text-sm font-mono">
                <div className="flex items-center gap-1">
                  <span>Status Code:</span>
                  <span className={`font-bold ${statusCode && statusCode >= 200 && statusCode < 300 ? "text-green-600" : "text-red-600"}`}>{statusCode ?? "--"}</span>
                </div>
                <div className="flex items-center gap-1">
                  <span>Response Time:</span>
                  <span>{responseTime !== null ? `${responseTime} ms` : "--"}</span>
                </div>
                <div>
                  <span>Headers:</span>
                  <pre className="overflow-auto bg-muted p-2 rounded text-xs sm:text-sm max-h-40">{JSON.stringify(headers, null, 2)}</pre>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg sm:text-xl">Response Body</CardTitle>
            </CardHeader>
            <CardContent>{response ? <JsonViewer data={response} /> : <p className="text-muted-foreground text-sm">No response yet.</p>}</CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="code" className="space-y-4 sm:space-y-6">
          {/* @ts-ignore */}
          {endpoint.codeExamples?.map((example: any, idx: number) => (
            <Card key={idx}>
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">{example.title}</CardTitle>
                <CardDescription className="text-xs sm:text-sm">{example.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <CodeBlock code={example.code} language={example.language} />
              </CardContent>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
}
