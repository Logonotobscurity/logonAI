
'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { useSearchParams } from 'next/navigation';
import type { Message } from '@/lib/types';
import type { AiDrivenMatchingOutput } from '@/ai/schemas';
import { agents } from '@/lib/mock-data';
import { useToast } from '@/hooks/use-toast';

export function useConversation() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get('q');

  const [messages, setMessages] = useState<Message[]>([]);
  const [suggestedAgents, setSuggestedAgents] = useState<any[]>([]);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [isOnline, setIsOnline] = useState(true);
  const [isAnalyzingScreen, setIsAnalyzingScreen] = useState(false);
  const [textInput, setTextInput] = useState('');
  const [inputMode, setInputMode] = useState<'voice' | 'text'>('voice');
  const [showCamera, setShowCamera] = useState(false);

  const { toast } = useToast();
  const thinkingMessageIdRef = useRef<string | null>(null);

  const handleSend = useCallback(
    async (text: string) => {
      if (text.trim() === '') return;

      const newUserMessage: Message = {
        id: `${Date.now()}-user`,
        sender: 'user',
        text: text,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
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

      setMessages((prev) => [...prev, newUserMessage, aiThinkingMessage]);
      setTextInput('');

      try {
        const response = await fetch('/api/chat', {
          method: 'POST',
          body: JSON.stringify({ userInput: text }),
          headers: { 'Content-Type': 'application/json' },
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
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        };

        setMessages((prev) => prev.map((m) => (m.id === aiThinkingMessageId ? aiResponseMessage : m)));
        thinkingMessageIdRef.current = null;

        if (typeof window !== 'undefined' && window.speechSynthesis) {
          const utterance = new SpeechSynthesisUtterance(reasoning);
          utterance.onstart = () => setIsSpeaking(true);
          utterance.onend = () => setIsSpeaking(false);
          window.speechSynthesis.speak(utterance);
        }

        if (agentSuggestions && agentSuggestions.length > 0) {
          const suggestedProducts = agents.filter((p) => agentSuggestions.includes(p.id));
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
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        };
        setMessages((prev) => prev.map((m) => (m.id === errorId ? errorResponse : m)));
        thinkingMessageIdRef.current = null;

        if (typeof window !== 'undefined' && window.speechSynthesis) {
          const utterance = new SpeechSynthesisUtterance(errorText);
          utterance.onstart = () => setIsSpeaking(true);
          utterance.onend = () => setIsSpeaking(false);
          window.speechSynthesis.speak(utterance);
        }
      }
    },
    []
  );

  useEffect(() => {
    const welcomeMessage = 'Hello! I am the LOG_ON assistant. How can I help you identify your next growth opportunity today?';
    setMessages([{ id: '1', sender: 'ai', text: welcomeMessage, timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }]);

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

  const handleScreenAnalysis = () => {
    setIsAnalyzingScreen(true);
    setShowCamera(true);
    toast({
      title: 'Screen Analysis Started',
      description: 'Please point your camera at the screen content to analyze.',
    });
  };

  const handleCameraClose = () => {
    setShowCamera(false);
    setIsAnalyzingScreen(false);

    const analysisMessageId = `${Date.now()}-analysis`;
    const analysisMessage: Message = {
      id: analysisMessageId,
      sender: 'ai',
      isThinking: true,
      text: 'Analyzing screen content...',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
    setMessages((prev) => [...prev, analysisMessage]);

    setTimeout(() => {
      const resultText = 'Based on the content of your screen, I suggest we look into optimizing your customer support workflow. Would you like to explore agents that specialize in that area?';
      const resultMessage: Message = {
        id: analysisMessageId,
        sender: 'ai',
        text: resultText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => prev.map((m) => (m.id === analysisMessageId ? resultMessage : m)));
      if (typeof window !== 'undefined' && window.speechSynthesis) {
        const utterance = new SpeechSynthesisUtterance(resultText);
        utterance.onstart = () => setIsSpeaking(true);
        utterance.onend = () => setIsSpeaking(false);
        window.speechSynthesis.speak(utterance);
      }
    }, 1500);
  };

  const voiceState = isListening ? 'listening' : isSpeaking ? 'speaking' : 'idle';

  return {
    messages,
    suggestedAgents,
    isOnline,
    isAnalyzingScreen,
    textInput,
    setTextInput,
    inputMode,
    setInputMode,
    showCamera,
    voiceState,
    handleSend,
    handleScreenAnalysis,
    handleCameraClose,
    setIsListening,
  };
}
