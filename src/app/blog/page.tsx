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
    image: "https://placehold.co/600x400/E8593A/FFFFFF?text=AI+Web+Design",
    imageHint: "technology abstract",
  },
  {
    id: 2,
    title: "5 Reasons Your Small Business Needs a Professional Website in 2026",
    date: "Coming Soon",
    excerpt: "From credibility to conversions, here's why a professional website is essential for small business growth — and how AI makes it easier than ever.",
    image: "https://placehold.co/600x400/2F9A93/FFFFFF?text=SMB+Websites",
    imageHint: "business website",
  },
  {
    id: 3,
    title: "How to Build a Website for Your Small Business with AI",
    date: "Coming Soon",
    excerpt: "A step-by-step guide to using AI agents to create a beautiful, professional website — no coding or design experience required.",
    image: "https://placehold.co/600x400/E69A1E/FFFFFF?text=AI+Guide",
    imageHint: "guide tutorial",
  },
];

export default function BlogPage() {
  return (
    <>
      <HeroSection
        title="frengen.ai Blog — AI Website Building Insights"
        subtitle="Tips, insights, and guides on how AI is transforming website design for small businesses. Learn how to get the most out of your online presence."
      />

      <Section id="blog-posts">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {placeholderPosts.map((post) => (
            <Card key={post.id} className="flex flex-col h-full shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <div className="relative h-48 w-full">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  unoptimized
                />
              </div>
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Rss className="w-4 h-4" />
                  {post.date}
                </div>
                <CardTitle className="font-headline text-lg">{post.title}</CardTitle>
                <CardDescription>{post.excerpt}</CardDescription>
              </CardHeader>
              <CardFooter className="mt-auto">
                <Button variant="ghost" asChild className="text-primary">
                  <Link href="/blog">Read More <ChevronRight className="w-4 h-4 ml-1" /></Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="blog-cta" className="bg-card text-center">
        <h2 className="text-2xl font-headline font-bold tracking-tight sm:text-3xl">Ready to Build Your Website?</h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
          Don't wait — get a professional website for your small business today.
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
