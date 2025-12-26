
"use client";

import { usePathname } from "next/navigation";
import Header from "./header";
import Footer from "./footer";

export function PageWrapper({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const showFooter = pathname !== '/conversation';

    return (
        <div className="relative flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            {showFooter && <Footer />}
        </div>
    )
}
