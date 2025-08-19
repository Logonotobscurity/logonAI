
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { agents, reviews } from "@/lib/mock-data.tsx";
import { MessageCircle, Star, TrendingUp } from "lucide-react";
import { notFound } from "next/navigation";
import Image from 'next/image';

export default function AgentDetailPage({ params }: { params: { id: string } }) {
  const agent = agents.find((p) => p.id === params.id);

  if (!agent) {
    notFound();
  }

  const agentReviews = reviews.filter((r) => r.agentId === agent.id).slice(0,3);
  
  return (
    <div className="bg-background">
      <div className="container mx-auto max-w-5xl py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <Card className="sticky top-24 overflow-hidden">
             <div className="relative w-full h-48">
                <Image
                    src={agent.avatar}
                    alt={agent.name}
                    layout="fill"
                    objectFit="cover"
                    className="bg-muted"
                    data-ai-hint="futuristic technology"
                />
             </div>
              <CardHeader className="p-6 items-center text-center -mt-16">
                 <Avatar className="w-32 h-32 border-4 border-background bg-background z-10">
                    <AvatarImage src={agent.avatar} alt={agent.name} />
                    <AvatarFallback>{agent.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <CardTitle className="font-headline text-3xl">{agent.name}</CardTitle>
                <p className="text-lg font-semibold text-primary">{agent.specialty}</p>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <div className="flex justify-center items-center gap-1 mt-3 text-yellow-500">
                    <Star className="w-5 h-5 fill-current" />
                    <span className="text-lg font-bold text-foreground">{agent.rating.toFixed(1)}</span>
                    <span className="text-sm text-muted-foreground">({agent.reviewCount} reviews)</span>
                </div>
                <Separator className="my-6" />
                <div className="flex flex-wrap gap-2 justify-center">
                    {agent.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">{tag}</Badge>
                    ))}
                </div>
                <Button size="lg" className="w-full mt-6">
                    Start Conversation <MessageCircle className="ml-2 h-5 w-5" />
                </Button>
              </CardContent>
            </Card>
          </div>
          <div className="md:col-span-2">
            <Card>
                <CardHeader>
                    <CardTitle className="font-headline text-2xl">About {agent.name}</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-lg text-muted-foreground font-body">{agent.description}</p>
                </CardContent>
            </Card>

            <Card className="mt-8">
                <CardHeader>
                    <CardTitle className="font-headline text-2xl">Ratings & Reviews</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-6">
                        {agentReviews.length > 0 ? agentReviews.map(review => (
                            <div key={review.id} className="flex gap-4">
                                <Avatar>
                                    <AvatarFallback>{review.author.charAt(0)}</AvatarFallback>
                                </Avatar>
                                <div>
                                    <div className="flex items-center gap-2 mb-1">
                                        <p className="font-semibold">{review.author}</p>
                                        <div className="flex items-center text-yellow-500">
                                            {[...Array(review.rating)].map((_, i) => (
                                                <Star key={i} className="w-4 h-4 fill-current"/>
                                            ))}
                                            {[...Array(5 - review.rating)].map((_, i) => (
                                                <Star key={i} className="w-4 h-4 text-muted-foreground/50 fill-current"/>
                                            ))}
                                        </div>
                                    </div>
                                    <p className="text-muted-foreground font-body">{review.comment}</p>
                                </div>
                            </div>
                        )) : <p className="text-muted-foreground">No reviews yet for this agent.</p>}
                    </div>
                </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
