
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
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Home, BarChart, Users, MessageCircle, Settings, LogOut, Search, Bell, Link as LinkIcon, Workflow, Briefcase, Mic, ScreenShare, Bot } from "lucide-react";
import Link from "next/link";
import { Logo } from "@/components/logo";
import { quickActions, activityFeed, agents, industryCategories } from "@/lib/mock-data";
import { AgentCard } from "@/components/agent-card";
import { cn } from "@/lib/utils";
import { useAuth } from "@/hooks/use-auth";
import { useUser } from "@/firebase";
import { useEffect, useState } from "react";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useRouter } from "next/navigation";


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

export default function DashboardPage() {
  useAuth();
  const router = useRouter();
  const { user } = useUser();
  const featuredAgents = agents.slice(0,2);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
        if (e.ctrlKey && e.key === ',') {
            e.preventDefault();
            setIsSettingsOpen(true);
        }
        if (e.ctrlKey && e.key === 'm') {
            e.preventDefault();
            router.push('/conversation');
        }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
        window.removeEventListener('keydown', handleKeyDown);
    };
  }, [router]);

  return (
    <SidebarProvider>
      <div className="flex min-h-screen bg-secondary/30">
        <Sidebar className="z-30 w-full md:w-72 lg:w-80">
            <SidebarHeader>
                <div className="flex items-center gap-2">
                    <Logo />
                    <Badge variant='secondary'>Beta</Badge>
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
                        <Link href="/modeler" className="w-full"><SidebarMenuButton><Workflow />Modeler</SidebarMenuButton></Link>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                        <Link href="/vendors" className="w-full"><SidebarMenuButton><Briefcase />Vendors</SidebarMenuButton></Link>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                        <Link href="/conversation" className="w-full"><SidebarMenuButton><MessageCircle />Conversations</SidebarMenuButton></Link>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarContent>
            <SidebarFooter>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <Dialog open={isSettingsOpen} onOpenChange={setIsSettingsOpen}>
                            <DialogTrigger asChild>
                                <SidebarMenuButton><Settings />Settings</SidebarMenuButton>
                            </DialogTrigger>
                            <DialogContent>
                                <DialogHeader>
                                    <DialogTitle>Advanced Settings</DialogTitle>
                                    <DialogDescription>
                                        Customize your agent and interaction settings. Press Ctrl + , to open this menu.
                                    </DialogDescription>
                                </DialogHeader>
                                <div className="space-y-4 py-4">
                                    <div className="space-y-2">
                                        <Label>AI Model</Label>
                                        <Select defaultValue="gemini">
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select AI Model" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="gemini">Gemini 1.5 Pro (Default)</SelectItem>
                                                <SelectItem value="gpt4">GPT-4 Turbo</SelectItem>
                                                <SelectItem value="claude">Claude 3</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className="space-y-2">
                                        <Label>Agent Template (Industry)</Label>
                                         <Select defaultValue="default">
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select Industry Template" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {industryCategories.map((cat) => (
                                                  <SelectItem key={cat.value} value={cat.value} disabled={cat.value === 'all'}>
                                                    {cat.label}
                                                  </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className="space-y-2">
                                        <h4 className="font-medium">Keyboard Shortcuts</h4>
                                        <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-1">
                                            <li><kbd className="px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg">Ctrl</kbd> + <kbd className="px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg">M</kbd> - Toggle Microphone</li>
                                            <li><kbd className="px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg">Ctrl</kbd> + <kbd className="px2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg">S</kbd> - Analyze Screen</li>
                                            <li><kbd className="px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg">Ctrl</kbd> + <kbd className="px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg">,</kbd> - Open Settings</li>
                                        </ul>
                                    </div>
                                </div>
                            </DialogContent>
                        </Dialog>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                        <Link href="/" className="w-full"><SidebarMenuButton><LogOut />Logout</SidebarMenuButton></Link>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar>

        <SidebarInset className="flex-1">
            <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b bg-background px-4 md:px-8">
                <div className="flex items-center gap-4">
                    <SidebarTrigger className="lg:hidden"/>
                    <h1 className="text-xl font-semibold font-headline">Dashboard</h1>
                </div>
                 <div className="flex items-center gap-4">
                    <Button variant="ghost" size="icon" aria-label="Search">
                        <Search className="h-5 w-5" />
                        <span className="sr-only">Search</span>
                    </Button>
                     <Button variant="ghost" size="icon" aria-label="Notifications">
                        <Bell className="h-5 w-5" />
                        <span className="sr-only">Notifications</span>
                    </Button>
                    <Avatar>
                        <AvatarImage src={user?.photoURL || "https://placehold.co/40x40.png"} alt="User Avatar"/>
                        <AvatarFallback>{user?.displayName?.charAt(0) || 'U'}</AvatarFallback>
                    </Avatar>
                </div>
            </header>
            <main className="p-4 md:p-8">
                <div className="mb-8">
                    <h2 className="text-3xl font-bold font-headline mb-1">Welcome back, {user?.displayName || 'User'}!</h2>
                    <p className="text-muted-foreground">Good to see you again. Ready to explore?</p>
                </div>

                <div className="grid gap-8 lg:grid-cols-3">
                    <div className="lg:col-span-2 space-y-8">
                        <section>
                            <h3 className="text-xl font-semibold font-headline mb-4">Quick Actions</h3>
                            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                                {quickActions.map(action => (
                                     <Link href={action.href} key={action.title} className="block">
                                        <Card className="hover:bg-muted/50 transition-colors h-full">
                                            <CardContent className="p-6 flex flex-col items-center text-center">
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
                    <div className="lg:col-span-1">
                        <section>
                            <Card className="bg-background">
                                <CardHeader>
                                    <CardTitle className="text-xl font-headline">Suggested For You</CardTitle>
                                    <CardDescription>Based on your recent activity.</CardDescription>
                                </Header>
                                <CardContent className="space-y-4">
                                  {featuredAgents.map((agent) => (
                                    <AgentCard key={agent.id} agent={agent} />
                                  ))}
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
