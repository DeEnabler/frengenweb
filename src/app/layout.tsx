import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';

export const metadata: Metadata = {
  title: 'Missile OS — AI Website Builder for Small Business',
  description: 'Build a beautiful, professional website for your small business with AI. Missile OS uses intelligent AI agents to design, build, and maintain high-converting websites — fast, affordable, no technical skills needed.',
  keywords: [
    'AI website builder for small business',
    'build a website for my small business',
    'website builder for small business',
    'affordable website design for small business',
    'AI powered website builder',
    'professional website for small business',
    'fast website creation for small business',
    'how to build a website for my small business with AI',
  ],
  openGraph: {
    title: 'Missile OS — AI Website Builder for Small Business',
    description: 'Beautiful, professional websites built fast with AI agents. No technical skills needed. Affordable for small businesses worldwide.',
    type: 'website',
  },
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
