import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ArrowRight, Bot, BarChart, Users, Cpu, Mic, FileText, Briefcase, Star, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { AgentCard } from "@/components/agent-card";
import { agents } from "@/lib/mock-data";

const capabilities = [
  {
    icon: <Bot className="h-8 w-8 text-primary" />,
    title: "AI-Powered Matching",
    description: "Our intelligent engine connects you with the perfect AI agents and solutions based on your unique needs.",
  },
  {
    icon: <BarChart className="h-8 w-8 text-primary" />,
    title: "In-Depth Assessments",
    description: "Take our comprehensive assessments to pinpoint your business challenges and growth opportunities.",
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: "Curated Marketplace",
    description: "Explore a marketplace of vetted AI professionals and vendors, ready to activate your solutions.",
  },
  {
    icon: <Cpu className="h-8 w-8 text-primary" />,
    title: "Intelligent Solutions",
    description: "Activate pre-built or custom AI solutions to automate tasks, gain insights, and drive efficiency.",
  },
  {
    icon: <FileText className="h-8 w-8 text-primary" />,
    title: "Seamless Conversations",
    description: "Engage with our AI assistant or connect directly with agents through an intuitive chat interface.",
  },
  {
    icon: <Briefcase className="h-8 w-8 text-primary" />,
    title: "Actionable Insights",
    description: "Receive data-driven recommendations and track your progress towards your business goals.",
  },
];

const assessments = [
  {
    title: "Digital Maturity Assessment",
    tagline: "Benchmark your digital capabilities against industry leaders.",
    cta: "Start Assessment",
  },
  {
    title: "AI Readiness Assessment",
    tagline: "Evaluate your organization's readiness for AI integration.",
    cta: "Start Assessment",
  },
  {
    title: "Growth Opportunity Finder",
    tagline: "Uncover new avenues for expansion and innovation.",
    cta: "Start Assessment",
  },
  {
    title: "Process Automation Audit",
    tagline: "Identify key processes ripe for AI-powered automation.",
    cta: "Start Assessment",
  },
];


export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="bg-background dark:bg-gray-900">
        <div className="container mx-auto grid max-w-screen-xl px-4 py-8 lg:grid-cols-12 lg:gap-8 lg:py-16 xl:gap-0">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="mb-4 max-w-2xl font-headline text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">
              Identify your next growth opportunity with AI.
            </h1>
            <p className="mb-6 max-w-2xl font-body text-lg text-muted-foreground lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              LOG_ON helps you assess, connect, and activate intelligent solutions instantly. Start a conversation with our AI to discover your path to growth.
            </p>
            <div className="relative mb-6 max-w-md">
              <Input
                type="text"
                placeholder="Describe your business challenge..."
                className="h-14 rounded-full border-2 pl-6 pr-24 text-lg"
              />
              <Button type="submit" variant="ghost" size="icon" className="absolute right-16 top-1/2 -translate-y-1/2 transform rounded-full h-12 w-12 hover:bg-muted" aria-label="Use microphone">
                <Mic className="h-6 w-6" />
              </Button>
               <Button type="submit" variant="ghost" size="icon" className="absolute right-2 top-1/2 -translate-y-1/2 transform rounded-full h-12 w-12 bg-primary text-primary-foreground hover:bg-primary/90" aria-label="Start conversation">
                <ArrowRight className="h-6 w-6" />
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">Or, <Link href="/assessment" className="underline hover:text-primary">take an assessment</Link> to get started.</p>
          </div>
          <div className="hidden lg:col-span-5 lg:mt-0 lg:flex">
            <Image
              src="https://placehold.co/600x600.png"
              alt="AI Assistant"
              width={600}
              height={600}
              className="rounded-full object-cover shadow-2xl"
              data-ai-hint="AI assistant abstract"
            />
          </div>
        </div>
      </section>

      <section id="features" className="py-16 md:py-24 bg-secondary/30 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold font-headline text-gray-900 dark:text-white">Our Capabilities</h2>
            <p className="font-body text-muted-foreground sm:text-xl dark:text-gray-400">A platform designed to translate your challenges into actionable, AI-driven solutions.</p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((capability, index) => (
              <Card key={index} className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                <CardHeader className="flex flex-row items-center gap-4 pb-4">
                  {capability.icon}
                  <CardTitle className="font-headline text-xl">{capability.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-body text-muted-foreground">{capability.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="assessments" className="py-16 md:py-24 bg-background dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold font-headline text-gray-900 dark:text-white">Find Your Best-Fit Solution</h2>
            <p className="font-body text-muted-foreground sm:text-xl dark:text-gray-400">Our assessments are the first step to personalized recommendations and strategies.</p>
          </div>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {assessments.map((assessment, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="h-full flex flex-col justify-between">
                      <CardHeader>
                        <CardTitle className="font-headline">{assessment.title}</CardTitle>
                        <CardDescription className="font-body">{assessment.tagline}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Link href="/assessment" className="w-full">
                           <Button className="w-full" variant="secondary">
                            {assessment.cta} <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>
      
      <section id="marketplace" className="py-16 md:py-24 bg-secondary/30 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold font-headline text-gray-900 dark:text-white">Featured AI Experts</h2>
            <p className="font-body text-muted-foreground sm:text-xl dark:text-gray-400">Connect with top-tier talent from our curated marketplace to bring your vision to life.</p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {agents.slice(0, 3).map((agent) => (
              <AgentCard key={agent.id} agent={agent} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/marketplace">
              <Button size="lg">
                Explore The Marketplace <Search className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
