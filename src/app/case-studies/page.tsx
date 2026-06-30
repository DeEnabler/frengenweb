import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { HeroSection } from '@/components/ui/hero-section';
import { Section } from '@/components/ui/section';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { CheckCircle, ChevronRight, Quote, Globe, Zap, ShieldCheck, BarChart, Palette } from 'lucide-react';
import Image from 'next/image';

const caseStudies = [
  {
    id: 1,
    title: "From No Website to Fully Booked in 14 Days",
    client: "Riverside Family Dental",
    problem: "A growing dental practice with no online presence was losing patients to competitors with professional websites. They needed a site fast but couldn't afford a $10,000 agency.",
    solution: "Missile OS built a beautiful, mobile-friendly website with online appointment booking, patient testimonials, and SEO-optimized service pages — all powered by AI agents and launched in under two weeks.",
    results: [
      "Launched a professional, conversion-focused website in 14 days",
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
    problem: "An established restaurant with an outdated, non-mobile-friendly website was losing takeout orders. The owner needed a modern site with an online menu, reservation system, and food delivery integration.",
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
    solution: "Missile OS delivered a polished, corporate-grade website with case study pages, a blog for thought leadership, and AI-powered contact form optimization. We also implemented ongoing SEO and security monitoring.",
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
    id: 1,
    quote: "Missile OS built our website in a week and a half. We went from having no online presence to getting new patients every day from our site. It was fast, affordable, and the design looks incredible.",
    author: "Dr. Sarah Martinez",
    role: "Owner, Riverside Family Dental",
    avatar: "https://placehold.co/100x100.png",
    avatarHint: "woman professional portrait",
  },
  {
    id: 2,
    quote: "I was quoted $8,000 by an agency and told it would take three months. Missile OS delivered a better website in 10 days at a fraction of the cost. Our online orders jumped immediately.",
    author: "Marco Rossi",
    role: "Owner, Bella Trattoria",
    avatar: "https://placehold.co/100x100.png",
    avatarHint: "man restaurant owner",
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      <HeroSection
        title="Real Results for Real Small Businesses"
        subtitle="See how Missile OS has helped small businesses around the world build professional websites that drive traffic, conversions, and growth — without the agency price tag."
      />
      <Section id="case-studies-list">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-8">
          {caseStudies.map((study) => {
            const IconComponent = study.icon;
            return (
              <Card key={study.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col md:flex-row">
                <div className="md:w-1/3 flex items-center justify-center bg-muted/30 p-8 h-64 md:h-auto min-h-[200px]" data-ai-hint={study.imageHint}>
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
                        <h4 className="font-semibold">The Challenge:</h4>
                        <p className="text-sm text-muted-foreground">{study.problem}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold">Our Solution:</h4>
                        <p className="text-sm text-muted-foreground">{study.solution}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold">Key Results:</h4>
                        <ul className="list-none space-y-1 mt-1">
                          {study.results.map((result, index) => (
                            <li key={index} className="flex items-start text-sm text-muted-foreground">
                              <CheckCircle className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                              {result}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="link" className="px-0 text-primary">
                      Read Full Story (Soon) <ChevronRight className="w-4 h-4 ml-1" />
                    </Button>
                  </CardFooter>
                </div>
              </Card>
            );
          })}
        </div>
      </Section>
      <Section id="testimonials" className="bg-muted/50">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-headline font-bold tracking-tight sm:text-4xl">What Our Clients Say</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="shadow-lg">
              <CardContent className="pt-6">
                <Quote className="w-8 h-8 text-primary mb-4" />
                <p className="text-lg italic text-foreground/90 mb-6">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    width={48}
                    height={48}
                    className="rounded-full mr-4"
                    data-ai-hint={testimonial.avatarHint}
                  />
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>
      <Section id="cta-case-studies" className="text-center">
        <h2 className="text-2xl font-headline font-bold tracking-tight sm:text-3xl">Ready to Be Our Next Success Story?</h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
          Let's build a professional website that drives real results for your small business. Start with a free strategy call.
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
