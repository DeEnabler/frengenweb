import type { ReactNode } from 'react';
import { Section } from '@/components/ui/section';
import { cn } from '@/lib/utils';

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
    <Section className={cn("bg-gradient-to-b from-background to-transparent pt-20 pb-16 md:pt-28 md:pb-24", className)}>
      <div className={cn("max-w-3xl", centered && "mx-auto text-center")}>
        {typeof title === 'string' ? (
          <h1 className={cn("text-4xl font-headline font-bold tracking-tight sm:text-5xl lg:text-6xl", titleClassName)}>
            {title}
          </h1>
        ) : (
          title
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
