import { HeroSection } from '@/components/ui/hero-section';
import { Section } from '@/components/ui/section';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Rss, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const placeholderPosts = [
  {
    id: 1,
    title: "The Future of AI in Business Automation",
    date: "October 26, 2023",
    excerpt: "Exploring how AI agents are set to revolutionize workflows and efficiency across various industries.",
    image: "https://placehold.co/600x400/000000/FFFFFF?text=AI+Future",
    imageHint: "technology abstract"
  },
  {
    id: 2,
    title: "Unlocking Data Insights with Conversational AI",
    date: "November 5, 2023",
    excerpt: "A deep dive into how intelligent chatbots are making company data more accessible and actionable.",
    image: "https://placehold.co/600x400/000000/FFFFFF?text=Data+Chat",
    imageHint: "data analytics"
  },
  {
    id: 3,
    title: "Crafting Believable AI Characters for Immersive Gaming",
    date: "November 15, 2023",
    excerpt: "Techniques and considerations for developing AI-driven game characters that enhance player engagement.",
    image: "https://placehold.co/600x400/000000/FFFFFF?text=Game+Dev",
    imageHint: "gaming code"
  }
];

export default function BlogPage() {
  return (
    <>
      <HeroSection
        title="FrenGen Insights & Innovations"
        subtitle="Stay updated with the latest trends, thoughts, and breakthroughs in artificial intelligence from our team of experts. Our blog is coming soon!"
      >
        <Button variant="outline" size="lg" disabled>
          <Rss className="mr-2 h-5 w-5" /> Subscribe (Coming Soon)
        </Button>
      </HeroSection>

      <Section id="blog-intro">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xl text-foreground/80">
            While our official blog is under construction, we're excited to soon share valuable content on AI development, industry applications, machine learning research, and the ethical considerations of AI. Check back for insightful articles, tutorials, and case studies.
          </p>
        </div>
      </Section>

      <Section id="placeholder-posts" className="bg-muted/50">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-headline font-bold tracking-tight sm:text-4xl">Sneak Peek: Upcoming Topics</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {placeholderPosts.map(post => (
            <Card key={post.id} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48 w-full">
                <Image src={post.image} alt={post.title} layout="fill" objectFit="cover" data-ai-hint={post.imageHint} />
              </div>
              <CardHeader>
                <CardTitle className="font-headline text-xl">{post.title}</CardTitle>
                <CardDescription>{post.date}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm text-muted-foreground">{post.excerpt}</p>
              </CardContent>
              <CardFooter>
                <Button variant="link" className="px-0 text-primary" disabled>
                  Read More (Soon) <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="cta-blog" className="text-center">
        <h2 className="text-2xl font-headline font-bold tracking-tight sm:text-3xl">Have a Topic Suggestion?</h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
          We're eager to cover what interests you. Let us know if there are specific AI topics you'd like us to explore.
        </p>
        <div className="mt-8">
          <Button asChild size="lg">
            <Link href="/contact?subject=Blog+Topic+Suggestion">Suggest a Topic</Link>
          </Button>
        </div>
      </Section>
    </>
  );
}
