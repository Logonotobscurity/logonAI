
"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import type { Message } from "@/lib/types";
import { Bot, FileText, Briefcase } from "lucide-react";
import { useState, useEffect, useCallback, useRef } from "react";
import { useSearchParams } from 'next/navigation';
import Link from "next/link";
import { agents } from "@/lib/mock-data";
import { VoiceWidget } from "@/components/voice-widget";
import type { AiDrivenMatchingOutput } from "@/ai/schemas";

export default function ConversationPage() {
    const searchParams = useSearchParams();
    const initialQuery = searchParams.get('q');
    
    const [messages, setMessages] = useState<Message[]>([]);
    const [suggestedAgents, setSuggestedAgents] = useState<any[]>([]);
    const [isSpeaking, setIsSpeaking] = useState(false);
    const [isListening, setIsListening] = useState(false);
    
    const thinkingMessageIdRef = useRef<string | null>(null);
    const scrollAreaRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        if (scrollAreaRef.current) {
            scrollAreaRef.current.scrollTo({
                top: scrollAreaRef.current.scrollHeight,
                behavior: 'smooth'
            });
        }
    };

    const handleSend = useCallback(async (text: string) => {
        if (text.trim() === '') return;
        
        const newUserMessage: Message = {
            id: `${Date.now()}-user`,
            sender: 'user',
            text: text,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        
        const aiThinkingMessageId = `${Date.now()}-ai-thinking`;
        thinkingMessageIdRef.current = aiThinkingMessageId;

        const aiThinkingMessage: Message = {
            id: aiThinkingMessageId,
            sender: 'ai',
            text: 'Analyzing...',
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            isThinking: true,
        };

        setMessages(prev => [...prev, newUserMessage, aiThinkingMessage]);

        try {
            const response = await fetch('/api/chat', {
              method: 'POST',
              body: JSON.stringify({ userInput: text }),
              headers: { 'Content-Type': 'application/json' }
            });

            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }

            const { reasoning, agentSuggestions }: AiDrivenMatchingOutput = await response.json();
            
            const aiResponseMessage: Message = {
                id: aiThinkingMessageId,
                sender: 'ai',
                text: reasoning,
                timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            };
            
            setMessages(prev => prev.map(m => m.id === aiThinkingMessageId ? aiResponseMessage : m));

            if (typeof window !== 'undefined' && window.speechSynthesis) {
                const utterance = new SpeechSynthesisUtterance(reasoning);
                utterance.onstart = () => setIsSpeaking(true);
                utterance.onend = () => setIsSpeaking(false);
                window.speechSynthesis.speak(utterance);
            }

            if (agentSuggestions && agentSuggestions.length > 0) {
              const suggestedProducts = agents.filter(p => agentSuggestions.includes(p.id));
              setSuggestedAgents(suggestedProducts);
            } else {
              setSuggestedAgents([]);
            }

        } catch (error) {
            console.error(error);
            const errorText = 'Sorry, I encountered an error. Please try again.';
            const errorResponse: Message = {
                id: thinkingMessageIdRef.current || `${Date.now()}-error`,
                sender: 'ai',
                text: errorText,
                timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            };
            setMessages(prev => prev.map(m => m.id === errorResponse.id ? errorResponse : m));
            
            if (typeof window !== 'undefined' && window.speechSynthesis) {
                const utterance = new SpeechSynthesisUtterance(errorText);
                utterance.onstart = () => setIsSpeaking(true);
                utterance.onend = () => setIsSpeaking(false);
                window.speechSynthesis.speak(utterance);
            }
        }
    }, []);

    useEffect(() => {
        const welcomeMessage = "Hello! I am the LOG_ON assistant. How can I help you identify your next growth opportunity today?";
        setMessages([
             { id: '1', sender: 'ai', text: welcomeMessage, timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) },
        ]);
        
        if (initialQuery) {
          handleSend(initialQuery);
        } else {
            if (typeof window !== 'undefined' && window.speechSynthesis) {
                const utterance = new SpeechSynthesisUtterance(welcomeMessage);
                utterance.onstart = () => setIsSpeaking(true);
                utterance.onend = () => setIsSpeaking(false);
                window.speechSynthesis.speak(utterance);
            }
        }

        return () => {
            if (typeof window !== 'undefined' && window.speechSynthesis) {
                window.speechSynthesis.cancel();
            }
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [initialQuery]);

    useEffect(() => {
        scrollToBottom();
    }, [messages]);
    
    const voiceState = isListening ? 'listening' : isSpeaking ? 'speaking' : 'idle';

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
                             <ScrollArea className="h-[calc(100vh-25rem)] p-6" ref={scrollAreaRef}>
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
                        <div className="p-4 border-t flex justify-center items-center h-32">
                           <VoiceWidget
                             onListen={setIsListening}
                             onResult={handleSend}
                             state={voiceState}
                           />
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
