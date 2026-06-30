import { HeroSection } from '@/components/ui/hero-section';
import { Section } from '@/components/ui/section';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Palette, Search, Zap, ShieldCheck, Code2, Smartphone, Layers, BarChart, Globe, Rocket } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const expertiseAreas = [
  {
    icon: <Palette className="w-10 h-10" />,
    title: "AI-Powered Web Design",
    description: "Our AI agents generate beautiful, custom website designs tailored to your brand and industry — no templates, no cookie-cutter layouts.",
    tags: ["Custom Design", "Brand-Matched", "No Templates"],
  },
  {
    icon: <Search className="w-10 h-10" />,
    title: "SEO-Optimized Development",
    description: "Every website is built with search engine optimization built in, so your small business gets found by customers searching for your services.",
    tags: ["On-Page SEO", "Technical SEO", "Local Search"],
  },
  {
    icon: <Smartphone className="w-10 h-10" />,
    title: "Mobile-First Development",
    description: "Your website is designed and tested for every device — phones, tablets, and desktops — with lightning-fast load times.",
    tags: ["Responsive", "Fast Loading", "Mobile UX"],
  },
  {
    icon: <BarChart className="w-10 h-10" />,
    title: "Conversion-Focused Architecture",
    description: "Every page is structured to turn visitors into customers, with clear calls-to-action, trust signals, and optimized user journeys.",
    tags: ["CRO", "Lead Generation", "User Journeys"],
  },
  {
    icon: <Zap className="w-10 h-10" />,
    title: "AI Agent Automation",
    description: "Our intelligent AI agents handle design, copywriting, layout generation, and ongoing optimization — delivering professional results fast.",
    tags: ["LLM Agents", "Automated Design", "AI Copywriting"],
  },
  {
    icon: <ShieldCheck className="w-10 h-10" />,
    title: "AI-Powered Cybersecurity",
    description: "We protect every website we build with AI-driven security monitoring that detects threats, blocks attacks, and keeps your site safe 24/7.",
    tags: ["Threat Detection", "Malware Protection", "24/7 Monitoring"],
  },
  {
    icon: <Layers className="w-10 h-10" />,
    title: "Ongoing Maintenance & Updates",
    description: "Your website stays fresh, secure, and up-to-date with continuous AI-powered monitoring, performance optimization, and content updates.",
    tags: ["Continuous Updates", "Performance", "Content Refresh"],
  },
  {
    icon: <Globe className="w-10 h-10" />,
    title: "Global Small Business Focus",
    description: "We build websites for small businesses worldwide, understanding the unique needs and budgets of SMBs across different industries and regions.",
    tags: ["SMB Expertise", "Global Reach", "Affordable Pricing"],
  },
];

export default function ExpertisePage() {
  return (
    <>
      <HeroSection
        title="How We Build Professional Websites with AI"
        subtitle="Missile OS combines cutting-edge AI technology with expert human oversight to deliver websites that look great, load fast, and convert visitors into customers — all at a price small businesses can afford."
      />
      <Section id="expertise-grid">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertiseAreas.map((area) => (
            <Card key={area.title} className="flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="items-center text-center">
                <div className="p-3 bg-primary/10 rounded-full inline-block mb-3 text-primary">
                  {area.icon}
                </div>
                <CardTitle className="font-headline text-xl">{area.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow text-center">
                <p className="text-sm text-muted-foreground mb-4">{area.description}</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {area.tags.map(tag => (
                    <span key={tag} className="px-2 py-0.5 text-xs bg-accent/10 text-accent rounded-full">{tag}</span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>
      <Section id="philosophy" className="bg-card">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-headline font-bold tracking-tight sm:text-4xl">Our Approach to Website Building</h2>
          <p className="mt-6 text-lg text-foreground/80">
            At Missile OS, we believe that every small business deserves a professional website that actually works. We start by understanding your business, your customers, and your goals. Then our AI agents handle the heavy lifting — design, copywriting, development, and optimization — while our expert team ensures quality at every step. The result is a website that looks premium, loads fast, ranks well, and converts visitors into customers. All delivered in days, not months, at a price that fits your budget.
          </p>
        </div>
      </Section>
      <Section id="cta-expertise" className="text-center">
        <h2 className="text-2xl font-headline font-bold tracking-tight sm:text-3xl">Ready to Build Your Website?</h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
          Let's discuss how our AI-powered approach can deliver a professional website for your small business — fast and affordable.
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
