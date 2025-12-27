
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot } from "lucide-react";

export default function MyAgentPage() {
    return (
        <div className="bg-secondary/30 min-h-screen">
            <div className="container mx-auto px-4 py-12 md:py-16">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-extrabold font-headline mb-4">My Agent</h1>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                        This is where you can train, configure, and monitor your personal AI agent.
                    </p>
                </div>

                <Card className="max-w-4xl mx-auto">
                     <CardHeader>
                        <CardTitle>Agent Status</CardTitle>
                        <CardDescription>
                            Your agent is ready to assist you.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                         <div className="text-center py-16 border-2 border-dashed rounded-lg">
                            <div className="flex justify-center items-center h-16 w-16 rounded-full bg-muted mx-auto mb-4">
                                    <Bot className="h-8 w-8 text-muted-foreground" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Training Hub</h3>
                            <p className="text-muted-foreground mb-4">This area is under construction. Soon you'll be able to teach your agent new skills!</p>
                            <Button variant="secondary">Start Training (Coming Soon)</Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

    