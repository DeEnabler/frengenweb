import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { HeroSection } from '@/components/ui/hero-section';
import { Section } from '@/components/ui/section';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { Linkedin, Brain, Code, Users } from 'lucide-react';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  expertise: string[];
  image: string;
  imageHint: string;
  linkedin?: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Dr. Evelyn Reed",
    role: "Chief AI Scientist (ML PhD)",
    bio: "Evelyn leads our research division, pushing the boundaries of LLM applications and algorithm development. Her work focuses on creating truly intelligent and adaptive AI systems.",
    expertise: ["Machine Learning", "NLP", "Algorithm Design", "LLM Research"],
    image: "https://placehold.co/300x300/CCCCCC/000000?text=ER",
    imageHint: "scientist woman",
    linkedin: "#",
  },
  {
    id: 2,
    name: "Marcus Chen",
    role: "Lead Backend Architect (Ex-Big Tech)",
    bio: "With over a decade of experience at leading tech companies, Marcus designs and maintains the robust backend infrastructure powering our SaaS products and AI solutions.",
    expertise: ["Distributed Systems", "Cloud Computing", "SaaS Architecture", "API Design"],
    image: "https://placehold.co/300x300/CCCCCC/000000?text=MC",
    imageHint: "engineer man",
    linkedin: "#",
  },
  {
    id: 3,
    name: "Aisha Khan",
    role: "Senior Conversational AI Designer",
    bio: "Aisha specializes in crafting intuitive and engaging user experiences for our chatbots and AI agents, ensuring seamless human-AI interaction.",
    expertise: ["Conversation Design", "UX/UI for AI", "Prompt Engineering", "User Research"],
    image: "https://placehold.co/300x300/CCCCCC/000000?text=AK",
    imageHint: "designer woman",
    linkedin: "#",
  },
  {
    id: 4,
    name: "Leo Maxwell",
    role: "AI Developer (Student Innovator)",
    bio: "Leo brings fresh perspectives and cutting-edge skills from his ongoing computer science studies, contributing to innovative prototypes and LLM applications.",
    expertise: ["Python", "Langchain", "RAG Systems", "Rapid Prototyping"],
    image: "https://placehold.co/300x300/CCCCCC/000000?text=LM",
    imageHint: "student developer",
    linkedin: "#",
  },
];

export default function TeamPage() {
  return (
    <>
      <HeroSection
        title="Meet the Minds Behind Frengen AI"
        subtitle="Our global team is a powerhouse of diverse expertise, blending seasoned ex-big tech engineers, ambitious student developers, and leading machine learning PhDs, all dedicated to delivering cutting-edge AI solutions."
      />

      <Section id="team-intro">
        <div className="text-center max-w-3xl mx-auto">
          <Users className="w-16 h-16 text-primary mx-auto mb-6" />
          <h2 className="text-3xl font-headline font-bold tracking-tight sm:text-4xl">A Synergy of Experience and Innovation</h2>
          <p className="mt-6 text-lg text-foreground/80">
            At Frengen AI, we believe that the best solutions arise from collaboration and diverse perspectives. Our team members bring a wealth of knowledge from academia and industry, working together to tackle complex AI challenges and build impactful products. We foster a culture of continuous learning and innovation, ensuring we stay at the forefront of AI development.
          </p>
        </div>
      </Section>

      <Section id="team-grid" className="bg-muted/50">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
          {teamMembers.map((member) => (
            <Card key={member.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col sm:flex-row">
              <div className="sm:w-1/3 relative h-64 sm:h-auto min-h-[250px]">
                <Image 
                  src={member.image} 
                  alt={member.name} 
                  layout="fill" 
                  objectFit="cover" 
                  data-ai-hint={member.imageHint}
                />
              </div>
              <div className="sm:w-2/3 p-6 flex flex-col justify-between">
                <div>
                  <CardTitle className="font-headline text-2xl mb-1">{member.name}</CardTitle>
                  <CardDescription className="text-md text-primary font-semibold mb-3">{member.role}</CardDescription>
                  <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold mb-1">Key Expertise:</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill) => (
                        <span key={skill} className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-full">{skill}</span>
                      ))}
                    </div>
                  </div>
                </div>
                {member.linkedin && (
                  <Button variant="outline" size="sm" asChild>
                    <Link href={member.linkedin} target="_blank" rel="noopener noreferrer">
                      <Linkedin className="w-4 h-4 mr-2" /> LinkedIn Profile
                    </Link>
                  </Button>
                )}
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="join-us" className="bg-card text-center">
        <h2 className="text-3xl font-headline font-bold tracking-tight sm:text-4xl">Interested in Joining Our Team?</h2>
        <p className="mt-6 text-lg text-foreground/80 max-w-xl mx-auto">
          We're always looking for passionate and talented individuals to join our mission of AI innovation. If you're excited by the prospect of working on challenging projects with a world-class team, we'd love to hear from you.
        </p>
        <div className="mt-8">
          <Button asChild size="lg">
            <Link href="/contact#careers">View Open Positions</Link>
          </Button>
        </div>
      </Section>
    </>
  );
}
