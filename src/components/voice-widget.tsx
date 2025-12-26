
'use client';

import { Mic, MicOff } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface VoiceWidgetProps {
  onListen: (isListening: boolean) => void;
  onResult: (result: string) => void;
  state: 'idle' | 'listening' | 'speaking';
}

export function VoiceWidget({ onListen, onResult, state }: VoiceWidgetProps) {
  const recognitionRef = useRef<SpeechRecognition | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      console.warn('Speech Recognition API not supported in this browser.');
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.lang = 'en-US';
    recognition.interimResults = false;

    recognition.onstart = () => {
      onListen(true);
    };

    recognition.onend = () => {
      onListen(false);
    };

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      onResult(transcript);
    };

    recognition.onerror = (event) => {
      console.error('Speech recognition error', event.error);
      onListen(false);
    };

    recognitionRef.current = recognition;

    return () => {
      recognition.stop();
    };
  }, [onListen, onResult]);

  const toggleListening = () => {
    const recognition = recognitionRef.current;
    if (!recognition) return;

    if (state === 'listening') {
      recognition.stop();
    } else {
      // If the assistant is speaking, interrupt it before listening
      if (state === 'speaking') {
          window.speechSynthesis.cancel();
      }
      recognition.start();
    }
  };

  return (
    <div
      data-state={state}
      className={cn(
        'voice-widget relative flex items-center justify-center h-24 w-24 rounded-full border-2 border-primary transition-all duration-300',
        'before:absolute before:inset-0 before:rounded-full before:opacity-0 before:transition-opacity',
        'after:absolute after:inset-0 after:rounded-full after:border-2 after:border-primary/50 after:transition-all after:content-[""]',
      )}
    >
      <button
        onClick={toggleListening}
        className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform hover:scale-110 active:scale-100"
        aria-label={state === 'listening' ? 'Stop listening' : 'Start listening'}
      >
        {state === 'listening' ? (
          <MicOff className="h-8 w-8" />
        ) : (
          <Mic className="h-8 w-8" />
        )}
      </button>
    </div>
  );
}
