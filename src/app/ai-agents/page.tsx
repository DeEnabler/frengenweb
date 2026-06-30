import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { HeroSection } from '@/components/ui/hero-section';
import { Section } from '@/components/ui/section';
import { FeatureCard } from '@/components/ui/feature-card';
import { Bot, Zap, Palette, Search, BarChart, ShieldCheck, ChevronRight, Rocket, Sparkles, Code2, Globe } from 'lucide-react';

const capabilities = [
  {
    icon: <Palette className="w-8 h-8" />,
    title: "AI-Powered Design Generation",
    description: "Our AI agents analyze your brand and industry to generate custom, professional website designs — no templates, no cookie-cutter layouts.",
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Automated Copywriting",
    description: "AI agents write compelling, conversion-focused copy for every page, tailored to your industry and target audience.",
  },
  {
    icon: <Search className="w-8 h-8" />,
    title: "Intelligent SEO Optimization",
    description: "Built-in SEO ensures your website ranks well on Google and other search engines, driving organic traffic to your business.",
  },
  {
    icon: <BarChart className="w-8 h-8" />,
    title: "Conversion Optimization",
    description: "Every page is structured with clear calls-to-action and user journeys designed to turn visitors into paying customers.",
  },
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: "AI-Powered Security Monitoring",
    description: "Intelligent security agents monitor your website 24/7, detecting threats and blocking attacks before they cause damage.",
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Global Small Business Focus",
    description: "We build websites for small businesses worldwide, with AI agents that understand local markets and industry needs.",
  },
];

export default function AiAgentsPage() {
  return (
    <>
      <HeroSection
        title="AI Agents That Build Professional Websites"
        subtitle="Missile OS uses intelligent AI agents to design, build, and maintain high-converting websites for small businesses — fast, affordable, and without technical skills."
      >
        <Button asChild size="lg">
          <Link href="/contact">Build Your Website Today</Link>
        </Button>
      </HeroSection>

      <Section id="what-are-ai-agents" className="bg-card">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex items-center justify-center h-80 md:h-96 rounded-lg shadow-xl bg-card">
            <Bot className="w-40 h-40 text-primary" />
          </div>
          <div>
            <h2 className="text-3xl font-headline font-bold tracking-tight sm:text-4xl">What Are AI Website Agents?</h2>
            <p className="mt-6 text-lg text-foreground/80">
              AI website agents are intelligent software systems that autonomously handle the work of building a professional website — from design and copywriting to SEO optimization and security monitoring. At Missile OS, our AI agents work alongside our expert team to deliver websites that look great and actually convert visitors into customers.
            </p>
            <p className="mt-4 text-lg text-foreground/80">
              Instead of paying an agency thousands of dollars and waiting months, our AI agents handle the heavy lifting in days — at a price small businesses can actually afford.
            </p>
          </div>
        </div>
      </Section>

      <Section id="capabilities">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-headline font-bold tracking-tight sm:text-4xl">What Our AI Agents Do</h2>
          <p className="mt-4 text-lg text-muted-foreground">From design to security, our AI handles every aspect of website creation and maintenance.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {capabilities.map((cap) => (
            <FeatureCard
              key={cap.title}
              icon={<div className="text-primary p-2 bg-primary/10 rounded-md">{cap.icon}</div>}
              title={cap.title}
              description={cap.description}
              className="text-left"
            />
          ))}
        </div>
      </Section>

      <Section id="benefits" className="bg-muted/50">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-headline font-bold tracking-tight sm:text-4xl">The Benefits of AI-Powered Website Building</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Websites built in days, not months",
            "70% lower cost than traditional agencies",
            "Professional, custom design — no templates",
            "Built-in SEO and conversion optimization",
            "Ongoing AI-powered maintenance and updates",
            "AI cybersecurity protection included",
          ].map((benefit) => (
            <div key={benefit} className="flex items-start space-x-3 p-4 bg-card rounded-lg shadow">
              <ChevronRight className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <p className="text-md">{benefit}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="cta" className="text-center">
        <h2 className="text-2xl font-headline font-bold tracking-tight sm:text-3xl">Ready to Let AI Build Your Website?</h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
          Get a professional, AI-powered website for your small business — fast and affordable. Start with a free strategy call.
        </p>
        <div className="mt-8">
          <Button asChild size="lg">
            <Link href="/contact">Get Your Free Strategy Call</Link>
          </Button>
        </div>
      </Section>
    </>
  );
}
