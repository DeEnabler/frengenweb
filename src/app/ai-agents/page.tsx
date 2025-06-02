
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { HeroSection } from '@/components/ui/hero-section';
import { Section } from '@/components/ui/section';
import { FeatureCard } from '@/components/ui/feature-card';
import { Bot, Zap, BarChart, MessageSquare, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { ServiceRecommendationDemo } from '@/components/genai/service-recommendation-demo';

const useCases = [
  {
    icon: <MessageSquare className="w-8 h-8" />,
    title: "Automated Customer Support",
    description: "AI agents handle customer inquiries 24/7, resolving issues faster and improving satisfaction.",
  },
  {
    icon: <BarChart className="w-8 h-8" />,
    title: "Data Entry & Processing",
    description: "Streamline data management with AI agents that accurately enter, validate, and process information.",
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Workflow Optimization",
    description: "Identify bottlenecks and automate repetitive tasks within your existing workflows for peak efficiency.",
  },
  {
    icon: <Bot className="w-8 h-8" />,
    title: "Personalized Recommendations",
    description: "Deliver tailored product or content suggestions to users, driven by intelligent AI analysis.",
  },
];

const benefits = [
  "Increased Efficiency & Productivity",
  "Reduced Operational Costs",
  "Improved Accuracy & Data Quality",
  "Enhanced Customer Experience",
  "Scalability to Meet Demand",
  "Focus Human Talent on Strategic Tasks",
];

export default function AiAgentsPage() {
  return (
    <>
      <HeroSection
        title="AI Agents: Automate Complexity, Amplify Efficiency"
        subtitle="Discover how FrenGen's intelligent agents can revolutionize your business operations, streamline workflows, and unlock new levels of productivity."
      >
        <Button asChild size="lg">
          <Link href="/contact?subject=AI+Agent+Demo">Request an AI Agent Demo</Link>
        </Button>
      </HeroSection>

      <Section id="what-are-ai-agents" className="bg-card">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-xl">
             <Image src="https://placehold.co/600x400.png" alt="AI Agents in action" layout="fill" objectFit="cover" data-ai-hint="robot technology" />
          </div>
          <div>
            <h2 className="text-3xl font-headline font-bold tracking-tight sm:text-4xl">What Are AI Agents?</h2>
            <p className="mt-6 text-lg text-foreground/80">
              AI agents are sophisticated software entities designed to perform tasks autonomously on behalf of users or other programs. They perceive their environment, make decisions, and take actions to achieve specific goals. At FrenGen, we build custom agents that integrate seamlessly into your existing systems, tackling complex processes with precision and intelligence.
            </p>
            <p className="mt-4 text-lg text-foreground/80">
              From automating routine administrative work to handling intricate data analysis and customer interactions, our AI agents are engineered to learn, adapt, and deliver consistent results.
            </p>
          </div>
        </div>
      </Section>

      <Section id="use-cases">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-headline font-bold tracking-tight sm:text-4xl">Versatile Applications Across Industries</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Our AI agents can be tailored to a wide array of business needs.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {useCases.map((useCase) => (
            <FeatureCard
              key={useCase.title}
              icon={<div className="text-primary p-2 bg-primary/10 rounded-md">{useCase.icon}</div>}
              title={useCase.title}
              description={useCase.description}
              className="text-left"
            />
          ))}
        </div>
      </Section>
      
      <Section id="benefits" className="bg-muted/50">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-headline font-bold tracking-tight sm:text-4xl">Key Benefits of FrenGen AI Agents</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit) => (
            <div key={benefit} className="flex items-start space-x-3 p-4 bg-card rounded-lg shadow">
              <ChevronRight className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <p className="text-md">{benefit}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="ai-demo" className="bg-card">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-headline font-bold tracking-tight sm:text-4xl">Get a Personalized Recommendation</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Describe your business challenge, and our AI will suggest how FrenGen's services can help address your specific needs.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <ServiceRecommendationDemo />
        </div>
      </Section>

      <Section id="cta" className="text-center">
        <h2 className="text-2xl font-headline font-bold tracking-tight sm:text-3xl">Ready to Empower Your Business with AI Agents?</h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
          Let's discuss your specific automation challenges and how FrenGen can design the perfect agent solution for you.
        </p>
        <div className="mt-8">
          <Button asChild size="lg">
            <Link href="/contact?subject=AI+Agent+Inquiry">Contact Us Today</Link>
          </Button>
        </div>
      </Section>
    </>
  );
}
