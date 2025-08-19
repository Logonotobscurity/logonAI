
"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import type { Message } from "@/lib/types";
import { Bot, FileText, Briefcase, Mic, Sparkles, Send, Upload } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useSearchParams } from 'next/navigation';
import { useVoice } from "@/hooks/use-voice";
import { aiDrivenMatching } from "@/ai/flows/ai-driven-matching";
import Link from "next/link";
import { agents } from "@/lib/mock-data.tsx";


export default function ConversationPage() {
    const searchParams = useSearchParams();
    const initialQuery = searchParams.get('q');
    
    const { transcript, isListening, isSpeaking, voiceState, startListening, stopListening, speak } = useVoice();
    
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState('');
    const [suggestedAgents, setSuggestedAgents] = useState<any[]>([]);
    const audioRef = useRef<HTMLAudioElement>(null);

    useEffect(() => {
        setMessages([
             { id: '1', sender: 'ai', text: 'Hello! I am the LOG_ON assistant. How can I help you identify your next growth opportunity today?', timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) },
        ]);
        
        if (initialQuery) {
          handleSend(initialQuery);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [initialQuery]);
    
    useEffect(() => {
        if (transcript && !isListening) {
            handleSend(transcript);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [transcript, isListening]);

    const handleSend = async (text: string) => {
        if (text.trim() === '') return;
        
        setInput('');
        const newUserMessage: Message = {
            id: String(messages.length + 1),
            sender: 'user',
            text: text,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        setMessages(prev => [...prev, newUserMessage]);
        
        const aiThinkingMessage: Message = {
            id: String(messages.length + 2),
            sender: 'ai',
            text: 'Analyzing...',
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            isThinking: true,
        };
        setMessages(prev => [...prev, aiThinkingMessage]);

        try {
            const { agentSuggestions, reasoning } = await aiDrivenMatching({ userInput: text });

            const aiResponseMessage: Message = {
                id: String(messages.length + 2),
                sender: 'ai',
                text: reasoning,
                timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            };
            
            setMessages(prev => prev.map(m => m.id === aiResponseMessage.id ? aiResponseMessage : m));

            speak(reasoning);
            
            if (agentSuggestions.length > 0) {
              const suggestedProducts = agents.filter(p => agentSuggestions.includes(p.id));
              setSuggestedAgents(suggestedProducts);
            }

        } catch (error) {
            console.error(error);
            const errorResponse: Message = {
                 id: String(messages.length + 2),
                sender: 'ai',
                text: 'Sorry, I encountered an error. Please try again.',
                timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            };
            setMessages(prev => prev.map(m => m.id === errorResponse.id ? errorResponse : m));
        }
    };
    
    const getMicIcon = () => {
        switch(voiceState) {
            case 'listening':
                return <Mic className="h-6 w-6 text-red-500" />;
            case 'speaking':
                 return <Sparkles className="h-6 w-6 text-primary animate-pulse" />;
            case 'thinking':
                return <Bot className="h-6 w-6 animate-spin" />;
            default:
                return <Mic className="h-6 w-6" />;
        }
    }

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
                             <ScrollArea className="h-[calc(100vh-25rem)] p-6">
                                <div className="space-y-6">
                                    {messages.map(message => (
                                        <div key={message.id} className={cn("flex items-end gap-2", message.sender === 'user' ? 'justify-end' : 'justify-start')}>
                                            {message.sender === 'ai' && <Avatar className="h-8 w-8"><AvatarFallback><Bot/></AvatarFallback></Avatar>}
                                            <div className={cn("max-w-md rounded-2xl p-3", message.sender === 'user' ? 'bg-primary text-primary-foreground rounded-br-none' : 'bg-muted rounded-bl-none')}>
                                                {message.isThinking ? (
                                                     <div className="flex items-center gap-2">
                                                        <div className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                                                        <div className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                                                        <div className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce"></div>
                                                    </div>
                                                ) : <p>{message.text}</p>
                                                }
                                                {!message.isThinking && <p className={cn("text-xs mt-1", message.sender === 'user' ? 'text-primary-foreground/70' : 'text-muted-foreground')}>{message.timestamp}</p>}
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
                                    placeholder="Type your message or upload a file..." 
                                    className="h-12 pr-24"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyDown={(e) => e.key === 'Enter' && handleSend(input)}
                                />
                                <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-2">
                                     <Button
                                        size="icon"
                                        variant="ghost"
                                        className="h-10 w-10 voice-widget"
                                        onClick={isListening ? stopListening : startListening}
                                        disabled={isSpeaking || voiceState === 'thinking'}
                                        data-state={voiceState}
                                    >
                                        {getMicIcon()}
                                    </Button>
                                    <Button size="icon" className="h-10 w-10" onClick={() => handleSend(input)} disabled={!input}>
                                        <Send className="h-5 w-5"/>
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
                            <CardDescription>Relevant assessments and suggested agents.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div>
                                <h3 className="font-semibold mb-2 flex items-center gap-2"><FileText className="h-5 w-5"/> Related Assessments</h3>
                                <ul className="space-y-2">
                                    <li className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                                        <span>AI Readiness</span>
                                         <Link href="/assessment">
                                            <Button variant="outline" size="sm">Take Now</Button>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-semibold mb-2 flex items-center gap-2"><Briefcase className="h-5 w-5"/> Suggested Agents</h3>
                                {suggestedAgents.length > 0 ? (
                                <ul className="space-y-2">
                                     {suggestedAgents.map((agent) => (
                                     <li key={agent.id} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                                        <span className="truncate">{agent.name}</span>
                                        <Link href={`/agent/${agent.id}`}>
                                            <Button variant="outline" size="sm">View</Button>
                                        </Link>
                                    </li>
                                     ))}
                                </ul>
                                ) : (
                                    <p className="text-sm text-muted-foreground">No agent suggestions yet. Describe your needs to get started.</p>
                                )}
                            </div>
                        </CardContent>
                    </Card>
                </div>
             </div>
        </div>
    );
}
