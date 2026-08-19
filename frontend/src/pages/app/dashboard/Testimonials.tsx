import { Star } from "lucide-react";
import { testimonials } from "../../../data/testimonials";

function Testimonials() {
  return (
    <section className=" px-4 py-12 text-white sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-2 text-[7px] font-semibold uppercase tracking-[0.25em] text-(--primary) sm:text-xs">
            {"• Testimoni •"}
          </p>

          <h2 className="text-xl font-bold sm:text-2xl lg:text-3xl">
            Apa kata pembaca?
          </h2>

          <p className="mx-auto mt-2 max-w-2xl text-xs sm:text-sm leading-relaxed text-(--highemphasis)/60">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            scelerisque nulla eu.
          </p>
        </div>

        {/* Testimonials */}
        <div className="mx-auto mt-8 grid max-w-4xl grid-cols-1 gap-3 sm:mt-10 sm:grid-cols-2 sm:gap-4">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.id}
              className="rounded-lg bg-(--highemphasis)/5 p-4 sm:p-5"
            >
              <p className="text-xs text-justify leading-relaxed text-(--highemphasis)/80">
                “{testimonial.message}”
              </p>

              <div className="mt-4 flex items-center justify-between gap-4">
                <h3 className="text-sm sm:text-md font-semibold">
                  {testimonial.name}
                </h3>

                <div className="flex items-center gap-1">
                  <div className="flex items-center gap-2 text-(--accent1)">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star
                        key={index}
                        className="h-4 w-4"
                        fill="currentColor"
                      />
                    ))}
                  </div>

                  <span className="text-xs text-(--highemphasis)/80">
                    {testimonial.rating}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;