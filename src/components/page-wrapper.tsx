
"use client";

import { usePathname } from "next/navigation";
import Header from "./header";
import Footer from "./footer";
import { cn } from "@/lib/utils";

export function PageWrapper({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const showFooter = pathname !== '/conversation';

    return (
        <div className={cn("relative flex min-h-screen flex-col", {'pb-0': !showFooter})}>
            <Header />
            <main className="flex-1">{children}</main>
            {showFooter && <Footer />}
        </div>
    )
}
