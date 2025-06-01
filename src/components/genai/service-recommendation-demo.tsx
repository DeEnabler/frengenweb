"use client";

import { useState, type FormEvent } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { generateServiceRecommendation, type GenerateServiceRecommendationOutput } from "@/ai/flows/generate-service-recommendation";
import { Loader2 } from "lucide-react";
import { Label } from "@/components/ui/label";

export function ServiceRecommendationDemo() {
  const [problemDescription, setProblemDescription] = useState("");
  const [result, setResult] = useState<GenerateServiceRecommendationOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!problemDescription.trim()) {
      setError("Please describe the client's problem or needs.");
      return;
    }
    setIsLoading(true);
    setError(null);
    setResult(null);
    try {
      const response = await generateServiceRecommendation({ clientProblemDescription: problemDescription });
      setResult(response);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An unknown error occurred while generating the recommendation.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="font-headline">Get Personalized Service Recommendation</CardTitle>
        <CardDescription>Describe your business challenge or needs below, and our AI will suggest how FrenGen's services can help.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="clientProblemDescription" className="block text-sm font-medium mb-1">Client Problem Description</Label>
            <Textarea
              id="clientProblemDescription"
              value={problemDescription}
              onChange={(e) => setProblemDescription(e.target.value)}
              placeholder="e.g., We are struggling with high call volumes in customer support and need to improve response times..."
              rows={8}
              required
              className="min-h-[150px]"
            />
          </div>
          <Button type="submit" disabled={isLoading} className="w-full sm:w-auto">
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Generate Recommendation
          </Button>
        </form>
        {error && <p className="mt-4 text-sm text-destructive bg-destructive/10 p-3 rounded-md">{error}</p>}
        {result && (
          <div className="mt-6 space-y-3 p-4 bg-muted/50 rounded-md border">
            <h4 className="font-headline text-lg font-semibold">AI Generated Recommendation:</h4>
            <p className="text-sm whitespace-pre-wrap">{result.recommendation}</p>
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
