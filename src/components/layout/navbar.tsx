
"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { Menu, X, BotIcon, ChevronDown } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface NavLinkItem {
  href?: string;
  label: string;
  subLinks?: NavLinkItem[];
}

const navLinks: NavLinkItem[] = [
  { href: '/', label: 'Home' },
  {
    label: 'Use Cases',
    subLinks: [
      { href: '/ai-agents', label: 'AI Agents' },
      { href: '/chatbots', label: 'Chatbots' },
      { href: '/game-characters', label: 'Game Characters' },
    ],
  },
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
  
  useEffect(() => {
    setIsSheetOpen(false);
  }, [pathname]);

  if (!isMounted) {
    return null; 
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center space-x-2">
          <BotIcon className="h-7 w-7 text-primary" />
          <span className="font-headline text-xl font-bold text-primary">FrenGen</span>
        </Link>

        <nav className="hidden md:flex space-x-1 lg:space-x-2 items-center">
          {navLinks.map((link) => (
            link.subLinks ? (
              <DropdownMenu key={link.label}>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className={cn(
                      "text-sm font-medium flex items-center",
                      link.subLinks.some(subLink => subLink.href === pathname) ? "text-primary hover:text-primary" : "text-foreground/70 hover:text-foreground"
                    )}
                  >
                    {link.label}
                    <ChevronDown className="ml-1 h-4 w-4 opacity-70" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 bg-popover text-popover-foreground">
                  {link.subLinks.map((subLink) => (
                    <DropdownMenuItem key={subLink.href} asChild className="cursor-pointer">
                      <Link href={subLink.href!} className={cn(pathname === subLink.href && "font-semibold text-primary")}>
                        {subLink.label}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button
                key={link.href}
                variant="ghost"
                asChild
                className={cn(
                  "text-sm font-medium",
                  pathname === link.href ? "text-primary hover:text-primary" : "text-foreground/70 hover:text-foreground"
                )}
              >
                <Link href={link.href!}>{link.label}</Link>
              </Button>
            )
          ))}
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs bg-background p-6">
              <div className="flex flex-col space-y-2">
                <div className="flex justify-between items-center mb-4">
                    <Link href="/" className="flex items-center space-x-2">
                        <BotIcon className="h-7 w-7 text-primary" />
                        <span className="font-headline text-xl font-bold text-primary">FrenGen</span>
                    </Link>
                    <SheetClose asChild>
                        <Button variant="ghost" size="icon">
                            <X className="h-6 w-6" />
                            <span className="sr-only">Close menu</span>
                        </Button>
                    </SheetClose>
                </div>
                {navLinks.map((link) => (
                  link.subLinks ? (
                    <div key={link.label} className="flex flex-col">
                      <span className={cn(
                        "text-lg font-medium py-2 px-3 text-muted-foreground",
                         link.subLinks.some(subLink => subLink.href === pathname) && "text-primary font-semibold"
                      )}>
                        {link.label}
                      </span>
                      <div className="flex flex-col pl-4 space-y-1 mt-1">
                        {link.subLinks.map(subLink => (
                          <SheetClose asChild key={subLink.href}>
                            <Link
                              href={subLink.href!}
                              className={cn(
                                "text-md font-medium py-2 rounded-md px-3 transition-colors",
                                pathname === subLink.href ? "bg-primary/10 text-primary" : "hover:bg-muted"
                              )}
                            >
                              {subLink.label}
                            </Link>
                          </SheetClose>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <SheetClose asChild key={link.href}>
                      <Link
                        href={link.href!}
                        className={cn(
                          "text-lg font-medium py-2 rounded-md px-3 transition-colors",
                          pathname === link.href ? "bg-primary/10 text-primary" : "hover:bg-muted"
                        )}
                      >
                        {link.label}
                      </Link>
                    </SheetClose>
                  )
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
