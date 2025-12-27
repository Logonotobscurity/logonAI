
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faqData } from "@/lib/mock-data";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="bg-secondary/30 animate-in fade-in-50">
      <div className="container mx-auto max-w-6xl py-16 md:py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold font-headline mb-4">Get in Touch</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Have a question, a project proposal, or just want to say hello? We'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form Section */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="font-headline text-2xl">Send us a Message</CardTitle>
                <CardDescription>Fill out the form and we'll get back to you shortly.</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="john.doe@example.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="e.g., Project Proposal" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="Your message here..." rows={6} />
                  </div>
                  <Button type="submit" size="lg" className="w-full">Submit</Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info & FAQ Section */}
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="font-headline text-2xl">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <div className="flex items-center gap-4">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>123 Innovation Drive, Tech City, 12345</span>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="h-5 w-5 text-primary" />
                  <span>contact@logon.ai</span>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="h-5 w-5 text-primary" />
                  <span>+1 (555) 123-4567</span>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="font-headline text-2xl">Frequently Asked Questions</CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {faqData.map((faq, index) => (
                    <AccordionItem value={`item-${index}`} key={index}>
                      <AccordionTrigger>{faq.question}</AccordionTrigger>
                      <AccordionContent>
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
