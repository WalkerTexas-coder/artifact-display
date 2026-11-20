export default function PromoCodesPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Promo Code System</h1>
        <p className="text-foreground/70">
          Patient promo code application with admin management
        </p>
      </header>

      <div className="space-y-8">
        <section className="p-6 border border-foreground/20 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Feature Overview</h2>
          <p className="text-foreground/70 mb-4">
            This prototype will demonstrate the promo code system allowing patients to apply 
            discount codes during checkout, and admin interfaces for creating and managing 
            promotional campaigns.
          </p>
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
            <p className="text-sm text-yellow-800 dark:text-yellow-200">
              <strong>Status:</strong> Placeholder page created. Waiting for Claude AI desktop 
              artifact to be imported and built out with Hedfirst styling.
            </p>
          </div>
        </section>

        <section className="p-6 border border-foreground/20 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Expected Components</h2>
          <ul className="space-y-2 text-foreground/70">
            <li>• Patient checkout promo code input</li>
            <li>• Real-time validation and discount calculation</li>
            <li>• Admin promo code creation interface</li>
            <li>• Promo code management dashboard</li>
            <li>• Usage analytics and reporting</li>
          </ul>
        </section>
      </div>
    </div>
  );
}