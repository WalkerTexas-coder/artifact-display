import Link from "next/link";

export default function ArtifactsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="border-b border-foreground/20">
        <div className="container mx-auto px-4 py-4">
          <Link 
            href="/" 
            className="text-foreground/70 hover:text-foreground transition-colors inline-flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Prototypes
          </Link>
        </div>
      </nav>
      <main>{children}</main>
    </div>
  );
}