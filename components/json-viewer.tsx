"use client";

import { Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

interface JsonViewerProps {
  data: any;
}

export function JsonViewer({ data }: JsonViewerProps) {
  const { toast } = useToast();
  const jsonString = JSON.stringify(data, null, 2);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(jsonString);
      toast({
        title: "Copied!",
        description: "JSON copied to clipboard",
      });
    } catch (err) {
      toast({
        title: "Failed to copy",
        description: "Could not copy to clipboard",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="relative w-full rounded-md border bg-muted overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between p-3 bg-muted border-b text-sm">
        <span className="font-medium truncate">JSON Response</span>
        <Button size="sm" variant="ghost" onClick={copyToClipboard} className="h-8 w-8 p-0" aria-label="Copy JSON">
          <Copy className="h-4 w-4" />
        </Button>
      </div>

      {/* Scrollable JSON content */}
      <pre className="p-4 bg-muted/50 overflow-x-auto overflow-y-auto max-h-96 text-sm json-data-show ">
        <code className="block min-w-full whitespace-pre-wrap break-words">{jsonString}</code>
      </pre>
    </div>
  );
}
