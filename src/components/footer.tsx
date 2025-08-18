import Link from "next/link";
import { Logo } from "./logo";
import { Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "./ui/button";

const socialLinks = [
  { icon: <Twitter className="h-5 w-5" />, href: "#" },
  { icon: <Github className="h-5 w-5" />, href: "#" },
  { icon: <Linkedin className="h-5 w-5" />, href: "#" },
];

const footerLinks = [
  { title: "Docs", href: "#" },
  { title: "About Us", href: "#" },
  { title: "Careers", href: "#" },
  { title: "Contact", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-secondary/50 dark:bg-gray-900 border-t">
      <div className="container mx-auto px-6 py-12">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex justify-center md:order-2">
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <Link key={index} href={link.href} passHref>
                  <Button variant="ghost" size="icon" aria-label={`Social link ${index+1}`}>
                    {link.icon}
                  </Button>
                </Link>
              ))}
            </div>
          </div>
          <div className="mt-8 md:order-1 md:mt-0">
            <div className="flex flex-col items-center md:items-start">
              <Logo />
              <p className="mt-2 max-w-sm text-center md:text-left text-sm text-muted-foreground">
                Assess, connect, and activate intelligent solutions instantly.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12">
            <div className="flex items-center justify-center flex-wrap gap-4 md:justify-start">
                {footerLinks.map((link) => (
                    <Link key={link.href} href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                        {link.title}
                    </Link>
                ))}
            </div>
        </div>

        <hr className="my-6 border-gray-200 dark:border-gray-700 md:my-10" />

        <div className="text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} LOG_ON, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
