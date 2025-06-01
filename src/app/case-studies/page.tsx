import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { HeroSection } from '@/components/ui/hero-section';
import { Section } from '@/components/ui/section';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { CheckCircle, ChevronRight, Quote } from 'lucide-react';
import Image from 'next/image';

const caseStudies = [
  {
    id: 1,
    title: "Boosting E-commerce Sales with AI Personalization",
    client: "RetailGiant Inc.",
    problem: "Stagnant sales and low conversion rates on their e-commerce platform.",
    solution: "Implemented an AI-driven recommendation engine and personalized user journey chatbots.",
    results: [
      "25% increase in average order value.",
      "15% improvement in conversion rates.",
      "Significant reduction in cart abandonment.",
    ],
    image: "https://placehold.co/600x400/CCCCCC/000000?text=Retail+Success",
    imageHint: "retail success"
  },
  {
    id: 2,
    title: "Streamlining Manufacturing Operations via AI Agents",
    client: "AutoParts Ltd.",
    problem: "Inefficient production scheduling and high defect rates.",
    solution: "Developed AI agents for predictive maintenance and real-time quality control.",
    results: [
      "20% reduction in machine downtime.",
      "10% decrease in material waste.",
      "Improved overall equipment effectiveness (OEE).",
    ],
    image: "https://placehold.co/600x400/CCCCCC/000000?text=Factory+AI",
    imageHint: "factory automation"
  },
  {
    id: 3,
    title: "Enhancing Player Engagement in Mobile Gaming",
    client: "PixelPlay Games",
    problem: "Low player retention and difficulty in monetizing free-to-play game.",
    solution: "Integrated dynamic AI NPCs with adaptive storylines and personalized in-game offers.",
    results: [
      "30% increase in daily active users.",
      "Player session length extended by 15 minutes on average.",
      "20% rise in in-app purchase revenue.",
    ],
    image: "https://placehold.co/600x400/CCCCCC/000000?text=Game+Impact",
    imageHint: "gaming success"
  },
];

const testimonials = [
  {
    id: 1,
    quote: "Frengen AI's solution transformed our customer engagement. Their team was incredibly knowledgeable and supportive throughout the process.",
    author: "Jane Doe",
    role: "CMO, RetailGiant Inc.",
    avatar: "https://placehold.co/100x100/CCCCCC/000000?text=JD",
    avatarHint: "person portrait"
  },
  {
    id: 2,
    quote: "The AI agents developed by Frengen AI have given us a significant competitive edge. We're seeing real ROI.",
    author: "John Smith",
    role: "COO, AutoParts Ltd.",
    avatar: "https://placehold.co/100x100/CCCCCC/000000?text=JS",
    avatarHint: "person ceo"
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      <HeroSection
        title="Real-World Impact: Our Success Stories"
        subtitle="Discover how Frengen AI has partnered with businesses to deliver tangible results and drive innovation through bespoke AI solutions."
      />

      <Section id="case-studies-list">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-8">
          {caseStudies.map((study) => (
            <Card key={study.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col md:flex-row">
              <div className="md:w-1/3 relative h-64 md:h-auto">
                <Image src={study.image} alt={study.title} layout="fill" objectFit="cover" data-ai-hint={study.imageHint} />
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
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" /> {/* This green might need to become primary or a gray */}
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="link" className="px-0 text-primary">
                    Read Full Study (Soon) <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                </CardFooter>
              </div>
            </Card>
          ))}
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
        <h2 className="text-2xl font-headline font-bold tracking-tight sm:text-3xl">Ready to Write Your Success Story?</h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
          Partner with Frengen AI and let's build an innovative solution that drives remarkable results for your business.
        </p>
        <div className="mt-8">
          <Button asChild size="lg">
            <Link href="/contact">Become a Success Story</Link>
          </Button>
        </div>
      </Section>
    </>
  );
}
