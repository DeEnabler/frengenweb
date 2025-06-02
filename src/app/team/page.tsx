
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

// Ensure images are placed in public/images/team/
// and that filenames (including extensions and casing) match exactly.
// For example: '/images/team/nadav-rubinstein.jpg'
const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Nadav Rubinstein",
    role: "Co-founder",
    bio: "Nadav, a Machine Learning Researcher, leverages his experience from IBM and Rafael Advanced Defense Systems in advanced ML and deep learning. His research acumen is key to developing FrenGen's cutting-edge AI agents and custom solutions.",
    expertise: ["Machine Learning", "Deep Learning", "AI Research", "Custom AI", "AI Agents"],
    image: "/images/team/nadav-rubinstein.jpg",
    imageHint: "man professional portrait",
    // linkedin: "https://www.linkedin.com/in/nadavrubinstein",
  },
  {
    id: 2,
    name: "Shlomi Gibly",
    role: "Co-founder",
    bio: "Shlomi brings critical data expertise to FrenGen, specializing in transforming complex datasets into strategic assets for AI development. Proficient in Python, SQL, and R, he architects data-driven approaches that enhance the intelligence of our AI agents and the insights delivered by our chatbots. His background in client solutions and gaming analytics ensures our AI game characters are powered by deep, actionable insights, making him integral to the development of sophisticated AI-powered applications.",
    expertise: ["Data Analysis", "Python", "SQL", "Client Solutions", "Chatbots", "Game AI"],
    image: "/images/team/shlomi-gibly.jpg",
    imageHint: "man smiling professional",
    // linkedin: "https://www.linkedin.com/in/shlomigibly",
  },
  {
    id: 3,
    name: "Ofir Bar Tal",
    role: "Co-founder",
    bio: "Ofir combines academic research with practical AI application, drawing from his experience as a Data Scientist at Google (Waze). His expertise in ML and problem-solving drives FrenGen's bespoke LLM applications and custom AI solutions.",
    expertise: ["Machine Learning", "Data Science", "LLM Applications", "Bespoke AI", "Problem Solving"],
    image: "/images/team/ofir-bar-tal.jpg", // Please ensure this file exists at public/images/team/ofir-bar-tal.jpg (case-sensitive)
    imageHint: "man tech professional",
    // linkedin: "https://www.linkedin.com/in/ofirbartal",
  },
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
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-8">
            {teamMembers.map((member) => (
              <Card key={member.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col sm:flex-row p-6 items-center sm:items-start">
                <div className="relative w-32 h-32 rounded-full overflow-hidden flex-shrink-0 mb-4 sm:mb-0 sm:mr-6">
                  <Image
                    src={member.image}
                    alt={member.name}
                    layout="fill"
                    objectFit="cover"
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
            <p className="text-sm text-muted-foreground mt-2">To add team members, please edit the <code>teamMembers</code> array in <code>src/app/team/page.tsx</code> and place images in <code>public/images/team/</code>. Ensure filenames match exactly (case-sensitive).</p>
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
