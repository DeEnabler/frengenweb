import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { HeroSection } from '@/components/ui/hero-section';
import { Section } from '@/components/ui/section';
import { ShieldCheck, Zap, Globe, Lock, ScanSearch, Bot, ChevronRight } from 'lucide-react';
import { FeatureCard } from '@/components/ui/feature-card';

const securityFeatures = [
  {
    icon: <ScanSearch className="w-8 h-8" />,
    title: "Threat Detection & Monitoring",
    description: "AI agents scan your website 24/7 for malware, suspicious activity, and security vulnerabilities — catching threats before they cause damage.",
  },
  {
    icon: <Lock className="w-8 h-8" />,
    title: "Automatic Security Patching",
    description: "Your website's software, plugins, and dependencies are automatically updated with the latest security patches — no manual work required.",
  },
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: "DDoS & Attack Prevention",
    description: "Intelligent AI systems detect and block DDoS attacks, brute force login attempts, and other common threats targeting small business websites.",
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Real-Time Alerts",
    description: "If a security issue is detected, you're notified immediately with clear, plain-language guidance — no technical knowledge needed.",
  },
];

export default function GameCharactersPage() {
  return (
    <>
      <HeroSection
        title="AI-Powered Cybersecurity for Small Business Websites"
        subtitle="Every website built by Missile OS is protected by intelligent AI security agents that monitor, detect, and block threats 24/7 — enterprise-grade protection at a price small businesses can afford."
      >
        <Button asChild size="lg">
          <Link href="/contact">Protect Your Website</Link>
        </Button>
      </HeroSection>

      <Section id="why-ai-security" className="bg-card">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex items-center justify-center h-80 md:h-96 rounded-lg shadow-xl bg-card">
            <ShieldCheck className="w-40 h-40 text-primary" />
          </div>
          <div>
            <h2 className="text-3xl font-headline font-bold tracking-tight sm:text-4xl">Small Businesses Are Targets Too</h2>
            <p className="mt-6 text-lg text-foreground/80">
              Many small business owners think cyber attacks only happen to large companies. The reality is that small businesses are increasingly targeted because they often have weaker security. In fact, 43% of cyber attacks target small businesses.
            </p>
            <p className="mt-4 text-lg text-foreground/80">
              At Missile OS, we believe that website security shouldn't be a luxury reserved for enterprises. That's why every website we build comes with AI-powered security monitoring — included, not extra.
            </p>
          </div>
        </div>
      </Section>

      <Section id="features-security">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-headline font-bold tracking-tight sm:text-4xl">How Our AI Security Works</h2>
          <p className="mt-4 text-lg text-muted-foreground">Intelligent protection that runs in the background, so you can focus on your business.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {securityFeatures.map((feature) => (
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

      <Section id="benefits-security" className="bg-muted/50">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-headline font-bold tracking-tight sm:text-4xl">Why AI Security Matters for Your Small Business</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-card rounded-lg shadow">
            <ShieldCheck className="w-10 h-10 text-primary mx-auto mb-3" />
            <h3 className="font-headline text-xl font-semibold mb-2">Protect Your Reputation</h3>
            <p className="text-sm text-muted-foreground">A hacked website damages customer trust. AI security keeps your site safe and your reputation intact.</p>
          </div>
          <div className="p-6 bg-card rounded-lg shadow">
            <Bot className="w-10 h-10 text-primary mx-auto mb-3" />
            <h3 className="font-headline text-xl font-semibold mb-2">24/7 Automated Protection</h3>
            <p className="text-sm text-muted-foreground">AI agents monitor your site around the clock, so threats are caught even while you sleep.</p>
          </div>
          <div className="p-6 bg-card rounded-lg shadow">
            <Globe className="w-10 h-10 text-primary mx-auto mb-3" />
            <h3 className="font-headline text-xl font-semibold mb-2">Affordable for Small Business</h3>
            <p className="text-sm text-muted-foreground">Enterprise-grade security doesn't have to cost a fortune. It's included with every website we build.</p>
          </div>
        </div>
      </Section>

      <Section id="cta-security" className="text-center">
        <h2 className="text-2xl font-headline font-bold tracking-tight sm:text-3xl">Ready to Build a Secure Website?</h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
          Get a professional website with built-in AI cybersecurity — built fast, affordable, and protected from day one.
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
