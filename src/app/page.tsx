import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { HeroSection } from '@/components/ui/hero-section';
import { Section } from '@/components/ui/section';
import { FeatureCard } from '@/components/ui/feature-card';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import {
  Users, ChevronRight, Lightbulb, Target, CheckCircle, ArrowRight,
  Clock, Palette, ShieldCheck, BarChart, Zap, Globe, Building2,
  Layers, Sparkles, Smartphone, Search, Rocket, MessageSquare,
  Code2, Heart, TrendingUp, Lock, Eye, PhoneCall, Star, Wallet,
} from 'lucide-react';
import Image from 'next/image';
import { TypewriterEffect } from '@/components/ui/typewriter-effect';

const teamMembers = [
  {
    name: "Shlomi Gibly",
    role: "Co-founder & AI Operations Lead",
    bio: "Builds the AI agent systems that power our website creation and maintenance. Passionate about deploying practical AI that replaces manual workflows and delivers real results for small businesses worldwide.",
    image: "/images/team/shlomi-gibly.jpg",
    expertise: ["AI Agents", "Website Automation", "Operations"],
  },
  {
    name: "Daniel Cohen",
    role: "Co-founder & Engineering Lead",
    bio: "Leads the engineering team behind our AI-powered website builder. 15+ years of experience building scalable web platforms and integrating AI into real-world products that businesses actually use.",
    image: "/images/team/daniel-cohen.jpg",
    expertise: ["Web Engineering", "AI Systems", "Cloud Architecture"],
  },
  {
    name: "Omri Ben Ami",
    role: "Head of Customer Success & Web Strategy",
    bio: "Ensures every website we build drives real results for small business owners. Leads client onboarding, conversion strategy, and ongoing website optimization so your site keeps working for you long after launch.",
    image: "/images/team/omri-ben-ami.jpg",
    expertise: ["Web Strategy", "Client Success", "Conversion Optimization"],
  },
  {
    name: "Arjun Patel",
    role: "Senior AI Engineer",
    bio: "Designs and builds the AI agent pipelines that generate custom websites at scale. Specializes in LLM applications and turning complex ML models into reliable, production-grade systems.",
    image: "/images/team/arjun-patel.jpg",
    expertise: ["LLM Applications", "AI Pipelines", "Automation"],
  },
  {
    name: "Carlos Mendez",
    role: "Lead UX Designer",
    bio: "Creates beautiful, intuitive website designs that don't just look great — they convert. Obsessed with user psychology and how design decisions drive visitor behavior.",
    image: "/images/team/carlos-mendez.jpg",
    expertise: ["UX Design", "Conversion Design", "Brand Identity"],
  },
  {
    name: "Sophie Laurent",
    role: "Conversion Strategy Specialist",
    bio: "Helps small businesses turn website visitors into paying customers. Combines data-driven analysis with proven conversion psychology to maximize every site's ROI.",
    image: "/images/team/sophie-laurent.jpg",
    expertise: ["CRO", "Analytics", "A/B Testing"],
  },
  {
    name: "James Okonkwo",
    role: "Junior Developer & QA Engineer",
    bio: "Makes sure every website we ship is fast, accessible, and bug-free. Passionate about clean code and building tools that make the whole team more efficient.",
    image: "/images/team/james-okonkwo.jpg",
    expertise: ["Frontend Development", "QA Testing", "Accessibility"],
  },
  {
    name: "Lisa Chen",
    role: "Customer Success Manager",
    bio: "Your go-to person after launch. Makes sure your site stays updated, secure, and performing at its best. Believes great support means being responsive, proactive, and genuinely caring.",
    image: "/images/team/lisa-chen.jpg",
    expertise: ["Client Relations", "Maintenance", "Account Management"],
  },
];

const painPoints = [
  {
    icon: Wallet,
    title: "Agencies Cost a Fortune",
    description: "Traditional agencies charge $5,000–$15,000 for a basic website — money most small businesses simply don't have.",
  },
  {
    icon: Clock,
    title: "It Takes Forever",
    description: "You waited weeks or months for a website that still isn't right. Your business can't afford to wait.",
  },
  {
    icon: Building2,
    title: "DIY Tools Are Overwhelming",
    description: "Website builders are complicated and confusing. You spend hours fighting with templates instead of running your business.",
  },
  {
    icon: Lock,
    title: "Hidden Fees & Lock-In",
    description: "Free website? Then expensive hosting, add-on charges, and contracts that are impossible to escape.",
  },
  {
    icon: Eye,
    title: "No Ongoing Support",
    description: "Once your site is live, you're on your own. Updates, security, and maintenance become your problem.",
  },
  {
    icon: TrendingUp,
    title: "Sites That Don't Convert",
    description: "A pretty website that doesn't turn visitors into customers is just an expensive brochure.",
  },
];

const solutionFeatures = [
  {
    icon: <Palette className="w-10 h-10 text-primary" />,
    title: "Beautiful, Custom Design",
    description: "Your site reflects your unique brand — never a generic template. Every page is crafted to impress your customers and drive conversions.",
  },
  {
    icon: <Zap className="w-10 h-10 text-primary" />,
    title: "Ready in Days, Not Months",
    description: "AI agents handle the heavy lifting so you get a polished, professional site fast. Most projects launch within a week.",
  },
  {
    icon: <Heart className="w-10 h-10 text-primary" />,
    title: "Real Humans Behind the Tech",
    description: "AI does the work, but people make the decisions. You always have a real person to talk to — no chatbot runaround.",
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-primary" />,
    title: "Ongoing Maintenance & Security",
    description: "Your website stays up-to-date, secure, and optimized. We monitor performance, apply patches, and continuously improve your site.",
  },
  {
    icon: <Target className="w-10 h-10 text-primary" />,
    title: "Built to Convert",
    description: "Every section, headline, and call-to-action is designed with conversion psychology to turn visitors into paying customers.",
  },
  {
    icon: <Wallet className="w-10 h-10 text-primary" />,
    title: "Fair, Transparent Pricing",
    description: "No hidden fees, no surprise charges, no lock-in. Clear monthly pricing that fits a small business budget.",
  },
];

const howItWorksSteps = [
  {
    step: "01",
    icon: PhoneCall,
    title: "Free Strategy Call",
    desc: "A friendly 30-minute call to understand your business, your customers, and your goals. No pressure, no commitment.",
  },
  {
    step: "02",
    icon: Sparkles,
    title: "AI Designs Your Site",
    desc: "Our AI agents generate a tailored design with the right structure, copy, and visuals for your industry — reviewed and refined by our team.",
  },
  {
    step: "03",
    icon: Rocket,
    title: "Launch in Days",
    desc: "Your professional website is built, tested, and launched — typically within a week. You approve everything before it goes live.",
  },
  {
    step: "04",
    icon: ShieldCheck,
    title: "We Maintain & Optimize",
    desc: "We keep your site secure, updated, and improving over time with AI-powered monitoring and continuous optimization.",
  },
];

const testimonials = [
  {
    quote: "We went from no website to getting new patients every day. It was fast, affordable, and the design looks incredible. The team actually listened to what we needed.",
    author: "Dr. Sarah Martinez",
    role: "Owner, Riverside Family Dental",
    avatar: "https://placehold.co/100x100.png",
  },
  {
    quote: "An agency quoted me $8,000 and said three months. frengen.ai delivered a better website in 10 days at a fraction of the cost. Our online orders jumped immediately.",
    author: "Marco Rossi",
    role: "Owner, Bella Trattoria",
    avatar: "https://placehold.co/100x100.png",
  },
  {
    quote: "What I love most is the ongoing support. They don't just build your site and disappear — they're always there, keeping everything updated and secure. It's like having an in-house web team.",
    author: "Jennifer Adams",
    role: "Founder, Adams Consulting Group",
    avatar: "https://placehold.co/100x100.png",
  },
];

const deliverables = [
  { icon: Palette, title: "Custom Brand Design", desc: "Your site reflects your unique brand — not a generic template." },
  { icon: Smartphone, title: "Mobile-First & Fast", desc: "Optimized for every device with lightning-fast load times." },
  { icon: Search, title: "SEO Optimized", desc: "Built to rank well in search engines so customers find you." },
  { icon: Target, title: "Conversion-Focused", desc: "Every page designed to turn visitors into customers." },
  { icon: ShieldCheck, title: "AI-Powered Security", desc: "Your site monitored and protected by intelligent security systems." },
  { icon: Layers, title: "Ongoing Maintenance", desc: "We keep your site updated, secure, and performing at its best." },
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
          We help small business owners around the world get a beautiful, professional, high-converting website — fast, affordable, and with real human support every step of the way.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/contact">Get Your Free Strategy Call <ArrowRight className="w-4 h-4 ml-1" /></Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="#how-it-works">See How It Works</Link>
          </Button>
        </div>
        <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4 text-primary" /> AI-powered design</span>
          <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4 text-primary" /> Launch in days</span>
          <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4 text-primary" /> No hidden fees</span>
          <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4 text-primary" /> Real human support</span>
        </div>
      </HeroSection>

      {/* ─── PAIN POINTS ─── */}
      <Section className="bg-card" id="pain-points">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-headline font-bold tracking-tight sm:text-4xl">
            Getting a Professional Website Shouldn't Be This Hard
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            If you've tried to get a website for your small business, you've probably run into these frustrations:
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {painPoints.map((item) => (
            <div key={item.title} className="bg-muted/50 rounded-xl p-6 border border-border/50 hover:border-primary/30 transition-colors">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="font-headline text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <p className="text-xl font-headline font-semibold text-foreground/80">
            There's a better way. ↓
          </p>
        </div>
      </Section>

      {/* ─── OUR SOLUTION ─── */}
      <Section id="solution">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Our Solution
          </span>
          <h2 className="text-3xl font-headline font-bold tracking-tight sm:text-4xl">
            AI Agents + Human Expertise = Websites That Actually Work
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            We combine intelligent AI agents with a human-in-the-loop approach to deliver premium websites
            that small businesses can actually afford and maintain. No technical skills required — just tell
            us about your business and we handle the rest.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutionFeatures.map((feature) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </Section>

      {/* ─── HOW IT WORKS ─── */}
      <Section className="bg-card" id="how-it-works">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-semibold mb-4">
            How It Works
          </span>
          <h2 className="text-3xl font-headline font-bold tracking-tight sm:text-4xl">
            Your Website in 4 Simple Steps
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            From your first call to a live website — easy, transparent, and low-risk.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {howItWorksSteps.map((item) => (
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
        <div className="text-center mt-10">
          <Button asChild size="lg">
            <Link href="/contact">Start with a Free Call <ArrowRight className="w-4 h-4 ml-1" /></Link>
          </Button>
        </div>
      </Section>

      {/* ─── WHAT YOU GET ─── */}
      <Section id="deliverables">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-headline font-bold tracking-tight sm:text-4xl">
            Everything You Get with Your Website
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Every website we build is designed to attract customers and grow your business.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {deliverables.map((item) => (
            <div key={item.title} className="bg-card rounded-xl p-6 border border-border/50 hover:border-primary/30 transition-colors shadow-sm">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary mb-4">
                <item.icon className="w-5 h-5" />
              </div>
              <h3 className="font-headline text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ─── TESTIMONIALS / SOCIAL PROOF ─── */}
      <Section className="bg-card" id="testimonials">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
            Real Results
          </span>
          <h2 className="text-3xl font-headline font-bold tracking-tight sm:text-4xl">
            Small Businesses Love Working with Us
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it — here's what real business owners say about their experience.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <Card key={t.author} className="flex flex-col h-full shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardContent className="flex-grow pt-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-foreground/80 italic mb-6">"{t.quote}"</p>
                <div className="flex items-center gap-3 mt-auto">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src={t.avatar}
                      alt={t.author}
                      fill
                      style={{ objectFit: 'cover' }}
                      unoptimized
                    />
                  </div>
                  <div>
                    <p className="font-headline font-semibold text-sm">{t.author}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-8">
          <Button variant="outline" asChild>
            <Link href="/case-studies">See More Results <ChevronRight className="w-4 h-4 ml-1" /></Link>
          </Button>
        </div>
      </Section>

      {/* ─── PRICING ─── */}
      <Section id="pricing">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-semibold mb-4">
            Transparent Pricing
          </span>
          <h2 className="text-3xl font-headline font-bold tracking-tight sm:text-4xl">
            Fair, Honest Pricing. No Surprises.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            We believe in transparent pricing. No hidden fees, no surprise charges, no lock-in contracts.
            Just clear monthly subscriptions that include everything your website needs.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Starter Plan */}
          <Card className="flex flex-col h-full shadow-lg hover:shadow-xl transition-shadow duration-300 border-2 border-border/50">
            <CardHeader className="text-center pb-4">
              <p className="text-sm font-semibold text-secondary uppercase tracking-wide mb-2">Starter</p>
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-5xl font-headline font-bold text-foreground">$79</span>
                <span className="text-muted-foreground">/month</span>
              </div>
              <CardDescription className="mt-2">
                Perfect for small businesses getting started online.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <ul className="space-y-3">
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /> Professional website (up to 5 pages)</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /> Custom AI-generated design</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /> Mobile-responsive & fast-loading</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /> Basic SEO setup</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /> Basic maintenance & updates</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /> AI-powered content updates</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /> SSL certificate included</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /> Email support</li>
              </ul>
              <Button asChild variant="outline" className="w-full mt-6">
                <Link href="/contact">Get Started</Link>
              </Button>
            </CardContent>
          </Card>

          {/* Professional Plan — Featured */}
          <Card className="flex flex-col h-full shadow-xl hover:shadow-2xl transition-shadow duration-300 border-2 border-primary relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <span className="bg-primary text-primary-foreground text-xs font-bold px-4 py-1 rounded-full">Most Popular</span>
            </div>
            <CardHeader className="text-center pb-4">
              <p className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">Professional</p>
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-5xl font-headline font-bold text-foreground">$129</span>
                <span className="text-muted-foreground">/month</span>
              </div>
              <CardDescription className="mt-2">
                Everything you need to stand out and grow.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <ul className="space-y-3">
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /> Full custom website (unlimited pages)</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /> Advanced AI agent design & copywriting</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /> Conversion-focused architecture</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /> Advanced SEO & local search</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /> Advanced maintenance & security monitoring</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /> Priority support (24-hour response)</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /> Monthly performance reports</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /> AI-powered continuous optimization</li>
              </ul>
              <Button asChild className="w-full mt-6">
                <Link href="/contact">Get Started <ArrowRight className="w-4 h-4 ml-1" /></Link>
              </Button>
            </CardContent>
          </Card>
        </div>
        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground">
            All plans include hosting, SSL, and a free strategy call. Cancel anytime — no lock-in contracts.
          </p>
        </div>
      </Section>

      {/* ─── TEAM SECTION ─── */}
      <Section className="bg-card" id="team">
        <div className="text-center mb-12">
          <Users className="w-12 h-12 text-primary mx-auto mb-4" />
          <h2 className="text-3xl font-headline font-bold tracking-tight sm:text-4xl">
            Meet the People Behind Your Website
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
            We're a dedicated team of AI engineers, web strategists, and customer success experts committed to
            building professional websites for small businesses. When you work with us, you talk to real people —
            not a faceless platform.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div key={member.name} className="bg-background rounded-xl p-6 text-center border border-border/50 hover:border-primary/30 transition-colors shadow-sm">
              <div className="relative w-28 h-28 rounded-full overflow-hidden mx-auto mb-4 ring-4 ring-primary/10">
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
            <Link href="/team">Learn More About Us <ChevronRight className="w-4 h-4 ml-1" /></Link>
          </Button>
        </div>
      </Section>

      {/* ─── FINAL CTA ─── */}
      <Section className="bg-primary text-primary-foreground text-center">
        <h2 className="text-3xl font-headline font-bold tracking-tight sm:text-4xl">
          Ready to Get a Website That Actually Grows Your Business?
        </h2>
        <p className="mt-6 text-lg text-primary-foreground/90 max-w-2xl mx-auto">
          Book a free strategy call today. We'll learn about your business, answer your questions,
          and show you exactly how we can help — no pressure, no commitment.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button size="lg" variant="secondary" asChild className="hover:bg-secondary/90">
            <Link href="/contact">Book Your Free Strategy Call <ArrowRight className="w-4 h-4 ml-1" /></Link>
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
