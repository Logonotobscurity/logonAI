
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Code, Terminal, Layers, Share2 } from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: <Layers className="h-8 w-8 text-primary" />,
    title: "AI-Driven Matching API",
    description: "Leverage our core AI to find the best agents for any user query. Simple REST API, powerful results.",
  },
  {
    icon: <Terminal className="h-8 w-8 text-primary" />,
    title: "Headless BPMN Modeler",
    description: "Embed our BPMN 2.0 modeler into your own applications to design and visualize complex workflows.",
  },
  {
    icon: <Share2 className="h-8 w-8 text-primary" />,
    title: "Event-Driven Webhooks",
    description: "Subscribe to events across the platform, from assessment completions to agent interactions.",
  },
];

const codeSnippet = `
fetch('/api/chat', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ 
    userInput: "I need to improve my sales team's lead conversion rate." 
  })
})
.then(res => res.json())
.then(console.log);
`;

export default function DeveloperPage() {
  return (
    <div className="bg-background animate-in fade-in-50">
      {/* Hero Section */}
      <section className="relative bg-secondary/30">
        <div className="container mx-auto max-w-screen-xl px-4 py-20 lg:py-32 text-center">
          <h1 className="mb-4 font-headline text-4xl sm:text-5xl font-extrabold leading-tight tracking-tighter md:text-6xl">
            Build on LOG_ON
          </h1>
          <p className="mb-8 max-w-3xl mx-auto font-body text-lg text-muted-foreground md:text-xl">
            Integrate the power of AI-driven matching and workflow automation into your own applications.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="#getting-started">
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline">
              Read API Docs
            </Button>
          </div>
        </div>
      </section>

      {/* Getting Started Section */}
      <section id="getting-started" className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold font-headline mb-4">Get Started in Minutes</h2>
            <p className="text-lg text-muted-foreground">Follow these simple steps to make your first API call.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary font-bold text-2xl mb-4">1</div>
              <h3 className="font-headline text-xl font-semibold mb-2">Get Your API Key</h3>
              <p className="text-muted-foreground">Sign up for a free developer account to get your unique API key.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary font-bold text-2xl mb-4">2</div>
              <h3 className="font-headline text-xl font-semibold mb-2">Install SDK</h3>
              <p className="text-muted-foreground">Use our lightweight client SDK to simplify integration.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary font-bold text-2xl mb-4">3</div>
              <h3 className="font-headline text-xl font-semibold mb-2">Make Your First Call</h3>
              <p className="text-muted-foreground">Use the example below to find an AI agent for a sample query.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Code Snippet Section */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-4xl">
           <div className="text-center mb-12">
             <h2 className="text-3xl md:text-4xl font-extrabold font-headline mb-4 flex items-center justify-center gap-3"><Code /> API Example</h2>
             <p className="text-lg text-muted-foreground">A simple fetch request to our AI-driven matching endpoint.</p>
           </div>
           <div className="bg-gray-900 rounded-lg overflow-hidden">
                <div className="p-4 bg-gray-800 text-xs text-gray-400 font-mono">
                    POST /api/chat
                </div>
                <pre className="p-6 text-sm text-white overflow-x-auto"><code>{codeSnippet.trim()}</code></pre>
            </div>
        </div>
      </section>

      {/* Core Features Section */}
      <section id="features" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold font-headline mb-4">Core Features</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">A powerful, flexible, and easy-to-use API to build next-generation AI applications.</p>
          </div>
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto">
            {features.map((feature) => (
              <Card key={feature.title} className="text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                <CardHeader>
                    <div className="flex justify-center mb-4">
                        {feature.icon}
                    </div>
                  <CardTitle className="font-headline text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto max-w-4xl text-center">
              <h2 className="text-3xl font-extrabold font-headline mb-4">Ready to build?</h2>
              <p className="text-lg text-primary-foreground/80 mb-8">
                  Explore our comprehensive documentation or create an account to get your API key.
              </p>
              <div className="flex justify-center gap-4">
                  <Button size="lg" variant="secondary">
                      Read The Docs
                  </Button>
                  <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-primary">
                      Get API Key
                  </Button>
              </div>
          </div>
      </section>

    </div>
  );
}
