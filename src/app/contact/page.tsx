"use client";
import { HeroSection } from '@/components/ui/hero-section';
import { Section } from '@/components/ui/section';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Loader2 } from 'lucide-react';
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
      interest: "New Website Project",
      message: "",
    },
  });

  useEffect(() => {
    setIsMounted(true);
    const subject = searchParams.get('subject');
    if (subject === 'Blog+Topic+Suggestion') {
      setDisplayedInterest('General Inquiry');
      setValue('interest', 'General Inquiry', { shouldValidate: true });
    }
  }, [searchParams, setValue]);

  const onSubmit: SubmitHandler<ContactFormValues> = async (data) => {
    setIsLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log("Form submitted:", data);
      toast({
        title: "Message sent!",
        description: "We'll get back to you within 24 business hours.",
      });
      reset();
      setDisplayedInterest("New Website Project");
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again or email us directly.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (!isMounted) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Loader2 className="h-12 w-12 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <>
      <HeroSection
        title="Let's Build Your Website"
        subtitle="Tell us about your small business and what you need. We'll get back to you within 24 hours to schedule your free strategy call."
      />
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="font-headline text-2xl">Send Us a Message</CardTitle>
              <CardDescription>Fill out the form and our team will get back to you shortly.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
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
                      <SelectItem value="AI Cybersecurity">AI Cybersecurity</SelectItem>
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
                  <a href="mailto:info@missileos.ai" className="text-md hover:text-primary">info@missileos.ai</a>
                </div>
              </CardContent>
            </Card>
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="font-headline">Why Reach Out?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground">
                  ✓ Free strategy call — no pressure, no commitment required
                </p>
                <p className="text-sm text-muted-foreground">
                  ✓ We'll review your current online presence and suggest improvements
                </p>
                <p className="text-sm text-muted-foreground">
                  ✓ Get a clear timeline and upfront pricing for your project
                </p>
                <p className="text-sm text-muted-foreground">
                  ✓ We respond to all inquiries within 24 business hours
                </p>
              </CardContent>
            </Card>
          </div>
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
