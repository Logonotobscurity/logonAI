
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ArrowRight, Bot, BarChart, Users, Cpu, Mic, FileText, Briefcase, Star, Search, Workflow, ShieldCheck, AreaChart, Lightbulb, Lock, Scaling, Rocket } from "lucide-react";
import Link from "next/link";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { AgentCard } from "@/components/agent-card";
import { agents } from "@/lib/mock-data";
import { useState } from "react";
import { useRouter } from "next/navigation";


const capabilities = [
  {
    icon: <Lightbulb className="h-8 w-8 text-primary" />,
    title: "Thinks Like Your Best Strategist",
    description: "Our AI-driven platform analyzes your business needs to identify high-impact growth opportunities.",
  },
  {
    icon: <Cpu className="h-8 w-8 text-primary" />,
    title: "Spots Opportunities, Creates Solutions",
    description: "From market gaps to internal inefficiencies, get tailored AI solutions and connect with experts.",
  },
  {
    icon: <Rocket className="h-8 w-8 text-primary" />,
    title: "Your Always-On Strategic Advisor",
    description: "Leverage continuous, data-driven insights to make smarter decisions and stay ahead of the curve.",
  },
  {
    icon: <Lock className="h-8 w-8 text-primary" />,
    title: "Enterprise-class automation",
    description: "Multi-agent orchestration, role isolation, audit logs.",
  },
  {
    icon: <Scaling className="h-8 w-8 text-primary" />,
    title: "Local pricing",
    description: "Regionalised pricing so teams of any size can start now.",
  },
  {
    icon: <Rocket className="h-8 w-8 text-primary" />,
    title: "From idea → deploy",
    description: "Voice to workflow: capture, validate, publish.",
  },
];

const assessments = [
  {
    sectionLabel: 'Assessment',
    title: 'AI Readiness Evaluator',
    subheading: 'DIAGNOSTICS',
    workflows: ['Department Analysis', 'Technology Stack Review', 'Implementation Roadmap'],
    type: 'ai-readiness',
    icon: <Cpu className="h-8 w-8 text-primary" />,
  },
  {
    sectionLabel: 'Assessment',
    title: 'Workflow Automation Audit',
    subheading: 'OPTIMIZATION',
    workflows: ['Bottleneck Identification', 'Workflow Streamlining', 'ROI Projection'],
    type: 'workflow-automation',
    icon: <Workflow className="h-8 w-8 text-primary" />,
  },
  {
    sectionLabel: 'Assessment',
    title: 'ROI Calculator',
    subheading: 'INSIGHTS',
    workflows: ['Investment Analysis', 'Savings Calculation', 'Payback Projection'],
    type: 'roi-calculator',
    icon: <AreaChart className="h-8 w-8 text-primary" />,
  },
  {
    sectionLabel: 'Assessment',
    title: 'Security & Compliance Checker',
    subheading: 'GOVERNANCE',
    workflows: ['Regulatory Compliance', 'Data Privacy Audit', 'Security Assessment'],
    type: 'security-compliance',
    icon: <ShieldCheck className="h-8 w-8 text-primary" />,
  },
];


export default function Home() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleStartConversation = () => {
    const params = new URLSearchParams();
    if(query) {
      params.set('q', query);
    }
    router.push(`/conversation?${params.toString()}`);
  }

  return (
    <div className="flex flex-col">
      <section className="relative bg-background dark:bg-gray-900 w-full">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent"></div>
        <div className="container mx-auto max-w-screen-xl px-4 py-20 lg:py-32 text-center">
            <h1 className="mb-4 font-headline text-5xl font-extrabold leading-tight tracking-tighter md:text-6xl xl:text-7xl">
              Identify Your Next Growth Opportunity with AI.
            </h1>
            <p className="mb-8 max-w-3xl mx-auto font-body text-lg text-muted-foreground md:text-xl lg:text-2xl">
              LOG_ON helps you assess, connect, and activate intelligent solutions instantly. Start a conversation with our AI to discover your path to growth.
            </p>
            <div className="relative mb-6 max-w-2xl mx-auto">
              <Input
                type="text"
                placeholder="Describe your business challenge..."
                className="h-16 rounded-full border-2 pl-8 pr-32 text-lg shadow-lg"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleStartConversation()}
              />
              <div className="absolute right-4 top-1/2 -translate-y-1/2 transform flex items-center gap-2">
                <Button onClick={handleStartConversation} type="submit" variant="ghost" size="icon" className="rounded-full h-12 w-12 hover:bg-muted" aria-label="Use microphone">
                  <Mic className="h-6 w-6" />
                </Button>
                 <Button onClick={handleStartConversation} type="submit" size="icon" className="rounded-full h-12 w-12 bg-primary text-primary-foreground hover:bg-primary/90" aria-label="Start conversation">
                  <ArrowRight className="h-6 w-6" />
                </Button>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">Or, <Link href="/assessment" className="underline hover:text-primary">take an assessment</Link> to get started.</p>
        </div>
      </section>

      <section id="features" className="py-16 md:py-24 bg-secondary/30 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold font-headline text-gray-900 dark:text-white">Build Smarter, Sell Faster, Support Instantly</h2>
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
           <div className="text-center mt-12">
            <Link href="/assessment">
              <Button size="lg">
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
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
            }}
            className="w-full"
          >
            <CarouselContent>
              {assessments.map((assessment, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1 h-full">
                    <Card className="h-full flex flex-col justify-between text-left">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                            <div>
                                <p className="text-sm font-semibold text-primary mb-1">{assessment.subheading}</p>
                                <CardTitle className="font-headline text-2xl">{assessment.title}</CardTitle>
                            </div>
                            {assessment.icon}
                        </div>
                      </CardHeader>
                      <CardContent className="flex-grow">
                        <ul className="space-y-2 mt-4">
                            {assessment.workflows.map(flow => (
                                <li key={flow} className="flex items-center gap-2 text-muted-foreground">
                                    <ArrowRight className="h-4 w-4 text-primary/50" />
                                    <span>{flow}</span>
                                </li>
                            ))}
                        </ul>
                      </CardContent>
                      <CardFooter>
                        <Link href={`/assessment?type=${assessment.type}`} className="w-full">
                           <Button className="w-full" variant="secondary">
                            Take Assessment <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </Link>
                      </CardFooter>
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
