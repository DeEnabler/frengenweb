import Link from 'next/link';
import { BotIcon, Twitter, Linkedin, Github } from 'lucide-react'; // Placeholder icons

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40 bg-card text-card-foreground">
      <div className="container mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <BotIcon className="h-8 w-8 text-primary" />
              <span className="font-headline text-xl font-bold text-primary">Frengen AI</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Delivering cutting-edge AI solutions for businesses worldwide.
            </p>
          </div>
          
          <div>
            <h3 className="text-md font-headline font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/ai-agents" className="text-muted-foreground hover:text-primary transition-colors">AI Agents</Link></li>
              <li><Link href="/chatbots" className="text-muted-foreground hover:text-primary transition-colors">Intelligent Chatbots</Link></li>
              <li><Link href="/game-characters" className="text-muted-foreground hover:text-primary transition-colors">AI Game Characters</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-md font-headline font-semibold mb-3">Connect With Us</h3>
            <div className="flex space-x-4">
              <Link href="#" aria-label="Twitter" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-6 w-6" />
              </Link>
              <Link href="#" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-6 w-6" />
              </Link>
              <Link href="#" aria-label="GitHub" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-border/40 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} Frengen AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
