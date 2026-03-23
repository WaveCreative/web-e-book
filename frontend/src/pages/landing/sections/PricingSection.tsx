import { Link } from "react-router-dom";

function PricingSection() {
  return (
    <section id="pricing" className="mx-auto w-full max-w-6xl px-6 pb-24">
      <div className="rounded-3xl border border-slate-200 bg-slate-900 p-8 text-white md:p-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-emerald-200">
              Starter plan
            </p>
            <h2 className="mt-2 text-3xl font-semibold">Unlock the full library.</h2>
            <p className="mt-3 text-sm text-slate-200">
              Login to enable bookmarks, sync across devices, and join reading
              circles.
            </p>
          </div>
          <Link
            to="/login"
            className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900"
          >
            Get started
          </Link>
        </div>
      </div>
    </section>
  );
}

export default PricingSection;
