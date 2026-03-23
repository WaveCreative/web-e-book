import { testimonials } from "../data";

function TestimonialsSection() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 pb-20">
      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((item) => (
          <div
            key={item.name}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-slate-900/10" />
              <div>
                <p className="text-sm font-semibold text-slate-900">{item.name}</p>
                <p className="text-xs text-slate-500">{item.role}</p>
              </div>
            </div>
            <p className="mt-4 text-sm text-slate-600">{item.quote}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TestimonialsSection;
