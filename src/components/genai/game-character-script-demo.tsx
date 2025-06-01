
"use client";

import { useState, type FormEvent } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { generateDemoScript, type GenerateDemoScriptOutput } from "@/ai/flows/generate-demo-script";
import { Loader2 } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Textarea } from "../ui/textarea";

export function GameCharacterScriptDemo() {
  const [characterType, setCharacterType] = useState(""); // Adapted from prospectIndustry
  const [scenario, setScenario] = useState(""); // Adapted from prospectNeeds
  const [result, setResult] = useState<GenerateDemoScriptOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!characterType.trim() || !scenario.trim()) {
      setError("Please describe the character type and scenario.");
      return;
    }
    setIsLoading(true);
    setError(null);
    setResult(null);
    try {
      // Adapting the input for the generateDemoScript flow
      const response = await generateDemoScript({ 
        prospectIndustry: `Game Character: ${characterType}`, 
        prospectNeeds: `Scenario: ${scenario}` 
      });
      setResult(response);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An unknown error occurred while generating the script.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="font-headline">Generate Game Character Dialogue</CardTitle>
        <CardDescription>Define a character and a scenario, and our AI will generate sample dialogue.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="characterType" className="block text-sm font-medium mb-1">Character Type / Archetype</Label>
            <Input
              id="characterType"
              type="text"
              value={characterType}
              onChange={(e) => setCharacterType(e.target.value)}
              placeholder="e.g., Wise old wizard, Grumpy shopkeeper, Brave knight"
              required
            />
          </div>
          <div>
            <Label htmlFor="scenario" className="block text-sm font-medium mb-1">Scenario / Situation</Label>
            <Textarea
              id="scenario"
              value={scenario}
              onChange={(e) => setScenario(e.target.value)}
              placeholder="e.g., Player asks for a magical quest, Player tries to haggle for an item, Character reacts to danger"
              rows={3}
              required
            />
          </div>
          <Button type="submit" disabled={isLoading} className="w-full sm:w-auto">
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Generate Dialogue
          </Button>
        </form>
        {error && <p className="mt-4 text-sm text-destructive bg-destructive/10 p-3 rounded-md">{error}</p>}
        {result && (
          <div className="mt-6 space-y-3 p-4 bg-muted/50 rounded-md border">
            <h4 className="font-headline text-lg font-semibold">Generated Dialogue Snippet:</h4>
            <pre className="text-sm whitespace-pre-wrap font-body">{result.script}</pre>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
