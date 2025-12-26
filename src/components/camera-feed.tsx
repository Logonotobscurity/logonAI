
'use client';

import { useState, useEffect, useRef } from 'react';
import { Button } from './ui/button';
import { useToast } from '@/hooks/use-toast';
import { Camera, X } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from './ui/alert';

interface CameraFeedProps {
  onClose: () => void;
}

export function CameraFeed({ onClose }: CameraFeedProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasCameraPermission, setHasCameraPermission] = useState<boolean | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    const getCameraPermission = async () => {
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        console.error('Camera API not supported in this browser.');
        setHasCameraPermission(false);
        toast({
            variant: 'destructive',
            title: 'Unsupported Browser',
            description: 'Your browser does not support the necessary technology for camera access.',
        });
        return;
      }

      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
        setHasCameraPermission(true);
      } catch (error) {
        console.error('Error accessing camera:', error);
        setHasCameraPermission(false);
        toast({
          variant: 'destructive',
          title: 'Camera Access Denied',
          description: 'Please enable camera permissions in your browser settings to use this feature.',
        });
      }
    };

    getCameraPermission();

    return () => {
      // Cleanup: stop camera stream when component unmounts
      if (videoRef.current && videoRef.current.srcObject) {
        const stream = videoRef.current.srcObject as MediaStream;
        stream.getTracks().forEach(track => track.stop());
      }
    };
  }, [toast]);

  return (
    <div className="absolute inset-0 z-20 bg-black/80 flex flex-col items-center justify-center p-4">
      <div className="bg-background rounded-lg shadow-2xl w-full max-w-2xl overflow-hidden animate-in fade-in-50 zoom-in-95">
        <div className="p-4 border-b flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Camera className="h-5 w-5 text-primary" />
            <h3 className="font-headline text-lg">Screen Analysis</h3>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose} aria-label="Close camera feed">
            <X className="h-5 w-5" />
          </Button>
        </div>
        <div className="p-4 relative">
          <video ref={videoRef} className="w-full aspect-video rounded-md bg-muted" autoPlay playsInline muted />
          {hasCameraPermission === false && (
             <div className="absolute inset-0 flex items-center justify-center p-4">
                <Alert variant="destructive" className="max-w-md">
                    <AlertTitle>Camera Access Required</AlertTitle>
                    <AlertDescription>
                        Could not access the camera. Please ensure you have a camera connected and have granted permission in your browser settings.
                    </AlertDescription>
                </Alert>
             </div>
          )}
        </div>
        <div className="p-4 bg-muted/50 text-center">
          <Button onClick={onClose}>Finish Analysis</Button>
        </div>
      </div>
    </div>
  );
}

    