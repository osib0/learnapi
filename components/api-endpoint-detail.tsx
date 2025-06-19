"use client"

import * as React from "react"
import type { APIEndpoint, APIResponse } from "@/types/api"
import { useToast } from "@/hooks/use-toast"

interface APIEndpointDetailProps {
  endpoint: APIEndpoint
}

export function APIEndpointDetail({ endpoint }: APIEndpointDetailProps) {
  const [response, setResponse] = React.useState<APIResponse | null>(null)
  const [loading, setLoading] = React.useState(false)
  const [parameters, setParameters] = React.useState<Record<string, string>>({})
  const { toast } = useToast()

  const getMethodColor = (method: string) => {
    switch (method) {
      case "GET":
        return "bg-green-100 text-green-800"
      case "POST":
        return "bg-blue-100 text-blue-800"
      case "PUT":
        return "bg-orange-100 text-orange-800"
      case "DELETE":
        return "bg-red-100 text-red-800"
      case "PATCH":
        return "bg-purple-100 text-purple-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      toast({
        title: "Copied!",
        description: "Content copied to clipboard",
      })
    } catch (err) {
      toast({
        title: "Failed to copy",
        description: "Could not copy to clipboard",
        variant: "destructive",
      })
    }
  }

  const buildUrl = () => {
    let url = endpoint.url
    if (endpoint.parameters && Object.keys(parameters).length > 0) {
      const queryParams = new URLSearchParams()
      endpoint.parameters.forEach((param) => {
        const value = parameters[param.name]
        if (value) {
          queryParams.append(param.name, value)
        }
      })
      if (queryParams.toString()) {
        url += "?" + queryParams.toString()
      }
    }
    return url
  }

  const executeRequest = async () => {
    setLoading(true)
    const startTime = Date.now()

    try {
      const url = buildUrl()
      const fetchResponse = await fetch(url, {
        method: endpoint.method,
        headers: {
          "Content-Type": "application/json",\
