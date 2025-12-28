
"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { Logo } from "./logo";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { WaitlistDialog } from "./waitlist-dialog";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "./ui/navigation-menu";


const navLinks = [
  { 
    title: "Assessments", 
    href: "/assessment",
    subItems: [
        { title: "AI Readiness Evaluator", href: "/assessment", description: "See if you are ready for AI." },
        { title: "Workflow Automation Audit", href: "/assessment", description: "Find bottlenecks to automate." },
    ]
  },
  { 
    title: "Modeler", 
    href: "/modeler",
    subItems: []
  },
  { 
    title: "Connect",
    href: "#",
    subItems: [
        { title: "Agent Marketplace", href: "/marketplace", description: "Hire AI agents to automate tasks." },
        { title: "Vendor Marketplace", href: "/vendors", description: "Discover certified integration partners." },
    ]
  },
  {
    title: "Workflows",
    href: "/workflows",
    subItems: []
  },
  { 
    title: "Developers", 
    href: "/developer",
    subItems: []
  },
  {
    title: "Community",
    href: "/community",
    subItems: []
  },
  {
    title: "Contact",
    href: "/contact",
    subItems: []
  }
];


export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  return (
    <>
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-auto flex items-center">
          <Link href="/" className="mr-6 flex items-center gap-2">
            <Logo />
          </Link>
          
            <nav className="hidden md:flex items-center space-x-1 text-sm font-medium">
               <NavigationMenu>
                <NavigationMenuList>
                  {navLinks.map((link) => (
                    <NavigationMenuItem key={link.title}>
                       {link.subItems && link.subItems.length > 0 ? (
                        <>
                          <NavigationMenuTrigger>{link.title}</NavigationMenuTrigger>
                          <NavigationMenuContent>
                            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                                {link.subItems.map((item) => (
                                  <Link href={item.href} key={item.title}>
                                    <ListItem
                                        title={item.title}
                                    >
                                        {item.description}
                                    </ListItem>
                                  </Link>
                                ))}
                            </ul>
                          </NavigationMenuContent>
                        </>
                      ) : (
                        <Link href={link.href} legacyBehavior passHref>
                          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            {link.title}
                          </NavigationMenuLink>
                        </Link>
                      )}
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </nav>

        </div>


        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="md:hidden">
             <Link href="/">
              <Logo />
            </Link>
          </div>
          <nav className="hidden md:flex">
             <Button onClick={() => setIsWaitlistOpen(true)}>Join Waitlist</Button>
          </nav>
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
            {[...navLinks.filter(l => !l.subItems || l.subItems.length === 0), { title: "Agent Marketplace", href: "/marketplace" }, { title: "Vendor Marketplace", href: "/vendors" }].flat().map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-primary w-full text-center py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.title}
              </Link>
            ))}
            <Button onClick={() => { setIsMenuOpen(false); setIsWaitlistOpen(true); }}>Join Waitlist</Button>
          </div>
        </div>
      )}
    </header>
    <WaitlistDialog open={isWaitlistOpen} onOpenChange={setIsWaitlistOpen} />
    </>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
