
'use client';

import { useState, useEffect, useRef } from 'react';
import { textToSpeech } from '@/ai/flows/text-to-speech';

type VoiceState = 'idle' | 'listening' | 'thinking' | 'speaking';

export function useVoice() {
  const [voiceState, setVoiceState] = useState<VoiceState>('idle');
  const [transcript, setTranscript] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const recognitionRef = useRef<any>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = false;
      recognitionRef.current.interimResults = false;
      recognitionRef.current.lang = 'en-US';

      recognitionRef.current.onstart = () => {
        setIsListening(true);
        setVoiceState('listening');
      };

      recognitionRef.current.onend = () => {
        setIsListening(false);
        if (voiceState === 'listening') {
          setVoiceState('thinking');
        }
      };
      
      recognitionRef.current.onresult = (event: any) => {
        const currentTranscript = event.results[0][0].transcript;
        setTranscript(currentTranscript);
      };

      recognitionRef.current.onerror = (event: any) => {
        console.error('Speech recognition error', event.error);
        setIsListening(false);
        setVoiceState('idle');
      };

    }

    if (!audioRef.current) {
        audioRef.current = new Audio();
        audioRef.current.onplay = () => {
            setIsSpeaking(true);
            setVoiceState('speaking');
        };
        audioRef.current.onended = () => {
            setIsSpeaking(false);
            setVoiceState('idle');
        };
    }

    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
       if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, [voiceState]);

  const startListening = () => {
    if (recognitionRef.current && !isListening) {
      setTranscript('');
      recognitionRef.current.start();
    }
  };

  const stopListening = () => {
    if (recognitionRef.current && isListening) {
      recognitionRef.current.stop();
    }
  };
  
  const speak = async (text: string) => {
    setVoiceState('thinking');
    try {
      const response = await textToSpeech(text);
      if (response.media && audioRef.current) {
        audioRef.current.src = response.media;
        audioRef.current.play();
      }
    } catch(error) {
      console.error("Error with text-to-speech:", error);
      setVoiceState('idle');
    }
  };

  return {
    transcript,
    isListening,
    isSpeaking,
    voiceState,
    startListening,
    stopListening,
    speak,
  };
}
