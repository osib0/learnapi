"use client";

import * as React from "react";
import { Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

interface CodeBlockProps {
  code: string;
  language: string;
}

export function CodeBlock({ code, language }: CodeBlockProps) {
  const [copied, setCopied] = React.useState(false);
  const { toast } = useToast();

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      toast({
        title: "Copied!",
        description: "Code copied to clipboard",
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
    <div className="relative rounded-md border bg-muted w-full overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between p-3 bg-muted border-b text-sm">
        <span className="font-medium capitalize truncate">{language}</span>
        <Button size="sm" variant="ghost" onClick={copyToClipboard} className="h-8 w-8 p-0" aria-label="Copy code">
          {copied ? <Check className="h-4 w-4 text-green-600" /> : <Copy className="h-4 w-4" />}
        </Button>
      </div>

      {/* Code content */}
      <pre className="p-4 bg-muted/50 overflow-x-auto text-sm json-data-show">
        <code className="block min-w-full whitespace-pre">{code}</code>
      </pre>
    </div>
  );
}
