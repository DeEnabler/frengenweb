import { HeroSection } from '@/components/ui/hero-section';
import { Section } from '@/components/ui/section';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Layers, DatabaseZap, Puzzle, Brain, MessageSquare, Share2, Code2, Settings2, Lightbulb } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const expertiseAreas = [
  {
    icon: <Layers className="w-10 h-10" />,
    title: "LLM Application Development",
    description: "We build sophisticated user-facing applications leveraging the power of Large Language Models, creating intuitive and intelligent experiences.",
    tags: ["GenAI", "NLP", "User Experience"]
  },
  {
    icon: <DatabaseZap className="w-10 h-10" />,
    title: "Robust Backend Infrastructure",
    description: "Our team designs and develops scalable, secure, and high-performance backend systems for SaaS products and complex AI deployments.",
    tags: ["SaaS", "Scalability", "Microservices", "Cloud"]
  },
  {
    icon: <Puzzle className="w-10 h-10" />,
    title: "End-to-End Prototypes & Applications",
    description: "From ideation to deployment, we rapidly prototype and build complete LLM-powered applications, demonstrating value quickly.",
    tags: ["Prototyping", "Full-Stack", "MVP Development"]
  },
  {
    icon: <Brain className="w-10 h-10" />,
    title: "Advanced LLM Frameworks",
    description: "Proficiency in Langchain and Retrieval-Augmented Generation (RAG) solutions allows us to deliver scalable and data-driven AI systems.",
    tags: ["Langchain", "RAG", "Vector Databases", "Data Pipelines"]
  },
  {
    icon: <Lightbulb className="w-10 h-10" />,
    title: "Strategic Prompt Engineering",
    description: "We optimize AI interactions through meticulous prompt engineering, ensuring accurate, relevant, and context-aware responses from LLMs.",
    tags: ["Prompt Design", "AI Optimization", "Interaction Tuning"]
  },
  {
    icon: <MessageSquare className="w-10 h-10" />,
    title: "Conversational AI Design",
    description: "Crafting intuitive, engaging, and effective conversational experiences for chatbots and AI agents is at the core of our design philosophy.",
    tags: ["UX for AI", "Dialogue Flow", "NLU/NLG"]
  },
  {
    icon: <Share2 className="w-10 h-10" />,
    title: "Graph-Based Applications",
    description: "Leveraging graph databases and methodologies to model complex relationships, enabling sophisticated data insights and AI capabilities.",
    tags: ["Graph Databases", "Knowledge Graphs", "Network Analysis"]
  },
  {
    icon: <Code2 className="w-10 h-10" />,
    title: "Custom Algorithm Development",
    description: "Beyond off-the-shelf solutions, we develop custom algorithms tailored to unique business problems and data characteristics.",
    tags: ["Machine Learning", "Optimization", "Custom AI Models"]
  },
  {
    icon: <Settings2 className="w-10 h-10" />,
    title: "Conversation Design for Seamless Interactions",
    description: "Our hands-on experience in conversation design focuses on crafting seamless, context-aware AI interactions that feel natural and human-like.",
    tags: ["Contextual AI", "Human-AI Interaction", "Personalization"]
  },
];

export default function ExpertisePage() {
  return (
    <>
      <HeroSection
        title="Our Technical Prowess in AI Innovation"
        subtitle="FrenGen combines deep technical expertise with a passion for research to deliver cutting-edge AI solutions. Explore our capabilities across the AI development lifecycle."
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
            <h2 className="text-3xl font-headline font-bold tracking-tight sm:text-4xl">Our Approach to AI Development</h2>
            <p className="mt-6 text-lg text-foreground/80">
                At FrenGen, we believe in a client-centric and research-driven approach. We start by understanding your unique challenges and goals. Then, leveraging our deep technical knowledge and the latest advancements in AI, we architect and build solutions that are not only technologically advanced but also practical, scalable, and impactful. Our commitment is to transform your vision into reality with AI that works for you.
            </p>
        </div>
      </Section>

      <Section id="cta-expertise" className="text-center">
        <h2 className="text-2xl font-headline font-bold tracking-tight sm:text-3xl">Leverage Our Expertise for Your AI Vision</h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
          Ready to discuss how our technical skills can bring your AI project to life? Reach out to our team of experts.
        </p>
        <div className="mt-8">
          <Button asChild size="lg">
            <Link href="/contact">Consult Our Experts</Link>
          </Button>
        </div>
      </Section>
    </>
  );
}
