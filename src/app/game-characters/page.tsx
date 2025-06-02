
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { HeroSection } from '@/components/ui/hero-section';
import { Section } from '@/components/ui/section';
import { FeatureCard } from '@/components/ui/feature-card';
import { Gamepad2, Sparkles, Users2, BrainCircuit, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { GameCharacterScriptDemo } from '@/components/genai/game-character-script-demo';

const features = [
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: "Dynamic & Adaptive Personalities",
    description: "Characters evolve based on player interactions, creating unique and memorable experiences.",
  },
  {
    icon: <Users2 className="w-8 h-8" />,
    title: "Realistic & Engaging Dialogues",
    description: "AI-powered conversations that feel natural, context-aware, and drive the narrative forward.",
  },
  {
    icon: <BrainCircuit className="w-8 h-8" />,
    title: "Player-Driven Narratives",
    description: "Characters react intelligently to player choices, leading to emergent storylines and high replayability.",
  },
  {
    icon: <Gamepad2 className="w-8 h-8" />,
    title: "Enhanced Immersion",
    description: "Create deeper connections between players and the game world through believable AI characters.",
  },
];

export default function GameCharactersPage() {
  return (
    <>
      <HeroSection
        title="AI Game Characters: Bringing Virtual Worlds to Life"
        subtitle="Elevate player engagement and retention with FrenGen's personalized, AI-driven characters for gaming applications, featuring dynamic interactions and adaptive personalities."
      >
        <Button asChild size="lg">
          <Link href="/contact?subject=AI+Game+Character+Demo">Explore AI Character Solutions</Link>
        </Button>
      </HeroSection>

      <Section id="why-ai-characters" className="bg-card">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex items-center justify-center h-80 md:h-96 rounded-lg shadow-xl bg-card">
             <Gamepad2 className="w-40 h-40 text-primary" />
          </div>
          <div>
            <h2 className="text-3xl font-headline font-bold tracking-tight sm:text-4xl">The Next Generation of Interactive Storytelling</h2>
            <p className="mt-6 text-lg text-foreground/80">
              Static, scripted NPCs are a thing of the past. FrenGen leverages advanced artificial intelligence to create game characters that are truly alive. They learn, adapt, and react in ways that make every player's journey unique.
            </p>
            <p className="mt-4 text-lg text-foreground/80">
              Our AI characters can understand player intent, remember past interactions, and exhibit complex emotional responses, leading to unprecedented levels of immersion and engagement in your games.
            </p>
          </div>
        </div>
      </Section>

      <Section id="features-game-ai">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-headline font-bold tracking-tight sm:text-4xl">Capabilities of Our AI Game Characters</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Crafting unforgettable characters that drive compelling gameplay.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              icon={<div className="text-primary p-2 bg-primary/10 rounded-md">{feature.icon}</div>}
              title={feature.title}
              description={feature.description}
              className="text-left"
            />
          ))}
        </div>
      </Section>
      
      <Section id="dialogue-demo" className="bg-muted/50">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-headline font-bold tracking-tight sm:text-4xl">AI-Generated Character Dialogue</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            See how our AI can generate creative and contextually relevant dialogue for game characters.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <GameCharacterScriptDemo />
        </div>
      </Section>

      <Section id="benefits-game-ai">
        <div className="text-center mb-12">
            <h2 className="text-3xl font-headline font-bold tracking-tight sm:text-4xl">Elevate Your Gaming Experience</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6 bg-card rounded-lg shadow">
                <Users2 className="w-10 h-10 text-primary mx-auto mb-3" />
                <h3 className="font-headline text-xl font-semibold mb-2">Boost Player Retention</h3>
                <p className="text-sm text-muted-foreground">Keep players hooked with evolving characters and narratives that respond to their actions.</p>
            </div>
            <div className="p-6 bg-card rounded-lg shadow">
                <Sparkles className="w-10 h-10 text-primary mx-auto mb-3" />
                <h3 className="font-headline text-xl font-semibold mb-2">Unforgettable Experiences</h3>
                <p className="text-sm text-muted-foreground">Create unique gameplay moments that players will talk about and remember.</p>
            </div>
            <div className="p-6 bg-card rounded-lg shadow">
                <BrainCircuit className="w-10 h-10 text-primary mx-auto mb-3" />
                <h3 className="font-headline text-xl font-semibold mb-2">Reduce Development Time</h3>
                <p className="text-sm text-muted-foreground">Leverage AI to assist in content generation for complex character interactions.</p>
            </div>
        </div>
      </Section>

      <Section id="cta-game-ai" className="text-center">
        <h2 className="text-2xl font-headline font-bold tracking-tight sm:text-3xl">Ready to Create Living Game Worlds?</h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
          Partner with FrenGen to integrate cutting-edge AI characters into your next gaming project.
        </p>
        <div className="mt-8">
          <Button asChild size="lg">
            <Link href="/contact?subject=AI+Game+Character+Inquiry">Discuss Your Game</Link>
          </Button>
        </div>
      </Section>
    </>
  );
}
