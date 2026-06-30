"use client";

import { HeroSection } from '@/components/ui/hero-section';
import { Section } from '@/components/ui/section';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Loader2, PhoneCall, CheckCircle, Clock, Heart } from 'lucide-react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { useToast } from '@/hooks/use-toast';

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  company: z.string().optional(),
  interest: z.string().min(1, "Please select an area of interest."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

function ContactFormContent() {
  const searchParams = useSearchParams();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [displayedInterest, setDisplayedInterest] = useState("New Website Project");

  const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      interest: searchParams.get('interest') || "New Website Project",
      message: "",
    },
  });

  useEffect(() => {
    setIsMounted(true);
    const interestParam = searchParams.get('interest');
    if (interestParam) {
      setDisplayedInterest(interestParam);
      setValue('interest', interestParam);
    }
  }, [searchParams, setValue]);

  const onSubmit: SubmitHandler<ContactFormValues> = async (data) => {
    setIsLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1200));
      toast({
        title: "Message sent!",
        description: "We'll get back to you within 24 business hours.",
      });
      reset();
      setDisplayedInterest("New Website Project");
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again or email us directly at hello@frengen.ai",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <HeroSection
        title="Let's Talk About Your Website"
        subtitle="Tell us about your business and what you need. We'll get back to you within 24 business hours with a clear plan and upfront pricing."
      />

      <Section className="grid md:grid-cols-2 gap-8 items-start">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="font-headline">Send Us a Message</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" {...register("name")} placeholder="Your Name" />
                {errors.name && <p className="text-sm text-destructive mt-1">{errors.name.message}</p>}
              </div>
              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" {...register("email")} placeholder="your@email.com" />
                {errors.email && <p className="text-sm text-destructive mt-1">{errors.email.message}</p>}
              </div>
              <div>
                <Label htmlFor="company">Business Name (Optional)</Label>
                <Input id="company" {...register("company")} placeholder="Your Business Name" />
              </div>
              <div>
                <Label htmlFor="interest">What Do You Need?</Label>
                <Select value={displayedInterest} onValueChange={(value) => {
                  setValue('interest', value, { shouldValidate: true });
                  setDisplayedInterest(value);
                }}>
                  <SelectTrigger id="interest">
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="New Website Project">New Website Project</SelectItem>
                    <SelectItem value="Website Redesign">Website Redesign</SelectItem>
                    <SelectItem value="Ongoing Maintenance">Ongoing Maintenance</SelectItem>
                    <SelectItem value="General Inquiry">General Inquiry</SelectItem>
                  </SelectContent>
                </Select>
                {errors.interest && <p className="text-sm text-destructive mt-1">{errors.interest.message}</p>}
              </div>
              <div>
                <Label htmlFor="message">Tell Us About Your Business</Label>
                <Textarea id="message" {...register("message")} placeholder="What does your business do? What kind of website do you need?" rows={5} />
                {errors.message && <p className="text-sm text-destructive mt-1">{errors.message.message}</p>}
              </div>
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="space-y-8">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="font-headline">Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-6 h-6 text-primary" />
                <a href="mailto:hello@frengen.ai" className="text-md hover:text-primary">hello@frengen.ai</a>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="font-headline">Why Reach Out?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-muted-foreground flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                Free strategy call — no pressure, no commitment required
              </p>
              <p className="text-sm text-muted-foreground flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                We'll review your current online presence and suggest improvements
              </p>
              <p className="text-sm text-muted-foreground flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                Get a clear timeline and upfront pricing for your project
              </p>
              <p className="text-sm text-muted-foreground flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                We respond to all inquiries within 24 business hours
              </p>
            </CardContent>
          </Card>
        </div>
      </Section>
    </>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={<div className="flex justify-center items-center min-h-screen"><Loader2 className="h-12 w-12 animate-spin text-primary" /></div>}>
      <ContactFormContent />
    </Suspense>
  );
}
