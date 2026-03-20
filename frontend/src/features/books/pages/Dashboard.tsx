import AppHeader from "../../../components/layout/AppHeader";

const stats = [
  { label: "Minutes read", value: "184", note: "+12%" },
  { label: "Highlights", value: "36", note: "+4" },
  { label: "Streak", value: "7 days", note: "Keep it" },
];

const readingList = [
  {
    title: "Designing Calm",
    author: "Mira Halim",
    progress: 68,
  },
  { title: "Signal to Noise", author: "Rafi Kurnia", progress: 32 },
  { title: "Small Systems", author: "Ava Luthfi", progress: 85 },
];

const quickQueue = ["Focus Ritual", "Mindful Productivity", "Slow Notes"];

function Dashboard() {
  return (
    <div className="min-h-screen bg-slate-50">
      <AppHeader />
      <main className="mx-auto w-full max-w-6xl px-6 pb-20 pt-12">
        <div className="flex flex-col gap-2">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
            Dashboard
          </p>
          <h1 className="text-3xl font-semibold text-slate-900">
            Your reading flow
          </h1>
          <p className="text-sm text-slate-600">
            Pick up where you left off and keep the streak going.
          </p>
        </div>

        <section className="mt-8 grid gap-4 md:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                {stat.label}
              </p>
              <div className="mt-3 flex items-end justify-between">
                <p className="text-2xl font-semibold text-slate-900">
                  {stat.value}
                </p>
                <span className="rounded-full bg-emerald-100 px-2 py-1 text-xs font-semibold text-emerald-700">
                  {stat.note}
                </span>
              </div>
              <div className="mt-4 h-2 rounded-full bg-slate-100">
                <div className="h-2 w-2/3 rounded-full bg-emerald-400" />
              </div>
            </div>
          ))}
        </section>

        <section className="mt-8 grid gap-6 lg:grid-cols-[1.5fr_0.5fr]">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-900">
              Continue reading
            </h2>
            <div className="mt-6 space-y-4">
              {readingList.map((book) => (
                <div
                  key={book.title}
                  className="flex flex-col gap-4 rounded-2xl border border-slate-100 bg-slate-50 px-4 py-4 md:flex-row md:items-center md:justify-between"
                >
                  <div className="flex items-center gap-4">
                    <div className="h-16 w-12 rounded-xl bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900" />
                    <div>
                      <h3 className="text-base font-semibold text-slate-900">
                        {book.title}
                      </h3>
                      <p className="text-xs text-slate-500">{book.author}</p>
                      <div className="mt-2 h-2 w-48 rounded-full bg-slate-200">
                        <div
                          className="h-2 rounded-full bg-emerald-400"
                          style={{ width: `${book.progress}%` }}
                        />
                      </div>
                    </div>
                  </div>
                  <button className="rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold text-white hover:bg-slate-800">
                    Resume
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-sm font-semibold text-slate-900">
                Daily prompt
              </h2>
              <p className="mt-3 text-sm text-slate-600">
                What idea from today&apos;s reading will you apply this week?
              </p>
            </div>
            <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6">
              <h2 className="text-sm font-semibold text-emerald-800">
                Reading streak
              </h2>
              <p className="mt-2 text-3xl font-semibold text-emerald-900">
                7 days
              </p>
              <p className="mt-1 text-sm text-emerald-700">
                Keep the momentum going tonight.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-sm font-semibold text-slate-900">Quick queue</h2>
              <div className="mt-4 grid gap-2">
                {quickQueue.map((item) => (
                  <div
                    key={item}
                    className="flex items-center justify-between rounded-2xl bg-slate-50 px-3 py-2 text-xs text-slate-600"
                  >
                    <span>{item}</span>
                    <span className="h-2 w-8 rounded-full bg-emerald-300/70" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;
