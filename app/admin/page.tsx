export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-slate-950 p-6 md:p-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-brand-300">Services</p>
            <h1 className="mt-2 text-3xl font-bold">Manage your hosting services</h1>
          </div>
          <button className="btn-primary">Add service</button>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="card-surface p-6">
            <p className="text-sm text-brand-300">Minecraft</p>
            <h3 className="mt-3 text-2xl font-bold">Survival Server</h3>
            <p className="mt-2 text-slate-300">8 GB RAM • 2 vCPU • 60 GB SSD</p>
            <button className="btn-secondary mt-6 w-full">Open panel</button>
          </div>

          <div className="card-surface p-6">
            <p className="text-sm text-violet-300">Discord</p>
            <h3 className="mt-3 text-2xl font-bold">Bot Pro</h3>
            <p className="mt-2 text-slate-300">2 GB RAM • 1 vCPU • 20 GB SSD</p>
            <button className="btn-secondary mt-6 w-full">Open panel</button>
          </div>

          <div className="card-surface p-6">
            <p className="text-sm text-emerald-300">Telegram</p>
            <h3 className="mt-3 text-2xl font-bold">Operations Bot</h3>
            <p className="mt-2 text-slate-300">1 GB RAM • 1 vCPU • 10 GB SSD</p>
            <button className="btn-secondary mt-6 w-full">Open panel</button>
          </div>
        </div>
      </div>
    </main>
  );
}
