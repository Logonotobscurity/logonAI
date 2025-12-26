
"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { Logo } from "./logo";
import { Menu, X, ChevronDown, Settings, Info, Search, Bell } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { useUser } from "@/firebase";
import { MarketplaceIcon, VendorsIcon } from "./icons";
import { useRouter, usePathname } from "next/navigation";
import { industryCategories } from "@/lib/mock-data";
import { Badge } from "./ui/badge";


const navLinks = [
  { title: "Features", href: "/#features" },
  { title: "Assessments", href: "/assessment" },
  { title: "Modeler", href: "/modeler" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user } = useUser();
  const router = useRouter();
  const pathname = usePathname();
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const isDashboard = pathname.startsWith('/dashboard');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
        if (e.ctrlKey && e.key === ',') {
            e.preventDefault();
            setIsSettingsOpen(true);
        }
        if (e.ctrlKey && e.key === 'm') {
            e.preventDefault();
            router.push('/conversation');
        }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
        window.removeEventListener('keydown', handleKeyDown);
    };
  }, [router]);


  const handleSignOut = () => {
    // In demo mode, just redirect to home
    router.push('/');
  };


  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-auto flex items-center">
          <Link href="/" className="mr-6 flex items-center gap-2">
            <Logo />
            {isDashboard && <Badge variant='secondary'>Beta</Badge>}
          </Link>
          
          {!isDashboard && (
            <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="transition-colors hover:text-primary"
                >
                  {link.title}
                </Link>
              ))}
               <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center gap-1">
                    Connect
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-60">
                  <DropdownMenuItem asChild>
                    <Link href="/marketplace">
                      <MarketplaceIcon className="mr-2" />
                      Agent Marketplace
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/vendors">
                      <VendorsIcon className="mr-2" />
                      Vendor Marketplace
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </nav>
          )}

        </div>

         <div className="flex-1 flex justify-center">
           {isDashboard && (
              <h1 className="text-xl font-semibold font-headline hidden sm:block">Dashboard</h1>
           )}
        </div>


        <div className="flex items-center gap-4">
            {isDashboard && (
              <>
                 <Button variant="ghost" size="icon" aria-label="Search">
                    <Search className="h-5 w-5" />
                    <span className="sr-only">Search</span>
                </Button>
                 <Button variant="ghost" size="icon" aria-label="Notifications">
                    <Bell className="h-5 w-5" />
                    <span className="sr-only">Notifications</span>
                </Button>
              </>
            )}

            {user ? (
            <Dialog open={isSettingsOpen} onOpenChange={setIsSettingsOpen}>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={user.photoURL!} alt={user.displayName!} />
                      <AvatarFallback>{user.displayName?.charAt(0)}</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <DropdownMenuItem>
                      <Link href="/dashboard" className="w-full">Dashboard</Link>
                  </DropdownMenuItem>
                   <DropdownMenuItem onSelect={() => setIsSettingsOpen(true)}>
                      <Settings className="mr-2 h-4 w-4" />
                      <span>Settings</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleSignOut}>
                    Log out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <DialogContent>
                  <DialogHeader>
                      <DialogTitle>Advanced Settings</DialogTitle>
                      <DialogDescription>
                          Customize your agent and interaction settings. Press Ctrl + , to open this menu.
                      </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4 py-4">
                      <div className="space-y-2">
                          <Label>AI Model</Label>
                          <Select defaultValue="gemini">
                              <SelectTrigger>
                                  <SelectValue placeholder="Select AI Model" />
                              </SelectTrigger>
                              <SelectContent>
                                  <SelectItem value="gemini">Gemini 1.5 Pro (Default)</SelectItem>
                                  <SelectItem value="gpt4">GPT-4 Turbo</SelectItem>
                                  <SelectItem value="claude">Claude 3</SelectItem>
                              </SelectContent>
                          </Select>
                      </div>
                      <div className="space-y-2">
                          <Label>Agent Template (Industry)</Label>
                           <Select defaultValue="default">
                              <SelectTrigger>
                                  <SelectValue placeholder="Select Industry Template" />
                              </SelectTrigger>
                              <SelectContent>
                                  {industryCategories.map((cat) => (
                                    <SelectItem key={cat.value} value={cat.value} disabled={cat.value === 'all'}>
                                      {cat.label}
                                    </SelectItem>
                                  ))}
                              </SelectContent>
                          </Select>
                      </div>
                      <div className="space-y-2">
                          <div className="flex items-center gap-2">
                              <Label htmlFor="api-key">Bring Your Own API Key</Label>
                              <TooltipProvider>
                                  <Tooltip>
                                      <TooltipTrigger asChild>
                                          <Info className="h-4 w-4 text-muted-foreground cursor-pointer" />
                                      </TooltipTrigger>
                                      <TooltipContent>
                                          <p>Provide your own API key to use a custom model.</p>
                                      </TooltipContent>
                                  </Tooltip>
                              </TooltipProvider>
                          </div>
                          <Input id="api-key" type="password" placeholder="Enter your API key" />
                      </div>
                      <div className="space-y-2">
                          <h4 className="font-medium">Keyboard Shortcuts</h4>
                          <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-1">
                              <li><kbd className="px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg">Ctrl</kbd> + <kbd className="px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg">M</kbd> - Start a new Conversation</li>
                              <li><kbd className="px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg">Ctrl</kbd> + <kbd className="px2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg">S</kbd> - Analyze Screen</li>
                              <li><kbd className="px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg">Ctrl</kbd> + <kbd className="px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg">,</kbd> - Open Settings</li>
                          </ul>
                      </div>
                  </div>
              </DialogContent>
            </Dialog>
          ) : (
             <Button onClick={() => router.push('/dashboard')}>Login / Register</Button>
          )}

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
            <span className="sr-only">Toggle Menu</span>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div
          className={cn(
            "md:hidden",
            isMenuOpen ? "animate-in fade-in-20 slide-in-from-top-5" : ""
          )}
        >
          <div className="flex flex-col items-center space-y-4 py-4 border-t">
            {[...navLinks, { title: "Dashboard", href: "/dashboard" }].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-primary w-full text-center py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.title}
              </Link>
            ))}
             <div className="w-full px-4">
                { user ? 
                    <div className="w-full" /> 
                    : 
                    <Button className="w-full" onClick={() => router.push('/dashboard')}>Login / Register</Button>
                }
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
