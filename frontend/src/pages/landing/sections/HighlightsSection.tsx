import { highlights } from "../data";

function HighlightsSection() {
  return (
    <section id="features" className="mx-auto w-full max-w-6xl px-6 pb-20">
      <div className="grid gap-6 md:grid-cols-3">
        {highlights.map((item) => (
          <div
            key={item.title}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-900/5"
          >
            <div className="mb-4 h-10 w-10 rounded-2xl bg-slate-900/10" />
            <h3 className="text-lg font-semibold text-slate-900">
              {item.title}
            </h3>
            <p className="mt-2 text-sm text-slate-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HighlightsSection;
