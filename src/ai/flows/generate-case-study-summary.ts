// src/ai/flows/generate-case-study-summary.ts
'use server';
/**
 * @fileOverview Generates a concise summary of a case study from a longer document.
 *
 * - generateCaseStudySummary - A function that generates the case study summary.
 * - GenerateCaseStudySummaryInput - The input type for the generateCaseStudySummary function.
 * - GenerateCaseStudySummaryOutput - The return type for the generateCaseStudySummary function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateCaseStudySummaryInputSchema = z.object({
  caseStudyDocument: z.string().describe('The full text of the case study document.'),
});
export type GenerateCaseStudySummaryInput = z.infer<typeof GenerateCaseStudySummaryInputSchema>;

const GenerateCaseStudySummaryOutputSchema = z.object({
  summary: z.string().describe('A brief summary of the case study.'),
  progress: z.string().describe('Progress updates during the summarization process.')
});
export type GenerateCaseStudySummaryOutput = z.infer<typeof GenerateCaseStudySummaryOutputSchema>;

export async function generateCaseStudySummary(input: GenerateCaseStudySummaryInput): Promise<GenerateCaseStudySummaryOutput> {
  return generateCaseStudySummaryFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateCaseStudySummaryPrompt',
  input: {schema: GenerateCaseStudySummaryInputSchema},
  output: {schema: GenerateCaseStudySummaryOutputSchema},
  prompt: `You are an expert marketing assistant. Your task is to generate a concise and engaging summary of a case study provided to you.

  Here is the case study document:
  {{caseStudyDocument}}

  Please provide a summary that captures the essence of the case study, highlighting the key problem, the solution implemented, and the results achieved. The summary should be no more than 200 words.
  Include a progress field with a one-sentence summary of what you have generated.
  `,
});

const generateCaseStudySummaryFlow = ai.defineFlow(
  {
    name: 'generateCaseStudySummaryFlow',
    inputSchema: GenerateCaseStudySummaryInputSchema,
    outputSchema: GenerateCaseStudySummaryOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
