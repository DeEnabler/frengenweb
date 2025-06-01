import type { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface SectionProps extends HTMLAttributes<HTMLElement> {
  as?: keyof JSX.IntrinsicElements;
  containerClassName?: string;
  noPaddingY?: boolean;
}

export function Section({
  className,
  containerClassName,
  as: Comp = 'section',
  children,
  noPaddingY = false,
  ...props
}: SectionProps) {
  return (
    <Comp className={cn(!noPaddingY && 'py-12 md:py-16 lg:py-20', className)} {...props}>
      <div className={cn('container mx-auto max-w-7xl px-4 md:px-6', containerClassName)}>
        {children}
      </div>
    </Comp>
  );
}
