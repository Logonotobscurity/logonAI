
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PlusCircle, Link as LinkIcon, Settings } from "lucide-react";

export default function IntegrationsPage() {
    // This would fetch connected accounts in a real app
    const connectedAccounts: any[] = [];

    return (
        <div className="bg-secondary/30 min-h-screen">
            <div className="container mx-auto px-4 py-12 md:py-16">
                <div className="flex justify-between items-center mb-8">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-extrabold font-headline mb-2">Integrations</h1>
                        <p className="text-lg text-muted-foreground">Manage your connected accounts</p>
                    </div>
                    <Button>
                        <PlusCircle className="mr-2 h-4 w-4" /> Add Connection
                    </Button>
                </div>

                <Card>
                    <CardHeader>
                        <CardTitle>Connected Accounts</CardTitle>
                        <CardDescription>
                            These are the third-party accounts you've connected to LOG_ON.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        {connectedAccounts.length > 0 ? (
                            <ul className="divide-y">
                                {/* Map through connected accounts here */}
                            </ul>
                        ) : (
                            <div className="text-center py-16 border-2 border-dashed rounded-lg">
                                <div className="flex justify-center items-center h-16 w-16 rounded-full bg-muted mx-auto mb-4">
                                     <LinkIcon className="h-8 w-8 text-muted-foreground" />
                                </div>
                                <h3 className="text-xl font-semibold mb-2">No connected accounts found</h3>
                                <p className="text-muted-foreground mb-4">Connect to apps like Slack, Google Drive, and more.</p>
                                <Button variant="outline">Connect an Account</Button>
                            </div>
                        )}
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

    