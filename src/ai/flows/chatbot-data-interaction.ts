// Implemented the Genkit flow for intelligent chatbot data interaction, allowing employees to retrieve information and insights from company data.

'use server';

/**
 * @fileOverview An intelligent chatbot for exploring and interacting with company data.
 *
 * - interactWithData - A function that handles the chatbot interaction process.
 * - InteractWithDataInput - The input type for the interactWithData function.
 * - InteractWithDataOutput - The return type for the interactWithData function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const InteractWithDataInputSchema = z.object({
  query: z.string().describe('The user query to retrieve information from company data.'),
  dataContext: z.string().optional().describe('Additional context about the data being queried.'),
});
export type InteractWithDataInput = z.infer<typeof InteractWithDataInputSchema>;

const InteractWithDataOutputSchema = z.object({
  response: z.string().describe('The chatbot response to the user query.'),
  relevantData: z.string().optional().describe('The relevant data used to generate the response.'),
});
export type InteractWithDataOutput = z.infer<typeof InteractWithDataOutputSchema>;

export async function interactWithData(input: InteractWithDataInput): Promise<InteractWithDataOutput> {
  return interactWithDataFlow(input);
}

const prompt = ai.definePrompt({
  name: 'interactWithDataPrompt',
  input: {schema: InteractWithDataInputSchema},
  output: {schema: InteractWithDataOutputSchema},
  prompt: `You are an intelligent chatbot designed to help employees explore and interact with company data.

  The employee has the following question:
  {{query}}

  {% if dataContext %}Here is some context about the data: {{dataContext}}.{% endif %}

  Respond with a clear and concise answer, providing relevant information and insights based on the available data.
  Include the relevant data that you used to generate your response in the relevantData field.
  `,
});

const interactWithDataFlow = ai.defineFlow(
  {
    name: 'interactWithDataFlow',
    inputSchema: InteractWithDataInputSchema,
    outputSchema: InteractWithDataOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
