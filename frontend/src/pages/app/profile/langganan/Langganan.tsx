import { langgananData } from "../../../../data/langganan";
import {Link} from "react-router-dom";

function Langganan() {
  return (
    <section className="mt-8">
      <div className="grid gap-6 lg:grid-cols-2">
        {langgananData.map((item) => {

          return (
            <article
              key={item.id}
              className="rounded-lg bg-[linear-gradient(135deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-6 backdrop-blur-sm"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {item.title}
                  </h3>

                  <div className="mt-2 flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-(--primary)" />

                    <span
                      className={`text-sm font-medium ${
                        item.status === "Premium"
                          ? "text-(--primary)"
                          : "text-(--primary)"
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>

                  <p className="mt-2 max-w-md text-sm leading-relaxed text-white">
                    {item.description}
                  </p>
                </div>
              </div>

              {item.canUpgrade && (
                <div className="mt-2 flex justify-end">
                  <Link to="/landing#subscription"
                    className="rounded-xl cursor-pointer bg-(--primary)/80 px-5 py-2 text-sm font-medium text-black transition hover:opacity-90"
                  >
                    {item.buttonLabel}
                  </Link>
                </div>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Langganan;