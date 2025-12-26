
import { cn } from "@/lib/utils";

export const MarketplaceIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={cn("h-5 w-5", className)}
  >
    <path d="m10.5 2.5-8 8" />
    <path d="M13.5 13.5 4.5 22.5" />
    <path d="M13.5 2.5 22.5 11.5" />
    <path d="m2.5 13.5 8 8" />
    <path d="M11.5 22.5 22.5 11.5" />
  </svg>
);

export const VendorsIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={cn("h-5 w-5", className)}
  >
    <path d="M13.5 2.5 10.5 5.5" />
    <path d="M10.5 18.5 13.5 21.5" />
    <path d="M18.5 10.5 21.5 13.5" />
    <path d="M2.5 13.5 5.5 10.5" />
    <path d="M12 2v20" />
    <path d="M22 12H2" />
  </svg>
);

    