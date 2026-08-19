import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { AiFillPlusCircle, AiOutlinePlusCircle} from "react-icons/ai";
import { TbGiftFilled } from "react-icons/tb";
import { faqs } from "../../../data/faqs";

function FAQ() {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggleFAQ = (id: number) => {
    setOpenId((currentId) => (currentId === id ? null : id));
  };

  return (
    <section className="px-4 py-12 text-white sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-(--primary) sm:text-xs">
            {"• FAQ •"}
          </p>

          <h2 className="text-xl font-bold sm:text-2xl lg:text-3xl">
            Pertanyaan yang Sering Ditanyakan
          </h2>

          <p className="mx-auto mt-2 max-w-2xl text-xs sm:text-sm leading-relaxed text-(--highemphasis)/60">
            Temukan jawaban dari pertanyaan yang sering diajukan oleh pengguna
            Ebook.com
          </p>
        </div>

        {/* Main Content */}
        <div className="mt-8 grid items-center gap-8 sm:mt-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
          {/* Image */}
          <div className="relative flex min-h-72 items-center justify-center sm:min-h-80 lg:min-h-96">
              <img src="https://res.cloudinary.com/dgffa1m7j/image/upload/v1784876170/copy_of_asset_3d_vjomf2-removebg-preview_sldeaf.png" 
                   alt="icon" className="absolute -top-4 right-14 h-25 w-25 object-cover"
              />
              <img src="https://res.cloudinary.com/dgffa1m7j/image/upload/v1782797688/img_3d_at7pmj.svg" alt="FAQ Image" className="h-full w-full object-cover" />
          </div>

          {/* FAQ List */}
          <div className="space-y-3">
            {faqs.map((faq) => {
              const isOpen = openId === faq.id;

              return (
                <article
                  key={faq.id}
                  className={`overflow-hidden rounded-lg border transition-colors duration-300 ${
                    isOpen
                      ? "border-(--primary) bg-(--highemphasis)/5"
                      : "border-transparent bg-(--highemphasis)/5"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFAQ(faq.id)}
                    className="flex w-full items-center gap-3 px-3 py-3 text-left sm:px-4 sm:py-4"
                  >
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center transition-colors duration-300 ${
                        isOpen
                          ? "text-(--primary)/90"
                          : "text-(--primary)"
                      }`}
                    >
                      {isOpen ? (
                        <AiFillPlusCircle className="h-24 w-24" />
                      ) : (
                        <AiOutlinePlusCircle className="h-24 w-24" />
                      )}
                    </span>

                    <span className="flex-1 text-xs font-medium sm:text-sm">
                      {faq.question}
                    </span>

                    <ChevronDown
                      className={`h-3.5 w-3.5 shrink-0 text-(--highemphasis)/50 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-3 pb-4 pl-13 text-xs leading-relaxed text-(--highemphasis)/60 sm:px-4 sm:pb-4 sm:pl-15">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* Newsletter Banner */}
        <div className="mt-8 flex flex-col gap-4 rounded-lg border border-(--primary)/40 bg-(--highemphasis)/5 px-3 py-2 sm:mt-10 sm:flex-row sm:items-center sm:justify-between sm:px-4 sm:py-5">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-(--primary)/50 bg-(--primary)/10">
              <TbGiftFilled className="h-6 w-6 text-(--primary)" />
            </div>

            <div>
              <h3 className="text-sm font-semibold">
                Dapatkan update terbaru seputar ebook dan fitur baru!
              </h3>

              <p className="mt-1 text-xs text-(--highemphasis)/60">
                Berlangganan newsletter kami sekarang.
              </p>
            </div>
          </div>

          <div className="flex relative w-full z-1 gap-2 sm:w-auto">
            <input
              type="email"
              placeholder="Masukkan email kamu"
              className="min-w-0 flex-1 z-2 rounded-md border border-(--highemphasis)/20 bg-black mr-23 px-3 py-2.5 text-[10px] text-white outline-none placeholder:text-(--highemphasis)/40 focus:border-(--primary) sm:w-40"
            />

            <button
              type="button"
              className="absolute right-2 -top-px flex items-center cursor-pointer gap-2 z-10 rounded-md bg-(--primary) px-3 py-3 text-[10px] font-semibold text-black transition hover:opacity-80"
            >
              Berlangganan
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQ;