import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { HeroSection } from '@/components/ui/hero-section';
import { Section } from '@/components/ui/section';
import { FeatureCard } from '@/components/ui/feature-card';
import { MessageCircle, DatabaseZap, Search, ShieldCheck, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { ChatbotInteractionDemo } from '@/components/genai/chatbot-interaction-demo';

const features = [
  {
    icon: <Search className="w-8 h-8" />,
    title: "Natural Language Queries",
    description: "Employees can ask questions in plain language, just like talking to a colleague.",
  },
  {
    icon: <DatabaseZap className="w-8 h-8" />,
    title: "Seamless Data Integration",
    description: "Connects to various company data sources to provide comprehensive answers.",
  },
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: "Secure & Context-Aware",
    description: "Maintains data security and understands context for relevant, accurate responses.",
  },
  {
    icon: <MessageCircle className="w-8 h-8" />,
    title: "Personalized Insights",
    description: "Delivers insights tailored to employee roles and access permissions.",
  },
];

export default function ChatbotsPage() {
  return (
    <>
      <HeroSection
        title="Intelligent Chatbots: Unlock Your Company's Data Potential"
        subtitle="Empower your employees with Frengen AI's intelligent chatbots, enabling seamless exploration and interaction with company data through intuitive conversational interfaces."
      >
        <Button asChild size="lg">
          <Link href="/contact?subject=Chatbot+Demo">Request a Chatbot Demo</Link>
        </Button>
      </HeroSection>

      <Section id="why-chatbots" className="bg-card">
         <div className="grid md:grid-cols-2 gap-12 items-center">
           <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-xl">
             <Image src="https://placehold.co/600x400/1A1A1A/E5E5E5?text=Chatbots" alt="Intelligent Chatbot Interface" layout="fill" objectFit="cover" data-ai-hint="chatbot interface" />
          </div>
          <div>
            <h2 className="text-3xl font-headline font-bold tracking-tight sm:text-4xl">Conversational Access to Insights</h2>
            <p className="mt-6 text-lg text-foreground/80">
              Traditional data retrieval can be time-consuming and require specialized skills. Frengen AI's intelligent chatbots break down these barriers, allowing any employee to access and understand company information quickly and efficiently.
            </p>
            <p className="mt-4 text-lg text-foreground/80">
              Imagine instantly getting answers to complex questions about sales figures, project statuses, or HR policies, all through a simple chat interface. That's the power our chatbots deliver.
            </p>
          </div>
        </div>
      </Section>

      <Section id="features">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-headline font-bold tracking-tight sm:text-4xl">Core Features of Our Chatbots</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Designed for ease of use, security, and powerful data interaction.
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

      <Section id="chatbot-demo" className="bg-muted/50">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-headline font-bold tracking-tight sm:text-4xl">Experience Our Chatbot</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Try a simplified demo of how our AI can answer questions based on provided data.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <ChatbotInteractionDemo />
        </div>
      </Section>

      <Section id="benefits-chatbots">
        <div className="text-center mb-12">
            <h2 className="text-3xl font-headline font-bold tracking-tight sm:text-4xl">Transform Your Internal Operations</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6 bg-card rounded-lg shadow">
                <DatabaseZap className="w-10 h-10 text-primary mx-auto mb-3" />
                <h3 className="font-headline text-xl font-semibold mb-2">Democratize Data Access</h3>
                <p className="text-sm text-muted-foreground">Make information readily available to everyone, fostering a data-driven culture.</p>
            </div>
            <div className="p-6 bg-card rounded-lg shadow">
                <MessageCircle className="w-10 h-10 text-primary mx-auto mb-3" />
                <h3 className="font-headline text-xl font-semibold mb-2">Boost Productivity</h3>
                <p className="text-sm text-muted-foreground">Reduce time spent searching for information, allowing employees to focus on core tasks.</p>
            </div>
            <div className="p-6 bg-card rounded-lg shadow">
                <ShieldCheck className="w-10 h-10 text-primary mx-auto mb-3" />
                <h3 className="font-headline text-xl font-semibold mb-2">Improve Decision-Making</h3>
                <p className="text-sm text-muted-foreground">Enable faster, more informed decisions with instant access to relevant data.</p>
            </div>
        </div>
      </Section>

      <Section id="cta-chatbots" className="text-center">
        <h2 className="text-2xl font-headline font-bold tracking-tight sm:text-3xl">Ready to Revolutionize Data Interaction?</h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
          Contact Frengen AI to learn how our intelligent chatbots can be tailored to your organization's specific data and needs.
        </p>
        <div className="mt-8">
          <Button asChild size="lg">
            <Link href="/contact?subject=Intelligent+Chatbot+Inquiry">Schedule a Consultation</Link>
          </Button>
        </div>
      </Section>
    </>
  );
}
