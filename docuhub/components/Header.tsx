import Link from "next/link";
import { Copy, FileStack, Shield } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-14 items-center justify-between px-4">
        <Link className="flex items-center gap-2 font-bold text-xl tracking-tight" href="/">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Shield className="h-5 w-5" />
          </div>
          <span>DocuHub</span>
        </Link>
        <nav className="flex items-center gap-6 text-sm font-medium">
          <Link
            className="text-muted-foreground transition-colors hover:text-foreground"
            href="#features"
          >
            Features
          </Link>
          <Link
            className="text-muted-foreground transition-colors hover:text-foreground"
            href="#how-it-works"
          >
            How It Works
          </Link>
          <Link
            className="hidden sm:inline-block text-muted-foreground transition-colors hover:text-foreground"
            href="https://github.com/R3ACTR/DocuHub"
            target="_blank"
          >
            GitHub
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link
            href="/dashboard"
            className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          >
            Launch App
          </Link>
        </div>
      </div>
    </header>
  );
}
