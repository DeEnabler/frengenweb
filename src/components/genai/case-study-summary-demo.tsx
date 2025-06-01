
"use client";

import { useState, type FormEvent } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { generateCaseStudySummary, type GenerateCaseStudySummaryOutput } from "@/ai/flows/generate-case-study-summary";
import { Loader2 } from "lucide-react";
import { Label } from "@/components/ui/label";

export function CaseStudySummaryDemo() {
  const [documentText, setDocumentText] = useState("");
  const [result, setResult] = useState<GenerateCaseStudySummaryOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!documentText.trim()) {
      setError("Please enter some text for the case study document.");
      return;
    }
    setIsLoading(true);
    setError(null);
    setResult(null);
    try {
      const response = await generateCaseStudySummary({ caseStudyDocument: documentText });
      setResult(response);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An unknown error occurred while generating the summary.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="font-headline">Generate Case Study Summary</CardTitle>
        <CardDescription>Paste a long case study document below to get a concise summary.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="caseStudyDocument" className="block text-sm font-medium mb-1">Case Study Document</Label>
            <Textarea
              id="caseStudyDocument"
              value={documentText}
              onChange={(e) => setDocumentText(e.target.value)}
              placeholder="Paste your full case study text here..."
              rows={8}
              required
              className="min-h-[150px]"
            />
          </div>
          <Button type="submit" disabled={isLoading} className="w-full sm:w-auto">
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Generate Summary
          </Button>
        </form>
        {error && <p className="mt-4 text-sm text-destructive bg-destructive/10 p-3 rounded-md">{error}</p>}
        {result && (
          <div className="mt-6 space-y-3 p-4 bg-muted/50 rounded-md border">
            <h4 className="font-headline text-lg font-semibold">AI Generated Summary:</h4>
            <p className="text-sm whitespace-pre-wrap">{result.summary}</p>
            {result.progress && (
              <>
                <h5 className="font-medium pt-2 text-sm text-muted-foreground">Generation Progress:</h5>
                <p className="text-xs text-muted-foreground italic">{result.progress}</p>
              </>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
