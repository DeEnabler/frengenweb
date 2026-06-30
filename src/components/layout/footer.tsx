import Link from 'next/link';
import { Sparkles, Twitter, Linkedin, Github } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40 bg-card text-card-foreground">
      <div className="container mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Sparkles className="h-8 w-8 text-primary" />
              <span className="font-headline text-xl font-bold text-primary">frengen.ai</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              AI-powered website building and maintenance for small businesses worldwide.
              Fast, affordable, professional — with real human support.
            </p>
          </div>

          <div>
            <h3 className="text-md font-headline font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/case-studies" className="text-muted-foreground hover:text-primary transition-colors">Examples</Link></li>
              <li><Link href="/team" className="text-muted-foreground hover:text-primary transition-colors">Our Team</Link></li>
              <li><Link href="/expertise" className="text-muted-foreground hover:text-primary transition-colors">Our Approach</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-md font-headline font-semibold mb-3">Connect With Us</h3>
            <div className="flex space-x-4">
              <Link href="#" aria-label="Twitter" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" aria-label="GitHub" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="h-5 w-5" />
              </Link>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Questions? <a href="mailto:hello@frengen.ai" className="text-primary hover:underline">hello@frengen.ai</a>
            </p>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-border/40 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} frengen.ai. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
