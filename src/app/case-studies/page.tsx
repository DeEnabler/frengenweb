
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
    title: "Streamlining Global Communication for Myosin.xyz with AI Chatbots",
    client: "Myosin.xyz",
    problem: "Managing efficient communication and knowledge sharing for over 150 remote employees distributed globally, often facing challenges with time zone differences and team member availability.",
    solution: "Designed and deployed an intelligent chatbot integrated with Slack. The chatbot utilizes Retrieval-Augmented Generation (RAG) to enable employees to interact with AI-powered representations of their colleagues, allowing them to \"catch up\" on data and project updates asynchronously.",
    results: [
      "Significantly streamlined communication for 150+ employees across diverse time zones.",
      "Enhanced asynchronous knowledge sharing and information retrieval.",
      "Reduced project delays by enabling access to crucial information even when team members are unavailable.",
      "Improved overall team productivity and collaboration within the familiar Slack environment.",
    ],
    image: "https://placehold.co/600x400/000000/FFFFFF?text=Myosin+Slackbot",
    imageHint: "communication team"
  },
  {
    id: 2,
    title: "Personalized AI Character System for Dynamic User Engagement",
    client: "Leading Interactive Entertainment Platform",
    problem: "The need for highly distinct, engaging AI-driven characters with unique personalities and conversational styles that can be generated and scaled efficiently.",
    solution: "Developed a robust system leveraging LLM frameworks (Langchain, RAG) to dynamically generate unique AI characters with distinct background stories and conversational styles. Combined prompt engineering and conversational AI design for contextually rich, authentic interactions, supported by a scalable backend for real-time narrative profile generation.",
    results: [
      "Successfully delivered a system capable of generating a wide array of unique AI characters.",
      "Enhanced user engagement through deeply personalized and adaptive character interactions.",
      "Provided a scalable and performant backend for real-time generation and delivery of diverse narrative profiles.",
      "Demonstrated expertise in creating innovative, custom AI solutions for dynamic, user-focused applications.",
    ],
    image: "https://placehold.co/600x400/000000/FFFFFF?text=AI+Characters",
    imageHint: "ai characters"
  },
  {
    id: 3,
    title: "AI-Powered Harmful Content Detection and Marketing Automation",
    client: "Social Impact & Brand Tech",
    problem: "Combating harmful content (specifically antisemitism) on social media while also leveraging these platforms for effective brand marketing automation.",
    solution: "Developed an innovative AI-driven system using graph databases to map and analyze social media data for real-time detection of antisemitic content. AI agents, integrated across multiple social media platforms, autonomously identified and responded to harmful posts. Simultaneously, the system streamlined marketing automation for several brands by optimizing content distribution and engagement strategies.",
    results: [
      "Enabled real-time detection and counter-messaging for harmful social media content.",
      "Improved online community safety through autonomous AI agent intervention.",
      "Streamlined marketing automation processes for multiple brands.",
      "Successfully demonstrated a dual-use AI system for social good and marketing efficiency.",
      "Delivered a scalable solution combining graph analytics, AI agents, and social media integration.",
    ],
    image: "https://placehold.co/600x400/000000/FFFFFF?text=Social+Safety+AI",
    imageHint: "social media ai"
  },
  {
    id: 4,
    title: "Streamlining Manufacturing Operations via AI Agents",
    client: "AutoParts Ltd.",
    problem: "Inefficient production scheduling and high defect rates.",
    solution: "Developed AI agents for predictive maintenance and real-time quality control.",
    results: [
      "20% reduction in machine downtime.",
      "10% decrease in material waste.",
      "Improved overall equipment effectiveness (OEE).",
    ],
    image: "https://placehold.co/600x400/000000/FFFFFF?text=Factory+AI",
    imageHint: "factory automation"
  },
  {
    id: 5,
    title: "Enhancing Player Engagement in Mobile Gaming",
    client: "PixelPlay Games",
    problem: "Low player retention and difficulty in monetizing free-to-play game.",
    solution: "Integrated dynamic AI NPCs with adaptive storylines and personalized in-game offers.",
    results: [
      "30% increase in daily active users.",
      "Player session length extended by 15 minutes on average.",
      "20% rise in in-app purchase revenue.",
    ],
    image: "https://placehold.co/600x400/000000/FFFFFF?text=Game+Impact",
    imageHint: "gaming success"
  },
];

const testimonials = [
  {
    id: 1,
    quote: "FrenGen's solution transformed our customer engagement. Their team was incredibly knowledgeable and supportive throughout the process.",
    author: "Jane Doe",
    role: "CMO, RetailGiant Inc.", 
    avatar: "https://placehold.co/100x100/000000/FFFFFF?text=JD",
    avatarHint: "person portrait"
  },
  {
    id: 2,
    quote: "The AI agents developed by FrenGen have given us a significant competitive edge. We're seeing real ROI.",
    author: "John Smith",
    role: "COO, AutoParts Ltd.",
    avatar: "https://placehold.co/100x100/000000/FFFFFF?text=JS",
    avatarHint: "person ceo"
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      <HeroSection
        title="Real-World Impact: Our Success Stories"
        subtitle="Discover how FrenGen has partnered with businesses to deliver tangible results and drive innovation through bespoke AI solutions."
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
          Partner with FrenGen and let's build an innovative solution that drives remarkable results for your business.
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
