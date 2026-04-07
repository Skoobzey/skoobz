const packages = [
  {
    name: 'Starter',
    price: '$100',
    period: 'one-time',
    description: 'Simple static site, can pull data from third-party APIs if needed. I do the frontend side, you provide the API.',
    features: [
      '8 hours of development',
      'Basic setup & deployment',
      'Source code included',
      'Discord support for 30 days',
      '1 round of revisions',
      'Static content',
      'Third-party API integration (you provide the API)',
    ],
    cta: 'Get started',
  },
  {
    name: 'Standard',
    price: '$250',
    period: 'one-time',
    description: 'Full build with a dashboard so you can manage content yourself without touching any code.',
    features: [
      '20 hours of development',
      'Full setup & deployment including database',
      'Source code included',
      'Management dashboard with login',
      'Update content without touching code',
      '3 rounds of revisions',
      'Documentation',
    ],
    cta: 'Get started',
  },
  {
    name: 'Managed',
    price: 'Custom',
    period: 'per month',
    description: 'I handle everything, domain, hosting, updates. You just tell me what you need and I sort it.',
    features: [
      'Development as required',
      'Domain procurement & management',
      'Hosting included',
      'Ongoing support & maintenance',
      'Monthly updates & changes',
    ],
    cta: 'Get in touch',
  },
]

export default function Packages() {
  return (
    <section id="packages" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-2">
            What I offer
          </p>
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white">Packages</h2>
          <p className="text-xs text-gray-500 mt-2">All prices in USD.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`flex flex-col rounded-2xl p-6 border transition-all duration-200 hover:-translate-y-1 hover:shadow-xl ${
                pkg.name === 'Standard'
                  ? 'bg-accent/10 border-accent/40 hover:border-accent/70 hover:shadow-accent/10'
                  : 'bg-gray-100/80 dark:bg-gray-900/50 border-black/5 dark:border-white/5 hover:border-accent/30 dark:hover:border-accent/30'
              }`}
            >

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{pkg.name}</h3>
              <div className="flex items-end gap-1 mb-3">
                <span className="text-3xl font-extrabold text-gray-900 dark:text-white">{pkg.price}</span>
                <span className="text-sm text-gray-500 mb-1">/ {pkg.period}</span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">{pkg.description}</p>
              <ul className="flex flex-col gap-2 mb-8 flex-1">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                    <svg
                      className="w-4 h-4 text-accent mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`inline-flex justify-center items-center px-5 py-2.5 rounded-xl font-semibold text-sm transition-colors ${
                  pkg.name === 'Standard'
                    ? 'bg-accent hover:bg-accent-dark text-white'
                    : 'border border-black/10 dark:border-white/10 hover:border-accent/50 text-gray-900 dark:text-white'
                }`}
              >
                {pkg.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
