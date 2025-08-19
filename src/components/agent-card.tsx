
"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { MarketplaceProduct } from "@/lib/types";
import { MessageCircle, Star } from "lucide-react";
import Link from "next/link";
import React from "react";

interface AgentCardProps {
  agent: MarketplaceProduct;
}

export const AgentCard = React.memo(function AgentCard({ agent }: AgentCardProps) {
  return (
    <Card className="flex flex-col h-full transform transition-transform duration-300 hover:scale-105 hover:shadow-xl animate-in fade-in slide-in-from-bottom-5">
       <CardHeader className="p-6 flex-row gap-4 items-center">
        <Avatar className="w-16 h-16 border">
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
          {agent.tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="secondary">{tag}</Badge>
          ))}
        </div>
      </CardContent>
      <div className="p-6 pt-0 mt-auto grid grid-cols-2 gap-2">
        <Link href={`/agent/${agent.id}`} passHref className="w-full">
          <Button className="w-full" variant="outline">
            View Profile
          </Button>
        </Link>
        <Link href={`/conversation?q=Tell me more about ${agent.name}`} passHref className="w-full">
          <Button className="w-full" >
            <MessageCircle className="mr-2 h-4 w-4"/> Chat
          </Button>
        </Link>
      </div>
    </Card>
  );
});
