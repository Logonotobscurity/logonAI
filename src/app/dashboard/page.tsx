
"use client";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Bot, Link as LinkIcon, PlusCircle, Workflow as WorkflowIcon, ArrowRight } from "lucide-react";
import Link from "next/link";
import { quickActions, activityFeed, agents } from "@/lib/mock-data";
import { AgentCard } from "@/components/agent-card";
import { cn } from "@/lib/utils";
import { useAuth } from "@/hooks/use-auth";
import { useUser } from "@/firebase";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useWorkflowContext } from "@/context/workflow-context";
import { Badge } from "@/components/ui/badge";

const activityIconClassMap = {
    Assessment: {
        bg: "bg-blue-500/10",
        text: "text-blue-500",
    },
    Marketplace: {
        bg: "bg-purple-500/10",
        text: "text-purple-500",
    },
    Conversation: {
        bg: "bg-green-500/10",
        text: "text-green-500",
    }
};

function DashboardOverview() {
    const featuredAgents = agents.slice(0, 2);

    return (
        <div className="grid gap-8 grid-cols-1 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-8">
                <section>
                    <h3 className="text-xl font-semibold font-headline mb-4">Quick Actions</h3>
                    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                        {quickActions.map(action => (
                             <Link href={action.href} key={action.title} className="block">
                                <Card className="hover:bg-muted/50 transition-colors h-full">
                                    <CardContent className="p-4 md:p-6 flex flex-col items-center text-center">
                                        <div className="p-3 bg-primary/10 rounded-full mb-2">
                                            <action.icon className="h-6 w-6 text-primary"/>
                                        </div>
                                        <p className="font-semibold">{action.title}</p>
                                    </CardContent>
                                </Card>
                             </Link>
                        ))}
                    </div>
                </section>

                <section>
                     <h3 className="text-xl font-semibold font-headline mb-4">Activity Feed</h3>
                     <Card>
                        <CardContent className="p-0">
                            <ul className="divide-y">
                                {activityFeed.map((activity, index) => {
                                    const classNames = activityIconClassMap[activity.type as keyof typeof activityIconClassMap] || activityIconClassMap.Conversation;
                                    return (
                                        <li key={index} className="p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                                            <div className="flex items-center gap-3">
                                              <div className={cn("p-2 rounded-full", classNames.bg)}>
                                                <activity.icon className={cn("h-5 w-5", classNames.text)}/>
                                              </div>
                                              <div>
                                                <p>{activity.description}</p>
                                                <p className="text-sm text-muted-foreground">{activity.time}</p>
                                              </div>
                                            </div>
                                            <Button variant="ghost" size="sm"><LinkIcon className="h-4 w-4 mr-2"/>View</Button>
                                        </li>
                                    );
                                })}
                            </ul>
                        </CardContent>
                     </Card>
                </section>
            </div>
            <div className="lg:col-span-1 space-y-8">
                <section>
                    <Card className="bg-background">
                        <CardHeader>
                            <CardTitle className="text-xl font-headline">Suggested For You</CardTitle>
                            <CardDescription>Based on your recent activity.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          {featuredAgents.map((agent) => (
                            <AgentCard key={agent.id} agent={agent} />
                          ))}
                        </CardContent>
                    </Card>
                </section>
            </div>
        </div>
    );
}

function MyWorkflowsTab() {
    const { userWorkflows } = useWorkflowContext();
    return (
        <Card>
            <CardHeader>
                <CardTitle>My Workflows</CardTitle>
                <CardDescription>
                   {userWorkflows.length > 0
                        ? "These are the workflows you have added from the library."
                        : "You haven't added any workflows yet."
                    }
                </CardDescription>
            </CardHeader>
            <CardContent>
                 {userWorkflows.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {userWorkflows.map((workflow) => (
                          <Card key={workflow.id} className="flex flex-col">
                            <CardHeader>
                              <CardTitle className="font-headline text-lg">{workflow.name}</CardTitle>
                              <Badge variant="secondary" className="w-fit capitalize">{workflow.category}</Badge>
                            </CardHeader>
                            <CardContent className="flex-grow">
                              <p className="text-muted-foreground text-sm">{workflow.description}</p>
                            </CardContent>
                            <CardFooter>
                                <Button variant="default" className="w-full">
                                    Run Workflow <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </CardFooter>
                          </Card>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-16 border-2 border-dashed rounded-lg">
                         <div className="flex justify-center items-center h-16 w-16 rounded-full bg-muted mx-auto mb-4">
                             <WorkflowIcon className="h-8 w-8 text-muted-foreground" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">No Workflows Found</h3>
                        <p className="text-muted-foreground mb-4">Get started by exploring the Workflow Library.</p>
                        <Button variant="default" asChild>
                            <Link href="/workflows">Explore Workflows</Link>
                        </Button>
                    </div>
                )}
            </CardContent>
        </Card>
    );
}

function MyAgentTab() {
     return (
        <Card>
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
    );
}

function IntegrationsTab() {
    const connectedAccounts: any[] = [];
     return (
        <Card>
            <CardHeader className="flex-row items-center justify-between">
                <div>
                    <CardTitle>Connected Accounts</CardTitle>
                    <CardDescription>
                        These are the third-party accounts you've connected to LOG_ON.
                    </CardDescription>
                </div>
                 <Button>
                    <PlusCircle className="mr-2 h-4 w-4" /> Add Connection
                </Button>
            </CardHeader>
            <CardContent>
                {connectedAccounts.length > 0 ? (
                    <ul className="divide-y">
                        {/* Map through connected accounts here */}
                    </ul>
                ) : (
                    <div className="text-center py-16 border-2 border-dashed rounded-lg">
                        <div className="flex justify-center items-center h-16 w-16 rounded-full bg-muted mx-auto mb-4">
                             <LinkIcon className="h-8 w-8 text-muted-foreground" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">No connected accounts found</h3>
                        <p className="text-muted-foreground mb-4">Connect to apps like Slack, Google Drive, and more.</p>
                        <Button variant="outline">Connect an Account</Button>
                    </div>
                )}
            </CardContent>
        </Card>
    )
}

export default function DashboardPage() {
  useAuth('/login');
  const { user } = useUser();
  
  return (
      <div className="flex min-h-screen flex-col bg-secondary/30">
            <main className="p-4 md:p-8 flex-1">
                <div className="mb-8">
                    <h2 className="text-3xl font-bold font-headline mb-1">Welcome back, {user?.displayName || 'User'}!</h2>
                    <p className="text-muted-foreground">Good to see you again. Ready to explore?</p>
                </div>

                <Tabs defaultValue="overview" className="w-full">
                    <TabsList className="mb-8 grid w-full grid-cols-2 sm:grid-cols-4 h-auto">
                        <TabsTrigger value="overview">Overview</TabsTrigger>
                        <TabsTrigger value="workflows">My Workflows</TabsTrigger>
                        <TabsTrigger value="agent">My Agent</TabsTrigger>
                        <TabsTrigger value="integrations">Integrations</TabsTrigger>
                    </TabsList>
                    <TabsContent value="overview">
                        <DashboardOverview />
                    </TabsContent>
                    <TabsContent value="workflows">
                        <MyWorkflowsTab />
                    </TabsContent>
                    <TabsContent value="agent">
                        <MyAgentTab />
                    </TabsContent>
                    <TabsContent value="integrations">
                        <IntegrationsTab />
                    </TabsContent>
                </Tabs>
            </main>
      </div>
  );
}
