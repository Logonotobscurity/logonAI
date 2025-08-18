"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import type { Agent } from "@/lib/types";
import { MessageCircle, Star } from "lucide-react";
import Link from "next/link";

interface AgentCardProps {
  agent: Agent;
}

export function AgentCard({ agent }: AgentCardProps) {
  return (
    <Card className="flex flex-col h-full transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
      <CardHeader className="flex-row items-start gap-4">
        <Avatar className="h-16 w-16">
          <AvatarImage src={agent.avatar} alt={agent.name} />
          <AvatarFallback>{agent.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <CardTitle className="font-headline text-xl mb-1">{agent.name}</CardTitle>
          <p className="text-sm text-muted-foreground">{agent.specialty}</p>
          <div className="flex items-center gap-1 mt-2 text-yellow-500">
            <Star className="w-4 h-4 fill-current" />
            <span className="text-sm font-bold text-foreground">{agent.rating.toFixed(1)}</span>
            <span className="text-xs text-muted-foreground">({agent.reviewCount} reviews)</span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="font-body text-sm text-muted-foreground mb-4">{agent.description}</p>
        <div className="flex flex-wrap gap-2">
          {agent.tags.map((tag) => (
            <Badge key={tag} variant="secondary">{tag}</Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Link href={`/agent/${agent.id}`} passHref className="w-full">
          <Button className="w-full" >
            Start Conversation <MessageCircle className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
