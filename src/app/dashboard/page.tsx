"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, BarChart, Users, MessageCircle, Settings, LogOut, Search, Bell } from "lucide-react";
import Link from "next/link";
import { Logo } from "@/components/logo";

const quickActions = [
    { title: "Resume Assessment", href: "/assessment" },
    { title: "Browse Marketplace", href: "/marketplace" },
    { title: "New Conversation", href: "/conversation" },
];

const activityFeed = [
    { type: "Assessment", description: "You completed the 'AI Readiness' assessment.", time: "2 hours ago"},
    { type: "Marketplace", description: "You viewed the profile of agent 'Aria Sterling'.", time: "1 day ago"},
    { type: "Conversation", description: "New message from LOG_ON Assistant.", time: "3 days ago"},
]

const suggestedAgents = [
    { id: '2', name: 'Kenji Tanaka', specialty: 'Machine Learning', avatar: 'https://placehold.co/40x40.png' },
    { id: '3', name: 'Sofia Reyes', specialty: 'Data Visualization', avatar: 'https://placehold.co/40x40.png' }
]

export default function DashboardPage() {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen bg-secondary/30">
        <Sidebar>
            <SidebarHeader>
                <div className="flex items-center gap-2">
                    <Logo />
                    <Badge variant="secondary">Beta</Badge>
                </div>
            </SidebarHeader>
            <SidebarContent>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <Link href="/dashboard" className="w-full"><SidebarMenuButton isActive><Home />Home</SidebarMenuButton></Link>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                        <Link href="/assessment" className="w-full"><SidebarMenuButton><BarChart />Assessments</SidebarMenuButton></Link>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                        <Link href="/marketplace" className="w-full"><SidebarMenuButton><Users />Marketplace</SidebarMenuButton></Link>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                        <Link href="/conversation" className="w-full"><SidebarMenuButton><MessageCircle />Conversations</SidebarMenuButton></Link>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarContent>
            <SidebarFooter>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton><Settings />Settings</SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                        <SidebarMenuButton><LogOut />Logout</SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar>

        <SidebarInset className="flex-1">
            <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b bg-background px-4 md:px-8">
                <div className="flex items-center gap-4">
                    <SidebarTrigger className="md:hidden"/>
                    <h1 className="text-xl font-semibold font-headline">Dashboard</h1>
                </div>
                 <div className="flex items-center gap-4">
                    <Button variant="ghost" size="icon">
                        <Search className="h-5 w-5" />
                        <span className="sr-only">Search</span>
                    </Button>
                     <Button variant="ghost" size="icon">
                        <Bell className="h-5 w-5" />
                        <span className="sr-only">Notifications</span>
                    </Button>
                    <Avatar>
                        <AvatarImage src="https://placehold.co/40x40.png" alt="User Avatar"/>
                        <AvatarFallback>U</AvatarFallback>
                    </Avatar>
                </div>
            </header>
            <main className="p-4 md:p-8">
                <div className="mb-8">
                    <h2 className="text-3xl font-bold font-headline mb-1">Welcome back, User!</h2>
                    <p className="text-muted-foreground">Good to see you again. Ready to explore?</p>
                </div>

                <div className="grid gap-8 lg:grid-cols-3">
                    <div className="lg:col-span-2">
                        <section className="mb-8">
                            <h3 className="text-xl font-semibold font-headline mb-4">Quick Actions</h3>
                            <div className="grid gap-4 sm:grid-cols-3">
                                {quickActions.map(action => (
                                     <Link href={action.href} key={action.title}>
                                        <Card className="hover:bg-muted/50 transition-colors">
                                            <CardContent className="p-6">
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
                                        {activityFeed.map((activity, index) => (
                                            <li key={index} className="p-4 flex justify-between items-center">
                                                <div>
                                                    <Badge variant={activity.type === "Assessment" ? "default" : "secondary"} className="mb-1">{activity.type}</Badge>
                                                    <p>{activity.description}</p>
                                                </div>
                                                <p className="text-sm text-muted-foreground">{activity.time}</p>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                             </Card>
                        </section>
                    </div>
                    <div className="lg:col-span-1">
                        <section>
                            <h3 className="text-xl font-semibold font-headline mb-4">Suggested For You</h3>
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-lg">AI Agents</CardTitle>
                                    <CardDescription>Based on your recent activity.</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-4">
                                        {suggestedAgents.map(agent => (
                                            <li key={agent.id} className="flex items-center gap-4">
                                                <Avatar>
                                                    <AvatarImage src={agent.avatar} alt={agent.name}/>
                                                    <AvatarFallback>{agent.name.charAt(0)}</AvatarFallback>
                                                </Avatar>
                                                <div className="flex-1">
                                                    <p className="font-semibold">{agent.name}</p>
                                                    <p className="text-sm text-muted-foreground">{agent.specialty}</p>
                                                </div>
                                                <Link href={`/agent/${agent.id}`} passHref>
                                                  <Button variant="outline" size="sm">View</Button>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        </section>
                    </div>
                </div>
            </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
