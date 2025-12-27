
'use client';

import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Zap, Bot, Scale } from 'lucide-react';
import { useRouter } from 'next/navigation';

export function WelcomeModal() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Logic to determine if the modal should be shown, e.g., for first-time visitors.
    // For this demo, we'll use a sessionStorage item to show it only once per session.
    const hasSeenModal = sessionStorage.getItem('hasSeenWorkflowModal');
    if (!hasSeenModal) {
      setIsOpen(true);
      sessionStorage.setItem('hasSeenWorkflowModal', 'true');
    }
  }, []);

  const handleExplore = () => {
    setIsOpen(false);
    router.push('/workflows');
  };

  const features = [
    {
      icon: <Zap className="h-6 w-6 text-primary" />,
      title: 'No-Code Automation',
      description: 'Choose from our pre-built workflow templates and deploy powerful automation in minutes. No technical skills required.',
    },
    {
      icon: <Bot className="h-6 w-6 text-primary" />,
      title: 'Multi-Step Intelligence',
      description: 'Build sophisticated workflows with multiple steps that handle complex business processes automatically.',
    },
    {
      icon: <Scale className="h-6 w-6 text-primary" />,
      title: 'Scale Your Operations',
      description: 'From simple daily tasks to sophisticated business workflows, automate everything that\'s holding back your small business.',
    },
  ];

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-center font-headline text-3xl">Welcome to Workflows!</DialogTitle>
          <DialogDescription className="text-center text-lg">
            Automate your business operations with our new intelligent workflow library.
          </DialogDescription>
        </DialogHeader>
        <div className="py-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div key={feature.title} className="text-center p-4 rounded-lg bg-secondary/50">
                <div className="flex justify-center items-center h-12 w-12 rounded-full bg-background mx-auto mb-4">
                    {feature.icon}
                </div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
        <div className="bg-muted p-4 rounded-lg">
            <h4 className="font-semibold text-center mb-2">How Credits Work</h4>
            <p className="text-sm text-muted-foreground text-center">Every time a workflow runs, it uses credits based on complexity. Your plan includes credits to get started, and you can monitor your usage as you grow.</p>
        </div>
        <DialogFooter className="sm:justify-center pt-4">
          <Button type="button" size="lg" onClick={handleExplore}>
            Explore the Library
          </Button>
          <Button type="button" variant="ghost" onClick={() => setIsOpen(false)}>
            Dismiss
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
