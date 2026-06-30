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
    title: "How AI Is Changing Website Design for Small Businesses",
    date: "Coming Soon",
    excerpt: "Explore how AI-powered website builders are making professional web design accessible and affordable for small businesses worldwide.",
    image: "https://placehold.co/600x400/000000/FFFFFF?text=AI+Web+Design",
    imageHint: "technology abstract",
  },
  {
    id: 2,
    title: "5 Reasons Your Small Business Needs a Professional Website in 2026",
    date: "Coming Soon",
    excerpt: "From credibility to conversions, here's why a professional website is essential for small business growth — and how AI makes it easier than ever.",
    image: "https://placehold.co/600x400/000000/FFFFFF?text=SMB+Websites",
    imageHint: "business website",
  },
  {
    id: 3,
    title: "How to Build a Website for Your Small Business with AI",
    date: "Coming Soon",
    excerpt: "A step-by-step guide to using AI agents to create a beautiful, professional website — no coding or design experience required.",
    image: "https://placehold.co/600x400/000000/FFFFFF?text=AI+Guide",
    imageHint: "guide tutorial",
  },
];

export default function BlogPage() {
  return (
    <>
      <HeroSection
        title="Missile OS Blog — AI Website Building Insights"
        subtitle="Practical advice, tips, and insights on building and maintaining professional websites for small businesses using AI. Our blog is coming soon!"
      >
        <Button variant="outline" size="lg" disabled>
          <Rss className="mr-2 h-5 w-5" /> Subscribe (Coming Soon)
        </Button>
      </HeroSection>
      <Section id="blog-intro">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xl text-foreground/80">
            We're putting together practical content on AI-powered website building, conversion optimization, small business web strategy, and cybersecurity. Check back soon for actionable articles and guides.
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
                <Image src={post.image} alt={post.title} fill style={{ objectFit: 'cover' }} data-ai-hint={post.imageHint} />
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
          We're eager to cover what interests you. Let us know if there are specific topics about AI website building you'd like us to explore.
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
