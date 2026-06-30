import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { HeroSection } from '@/components/ui/hero-section';
import { Section } from '@/components/ui/section';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { Linkedin, Users, Heart, Sparkles, Target, Globe } from 'lucide-react';

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
    name: "Shlomi Gibly",
    role: "Co-founder & AI Operations Lead",
    bio: "Builds the AI agent systems that power our website creation and maintenance. Passionate about deploying practical AI that replaces manual workflows and delivers real results for small businesses worldwide.",
    expertise: ["AI Agents", "Website Automation", "Operations", "Web Systems"],
    image: "/images/team/shlomi-gibly.jpg",
    imageHint: "man smiling professional",
    linkedin: "#",
  },
  {
    id: 2,
    name: "Daniel Cohen",
    role: "Co-founder & Engineering Lead",
    bio: "Leads the engineering team behind our AI-powered website builder. 15+ years of experience building scalable web platforms and integrating AI into real-world products that businesses actually use.",
    expertise: ["Web Engineering", "AI Systems", "Cloud Architecture", "Scalability"],
    image: "/images/team/daniel-cohen.jpg",
    imageHint: "man professional portrait",
    linkedin: "#",
  },
  {
    id: 3,
    name: "Omri Ben Ami",
    role: "Head of Customer Success & Web Strategy",
    bio: "Ensures every website we build drives real results for small business owners. Leads client onboarding, conversion strategy, and ongoing website optimization so your site keeps working for you long after launch.",
    expertise: ["Web Strategy", "Client Success", "Conversion Optimization", "SEO"],
    image: "/images/team/omri-ben-ami.jpg",
    imageHint: "man professional portrait",
    linkedin: "#",
  },
  {
    id: 4,
    name: "Arjun Patel",
    role: "Senior AI Engineer",
    bio: "Designs and builds the AI agent pipelines that generate custom websites at scale. Specializes in LLM applications and turning complex ML models into reliable, production-grade systems that ship.",
    expertise: ["LLM Applications", "AI Pipelines", "Automation", "ML Systems"],
    image: "/images/team/arjun-patel.jpg",
    imageHint: "man professional portrait",
    linkedin: "#",
  },
  {
    id: 5,
    name: "Carlos Mendez",
    role: "Lead UX Designer",
    bio: "Creates beautiful, intuitive website designs that don't just look great — they convert. Obsessed with user psychology and how every design decision shapes visitor behavior and trust.",
    expertise: ["UX Design", "Conversion Design", "Brand Identity", "Prototyping"],
    image: "/images/team/carlos-mendez.jpg",
    imageHint: "man professional portrait",
    linkedin: "#",
  },
  {
    id: 6,
    name: "Sophie Laurent",
    role: "Conversion Strategy Specialist",
    bio: "Helps small businesses turn website visitors into paying customers. Combines data-driven analysis with proven conversion psychology to maximize every site's return on investment.",
    expertise: ["CRO", "Analytics", "A/B Testing", "User Research"],
    image: "/images/team/sophie-laurent.jpg",
    imageHint: "woman professional portrait",
    linkedin: "#",
  },
  {
    id: 7,
    name: "James Okonkwo",
    role: "Junior Developer & QA Engineer",
    bio: "Makes sure every website we ship is fast, accessible, and bug-free. Passionate about clean code, great user experiences, and building tools that make the whole team more efficient.",
    expertise: ["Frontend Development", "QA Testing", "Accessibility", "Performance"],
    image: "/images/team/james-okonkwo.jpg",
    imageHint: "man professional portrait",
    linkedin: "#",
  },
  {
    id: 8,
    name: "Lisa Chen",
    role: "Customer Success Manager",
    bio: "Your go-to person after launch. Makes sure your site stays updated, secure, and performing at its best. Believes great support means being responsive, proactive, and genuinely caring about your success.",
    expertise: ["Client Relations", "Maintenance", "Account Management", "Support"],
    image: "/images/team/lisa-chen.jpg",
    imageHint: "woman professional portrait",
    linkedin: "#",
  },
];

const values = [
  {
    icon: Heart,
    title: "Human-First, AI-Powered",
    description: "AI does the heavy lifting, but real people make the decisions. You always have a person to talk to.",
  },
  {
    icon: Target,
    title: "Results Over Pretty Pixels",
    description: "A beautiful website that doesn't convert is a waste. Every design choice is driven by conversion psychology.",
  },
  {
    icon: Globe,
    title: "Small Businesses Everywhere",
    description: "We help small businesses worldwide get online and grow — regardless of location, industry, or budget.",
  },
  {
    icon: Sparkles,
    title: "Always Improving",
    description: "Your website isn't a one-time project. We continuously optimize, update, and improve it using AI.",
  },
];

export default function TeamPage() {
  return (
    <>
      <HeroSection
        title="Meet the People Behind Your Website"
        subtitle="We're a dedicated team of AI engineers, web strategists, and customer success experts committed to building professional websites for small businesses around the world."
      />

      <Section id="team-intro">
        <div className="text-center max-w-3xl mx-auto">
          <Users className="w-16 h-16 text-primary mx-auto mb-6" />
          <h2 className="text-3xl font-headline font-bold tracking-tight sm:text-4xl">Real People, Real Expertise</h2>
          <p className="mt-6 text-lg text-foreground/80">
            At frengen.ai, we combine deep expertise in artificial intelligence with a genuine passion for
            helping small businesses succeed online. Our team brings together experience from Google, IBM,
            and leading tech companies to build AI agents that create professional websites faster and more
            affordably than traditional agencies. We believe every small business deserves a website that
            looks premium and actually converts visitors into customers.
          </p>
        </div>
      </Section>

      <Section id="team-grid" className="bg-muted/50">
        {teamMembers.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-8">
            {teamMembers.map((member) => (
              <Card key={member.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col sm:flex-row p-6 items-center sm:items-start">
                <div className="relative w-32 h-32 rounded-full overflow-hidden flex-shrink-0 mb-4 sm:mb-0 sm:mr-6 ring-4 ring-primary/10">
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
        )}
      </Section>

      <Section id="values">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-headline font-bold tracking-tight sm:text-4xl">What We Believe</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Our core values shape every website we build and every client relationship we have.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v) => (
            <div key={v.title} className="text-center p-6">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                <v.icon className="w-6 h-6" />
              </div>
              <h3 className="font-headline text-lg font-semibold mb-2">{v.title}</h3>
              <p className="text-sm text-muted-foreground">{v.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="join-us" className="bg-card text-center">
        <h2 className="text-3xl font-headline font-bold tracking-tight sm:text-4xl">Ready to Work with Us?</h2>
        <p className="mt-6 text-lg text-foreground/80 max-w-xl mx-auto">
          Let's talk about your business and how we can build a professional website that drives results.
          Book your free strategy call today.
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
