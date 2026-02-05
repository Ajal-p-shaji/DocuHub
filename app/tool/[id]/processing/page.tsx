"use client";

import { Loader2, Lock } from "lucide-react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ProcessingPage() {
    const router = useRouter();

    useEffect(() => {
        // Simulate processing time
        const timer = setTimeout(() => {
            // In a real app, this would go to results. For now, we stay here or go back.
            // alert("Processing complete!"); 
        }, 3000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#eef6f5]">
            <div className="text-center">
                <h2 className="text-2xl font-semibold text-[#1e1e2e] mb-2">Processing your file...</h2>
                <p className="text-muted-foreground text-sm mb-8">This may take a few seconds</p>

                <div className="flex justify-center mb-12">
                    {/* Simple spinner matching the clean aesthetic */}
                    <Loader2 className="h-8 w-8 animate-spin text-[#1e1e2e]" />
                </div>

                <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                    <Lock className="w-3 h-3" />
                    <span>Files never leave your device. All processing happens locally.</span>
                </div>
            </div>
        </div>
    );
}
