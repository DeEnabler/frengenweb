
"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { Menu, X, BotIcon } from 'lucide-react'; // Using BotIcon as a placeholder logo icon
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/ai-agents', label: 'AI Agents' },
  { href: '/chatbots', label: 'Chatbots' },
  { href: '/game-characters', label: 'Game Characters' },
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/team', label: 'Team' },
  { href: '/expertise', label: 'Expertise' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  // Close sheet on navigation
  useEffect(() => {
    setIsSheetOpen(false);
  }, [pathname]);

  if (!isMounted) {
    return null; // Avoid rendering mismatch during hydration
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center space-x-2">
          <BotIcon className="h-8 w-8 text-primary" />
          <span className="font-headline text-2xl font-bold text-primary">Frengen AI</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-1 lg:space-x-2">
          {navLinks.map((link) => (
            <Button
              key={link.href}
              variant="ghost"
              asChild
              className={cn(
                "text-sm font-medium",
                pathname === link.href ? "text-primary hover:text-primary" : "text-foreground/70 hover:text-foreground"
              )}
            >
              <Link href={link.href}>{link.label}</Link>
            </Button>
          ))}
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs bg-background p-6">
              <div className="flex flex-col space-y-5">
                <div className="flex justify-between items-center mb-4">
                    <Link href="/" className="flex items-center space-x-2">
                        <BotIcon className="h-7 w-7 text-primary" />
                        <span className="font-headline text-xl font-bold text-primary">Frengen AI</span>
                    </Link>
                    <SheetClose asChild>
                        <Button variant="ghost" size="icon">
                            <X className="h-6 w-6" />
                            <span className="sr-only">Close menu</span>
                        </Button>
                    </SheetClose>
                </div>
                {navLinks.map((link) => (
                  <SheetClose asChild key={link.href}>
                    <Link
                      href={link.href}
                      className={cn(
                        "text-lg font-medium py-2 rounded-md px-3 transition-colors",
                        pathname === link.href ? "bg-primary/10 text-primary" : "hover:bg-muted"
                      )}
                    >
                      {link.label}
                    </Link>
                  </SheetClose>
                ))}
                 <Button asChild className="mt-6">
                    <Link href="/contact">Request a Demo</Link>
                  </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
         <Button asChild className="hidden md:inline-flex">
            <Link href="/contact">Request a Demo</Link>
        </Button>
      </div>
    </header>
  );
}
