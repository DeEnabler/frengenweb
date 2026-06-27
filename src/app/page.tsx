import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { HeroSection } from '@/components/ui/hero-section';
import { Section } from '@/components/ui/section';
import { FeatureCard } from '@/components/ui/feature-card';
import {
  Bot, MessageCircle, MessageSquare, Gamepad2, Users, Brain,
  Briefcase, ChevronRight, Layers, Waypoints, Lightbulb, Target,
  CheckCircle, ArrowRight, Clock, Palette, ShieldCheck, BarChart,
  Zap, Globe, Building2, ChevronDown
} from 'lucide-react';
import Image from 'next/image';
import { TypewriterEffect } from '@/components/ui/typewriter-effect';

const teamMembers = [
  {
    name: "Shlomi Gibly",
    role: "Co-founder & AI Operations Lead",
    bio: "Builds AI agents and automation systems for real-world business operations. Experience in data-driven solutions, blockchain security, and deploying practical AI that replaces manual workflows.",
    image: "/images/team/shlomi-gibly.jpg",
    expertise: ["AI Agents", "Operations Automation", "Data Systems"],
  },
  {
    name: "Nadav Rubinstein",
    role: "Co-founder & ML Research Lead",
    bio: "Machine learning researcher with background from IBM and Rafael. Focuses on building custom AI models and agents that solve concrete business problems, not just academic benchmarks.",
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
];

export default function HomePage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <HeroSection
        title={<TypewriterEffect />}
        titleClassName="text-5xl font-headline font-bold tracking-tight sm:text-6xl lg:text-7xl min-h-40 flex items-center justify-center"
      >
        <Button asChild size="lg">
          <Link href="/contact">Get a Free Consultation</Link>
        </Button>
        <Button asChild variant="outline" size="lg">
          <Link href="/case-studies">See Our Results</Link>
        </Button>
      </HeroSection>

      <Section>
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-xl text-foreground/80 leading-relaxed">
            We help small and medium businesses around the world save time and money by building
            practical AI agents that handle operational work — and professional websites that actually
            drive growth.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4 text-primary" /> Shipped for real companies</span>
            <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4 text-primary" /> AI that replaces manual processes</span>
            <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4 text-primary" /> No enterprise pricing</span>
          </div>
        </div>
      </Section>

      {/* ─── PROBLEM / PAIN SECTION ─── */}
      <Section className="bg-card">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-headline font-bold tracking-tight sm:text-4xl">
              The Problem with &ldquo;AI for Small Business&rdquo;
            </h2>
            <p className="mt-6 text-lg text-foreground/80">
              Most AI vendors sell hype. Enterprise platforms are too expensive and too complex.
              Off-the-shelf tools don&apos;t understand your specific operations.
            </p>
            <p className="mt-4 text-lg text-foreground/80">
              Meanwhile, your team is stuck doing manual dispatching, copy-pasting data between
              spreadsheets, and paying agencies thousands for a basic website.
            </p>
            <p className="mt-4 text-lg text-foreground/80 font-semibold">
              It doesn&apos;t have to be this way.
            </p>
          </div>
          <div className="flex items-center justify-center h-80 md:h-96 rounded-lg shadow-xl bg-gradient-to-br from-primary/5 to-primary/20">
            <div className="text-center p-8">
              <Clock className="w-16 h-16 text-primary mx-auto mb-4" />
              <p className="text-muted-foreground text-sm max-w-xs mx-auto">
                Hours wasted on manual work that could be automated — while enterprise solutions sit
                out of reach.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* ─── WHAT WE BUILD ─── */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-headline font-bold tracking-tight sm:text-4xl">What We Build</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Three service lines. One focus: real results for growing businesses.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Bot className="w-10 h-10 text-primary" />}
            title="AI Agents for Operations"
            description="Custom AI agents that handle dispatching, research, outreach, customer operations, and data processing. Built for your specific workflow, not a generic chatbot."
          >
            <Button variant="link" asChild className="mt-4 px-0 text-primary">
              <Link href="/ai-agents">Learn More <ChevronRight className="w-4 h-4 ml-1" /></Link>
            </Button>
          </FeatureCard>

          <FeatureCard
            icon={<Palette className="w-10 h-10 text-primary" />}
            title="Fast, Beautiful Websites"
            description="Professional, conversion-optimized websites designed and launched in weeks, not months. Built for SMBs who need a strong online presence without agency prices."
          >
            <Button variant="link" asChild className="mt-4 px-0 text-primary">
              <Link href="/contact">Get a Quote <ChevronRight className="w-4 h-4 ml-1" /></Link>
            </Button>
          </FeatureCard>

          <FeatureCard
            icon={<ShieldCheck className="w-10 h-10 text-primary" />}
            title="AI Cybersecurity"
            description="AI-powered security solutions for businesses that can&apos;t afford dedicated security teams. Threat detection, monitoring, and automated response systems."
          >
            <Button variant="link" asChild className="mt-4 px-0 text-primary">
              <Link href="/expertise">Explore Expertise <ChevronRight className="w-4 h-4 ml-1" /></Link>
            </Button>
          </FeatureCard>
        </div>
      </Section>

      {/* ─── SHAFIR CASE STUDY ─── */}
      <Section className="bg-card">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-block px-3 py-1 text-xs font-semibold bg-primary/10 text-primary rounded-full mb-4">Case Study</span>
            <h2 className="text-3xl font-headline font-bold tracking-tight sm:text-4xl">
              AI Dispatching for Shafir — A Major Concrete Company
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              How we replaced a manual dispatching process with an AI system that saved time and
              improved operations at scale.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="bg-background rounded-lg p-6 text-center border border-border/50">
              <p className="text-3xl font-headline font-bold text-primary">100%</p>
              <p className="text-sm text-muted-foreground mt-1">Manual process replaced</p>
            </div>
            <div className="bg-background rounded-lg p-6 text-center border border-border/50">
              <p className="text-3xl font-headline font-bold text-primary">Better</p>
              <p className="text-sm text-muted-foreground mt-1">Technician routing &amp; navigation</p>
            </div>
            <div className="bg-background rounded-lg p-6 text-center border border-border/50">
              <p className="text-3xl font-headline font-bold text-primary">Real</p>
              <p className="text-sm text-muted-foreground mt-1">Operational cost savings</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="font-headline text-xl font-semibold">The Challenge</h3>
              <p className="text-foreground/80">
                Shafir, a leading concrete company, was running its technician dispatching entirely
                manually. Dispatchers managed phone calls, paper logs, and ad-hoc routing decisions.
                This led to delays, inefficiencies, and frustrated drivers and customers alike.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="font-headline text-xl font-semibold">What We Delivered</h3>
              <ul className="space-y-3">
                {[
                  "Custom AI dispatching agent that automates technician routing based on location, priority, and availability",
                  "Real-time navigation integration for drivers",
                  "Dashboard for dispatchers with live status tracking",
                  "Cost savings from reduced fuel waste and faster response times",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-foreground/80">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="text-center mt-10">
            <Button asChild>
              <Link href="/case-studies">View All Case Studies <ChevronRight className="w-4 h-4 ml-1" /></Link>
            </Button>
          </div>
        </div>
      </Section>

      {/* ─── HOW IT WORKS ─── */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-headline font-bold tracking-tight sm:text-4xl">How It Works</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            From conversation to working system in four steps.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { step: "01", icon: MessageSquare, title: "Tell Us About Your Business", desc: "A 30-minute call to understand your operations, pain points, and goals." },
            { step: "02", icon: Lightbulb, title: "We Design the Solution", desc: "We map out exactly what we&apos;ll build — AI agent, website, or both — with clear timelines and pricing." },
            { step: "03", icon: Zap, title: "We Build & Deploy", desc: "Your solution is built, tested, and launched. No endless development cycles." },
            { step: "04", icon: BarChart, title: "Ongoing Support & Improvement", desc: "We monitor, maintain, and improve your system as your business grows." },
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

      {/* ─── TEAM SECTION ─── */}
      <Section className="bg-card">
        <div className="text-center mb-12">
          <Users className="w-12 h-12 text-primary mx-auto mb-4" />
          <h2 className="text-3xl font-headline font-bold tracking-tight sm:text-4xl">Meet the Team</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
            A small, focused team with experience shipping real products. No account managers.
            No layers of bureaucracy.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div key={member.name} className="bg-background rounded-xl p-6 text-center border border-border/50 hover:border-primary/30 transition-colors">
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

      {/* ─── WHY US / DIFFERENTIATORS ─── */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-headline font-bold tracking-tight sm:text-4xl">Why Work With Us</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Target, title: "Practical Results, Not Hype", desc: "We build systems that do real work — dispatching agents, automated research pipelines, operational chatbots. You&apos;ll see the difference in your workflow, not in a pitch deck." },
            { icon: Building2, title: "Built for SMBs, Not Enterprises", desc: "No six-figure contracts, no sales engineering teams, no 12-month timelines. We work with businesses that need practical solutions at a price that makes sense." },
            { icon: Globe, title: "Global SMB Focus", desc: "We help small businesses everywhere, not just in one market. AI doesn&apos;t care where you&apos;re located — and neither do we." },
            { icon: Zap, title: "AI + Real Execution", desc: "We don&apos;t just hand you code and walk away. We deploy, support, and improve. Your success is our deliverable." },
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

      {/* ─── FINAL CTA ─── */}
      <Section className="bg-primary text-primary-foreground text-center">
        <h2 className="text-3xl font-headline font-bold tracking-tight sm:text-4xl">
          Ready to Make Your Business Run Smarter?
        </h2>
        <p className="mt-6 text-lg text-primary-foreground/90 max-w-2xl mx-auto">
          Tell us about your business. We&apos;ll tell you exactly how we can help — no pressure, no
          jargon, just a clear path forward.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button size="lg" variant="secondary" asChild className="hover:bg-secondary/90">
            <Link href="/contact">Start the Conversation <ArrowRight className="w-4 h-4 ml-1" /></Link>
          </Button>
          <Button size="lg" variant="outline" asChild className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
            <Link href="/case-studies">See Case Studies</Link>
          </Button>
        </div>
        <p className="mt-6 text-sm text-primary-foreground/70">
          Free initial consultation. No commitment required.
        </p>
      </Section>
    </>
  );
}
