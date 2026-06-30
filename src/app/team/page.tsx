import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { HeroSection } from '@/components/ui/hero-section';
import { Section } from '@/components/ui/section';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { Linkedin, Users } from 'lucide-react';

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
    name: "Nadav Rubinstein",
    role: "Co-founder & ML Research Lead",
    bio: "Machine learning researcher with experience from IBM and Rafael Advanced Defense Systems. Leads the AI research behind our website generation engine, ensuring every site is built with intelligent, data-driven design decisions.",
    expertise: ["Machine Learning", "AI Research", "Website AI", "AI Agents"],
    image: "/images/team/nadav-rubinstein.jpg",
    imageHint: "man professional portrait",
  },
  {
    id: 2,
    name: "Shlomi Gibly",
    role: "Co-founder & AI Operations Lead",
    bio: "Builds the AI agent systems that power Missile OS website creation and maintenance. Experienced in deploying practical AI that replaces manual workflows and delivers real results for small businesses worldwide.",
    expertise: ["AI Agents", "Website Automation", "Operations", "Web Systems"],
    image: "/images/team/shlomi-gibly.jpg",
    imageHint: "man smiling professional",
  },
  {
    id: 3,
    name: "Ofir Bar Tal",
    role: "Co-founder & AI Engineering Lead",
    bio: "Former data scientist at Google (Waze). Turns complex ML research into working products. Leads the engineering of our AI-powered website builder and the LLM applications that generate designs, copy, and layouts automatically.",
    expertise: ["LLM Applications", "Data Science", "AI Engineering", "Product Engineering"],
    image: "/images/team/ofir-bar-tal.jpg",
    imageHint: "man tech professional",
  },
  {
    id: 4,
    name: "Omri Ben Ami",
    role: "Head of Customer Success & Web Strategy",
    bio: "Ensures every website we build drives real results for small business owners. Leads client onboarding, conversion strategy, and ongoing website optimization so your site keeps working for you long after launch.",
    expertise: ["Web Strategy", "Client Success", "Conversion Optimization", "SEO"],
    image: "/images/team/omri-ben-ami.jpg",
    imageHint: "man professional portrait",
  },
];

export default function TeamPage() {
  return (
    <>
      <HeroSection
        title="Meet the Minds Behind Missile OS"
        subtitle="A focused team of AI engineers, web strategists, and cybersecurity experts dedicated to building professional websites for small businesses around the world."
      />
      <Section id="team-intro">
        <div className="text-center max-w-3xl mx-auto">
          <Users className="w-16 h-16 text-primary mx-auto mb-6" />
          <h2 className="text-3xl font-headline font-bold tracking-tight sm:text-4xl">Building Better Websites Through AI</h2>
          <p className="mt-6 text-lg text-foreground/80">
            At Missile OS, we combine deep expertise in artificial intelligence with a passion for helping small businesses succeed online. Our team brings together experience from Google, IBM, and Rafael to build AI agents that create professional websites faster and more affordably than traditional agencies. We believe every small business deserves a website that looks premium and actually converts visitors into customers.
          </p>
        </div>
      </Section>
      <Section id="team-grid" className="bg-muted/50">
        {teamMembers.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-8">
            {teamMembers.map((member) => (
              <Card key={member.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col sm:flex-row p-6 items-center sm:items-start">
                <div className="relative w-32 h-32 rounded-full overflow-hidden flex-shrink-0 mb-4 sm:mb-0 sm:mr-6">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    style={{ objectFit: 'cover' }}
                    data-ai-hint={member.imageHint}
                    unoptimized={process.env.NODE_ENV === 'development'}
                  />
                </div>
                <div className="flex flex-col flex-grow text-center sm:text-left">
                  <div>
                    <CardTitle className="font-headline text-2xl mb-1">{member.name}</CardTitle>
                    <CardDescription className="text-md text-primary font-semibold mb-3">{member.role}</CardDescription>
                    <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold mb-1">Key Expertise:</h4>
                      <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                        {member.expertise.map((skill) => (
                          <span key={skill} className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-full">{skill}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                  {member.linkedin && (
                    <Button variant="outline" size="sm" asChild className="mt-auto self-center sm:self-start">
                      <Link href={member.linkedin} target="_blank" rel="noopener noreferrer">
                        <Linkedin className="w-4 h-4 mr-2" /> LinkedIn Profile
                      </Link>
                    </Button>
                  )}
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">Our team information is being updated. Please check back soon!</p>
          </div>
        )}
      </Section>
      <Section id="join-us" className="bg-card text-center">
        <h2 className="text-3xl font-headline font-bold tracking-tight sm:text-4xl">Ready to Work with Us?</h2>
        <p className="mt-6 text-lg text-foreground/80 max-w-xl mx-auto">
          Let's talk about your business and how we can build a professional website that drives results. Book your free strategy call today.
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
