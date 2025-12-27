
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "@/components/logo";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LoginPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (status === 'authenticated') {
      router.push('/dashboard');
    }
  }, [session, status, router]);

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await signIn("resend", { email, redirect: false });
      // You can add a toast or message here to inform the user to check their email.
      alert("Please check your email for a magic link to sign in.");
    } catch (error) {
      console.error("Error signing in with magic link", error);
      alert("There was an error sending the sign-in link. Please try again.");
    } finally {
        setIsSubmitting(false);
    }
  };

  if (status === 'loading' || status === 'authenticated') {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <p>Loading...</p>
        </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-secondary/30">
      <Card className="w-full max-w-sm">
        <CardHeader className="text-center">
            <Logo className="mx-auto mb-4" />
          <CardTitle className="font-headline text-2xl">Welcome to LOG_ON</CardTitle>
          <CardDescription>Sign in with a magic link to access your dashboard.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSignIn} className="space-y-4">
            <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input 
                    id="email" 
                    type="email" 
                    placeholder="john.doe@example.com" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <Button className="w-full" type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Sending Link...' : 'Sign in with Email'}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
