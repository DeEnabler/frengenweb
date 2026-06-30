import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { HeroSection } from '@/components/ui/hero-section';
import { Section } from '@/components/ui/section';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { CheckCircle, ChevronRight, Quote, Globe, Zap, ShieldCheck, BarChart, Palette, Star } from 'lucide-react';
import Image from 'next/image';

const caseStudies = [
  {
    id: 1,
    title: "From No Website to Fully Booked in 14 Days",
    client: "Riverside Family Dental",
    problem: "A growing dental practice with no online presence was losing patients to competitors with professional websites. They needed a site fast but couldn't afford a $10,000 agency.",
    solution: "frengen.ai built a beautiful, mobile-friendly website with online appointment booking, patient testimonials, and SEO-optimized service pages — all powered by AI agents and launched in under two weeks.",
    results: [
      "Launched professional, conversion-focused website in 14 days",
      "Online appointment bookings increased by 40% within the first month",
      "Ranked on page 1 of Google for 'family dentist near me' within 90 days",
      "Reduced website costs by 70% compared to traditional agency quotes",
    ],
    icon: Globe,
    imageHint: "dental practice website",
  },
  {
    id: 2,
    title: "Rebranding a Local Restaurant with AI-Powered Web Design",
    client: "Bella Trattoria (Italian Restaurant)",
    problem: "An established restaurant had an outdated, non-mobile-friendly website that was losing takeout orders. The owner needed a modern site with an online menu, reservation system, and food delivery integration.",
    solution: "Our AI agents designed a stunning, mobile-first website with an interactive menu, online reservations, and direct ordering integration. The entire site was built and launched in 10 days at a fraction of traditional agency costs.",
    results: [
      "Online orders increased by 55% within the first 60 days",
      "Mobile traffic now accounts for 70% of all site visits",
      "Average page load time reduced from 6 seconds to 1.2 seconds",
      "Customer feedback praised the modern, easy-to-use design",
    ],
    icon: Zap,
    imageHint: "restaurant website design",
  },
  {
    id: 3,
    title: "Scaling a Consulting Firm's Online Presence with AI",
    client: "Apex Business Consulting",
    problem: "A consulting firm had a basic DIY website that didn't reflect their premium services. They needed a professional site that built trust with enterprise clients and generated qualified leads.",
    solution: "frengen.ai delivered a polished, corporate-grade website with case study pages, thought leadership blog, and AI-powered contact form optimization. We also implemented ongoing SEO and security monitoring.",
    results: [
      "Qualified lead inquiries increased by 3x within 90 days",
      "Site ranked on page 1 for 12 industry-specific keywords",
      "Bounce rate decreased by 35% with improved content and design",
      "AI-powered security blocked 200+ malicious login attempts per month",
    ],
    icon: BarChart,
    imageHint: "consulting website success",
  },
];

const testimonials = [
  {
    quote: "frengen.ai built our website in a week and a half. We went from having no online presence to getting new patients every day from our site. It was fast, affordable, and the design looks incredible.",
    author: "Dr. Sarah Martinez",
    role: "Owner, Riverside Family Dental",
    avatar: "https://placehold.co/100x100.png",
  },
  {
    quote: "I was quoted $8,000 by an agency and told it would take three months. frengen.ai delivered a better website in 10 days at a fraction of the cost. Our online orders jumped immediately.",
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

export default function CaseStudiesPage() {
  return (
    <>
      <HeroSection
        title="Real Results for Real Small Businesses"
        subtitle="See how frengen.ai has helped small businesses around the world build professional websites that drive traffic, conversions, and growth — without the agency price tag."
      />

      <Section id="case-studies-list">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-8">
          {caseStudies.map((study) => {
            const IconComponent = study.icon;
            return (
              <Card key={study.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col md:flex-row">
                <div className="md:w-1/3 flex items-center justify-center bg-muted/30 p-8 h-64 md:h-auto min-h-[200px]">
                  {IconComponent && <IconComponent className="w-32 h-32 text-primary" />}
                </div>
                <div className="md:w-2/3 flex flex-col">
                  <CardHeader>
                    <CardTitle className="font-headline text-2xl">{study.title}</CardTitle>
                    <CardDescription className="text-md text-primary">{study.client}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide mb-1">The Challenge</h4>
                        <p className="text-sm text-foreground/80">{study.problem}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide mb-1">Our Solution</h4>
                        <p className="text-sm text-foreground/80">{study.solution}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide mb-1">Results</h4>
                        <ul className="space-y-1">
                          {study.results.map((result, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-foreground/80">
                              <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                              {result}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            );
          })}
        </div>
      </Section>

      <Section id="testimonials" className="bg-card">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
            What Clients Say
          </span>
          <h2 className="text-3xl font-headline font-bold tracking-tight sm:text-4xl">
            Don't Just Take Our Word for It
          </h2>
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
      </Section>

      <Section id="cta-case-studies" className="text-center">
        <h2 className="text-3xl font-headline font-bold tracking-tight sm:text-4xl">Ready for Your Success Story?</h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
          Join the small businesses that have transformed their online presence with frengen.ai.
        </p>
        <div className="mt-8">
          <Button asChild size="lg">
            <Link href="/contact">Get Your Free Strategy Call <ChevronRight className="w-4 h-4 ml-1" /></Link>
          </Button>
        </div>
      </Section>
    </>
  );
}
