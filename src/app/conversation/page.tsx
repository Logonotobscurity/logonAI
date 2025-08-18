"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import type { Message } from "@/lib/types";
import { Paperclip, Send, Bot, FileText, Briefcase } from "lucide-react";
import { useState } from "react";

const initialMessages: Message[] = [
    { id: '1', sender: 'ai', text: 'Hello! I am the LOG_ON assistant. How can I help you identify your next growth opportunity today?', timestamp: '10:30 AM' },
    { id: '2', sender: 'user', text: 'I need to improve my customer retention rate.', timestamp: '10:31 AM' },
    { id: '3', sender: 'ai', text: 'Excellent goal. To give you the best recommendations, could you tell me a bit about your industry and typical customer?', timestamp: '10:31 AM' },
];

export default function ConversationPage() {
    const [messages, setMessages] = useState<Message[]>(initialMessages);
    const [input, setInput] = useState('');

    const handleSend = () => {
        if (input.trim() === '') return;
        
        const newMessage: Message = {
            id: String(messages.length + 1),
            sender: 'user',
            text: input,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        setMessages([...messages, newMessage]);
        setInput('');

        // Mock AI response
        setTimeout(() => {
            const aiResponse: Message = {
                id: String(messages.length + 2),
                sender: 'ai',
                text: 'Thank you. I am analyzing your request and will provide some initial thoughts and potential agent matches shortly.',
                timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            };
            setMessages(prev => [...prev, aiResponse]);
        }, 1500)
    };

    return (
        <div className="container mx-auto py-8">
             <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-[calc(100vh-10rem)]">
                <div className="lg:col-span-2 flex flex-col h-full">
                    <Card className="flex-grow flex flex-col">
                        <CardHeader className="flex-row items-center gap-4 border-b">
                            <Avatar>
                                <AvatarFallback><Bot/></AvatarFallback>
                            </Avatar>
                            <div>
                                <CardTitle className="font-headline text-lg">AI Assistant</CardTitle>
                                <div className="flex items-center gap-1.5">
                                    <span className="h-2 w-2 rounded-full bg-green-500"></span>
                                    <span className="text-xs text-muted-foreground">Online</span>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="p-0 flex-grow">
                             <ScrollArea className="h-[calc(100vh-22rem)] p-6">
                                <div className="space-y-6">
                                    {messages.map(message => (
                                        <div key={message.id} className={cn("flex items-end gap-2", message.sender === 'user' ? 'justify-end' : 'justify-start')}>
                                            {message.sender === 'ai' && <Avatar className="h-8 w-8"><AvatarFallback><Bot/></AvatarFallback></Avatar>}
                                            <div className={cn("max-w-md rounded-2xl p-3", message.sender === 'user' ? 'bg-primary text-primary-foreground rounded-br-none' : 'bg-muted rounded-bl-none')}>
                                                <p>{message.text}</p>
                                                <p className={cn("text-xs mt-1", message.sender === 'user' ? 'text-primary-foreground/70' : 'text-muted-foreground')}>{message.timestamp}</p>
                                            </div>
                                             {message.sender === 'user' && <Avatar className="h-8 w-8"><AvatarFallback>U</AvatarFallback></Avatar>}
                                        </div>
                                    ))}
                                </div>
                            </ScrollArea>
                        </CardContent>
                        <div className="p-4 border-t">
                             <div className="relative">
                                <Input 
                                    placeholder="Type your message or speak..." 
                                    className="h-12 pr-24"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                                />
                                <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center">
                                    <Button variant="ghost" size="icon">
                                        <Paperclip className="h-5 w-5" />
                                        <span className="sr-only">Attach file</span>
                                    </Button>
                                    <Button size="icon" onClick={handleSend}>
                                        <Send className="h-5 w-5" />
                                        <span className="sr-only">Send</span>
                                    </Button>
                                </div>
                             </div>
                        </div>
                    </Card>
                </div>
                <div className="lg:col-span-1">
                    <Card className="h-full">
                        <CardHeader>
                            <CardTitle className="font-headline">Context Sidebar</CardTitle>
                            <CardDescription>Relevant assessments and marketplace links.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div>
                                <h3 className="font-semibold mb-2 flex items-center gap-2"><FileText className="h-5 w-5"/> Related Assessments</h3>
                                <ul className="space-y-2">
                                    <li className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                                        <span>AI Readiness</span>
                                        <Button variant="outline" size="sm">View Results</Button>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-semibold mb-2 flex items-center gap-2"><Briefcase className="h-5 w-5"/> Suggested Agents</h3>
                                <ul className="space-y-2">
                                     <li className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                                        <span>Aria Sterling</span>
                                        <Button variant="outline" size="sm">View Profile</Button>
                                    </li>
                                </ul>
                            </div>
                        </CardContent>
                    </Card>
                </div>
             </div>
        </div>
    );
}
