import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { HeroSection } from '@/components/ui/hero-section';
import { Section } from '@/components/ui/section';
import { FeatureCard } from '@/components/ui/feature-card';
import { MessageCircle, Search, ShieldCheck, Zap, Globe, Smartphone, ChevronRight } from 'lucide-react';

const features = [
  {
    icon: <Search className="w-8 h-8" />,
    title: "AI-Powered Website Chatbots",
    description: "Intelligent chatbots that engage visitors on your website, answer common questions, and capture leads 24/7 — even when you're not available.",
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Instant Customer Support",
    description: "Your website visitors get instant answers about your services, pricing, and availability, improving customer satisfaction and reducing response times.",
  },
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: "Secure & Context-Aware",
    description: "Our chatbots are trained on your business information and maintain data security while providing relevant, accurate responses to your customers.",
  },
  {
    icon: <MessageCircle className="w-8 h-8" />,
    title: "Lead Capture & Qualification",
    description: "Chatbots automatically qualify leads, collect contact information, and route serious inquiries directly to you — so you never miss an opportunity.",
  },
];

export default function ChatbotsPage() {
  return (
    <>
      <HeroSection
        title="AI Chatbots for Your Small Business Website"
        subtitle="Engage visitors, capture leads, and provide instant support 24/7 with AI-powered chatbots built into your website by Missile OS."
      >
        <Button asChild size="lg">
          <Link href="/contact">Add a Chatbot to Your Website</Link>
        </Button>
      </HeroSection>

      <Section id="why-chatbots" className="bg-card">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex items-center justify-center h-80 md:h-96 rounded-lg shadow-xl bg-card">
            <MessageCircle className="w-40 h-40 text-primary" />
          </div>
          <div>
            <h2 className="text-3xl font-headline font-bold tracking-tight sm:text-4xl">Turn Your Website Into a 24/7 Sales Assistant</h2>
            <p className="mt-6 text-lg text-foreground/80">
              When potential customers visit your website, they often have questions. If those questions go unanswered, they leave. Our AI-powered chatbots engage visitors instantly, answer common questions about your services, and capture leads — even when you're busy running your business.
            </p>
            <p className="mt-4 text-lg text-foreground/80">
              It's like having a sales representative on your website around the clock, at a fraction of the cost.
            </p>
          </div>
        </div>
      </Section>

      <Section id="features">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-headline font-bold tracking-tight sm:text-4xl">What Our AI Chatbots Do</h2>
          <p className="mt-4 text-lg text-muted-foreground">Designed for small businesses that want to engage every visitor.</p>
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

      <Section id="benefits-chatbots">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-headline font-bold tracking-tight sm:text-4xl">How Chatbots Help Your Small Business</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-card rounded-lg shadow">
            <Zap className="w-10 h-10 text-primary mx-auto mb-3" />
            <h3 className="font-headline text-xl font-semibold mb-2">Never Miss a Lead</h3>
            <p className="text-sm text-muted-foreground">Every visitor gets an instant response, so you capture leads even outside business hours.</p>
          </div>
          <div className="p-6 bg-card rounded-lg shadow">
            <MessageCircle className="w-10 h-10 text-primary mx-auto mb-3" />
            <h3 className="font-headline text-xl font-semibold mb-2">Reduce Response Times</h3>
            <p className="text-sm text-muted-foreground">Customers get answers immediately, improving satisfaction and increasing the chance they'll choose you.</p>
          </div>
          <div className="p-6 bg-card rounded-lg shadow">
            <ShieldCheck className="w-10 h-10 text-primary mx-auto mb-3" />
            <h3 className="font-headline text-xl font-semibold mb-2">Save Time & Money</h3>
            <p className="text-sm text-muted-foreground">Automate common questions so you and your team can focus on running the business.</p>
          </div>
        </div>
      </Section>

      <Section id="cta-chatbots" className="text-center">
        <h2 className="text-2xl font-headline font-bold tracking-tight sm:text-3xl">Ready to Add a Chatbot to Your Website?</h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
          Let's discuss how an AI chatbot can help your small business capture more leads and serve customers better.
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
