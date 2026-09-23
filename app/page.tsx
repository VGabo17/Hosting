const services = [
  {
    title: 'Minecraft Hosting',
    description: 'High-performance game servers with instant deployment, DDoS protection, and automatic backups.',
    accent: 'from-brand-500 to-sky-400',
  },
  {
    title: 'Discord Bots',
    description: 'Hosting for moderation, ticketing, economy, notifications, and automation bots.',
    accent: 'from-violet-500 to-indigo-500',
  },
  {
    title: 'Telegram Bots',
    description: 'Deploy community bots, utility tools, notifications, and customer service integrations.',
    accent: 'from-emerald-500 to-teal-400',
  },
];

const stats = [
  { value: '99.9%', label: 'Uptime SLA' },
  { value: '24/7', label: 'Monitoring' },
  { value: '3x', label: 'Faster deployments' },
  { value: '1-click', label: 'Scaling' },
];

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <header className="container-shell py-6">
        <nav className="flex items-center justify-between rounded-full border border-slate-800 bg-slate-900/60 px-5 py-3 backdrop-blur">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-500 font-bold text-white">S</div>
            <div>
              <p className="text-lg font-semibold">SynHosting</p>
            </div>
          </div>

          <div className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            <a href="#features">Features</a>
            <a href="#services">Services</a>
            <a href="#pricing">Pricing</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="flex items-center gap-3">
            <a href="/login" className="btn-secondary">Login</a>
            <a href="/register" className="btn-primary">Start now</a>
          </div>
        </nav>
      </header>

      <section className="container-shell pb-16 pt-10 md:pb-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <div className="mb-6 inline-flex rounded-full border border-brand-500/30 bg-brand-500/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-brand-200">
              Premium hosting platform
            </div>
            <h1 className="max-w-xl text-4xl font-black leading-tight tracking-tight text-white md:text-6xl">
              Build and scale your next hosting business.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-slate-300">
              Deploy Minecraft servers, Discord bots and Telegram automation services from a single premium SaaS platform.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href="/register" className="btn-primary">Create account</a>
              <a href="#services" className="btn-secondary">Explore services</a>
            </div>

            <div className="mt-10 flex flex-wrap gap-6 text-sm text-slate-400">
              <span>Instant provisioning</span>
              <span>Automated backups</span>
              <span>Global infrastructure</span>
            </div>
          </div>

          <div className="card-surface p-6">
            <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div>
                  <p className="text-sm text-slate-400">Live resources</p>
                  <h3 className="mt-1 text-2xl font-bold">Server health</h3>
                </div>
                <div className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-semibold text-emerald-300">Online</div>
              </div>

              <div className="mt-6 space-y-4">
                <div className="flex items-center justify-between rounded-xl bg-slate-900 p-4">
                  <span className="text-slate-300">Minecraft Cluster</span>
                  <span className="font-semibold text-emerald-300">98.8%</span>
                </div>
                <div className="flex items-center justify-between rounded-xl bg-slate-900 p-4">
                  <span className="text-slate-300">Discord Bot Core</span>
                  <span className="font-semibold text-brand-300">99.4%</span>
                </div>
                <div className="flex items-center justify-between rounded-xl bg-slate-900 p-4">
                  <span className="text-slate-300">Telegram API Nodes</span>
                  <span className="font-semibold text-violet-300">99.6%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="container-shell py-20">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-300">Why SynHosting</p>
          <h2 className="mt-4 text-3xl font-bold md:text-4xl">Everything needed for a modern hosting stack</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="card-surface p-6 text-center">
              <p className="text-3xl font-black text-brand-400">{stat.value}</p>
              <p className="mt-2 text-slate-300">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="services" className="container-shell py-20">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-300">Service catalog</p>
          <h2 className="mt-4 text-3xl font-bold md:text-4xl">Built for different communities and automations</h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {services.map((service) => (
            <div key={service.title} className="card-surface overflow-hidden p-0">
              <div className={`h-2 w-full bg-gradient-to-r ${service.accent}`} />
              <div className="p-6">
                <h3 className="text-2xl font-bold">{service.title}</h3>
                <p className="mt-4 text-slate-300">{service.description}</p>
                <div className="mt-6 flex items-center justify-between text-sm text-slate-400">
                  <span>High availability</span>
                  <span>•</span>
                  <span>Fast setup</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="pricing" className="container-shell py-20">
        <div className="card-surface p-8 md:p-12">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-300">Launch faster</p>
              <h2 className="mt-4 text-3xl font-bold">A premium product ready for your customers</h2>
              <p className="mt-4 text-slate-300">
                SynHosting is designed for flexibility, client management, and infrastructure growth.
              </p>
            </div>
            <div className="rounded-2xl border border-brand-500/30 bg-brand-500/10 p-6">
              <p className="text-sm text-brand-200">MVP foundation</p>
              <div className="mt-3 flex items-end gap-2">
                <span className="text-4xl font-black">From $10</span>
                <span className="pb-1 text-slate-300">/ month</span>
              </div>
              <button className="btn-primary mt-6 w-full">Get started</button>
            </div>
          </div>
        </div>
      </section>

      <footer id="contact" className="container-shell pb-16 pt-10">
        <div className="flex flex-col items-center justify-between gap-4 border-t border-slate-800 py-8 md:flex-row">
          <p className="text-sm text-slate-400">© 2026 SynHosting</p>
          <div className="flex gap-6 text-sm text-slate-300">
            <a href="/login">Login</a>
            <a href="/register">Register</a>
            <a href="mailto:hello@synhosting.example">hello@synhosting.example</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
