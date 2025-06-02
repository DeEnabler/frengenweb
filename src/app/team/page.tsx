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
  image: string; // Should be a path like '/images/team/your-image.jpg'
  imageHint: string; // For accessibility and AI search (e.g., "person smiling")
  linkedin?: string;
}

// TODO: Add your real team members here.
// For each member, ensure images are placed in the `public/images/team/` directory.
// Example structure:
// {
//   id: 1,
//   name: "Jane Doe",
//   role: "Chief AI Scientist",
//   bio: "Jane leads our AI research and development efforts, specializing in LLMs.",
//   expertise: ["Machine Learning", "NLP", "LLM Research"],
//   image: "/images/team/jane-doe.jpg", // Assumes jane-doe.jpg is in public/images/team/
//   imageHint: "woman scientist",
//   linkedin: "https://www.linkedin.com/in/janedoe",
// },
const teamMembers: TeamMember[] = [
  // Add your team member objects here
];

export default function TeamPage() {
  return (
    <>
      <HeroSection
        title="Meet the Minds Behind FrenGen"
        subtitle="Our global team is a powerhouse of diverse expertise, blending seasoned ex-big tech engineers, ambitious student developers, and leading machine learning PhDs, all dedicated to delivering cutting-edge AI solutions."
      />

      <Section id="team-intro">
        <div className="text-center max-w-3xl mx-auto">
          <Users className="w-16 h-16 text-primary mx-auto mb-6" />
          <h2 className="text-3xl font-headline font-bold tracking-tight sm:text-4xl">A Synergy of Experience and Innovation</h2>
          <p className="mt-6 text-lg text-foreground/80">
            At FrenGen, we believe that the best solutions arise from collaboration and diverse perspectives. Our team members bring a wealth of knowledge from academia and industry, working together to tackle complex AI challenges and build impactful products. We foster a culture of continuous learning and innovation, ensuring we stay at the forefront of AI development.
          </p>
        </div>
      </Section>

      <Section id="team-grid" className="bg-muted/50">
        {teamMembers.length > 0 ? (
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
        ) : (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">Our team information is being updated. Please check back soon!</p>
            <p className="text-sm text-muted-foreground mt-2">To add team members, please edit the <code>teamMembers</code> array in <code>src/app/team/page.tsx</code> and place images in <code>public/images/team/</code>.</p>
          </div>
        )}
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
