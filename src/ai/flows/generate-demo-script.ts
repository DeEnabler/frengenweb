'use server';

/**
 * @fileOverview Generates a personalized demo script for a custom AI solution based on the prospect's industry and needs.
 *
 * - generateDemoScript - A function that generates the demo script.
 * - GenerateDemoScriptInput - The input type for the generateDemoScript function.
 * - GenerateDemoScriptOutput - The return type for the generateDemoScript function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateDemoScriptInputSchema = z.object({
  prospectIndustry: z
    .string()
    .describe('The industry of the prospective client.'),
  prospectNeeds: z.string().describe('The specific needs of the prospective client.'),
});
export type GenerateDemoScriptInput = z.infer<typeof GenerateDemoScriptInputSchema>;

const GenerateDemoScriptOutputSchema = z.object({
  script: z.string().describe('The generated demo script.'),
});
export type GenerateDemoScriptOutput = z.infer<typeof GenerateDemoScriptOutputSchema>;

export async function generateDemoScript(input: GenerateDemoScriptInput): Promise<GenerateDemoScriptOutput> {
  return generateDemoScriptFlow(input);
}

const generateDemoScriptPrompt = ai.definePrompt({
  name: 'generateDemoScriptPrompt',
  input: {schema: GenerateDemoScriptInputSchema},
  output: {schema: GenerateDemoScriptOutputSchema},
  prompt: `You are an expert sales representative specializing in custom AI solutions.

You will generate a personalized demo script for a custom AI solution based on the prospect's industry and needs. The script should be engaging and highlight the benefits of the solution for the prospect.

Prospect Industry: {{{prospectIndustry}}}
Prospect Needs: {{{prospectNeeds}}}

Script:`,
});

const generateDemoScriptFlow = ai.defineFlow(
  {
    name: 'generateDemoScriptFlow',
    inputSchema: GenerateDemoScriptInputSchema,
    outputSchema: GenerateDemoScriptOutputSchema,
  },
  async input => {
    const {output} = await generateDemoScriptPrompt(input);
    return output!;
  }
);
