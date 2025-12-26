"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { Logo } from "./logo";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const navLinks = [
  { title: "Features", href: "/#features" },
  { title: "Assessments", href: "/assessment" },
  { title: "Marketplace", href: "/marketplace" },
  { title: "Dashboard", href: "/dashboard" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6">
            <Logo />
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-primary"
              >
                {link.title}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="md:hidden">
             <Link href="/">
              <Logo />
            </Link>
          </div>
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
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-primary w-full text-center py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}