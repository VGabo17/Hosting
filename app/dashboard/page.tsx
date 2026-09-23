const cards = [
  { label: 'Active services', value: '12' },
  { label: 'Revenue', value: '$2,480' },
  { label: 'Pending tasks', value: '4' },
  { label: 'Uptime', value: '99.9%' },
];

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-slate-950 p-6 md:p-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-brand-300">Client dashboard</p>
            <h1 className="mt-2 text-3xl font-bold">Overview</h1>
          </div>
          <a href="/" className="btn-secondary">Visit site</a>
        </div>

        <div className="grid gap-6 md:grid-cols-4">
          {cards.map((item) => (
            <div key={item.label} className="card-surface p-6">
              <p className="text-sm text-slate-400">{item.label}</p>
              <p className="mt-4 text-3xl font-black text-white">{item.value}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="card-surface p-6">
            <h2 className="text-xl font-bold">Recent services</h2>
            <div className="mt-6 space-y-4">
              <div className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950 p-4">
                <span className="font-medium">Minecraft Premium</span>
                <span className="text-emerald-300">Active</span>
              </div>
              <div className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950 p-4">
                <span className="font-medium">Discord Bot Pro</span>
                <span className="text-brand-300">Running</span>
              </div>
              <div className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950 p-4">
                <span className="font-medium">Telegram Ops Bot</span>
                <span className="text-violet-300">Deploying</span>
              </div>
            </div>
          </div>

          <div className="card-surface p-6">
            <h2 className="text-xl font-bold">Resource usage</h2>
            <div className="mt-6 space-y-5">
              <div>
                <div className="mb-2 flex justify-between text-sm"><span>CPU</span><span>62%</span></div>
                <div className="h-2 rounded-full bg-slate-800"><div className="h-2 w-[62%] rounded-full bg-brand-500" /></div>
              </div>
              <div>
                <div className="mb-2 flex justify-between text-sm"><span>RAM</span><span>71%</span></div>
                <div className="h-2 rounded-full bg-slate-800"><div className="h-2 w-[71%] rounded-full bg-violet-500" /></div>
              </div>
              <div>
                <div className="mb-2 flex justify-between text-sm"><span>Storage</span><span>48%</span></div>
                <div className="h-2 rounded-full bg-slate-800"><div className="h-2 w-[48%] rounded-full bg-emerald-500" /></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
