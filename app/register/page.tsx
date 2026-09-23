export default function RegisterPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-4">
      <div className="w-full max-w-md rounded-3xl border border-slate-800 bg-slate-900/80 p-8 shadow-soft">
        <div className="mb-8 text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-500 font-bold text-white">S</div>
          <h1 className="mt-5 text-3xl font-bold">Create account</h1>
          <p className="mt-2 text-slate-400">Start managing your hosting infrastructure</p>
        </div>

        <form className="space-y-5">
          <div>
            <label className="mb-2 block text-sm text-slate-300">Full name</label>
            <input type="text" className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none ring-0 transition focus:border-brand-400" placeholder="Jane Doe" />
          </div>

          <div>
            <label className="mb-2 block text-sm text-slate-300">Email</label>
            <input type="email" className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none ring-0 transition focus:border-brand-400" placeholder="you@example.com" />
          </div>

          <div>
            <label className="mb-2 block text-sm text-slate-300">Password</label>
            <input type="password" className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none ring-0 transition focus:border-brand-400" placeholder="••••••••" />
          </div>

          <button type="submit" className="btn-primary w-full">Create account</button>
        </form>

        <p className="mt-6 text-center text-sm text-slate-400">
          Already registered? <a href="/login" className="text-brand-300">Sign in</a>
        </p>
      </div>
    </main>
  );
}
