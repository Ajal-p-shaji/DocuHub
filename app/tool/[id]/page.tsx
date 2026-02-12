"use client";

import Link from "next/link";
import { ArrowLeft, Upload, FileText } from "lucide-react";
import { ToolCard } from "@/components/ToolCard";
import { useRouter, useParams } from "next/navigation";
import { motion } from "framer-motion";
import { useState, useRef } from "react";

export default function ToolUploadPage() {
    const router = useRouter();
    const params = useParams();
    const toolId = params.id;

    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const fileInputRef = useRef<HTMLInputElement | null>(null);


    const getToolTitle = () => {
        switch (toolId) {
            case "file-conversion":
                return "Upload document to convert";
            case "ocr":
                return "Upload image for text extraction";
            case "data-tools":
                return "Upload data file to process";
            default:
                return "Upload your file";
        }
    };

    const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;
        setSelectedFile(file);
    };

    const handleResetTool = () => {
        const confirmReset = window.confirm(
            "This will remove your uploaded file and reset the tool. Do you want to continue?"
        );

        if (!confirmReset) return;
        setSelectedFile(null);
    };

    /* PDF TOOLS PAGE */
    if (toolId === "pdf-tools") {
        return (
            <div className="min-h-screen flex flex-col">
                <div className="container mx-auto px-6 pt-6 md:px-12">
                    <Link
                        href="/dashboard"
                        className="inline-flex items-center gap-2 text-sm text-muted-foreground"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Dashboard
                    </Link>
                </div>

                <main className="container mx-auto px-6 py-12 md:px-12">
                    <h1 className="text-3xl font-semibold mb-2">PDF Tools</h1>
                    <p className="text-muted-foreground mb-8">Choose a PDF tool</p>

                    <div className="grid gap-6 md:grid-cols-2 max-w-5xl">
                        <ToolCard icon={FileText} title="Merge PDF" description="Combine PDFs" href="/dashboard/pdf-merge" />
                        <ToolCard icon={FileText} title="Split PDF" description="Split pages" href="/dashboard/pdf-split" />
                        <ToolCard icon={FileText} title="Document to PDF" description="Convert to PDF" href="/dashboard/document-to-pdf" />
                        <ToolCard icon={FileText} title="Protect PDF" description="Add password" href="/dashboard/pdf-protect" />
                    </div>
                </main>
            </div>
        );
    }

    /* UPLOAD PAGE */
    return (
        <div className="min-h-screen flex flex-col">
            <main className="container mx-auto px-6 py-12 md:px-12">
                <Link
                    href="/dashboard"
                    className="inline-flex items-center gap-2 text-sm mb-6"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Back to Dashboard
                </Link>

                <h1 className="text-3xl font-semibold mb-8">
                    {getToolTitle()}
                </h1>

                <motion.div
                    onClick={() => fileInputRef.current?.click()}
                    className="rounded-2xl border-2 border-dashed bg-[#eef6f5] p-20 text-center cursor-pointer"
                >
                    <Upload className="mx-auto mb-4" />
                    <p className="mb-2">Drag & drop your file here</p>
                    <input
                        ref={fileInputRef}
                        type="file"
                        className="hidden"
                        onChange={handleFile}
                    />


                </motion.div>

                {selectedFile && (
                    <div className="mt-6 flex items-center gap-4">
                        <p className="text-sm font-medium">
                            Selected file: {selectedFile.name}
                        </p>
                        <button
                            onClick={handleResetTool}
                            className="text-sm text-red-500 hover:underline"
                        >
                            Clear All
                        </button>
                    </div>
                )}
            </main>
        </div>
    );
}
