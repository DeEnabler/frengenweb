
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { HeroSection } from '@/components/ui/hero-section';
import { Section } from '@/components/ui/section';
import { FeatureCard } from '@/components/ui/feature-card';
import { Bot, MessageCircle, Gamepad2, Users, Brain, Briefcase, ChevronRight, Layers, Waypoints } from 'lucide-react';
import Image from 'next/image';
import { TypewriterEffect } from '@/components/ui/typewriter-effect';

export default function HomePage() {
  return (
    <>
      <HeroSection
        title={<TypewriterEffect />}
        titleClassName="text-7xl font-headline font-bold tracking-tight sm:text-8xl lg:text-9xl"
      >
        <Button asChild size="lg">
          <Link href="/contact">Request a Demo</Link>
        </Button>
        <Button asChild variant="outline" size="lg">
          <Link href="/expertise">Explore Our Expertise</Link>
        </Button>
      </HeroSection>

      {/* Core Offerings Section */}
      <Section className="bg-card">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-headline font-bold tracking-tight sm:text-4xl">Core AI Offerings</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Transforming industries with state-of-the-art AI technology.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Bot className="w-10 h-10 text-primary" />}
            title="AI Agents for Automation"
            description="Automate complex tasks and improve business efficiency with our custom-built AI agents."
          >
            <Button variant="link" asChild className="mt-4 px-0 text-primary">
              <Link href="/ai-agents">Learn More <ChevronRight className="w-4 h-4 ml-1" /></Link>
            </Button>
          </FeatureCard>
          <FeatureCard
            icon={<MessageCircle className="w-10 h-10 text-primary" />}
            title="Intelligent Chatbots"
            description="Empower employees to explore company data seamlessly through intuitive conversational interfaces."
          >
             <Button variant="link" asChild className="mt-4 px-0 text-primary">
              <Link href="/chatbots">Discover Chatbots <ChevronRight className="w-4 h-4 ml-1" /></Link>
            </Button>
          </FeatureCard>
          <FeatureCard
            icon={<Gamepad2 className="w-10 h-10 text-primary" />}
            title="AI Game Characters"
            description="Enhance user engagement and retention with personalized, AI-driven characters for gaming applications."
          >
            <Button variant="link" asChild className="mt-4 px-0 text-primary">
              <Link href="/game-characters">See Game AI <ChevronRight className="w-4 h-4 ml-1" /></Link>
            </Button>
          </FeatureCard>
        </div>
      </Section>

      {/* Bespoke Solutions & Consultancy Section */}
      <Section>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-headline font-bold tracking-tight sm:text-4xl">Tailored AI for Your Unique Needs</h2>
            <p className="mt-6 text-lg text-foreground/80">
              At FrenGen, we understand that one size doesn't fit all. We specialize in developing bespoke AI solutions and providing expert consultancy services, meticulously designed to meet the unique challenges and objectives of your business, whether you're a startup or an enterprise.
            </p>
            <div className="mt-8">
              <Button asChild size="lg">
                <Link href="/contact#consultancy">Discuss Your Project</Link>
              </Button>
            </div>
          </div>
          <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-xl">
             <Image src="https://placehold.co/600x400/000000/FFFFFF?text=Custom+AI" alt="Custom AI Solutions" layout="fill" objectFit="cover" data-ai-hint="technology abstract" />
          </div>
        </div>
      </Section>

      {/* Technical Expertise Highlights */}
       <Section className="bg-muted/50">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-headline font-bold tracking-tight sm:text-4xl">Powered by Expertise</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Our proficiency in cutting-edge AI technologies ensures robust and scalable solutions.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: <Layers className="w-8 h-8 text-primary" />, title: "LLM Applications", desc: "User-facing apps with advanced LLMs." },
            { icon: <Briefcase className="w-8 h-8 text-primary" />, title: "Backend Infrastructure", desc: "Robust SaaS backends." },
            { icon: <Waypoints className="w-8 h-8 text-primary" />, title: "RAG Solutions", desc: "Scalable, data-driven AI systems." },
            { icon: <Brain className="w-8 h-8 text-primary" />, title: "Prompt Engineering", desc: "Optimized AI interactions." },
          ].map(item => (
            <div key={item.title} className="p-6 bg-card rounded-lg shadow-md text-center">
              <div className="mb-4 inline-flex items-center justify-center p-3 bg-primary/10 rounded-full">{item.icon}</div>
              <h3 className="font-headline text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Button variant="outline" asChild>
            <Link href="/expertise">Explore All Expertise <ChevronRight className="w-4 h-4 ml-1" /></Link>
          </Button>
        </div>
      </Section>

      {/* Team Showcase Teaser */}
      <Section>
        <div className="text-center">
          <Users className="w-12 h-12 text-primary mx-auto mb-4" />
          <h2 className="text-3xl font-headline font-bold tracking-tight sm:text-4xl">Meet Our Global Team</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
            A diverse group of ex-big tech engineers, brilliant student developers, and leading ML PhDs, all passionate about pioneering AI innovation.
          </p>
          <div className="mt-8">
            <Button asChild>
              <Link href="/team">Discover Our Talent</Link>
            </Button>
          </div>
        </div>
      </Section>

      {/* Case Studies Teaser */}
      <Section className="bg-card">
         <div className="grid md:grid-cols-2 gap-12 items-center">
           <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-xl">
             <Image src="https://placehold.co/600x400/000000/FFFFFF?text=Impact" alt="Real-world Impact" layout="fill" objectFit="cover" data-ai-hint="business success" />
          </div>
          <div>
            <h2 className="text-3xl font-headline font-bold tracking-tight sm:text-4xl">Real-World Impact</h2>
            <p className="mt-6 text-lg text-foreground/80">
              See how FrenGen has empowered businesses like yours to achieve remarkable results. Our case studies showcase the tangible benefits of our AI solutions.
            </p>
            <div className="mt-8">
              <Button asChild variant="outline">
                <Link href="/case-studies">View Case Studies</Link>
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* Final CTA */}
      <Section className="bg-primary text-primary-foreground text-center">
        <h2 className="text-3xl font-headline font-bold tracking-tight sm:text-4xl">Ready to Transform Your Business with AI?</h2>
        <p className="mt-6 text-lg text-primary-foreground/90 max-w-2xl mx-auto">
          Let's discuss how FrenGen can help you unlock new possibilities and drive innovation.
        </p>
        <div className="mt-10">
          <Button size="lg" variant="secondary" asChild className="hover:bg-secondary/90">
            <Link href="/contact">Get Started Today</Link>
          </Button>
        </div>
      </Section>
    </>
  );
}
