"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import type { Agent } from "@/lib/types";
import { MessageCircle, Star, TrendingUp } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface AgentCardProps {
  agent: Agent;
}

export function AgentCard({ agent }: AgentCardProps) {
  return (
    <Card className="flex flex-col h-full transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
       <CardHeader className="p-6 flex-row gap-4 items-center">
        <Avatar className="w-16 h-16 border">
            <AvatarImage src={agent.avatar} alt={agent.name} />
            <AvatarFallback>{agent.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div>
            <CardTitle className="font-headline text-xl mb-1">{agent.name}</CardTitle>
            <p className="text-sm font-semibold text-primary">{agent.specialty}</p>
        </div>
      </CardHeader>
      <CardContent className="flex-grow p-6 pt-0">
        <p className="font-body text-sm text-muted-foreground mb-4 h-20 overflow-hidden">{agent.description}</p>
        <div className="flex items-center gap-1 text-yellow-500 mb-4">
            <Star className="w-4 h-4 fill-current" />
            <span className="font-bold text-foreground">{agent.rating.toFixed(1)}</span>
            <span className="text-sm text-muted-foreground">({agent.reviewCount} reviews)</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {agent.tags.map((tag) => (
            <Badge key={tag} variant="secondary">{tag}</Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Link href={`/agent/${agent.id}`} passHref className="w-full">
          <Button className="w-full" >
            View Profile
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
