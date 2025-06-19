"use client"
import { Copy } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"

interface JsonViewerProps {
  data: any
}

export function JsonViewer({ data }: JsonViewerProps) {
  const { toast } = useToast()
  const jsonString = JSON.stringify(data, null, 2)

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(jsonString)
      toast({
        title: "Copied!",
        description: "JSON copied to clipboard",
      })
    } catch (err) {
      toast({
        title: "Failed to copy",
        description: "Could not copy to clipboard",
        variant: "destructive",
      })
    }
  }

  return (
    <div className="relative">
      <div className="flex items-center justify-between p-3 bg-muted border-b">
        <span className="text-sm font-medium">JSON Response</span>
        <Button size="sm" variant="ghost" onClick={copyToClipboard} className="h-8 w-8 p-0">
          <Copy className="h-4 w-4" />
        </Button>
      </div>
      <pre className="p-4 bg-muted/50 overflow-x-auto max-h-96">
        <code className="text-sm json-viewer">{jsonString}</code>
      </pre>
    </div>
  )
}
