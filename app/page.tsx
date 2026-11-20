import Link from "next/link";

export default function Home() {
  const artifacts = [
    {
      title: "Promo Code System",
      description: "Patient promo code application with admin management",
      href: "/artifacts/promo-codes",
      status: "In Development"
    },
    {
      title: "Patient Dashboard",
      description: "Enhanced patient dashboard with improved navigation and data display",
      href: "/artifacts/patient-dashboard",
      status: "Planning"
    },
    {
      title: "Multi-Pharmacy Provider Views",
      description: "Prescriber dashboard for enhanced Dosespot workflow",
      href: "/artifacts/multi-pharmacy-views",
      status: "Planning"
    },
    {
      title: "Patient Tab Management",
      description: "Store Admin patient tabs with proper filtering and organization",
      href: "/artifacts/patient-tab-management",
      status: "Planning"
    },
    {
      title: "AI Assessment Dashboard",
      description: "Comprehensive AI Medical Assessment creation and approval workflow",
      href: "/artifacts/ai-assessment-dashboard",
      status: "Planning"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <header className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Hedfirst Feature Prototypes</h1>
          <p className="text-lg text-foreground/70 leading-relaxed">
            Interactive prototypes and UI specifications for Hedfirst development team. 
            These artifacts demonstrate expected user interactions and serve as visual 
            specifications for development tickets.
          </p>
        </header>

        <div className="grid gap-6">
          {artifacts.map((artifact) => (
            <Link
              key={artifact.href}
              href={artifact.href}
              className="block p-6 border border-foreground/20 rounded-lg hover:border-foreground/40 hover:bg-foreground/5 transition-all duration-200"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h2 className="text-xl font-semibold mb-2">{artifact.title}</h2>
                  <p className="text-foreground/70 mb-3">{artifact.description}</p>
                  <span 
                    className={`inline-block px-3 py-1 text-sm rounded-full ${
                      artifact.status === 'In Development' 
                        ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                        : 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200'
                    }`}
                  >
                    {artifact.status}
                  </span>
                </div>
                <div className="ml-4 text-foreground/40">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <footer className="mt-16 pt-8 border-t border-foreground/20 text-sm text-foreground/60">
          <p>
            <strong>Product Manager:</strong> Austin Walker<br />
            <strong>Platform:</strong> Teligant (api.teligant.com)<br />
            <strong>Last Updated:</strong> {new Date().toLocaleDateString()}
          </p>
        </footer>
      </main>
    </div>
  );
}
