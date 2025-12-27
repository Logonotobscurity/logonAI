
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const communityFeatures = [
    {
      title: "Become a Creator",
      description: "Build, publish, and monetize your AI agents & automations on the LOG_ON platform. Reach a global audience and contribute to the future of AI-driven business solutions.",
      buttonText: "Contact Us",
      href: "/contact"
    },
    {
      title: "Submit Your Solutions",
      description: "Got an idea? Share your no-code/low-code automations with our global audience.",
      buttonText: "Learn More",
      href: "#"
    },
    {
      title: "Monetize Your Creations",
      description: "Leverage our marketplace for fair revenue sharing and reach a growing user base.",
      buttonText: "View Terms",
      href: "#"
    }
  ];

export default function CommunityPage() {
    return (
        <div className="bg-background animate-in fade-in-50">
            <section className="py-16 md:py-24 bg-secondary/30">
                <div className="container mx-auto px-4">
                <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-16">
                    <h1 className="mb-4 text-4xl tracking-tight font-extrabold font-headline text-gray-900 dark:text-white">Innovate &amp; Partner with LOG_ON</h1>
                    <p className="font-body text-muted-foreground sm:text-xl dark:text-gray-400">Join our ecosystem of creators and build the future of autonomous business.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {communityFeatures.map((feature, index) => (
                         <Card key={feature.title} className={`transform transition-transform duration-300 hover:scale-105 hover:shadow-xl animate-in fade-in slide-in-from-bottom-5`} style={{animationDelay: `${index * 100}ms`}}>
                            <CardHeader>
                            <CardTitle className="font-headline text-xl">{feature.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                            <p className="font-body text-muted-foreground mb-4">{feature.description}</p>
                            <Button asChild>
                                <Link href={feature.href}>{feature.buttonText} <ArrowRight className="ml-2 h-4 w-4" /></Link>
                            </Button>
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
                        <Button size="lg" variant="secondary" asChild>
                           <Link href="/developer">Read The Docs</Link>
                        </Button>
                        <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-primary">
                            Get API Key
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    )
}
