
"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import type { Message } from "@/lib/types";
import { Bot, FileText, Briefcase, User, ScreenShare, Wifi, WifiOff, Send, Mic, Keyboard, ChevronUp, ChevronDown } from "lucide-react";
import { useState, useEffect, useCallback, useRef } from "react";
import { useSearchParams } from 'next/navigation';
import Link from "next/link";
import { agents } from "@/lib/mock-data";
import { VoiceWidget } from "@/components/voice-widget";
import type { AiDrivenMatchingOutput } from "@/ai/schemas";
import { useToast } from "@/hooks/use-toast";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { CameraFeed } from "@/components/camera-feed";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useIsMobile } from "@/hooks/use-mobile";
import { BottomSheet } from 'react-spring-bottom-sheet';
import 'react-spring-bottom-sheet/dist/style.css';


export default function ConversationPage() {
    const searchParams = useSearchParams();
    const initialQuery = searchParams.get('q');
    
    const [messages, setMessages] = useState<Message[]>([]);
    const [suggestedAgents, setSuggestedAgents] = useState<any[]>([]);
    const [isSpeaking, setIsSpeaking] = useState(false);
    const [isListening, setIsListening] = useState(false);
    const [isOnline, setIsOnline] = useState(true);
    const [isAnalyzingScreen, setIsAnalyzingScreen] = useState(false);
    const [textInput, setTextInput] = useState("");
    const [inputMode, setInputMode] = useState<'voice' | 'text'>('voice');
    const [showCamera, setShowCamera] = useState(false);
    const isMobile = useIsMobile();
    const [isPanelOpen, setIsPanelOpen] = useState(false);
    
    const { toast } = useToast();
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
        setTextInput("");

        try {
            const response = await fetch('/api/chat', {
              method: 'POST',
              body: JSON.stringify({ userInput: text }),
              headers: { 'Content-Type': 'application/json' }
            });

            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }

            const result: AiDrivenMatchingOutput = await response.json();
            const { reasoning, agentSuggestions } = result;
            
            const aiResponseMessage: Message = {
                id: aiThinkingMessageId,
                sender: 'ai',
                text: reasoning,
                timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            };
            
            setMessages(prev => prev.map(m => m.id === aiThinkingMessageId ? aiResponseMessage : m));
            thinkingMessageIdRef.current = null;


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
            const errorId = thinkingMessageIdRef.current || `${Date.now()}-error`;
            const errorResponse: Message = {
                id: errorId,
                sender: 'ai',
                text: errorText,
                timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            };
            setMessages(prev => prev.map(m => m.id === errorId ? errorResponse : m));
            thinkingMessageIdRef.current = null;
            
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
        const handleOnline = () => setIsOnline(true);
        const handleOffline = () => setIsOnline(false);

        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);

        return () => {
            window.removeEventListener('online', handleOnline);
            window.removeEventListener('offline', handleOffline);
        };
    }, []);

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleScreenAnalysis = () => {
        setIsAnalyzingScreen(true);
        setShowCamera(true);
        toast({
            title: "Screen Analysis Started",
            description: "Please point your camera at the screen content to analyze.",
        });
    }

    const handleCameraClose = () => {
        setShowCamera(false);
        setIsAnalyzingScreen(false);

        const analysisMessageId = `${Date.now()}-analysis`;
        const analysisMessage: Message = {
            id: analysisMessageId,
            sender: 'ai',
            isThinking: true,
            text: 'Analyzing screen content...',
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        setMessages(prev => [...prev, analysisMessage]);

        setTimeout(() => {
            const resultText = "Based on the content of your screen, I suggest we look into optimizing your customer support workflow. Would you like to explore agents that specialize in that area?";
            const resultMessage: Message = {
                id: analysisMessageId,
                sender: 'ai',
                text: resultText,
                timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            };
            setMessages(prev => prev.map(m => m.id === analysisMessageId ? resultMessage : m));
            if (typeof window !== 'undefined' && window.speechSynthesis) {
                const utterance = new SpeechSynthesisUtterance(resultText);
                utterance.onstart = () => setIsSpeaking(true);
                utterance.onend = () => setIsSpeaking(false);
                window.speechSynthesis.speak(utterance);
            }
        }, 1500);
    }
    
    const voiceState = isListening ? 'listening' : isSpeaking ? 'speaking' : 'idle';

    const renderInputControls = () => (
      <div className="flex flex-col justify-center items-center h-48 bg-background/50 w-full pt-4">
          <div className="flex items-center space-x-2 mb-4">
              <Mic className="w-5 h-5 text-muted-foreground" />
              <Switch
                  id="input-mode"
                  checked={inputMode === 'text'}
                  onCheckedChange={(checked) => setInputMode(checked ? 'text' : 'voice')}
                  />
              <Keyboard className="w-5 h-5 text-muted-foreground" />
          </div>
          
          {inputMode === 'voice' ? (
          <VoiceWidget
              onListen={setIsListening}
              onResult={handleSend}
              state={voiceState}
              disabled={!isOnline}
          />
          ) : (
          <div className="w-full flex items-center gap-2 px-4">
              <Textarea 
                  placeholder="Type your message here..."
                  className="flex-1 resize-none"
                  value={textInput}
                  onChange={(e) => setTextInput(e.target.value)}
                  onKeyDown={(e) => {
                      if (e.key === 'Enter' && !e.shiftKey) {
                          e.preventDefault();
                          handleSend(textInput);
                      }
                  }}
              />
              <Button onClick={() => handleSend(textInput)} disabled={!textInput.trim()}>
                  <Send className="h-4 w-4"/>
                  <span className="sr-only">Send</span>
              </Button>
          </div>
          )}
      </div>
    );

    const ChatPanel = ({ inSheet = false }: { inSheet?: boolean }) => (
         <Card className={cn("flex-grow flex flex-col h-full", inSheet ? 'border-none shadow-none rounded-none' : '')}>
            <CardHeader className="flex-row items-center justify-between border-b">
                <div className="flex items-center gap-4">
                    <Avatar>
                        <AvatarFallback><Bot/></AvatarFallback>
                    </Avatar>
                    <div>
                        <CardTitle className="font-headline text-lg">AI Assistant</CardTitle>
                        <div className="flex items-center gap-1.5">
                            {isOnline ? <Wifi className="h-4 w-4 text-green-500" /> : <WifiOff className="h-4 w-4 text-red-500" />}
                            <span className="text-xs text-muted-foreground">{isOnline ? 'Online' : 'Offline'}</span>
                        </div>
                    </div>
                </div>
                <Button variant="outline" size="sm" onClick={handleScreenAnalysis} disabled={isAnalyzingScreen}>
                    <ScreenShare className="mr-2 h-4 w-4" />
                    {isAnalyzingScreen ? 'Analyzing...' : 'Analyze Screen'}
                </Button>
            </CardHeader>
            <CardContent className="p-0 flex-grow relative">
                {showCamera && <CameraFeed onClose={handleCameraClose} />}
                    <ScrollArea className="h-[calc(100vh-22rem)] md:h-[calc(100vh-24rem)] p-6" ref={scrollAreaRef}>
                    <div className="space-y-6">
                        {messages.map(message => (
                            <div key={message.id} className={cn("flex items-start gap-3", message.sender === 'user' ? 'justify-end' : 'justify-start')}>
                                {message.sender === 'ai' && <Avatar className="h-8 w-8 border"><AvatarFallback><Bot className="h-4 w-4"/></AvatarFallback></Avatar>}
                                <div className={cn("max-w-md rounded-2xl p-3 shadow-sm", message.sender === 'user' ? 'bg-primary text-primary-foreground rounded-br-none' : 'bg-muted rounded-bl-none')}>
                                    {message.isThinking ? (
                                            <div className="flex items-center gap-2 p-2">
                                            <div className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                                            <div className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                                            <div className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce"></div>
                                        </div>
                                    ) : <p className="text-sm">{message.text}</p>
                                    }
                                    {!message.isThinking && <p className={cn("text-xs mt-2 text-right", message.sender === 'user' ? 'text-primary-foreground/70' : 'text-muted-foreground')}>{message.timestamp}</p>}
                                </div>
                                    {message.sender === 'user' && <Avatar className="h-8 w-8 border"><AvatarFallback><User className="h-4 w-4"/></AvatarFallback></Avatar>}
                            </div>
                        ))}
                    </div>
                </ScrollArea>
            </CardContent>
            {!isMobile && (
              <div className="border-t">
                  {renderInputControls()}
              </div>
            )}
        </Card>
    );

    const ContextPanel = () => (
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
    );

    if (isMobile) {
      return (
        <div className="h-full flex flex-col">
          <div className="flex-grow">
            <ChatPanel inSheet={true} />
          </div>
          <BottomSheet 
            open={true}
            onDismiss={() => {}}
            blocking={false}
            snapPoints={({ minHeight, maxHeight }) => [minHeight, maxHeight / 2]}
            header={
              <div className="flex items-center justify-center w-full p-2 bg-background rounded-t-lg cursor-pointer">
                  <div className="w-8 h-1 bg-muted-foreground/50 rounded-full" />
              </div>
            }
          >
            {renderInputControls()}
            <div className="p-4">
              <ContextPanel />
            </div>
          </BottomSheet>
        </div>
      );
    }

    return (
        <div className="container mx-auto py-4 md:py-8 h-full">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-[calc(100vh-8rem)]">
                <div className="lg:col-span-2 flex flex-col h-full">
                    <ChatPanel />
                </div>
                <div className="lg:col-span-1">
                    <ContextPanel />
                </div>
            </div>
        </div>
    );
}

    