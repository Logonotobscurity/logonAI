import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("font-headline text-2xl font-extrabold tracking-tight text-primary", className)}>
      LOG_ON
    </div>
  );
}
