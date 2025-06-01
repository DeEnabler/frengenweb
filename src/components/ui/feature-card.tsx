import type { ReactNode } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  icon?: ReactNode;
  title: string;
  description: string;
  children?: ReactNode;
  className?: string;
}

export function FeatureCard({ icon, title, description, children, className }: FeatureCardProps) {
  return (
    <Card className={cn("flex flex-col h-full shadow-lg hover:shadow-xl transition-shadow duration-300", className)}>
      <CardHeader className="pb-4">
        <div className="flex items-start space-x-3">
          {icon && <div className="flex-shrink-0 text-primary">{icon}</div>}
          <div>
            <CardTitle className="font-headline text-xl mb-1">{title}</CardTitle>
            <CardDescription className="text-base">{description}</CardDescription>
          </div>
        </div>
      </CardHeader>
      {children && <CardContent className="flex-grow pt-0">{children}</CardContent>}
    </Card>
  );
}
