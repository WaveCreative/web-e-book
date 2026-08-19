import { subscriptionPlans } from "../../../data/subscriptions";

function Subscription() {
  return (
    <section className="px-4 py-12 text-white sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-(--primary) sm:text-xs">
            {"• Subscription •"}
          </p>

          <h2 className="text-xl font-bold sm:text-2xl lg:text-3xl">
            Subscription
          </h2>

          <p className="mx-auto mt-2 max-w-2xl text-xs leading-relaxed text-(--highemphasis)/60 sm:text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            scelerisque nulla eu.
          </p>
        </div>

        {/* Plans */}
        <div className="mx-auto mt-10 grid max-w-xl sm:max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3 sm:items-start sm:gap-3 lg:gap-4">
          {subscriptionPlans.map((plan) => (
            <article
              key={plan.id}
              className={`relative rounded-tr-lg rounded-b-lg bg-(--highemphasis)/3 p-3 ${
                plan.popular
                  ? "border border-(--primary) mt-6 sm:mt-0"
                  : "border border-transparent rounded-t-lg"
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-6 -left-px right-0 rounded-t-lg bg-(--primary) w-33 py-1 text-center text-xs font-semibold uppercase text-black">
                  Populer
                </div>
              )}

              {/* Plan Name */}
              <div className="mb-3">
                <span className="inline-flex rounded-md border border-(--primary)/70 px-6 py-2 text-xs text-(--primary) sm:text-xs">
                  {plan.name}
                </span>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-1">
                <h3 className="text-lg font-bold sm:text-xl">
                  {plan.title}
                </h3>

                {plan.period && (
                  <span className="text-sm text-(--highemphasis)/50 sm:text-md">
                    {plan.period}
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="mt-2 min-h-7 text-xs leading-relaxed text-(--highemphasis) sm:text-xs">
                {plan.description}
              </p>

              {/* Button */}
              <button
                type="button"
                className="mt-3 w-full cursor-pointer rounded-md bg-(--primary)/80 px-3 py-2 text-xs font-medium text-black transition hover:opacity-80 sm:text-sm"
              >
                {plan.buttonLabel}
              </button>

              {/* Benefits */}
              <div className="mt-5">
                <p className="mb-4 text-xs font-medium sm:text-sm">
                  Benefit yang diperoleh :
                </p>

                <ul className="space-y-4">
                  {plan.benefits.map((benefit) => {
                    const Icon = benefit.icon;

                    return (
                      <li
                        key={benefit.id}
                        className={`flex items-center gap-2 text-xs sm:text-xs ${
                          benefit.available
                            ? "text-(--highemphasis)/80"
                            : "text-(--highemphasis)/40"
                        }`}
                      >
                        <Icon
                          className={`h-4 w-4 shrink-0 ${
                            benefit.available
                              ? "text-(--primary)"
                              : "text-(--highemphasis)/50"
                          }`}
                          fill={
                            benefit.available
                              ? "currentColor"
                              : "currentColor"
                          }
                        />

                        <span>{benefit.label}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Subscription;