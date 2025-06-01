"use client";

import { HeroSection } from '@/components/ui/hero-section';
import { Section } from '@/components/ui/section';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin, Loader2 } from 'lucide-react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useState, useEffect } from 'react';
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

export default function ContactPage() {
  const searchParams = useSearchParams();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      interest: "", // Ensure default value for controlled Select
    }
  });

  useEffect(() => {
    setIsMounted(true);
    const subject = searchParams.get('subject');
    const prefillInterest = (value: string) => {
      const interests = ["AI Agents", "Intelligent Chatbots", "AI Game Characters", "Consultancy", "Careers", "General Inquiry"];
      const matchedInterest = interests.find(interest => value.toLowerCase().includes(interest.toLowerCase().replace(/\s/g, '')));
      if (matchedInterest) {
        setValue('interest', matchedInterest);
      } else {
         setValue('interest', 'General Inquiry');
      }
    }
    if (subject) {
       prefillInterest(subject);
    } else {
       setValue('interest', 'General Inquiry');
    }

  }, [searchParams, setValue]);


  const onSubmit: SubmitHandler<ContactFormValues> = async (data) => {
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log("Form Data:", data);
    setIsLoading(false);
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll be in touch soon.",
    });
    reset();
    setValue('interest', 'General Inquiry'); // Reset select after submission
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
        title="Get in Touch with Frengen AI"
        subtitle="We're excited to hear about your AI aspirations. Whether you're looking for a custom solution, consultancy, or just want to learn more, reach out to us."
      />

      <Section id="contact-form-section">
        <div className="grid md:grid-cols-2 gap-12 items-start">
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
                  <Label htmlFor="company">Company (Optional)</Label>
                  <Input id="company" {...register("company")} placeholder="Your Company Name" />
                </div>
                <div>
                  <Label htmlFor="interest">Area of Interest</Label>
                  <Select 
                    onValueChange={(value) => setValue('interest', value, { shouldValidate: true })}
                    defaultValue={searchParams.get('subject') ? (["AI Agents", "Intelligent Chatbots", "AI Game Characters", "Consultancy", "Careers", "General Inquiry"].find(interest => searchParams.get('subject')!.toLowerCase().includes(interest.toLowerCase().replace(/\s/g, ''))) || "General Inquiry") : "General Inquiry"}
                  >
                    <SelectTrigger id="interest">
                      <SelectValue placeholder="Select an interest" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="AI Agents">AI Agents</SelectItem>
                      <SelectItem value="Intelligent Chatbots">Intelligent Chatbots</SelectItem>
                      <SelectItem value="AI Game Characters">AI Game Characters</SelectItem>
                      <SelectItem value="Consultancy">Consultancy Services</SelectItem>
                      <SelectItem value="Careers">Careers</SelectItem>
                      <SelectItem value="General Inquiry">General Inquiry</SelectItem>
                    </SelectContent>
                  </Select>
                   {errors.interest && <p className="text-sm text-destructive mt-1">{errors.interest.message}</p>}
                </div>
                <div>
                  <Label htmlFor="message">Your Message</Label>
                  <Textarea id="message" {...register("message")} placeholder="Tell us about your project or query..." rows={5} />
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
                  <a href="mailto:info@frengen.ai" className="text-md hover:text-primary">info@frengen.ai</a>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-6 h-6 text-primary" />
                  <span className="text-md">+1 (555) 123-4567 (Placeholder)</span>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-6 h-6 text-primary mt-1" />
                  <span className="text-md">
                    123 AI Avenue, Innovation City, CA 90210, USA (Placeholder)<br/>
                    Global Remote Team
                  </span>
                </div>
              </CardContent>
            </Card>
            
            <Card className="shadow-lg">
                <CardHeader>
                    <CardTitle className="font-headline">Business Hours</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-md">Monday - Friday: 9:00 AM - 6:00 PM (PST)</p>
                    <p className="text-sm text-muted-foreground">We strive to respond to all inquiries within 24 business hours.</p>
                </CardContent>
            </Card>
          </div>
        </div>
      </Section>
    </>
  );
}
