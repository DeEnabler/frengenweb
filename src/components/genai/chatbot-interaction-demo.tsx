
"use client";

import { useState, type FormEvent } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { interactWithData, type InteractWithDataOutput } from "@/ai/flows/chatbot-data-interaction";
import { Loader2 } from "lucide-react";
import { Label } from "@/components/ui/label";

export function ChatbotInteractionDemo() {
  const [query, setQuery] = useState("");
  const [dataContext, setDataContext] = useState("");
  const [result, setResult] = useState<InteractWithDataOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!query.trim()) {
      setError("Please enter a question.");
      return;
    }
    setIsLoading(true);
    setError(null);
    setResult(null);
    try {
      const response = await interactWithData({ query, dataContext: dataContext || undefined });
      setResult(response);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An unknown error occurred during the interaction.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="font-headline">Chat with Your Data</CardTitle>
        <CardDescription>Ask a question about your company data. Our AI will try to answer.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="query" className="block text-sm font-medium mb-1">Your Question</Label>
            <Input
              id="query"
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="e.g., What were our sales last quarter?"
              required
            />
          </div>
          <div>
            <Label htmlFor="dataContext" className="block text-sm font-medium mb-1">Data Context (Optional)</Label>
            <Input
              id="dataContext"
              type="text"
              value={dataContext}
              onChange={(e) => setDataContext(e.target.value)}
              placeholder="e.g., Sales data for Q3 2023"
            />
          </div>
          <Button type="submit" disabled={isLoading} className="w-full sm:w-auto">
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Ask AI
          </Button>
        </form>
        {error && <p className="mt-4 text-sm text-destructive bg-destructive/10 p-3 rounded-md">{error}</p>}
        {result && (
          <div className="mt-6 space-y-3 p-4 bg-muted/50 rounded-md border">
            <h4 className="font-headline text-lg font-semibold">AI Response:</h4>
            <p className="text-sm whitespace-pre-wrap">{result.response}</p>
            {result.relevantData && (
              <>
                <h5 className="font-medium pt-2 text-sm text-muted-foreground">Relevant Data Used:</h5>
                <pre className="text-xs bg-card p-2 rounded-sm overflow-x-auto border">
                  {result.relevantData}
                </pre>
              </>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
