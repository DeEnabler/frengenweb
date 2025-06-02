
import type { ReactNode } from 'react';
import { Section } from '@/components/ui/section';
import { cn } from '@/lib/utils';
import MeshNetworkEffect from '@/components/effects/mesh-network-effect'; 

interface HeroSectionProps {
  title: string | ReactNode;
  subtitle?: string | ReactNode;
  children?: ReactNode;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  centered?: boolean;
}

export function HeroSection({
  title,
  subtitle,
  children,
  className,
  titleClassName,
  subtitleClassName,
  centered = true,
}: HeroSectionProps) {
  return (
    <Section className={cn("relative bg-gradient-to-b from-background to-transparent pt-20 pb-16 md:pt-28 md:pb-24 overflow-hidden", className)}>
      <MeshNetworkEffect 
        className="opacity-20" // Made it more subtle
        particleColorHsl="0 0% 60%" // Slightly darker particles
        lineColorHsl="0 0% 30%"   // Slightly darker lines
        mouseInfluenceRadius={100}
        particleCount={50}
      />
      <div className={cn("relative z-10 max-w-3xl", centered && "mx-auto text-center")}>
        {typeof title === 'string' ? (
          <h1 className={cn("text-4xl font-headline font-bold tracking-tight sm:text-5xl lg:text-6xl", titleClassName)}>
            {title}
          </h1>
        ) : (
          <h1 className={cn("text-4xl font-headline font-bold tracking-tight sm:text-5xl lg:text-6xl", titleClassName)}>
            {title}
          </h1>
        )}
        {subtitle && (
          typeof subtitle === 'string' ? (
            <p className={cn("mt-6 text-lg leading-8 text-foreground/80", subtitleClassName)}>
              {subtitle}
            </p>
          ) : (
            <div className={cn("mt-6 text-lg leading-8 text-foreground/80", subtitleClassName)}>
              {subtitle}
            </div>
          )
        )}
        {children && <div className="mt-10 flex items-center justify-center gap-x-6">{children}</div>}
      </div>
    </Section>
  );
}
