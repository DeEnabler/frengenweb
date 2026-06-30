import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';

export const metadata: Metadata = {
  title: 'frengen.ai — AI-Powered Websites for Small Businesses',
  description: 'Get a beautiful, professional, high-converting website for your small business — fast, affordable, and with real human support. AI agents + human expertise.',
  keywords: [
    'AI website builder small business',
    'build a website small business',
    'website builder small business',
    'affordable website design for small business',
    'AI powered website builder',
    'professional website for small business',
    'fast website creation small business',
    'how to build a website for small business with AI',
  ],
  openGraph: {
    title: 'frengen.ai — AI-Powered Websites for Small Businesses',
    description: 'Beautiful, professional websites built fast with AI agents and human expertise. No hidden fees. Real ongoing support. Affordable for small businesses worldwide.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
