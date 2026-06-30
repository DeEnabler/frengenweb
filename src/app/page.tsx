import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { HeroSection } from '@/components/ui/hero-section';
import { Section } from '@/components/ui/section';
import { FeatureCard } from '@/components/ui/feature-card';
import { Users, ChevronRight, Lightbulb, Target, CheckCircle, ArrowRight, Clock, Palette, ShieldCheck, BarChart, Zap, Globe, Building2, Layers, Sparkles, Smartphone, Search, Rocket, MessageSquare, Code2, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import { TypewriterEffect } from '@/components/ui/typewriter-effect';

const teamMembers = [
  {
    name: "Shlomi Gibly",
    role: "Co-founder & AI Operations Lead",
    bio: "Builds AI agents and automation systems for real-world business operations. Experienced in data-driven solutions and deploying practical AI that replaces manual workflows.",
    image: "/images/team/shlomi-gibly.jpg",
    expertise: ["AI Agents", "Website Automation", "Operations"],
  },
  {
    name: "Nadav Rubinstein",
    role: "Co-founder & ML Research Lead",
    bio: "Machine learning researcher with experience from IBM and Rafael. Focuses on building custom AI models that solve concrete business problems, not just academic benchmarks.",
    image: "/images/team/nadav-rubinstein.jpg",
    expertise: ["Machine Learning", "Deep Learning", "Custom AI"],
  },
  {
    name: "Ofir Bar Tal",
    role: "Co-founder & AI Engineering Lead",
    bio: "Former data scientist at Google (Waze). Turns complex ML research into working products. Specializes in LLM applications and building AI systems that actually ship.",
    image: "/images/team/ofir-bar-tal.jpg",
    expertise: ["LLM Applications", "Data Science", "Product Engineering"],
  },
  {
    name: "Omri Ben Ami",
    role: "Head of Customer Success & Web Strategy",
    bio: "Ensures every website we build drives real results for small business owners. Leads client onboarding, conversion strategy, and ongoing website optimization.",
    image: "/images/team/omri-ben-ami.jpg",
    expertise: ["Web Strategy", "Client Success", "Conversion Optimization"],
  },
];

export default function HomePage() {
  return (
    <>
      {/* ─── HERO SECTION ─── */}
      <HeroSection
        title={<TypewriterEffect />}
        titleClassName="text-5xl font-headline font-bold tracking-tight sm:text-6xl lg:text-7xl min-h-40 flex items-center justify-center"
      >
        <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
          Missile OS helps small business owners around the world quickly build beautiful, professional, high-converting websites using intelligent AI agents — fast, affordable, and without needing technical skills.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/contact">Build Your Website Today <ArrowRight className="w-4 h-4 ml-1" /></Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="#how-it-works">See How It Works</Link>
          </Button>
        </div>
        <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4 text-primary" /> AI-powered design</span>
          <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4 text-primary" /> Fast turnaround</span>
          <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4 text-primary" /> Affordable for SMBs</span>
        </div>
      </HeroSection>

      {/* ─── THE PROBLEM ─── */}
      <Section className="bg-card">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-headline font-bold tracking-tight sm:text-4xl">
              Getting a Professional Website Shouldn't Be This Hard
            </h2>
            <p className="mt-6 text-lg text-foreground/80">
              Small business owners face the same frustrating choice: pay an agency thousands of dollars and wait months, or struggle with complicated DIY tools that deliver mediocre results.
            </p>
            <p className="mt-4 text-lg text-foreground/80">
              Expensive agencies charge $5,000–$15,000 for a basic website. DIY platforms leave you with generic templates that don't convert. And neither option keeps your site updated, secure, or optimized for growth.
            </p>
            <p className="mt-4 text-lg text-foreground/80 font-semibold">
              You deserve a better way to build your online presence.
            </p>
          </div>
          <div className="flex items-center justify-center h-80 md:h-96 rounded-lg shadow-xl bg-gradient-to-br from-primary/5 to-primary/20">
            <div className="text-center p-8">
              <Building2 className="w-16 h-16 text-primary mx-auto mb-4" />
              <p className="text-muted-foreground text-sm max-w-xs mx-auto">
                Most small businesses overpay for basic websites — or settle for templates that don't represent their brand. Missile OS changes that.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* ─── OUR SOLUTION ─── */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-headline font-bold tracking-tight sm:text-4xl">
            The AI-Powered Website Builder for Small Business
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            We combine powerful AI agents with expert execution to deliver professional websites that look great and actually work for growing businesses. No technical skills required — just tell us about your business and we handle the rest.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Palette className="w-10 h-10 text-primary" />}
            title="Professional Design"
            description="Beautiful, custom-designed websites that reflect your brand. No templates, no cookie-cutter layouts. Every site is built to impress your customers and drive conversions."
          />
          <FeatureCard
            icon={<Zap className="w-10 h-10 text-primary" />}
            title="Fast Delivery"
            description="Most websites are built and launched in days, not months. Our AI agents handle the heavy lifting so you get a polished, professional site fast."
          />
          <FeatureCard
            icon={<ShieldCheck className="w-10 h-10 text-primary" />}
            title="AI-Powered Maintenance & Security"
            description="Your website stays up-to-date, secure, and optimized. We monitor performance, apply security patches, and improve your site continuously using intelligent AI systems."
          />
        </div>
      </Section>

      {/* ─── HOW IT WORKS ─── */}
      <Section className="bg-card" id="how-it-works">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-headline font-bold tracking-tight sm:text-4xl">
            How to Build a Website for Your Small Business with AI
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            From your first conversation to a live website in four simple steps.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { step: "01", icon: MessageSquare, title: "Tell Us About Your Business", desc: "A 30-minute call to understand your industry, brand, goals, and what makes your business unique." },
            { step: "02", icon: Sparkles, title: "AI Designs Your Site", desc: "Our AI agents generate a tailored design with the right structure, copy, and visuals for your business." },
            { step: "03", icon: Rocket, title: "We Build & Launch Fast", desc: "Your professional website is built, tested, and launched — typically within days, not weeks." },
            { step: "04", icon: BarChart, title: "Ongoing Optimization & Security", desc: "We maintain, update, and protect your site with AI-powered monitoring and continuous improvements." },
          ].map((item) => (
            <div key={item.step} className="text-center p-6">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-5">
                <item.icon className="w-6 h-6" />
              </div>
              <p className="text-sm font-semibold text-primary mb-2">Step {item.step}</p>
              <h3 className="font-headline text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ─── WHAT WE DELIVER ─── */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-headline font-bold tracking-tight sm:text-4xl">
            What You Get with Missile OS
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Every website we build is designed to attract customers and grow your business.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: Palette, title: "Beautiful, Custom Design", desc: "Your site reflects your unique brand — not a generic template." },
            { icon: Smartphone, title: "Mobile-First & Fast Loading", desc: "Optimized for every device with lightning-fast load times." },
            { icon: Search, title: "SEO Optimized", desc: "Built to rank well in search engines so customers can find you." },
            { icon: Target, title: "Conversion-Focused", desc: "Every page is designed to turn visitors into customers." },
            { icon: ShieldCheck, title: "AI-Powered Security", desc: "Your site is monitored and protected by intelligent security systems." },
            { icon: Layers, title: "Ongoing Maintenance", desc: "We keep your site updated, secure, and performing at its best." },
          ].map((item) => (
            <div key={item.title} className="bg-card rounded-lg p-6 border border-border/50 hover:border-primary/30 transition-colors">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary mb-4">
                <item.icon className="w-5 h-5" />
              </div>
              <h3 className="font-headline text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ─── WHY MISSILE OS ─── */}
      <Section className="bg-card">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-headline font-bold tracking-tight sm:text-4xl">
            Why Small Businesses Choose Missile OS
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Not just another website builder. We combine AI intelligence with real-world expertise to deliver affordable website design for small business.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Rocket, title: "Fast & Affordable", desc: "Websites built in days, not months. Affordable flat-rate pricing designed for small business budgets." },
            { icon: Globe, title: "Global SMB Focus", desc: "We help small businesses everywhere. Your location doesn't matter — your online presence does." },
            { icon: Zap, title: "AI Agents Do the Heavy Lifting", desc: "Our intelligent AI systems handle design, copywriting, optimization, and security — so you don't have to." },
            { icon: BarChart, title: "Real Results, Not Just Hype", desc: "Every site we build is focused on conversions, traffic, and measurable growth for your business." },
          ].map((item) => (
            <div key={item.title} className="text-center p-6">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="font-headline text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ─── TEAM SECTION ─── */}
      <Section>
        <div className="text-center mb-12">
          <Users className="w-12 h-12 text-primary mx-auto mb-4" />
          <h2 className="text-3xl font-headline font-bold tracking-tight sm:text-4xl">
            Meet the Team
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
            A small, focused team with real-world experience building websites and AI systems that deliver for small businesses.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div key={member.name} className="bg-card rounded-xl p-6 text-center border border-border/50 hover:border-primary/30 transition-colors">
              <div className="relative w-28 h-28 rounded-full overflow-hidden mx-auto mb-4">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={112}
                  height={112}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="font-headline text-xl font-semibold">{member.name}</h3>
              <p className="text-sm text-primary mb-3">{member.role}</p>
              <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>
              <div className="flex flex-wrap gap-2 justify-center">
                {member.expertise.map((skill) => (
                  <span key={skill} className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-full">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Button variant="outline" asChild>
            <Link href="/team">Full Team <ChevronRight className="w-4 h-4 ml-1" /></Link>
          </Button>
        </div>
      </Section>

      {/* ─── AI CYBERSECURITY ─── */}
      <Section className="bg-card">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex items-center justify-center h-80 md:h-96 rounded-lg shadow-xl bg-gradient-to-br from-primary/5 to-primary/20">
            <div className="text-center p-8">
              <ShieldCheck className="w-16 h-16 text-primary mx-auto mb-4" />
              <p className="text-muted-foreground text-sm max-w-xs mx-auto">
                AI-powered security monitoring keeps your website safe from threats, malware, and vulnerabilities.
              </p>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-headline font-bold tracking-tight sm:text-4xl">
              AI Cybersecurity — Protecting What We Build
            </h2>
            <p className="mt-6 text-lg text-foreground/80">
              Every website built through Missile OS benefits from AI-powered cybersecurity monitoring. Our intelligent security agents detect threats, block malicious activity, and keep your online presence safe — without requiring technical expertise on your end.
            </p>
            <p className="mt-4 text-lg text-foreground/80">
              Small businesses are increasingly targeted by cyber attacks. We make enterprise-grade protection affordable and automatic.
            </p>
            <div className="mt-6">
              <Button asChild variant="outline">
                <Link href="/contact">Learn About Security <ChevronRight className="w-4 h-4 ml-1" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* ─── FINAL CTA ─── */}
      <Section className="bg-primary text-primary-foreground text-center">
        <h2 className="text-3xl font-headline font-bold tracking-tight sm:text-4xl">
          Ready to Build Your Professional Website?
        </h2>
        <p className="mt-6 text-lg text-primary-foreground/90 max-w-2xl mx-auto">
          Get a beautiful, AI-powered website for your small business — fast and affordable. Start with a free strategy call.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button size="lg" variant="secondary" asChild className="hover:bg-secondary/90">
            <Link href="/contact">Get Your Free Strategy Call <ArrowRight className="w-4 h-4 ml-1" /></Link>
          </Button>
          <Button size="lg" variant="outline" asChild className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
            <Link href="/case-studies">See Examples</Link>
          </Button>
        </div>
        <p className="mt-6 text-sm text-primary-foreground/70">
          Free consultation. No pressure. No commitment required.
        </p>
      </Section>
    </>
  );
}
