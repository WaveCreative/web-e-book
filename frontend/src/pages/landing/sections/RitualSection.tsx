import { ritualSteps } from "../data";

function RitualSection() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 pb-20">
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:p-10">
        <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
              Ritual flow
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-slate-900">
              A simple path from preview to progress.
            </h2>
            <p className="mt-3 text-sm text-slate-600">
              Guests can sample the catalog. Login unlocks streaks, notes, and
              community circles.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {ritualSteps.map((step) => (
                <div
                  key={step}
                  className="flex items-center gap-3 rounded-2xl bg-slate-50 p-3 text-sm text-slate-600"
                >
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  {step}
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-4">
            <div className="rounded-3xl bg-slate-900 p-6 text-white">
              <p className="text-xs uppercase tracking-[0.2em] text-emerald-200">
                Next session
              </p>
              <h3 className="mt-2 text-xl font-semibold">Evening focus</h3>
              <p className="mt-3 text-sm text-slate-200">
                3 chapters queued - 45 minutes
              </p>
              <div className="mt-4 flex gap-2">
                {Array.from({ length: 6 }).map((_, index) => (
                  <span
                    key={index}
                    className="h-2 w-6 rounded-full bg-emerald-300/60"
                  />
                ))}
              </div>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                Progress snapshot
              </p>
              <div className="mt-4 grid grid-cols-3 gap-3 text-center">
                {["32%", "18%", "78%"].map((value) => (
                  <div
                    key={value}
                    className="rounded-2xl bg-slate-50 py-4 text-sm font-semibold text-slate-900"
                  >
                    {value}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RitualSection;
