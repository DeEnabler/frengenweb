'use server';
/**
 * @fileOverview Generates a personalized service recommendation based on a client's problem description.
 *
 * - generateServiceRecommendation - A function that generates the service recommendation.
 * - GenerateServiceRecommendationInput - The input type for the generateServiceRecommendation function.
 * - GenerateServiceRecommendationOutput - The return type for the generateServiceRecommendation function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateServiceRecommendationInputSchema = z.object({
  clientProblemDescription: z.string().describe('The description of the client\'s problem or needs.'),
});
export type GenerateServiceRecommendationInput = z.infer<typeof GenerateServiceRecommendationInputSchema>;

const GenerateServiceRecommendationOutputSchema = z.object({
  recommendation: z.string().describe('A personalized recommendation on how FrenGen services can help.'),
  progress: z.string().describe('Progress updates during the recommendation generation process.')
});
export type GenerateServiceRecommendationOutput = z.infer<typeof GenerateServiceRecommendationOutputSchema>;

export async function generateServiceRecommendation(input: GenerateServiceRecommendationInput): Promise<GenerateServiceRecommendationOutput> {
  return generateServiceRecommendationFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateServiceRecommendationPrompt',
  input: {schema: GenerateServiceRecommendationInputSchema},
  output: {schema: GenerateServiceRecommendationOutputSchema},
  prompt: `You are an expert AI solutions consultant at FrenGen. Your goal is to analyze a client's problem description and provide a personalized recommendation on how FrenGen's services can help them.

FrenGen offers the following core services:
1.  **AI Agents for Automation:** Custom-built AI agents to automate complex tasks, streamline workflows, and improve business efficiency. Ideal for data entry, customer support, process optimization, and personalized recommendations.
2.  **Intelligent Chatbots:** Intuitive conversational interfaces that empower employees to explore company data seamlessly, get instant answers, and unlock insights. Useful for internal knowledge bases, data retrieval, and HR support.
3.  **AI Game Characters:** Personalized, AI-driven characters for gaming applications that enhance user engagement and retention with dynamic interactions and adaptive personalities.
4.  **Bespoke AI Solutions & Consultancy:** Tailored AI development and expert advice for unique business challenges, from startups to enterprises. This can include custom algorithm development, LLM application development, backend infrastructure for AI, RAG solutions, and prompt engineering.

Client's Problem Description:
{{{clientProblemDescription}}}

Based on the client's problem, please provide a concise and actionable recommendation.
Your recommendation should:
1.  Identify the key pain points or needs evident in the client's description.
2.  Suggest one or more specific FrenGen services that are best suited to address these points.
3.  Briefly explain *how* each suggested service would provide a solution and its benefits for the client.
4.  Maintain a professional, helpful, and persuasive tone.

Keep your recommendation focused and to the point.
The progress field should contain a one-sentence summary of the recommendation generated.
  `,
});

const generateServiceRecommendationFlow = ai.defineFlow(
  {
    name: 'generateServiceRecommendationFlow',
    inputSchema: GenerateServiceRecommendationInputSchema,
    outputSchema: GenerateServiceRecommendationOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
