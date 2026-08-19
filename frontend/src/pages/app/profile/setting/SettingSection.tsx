import { useState } from "react";
import { useAuth } from "../../../../app/providers";

function SettingSection() {
  const { logout } = useAuth();
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [fontSize, setFontSize] = useState<16 | 20>(16);

  const [emailNotification, setEmailNotification] = useState(true);
  const [newsNotification, setNewsNotification] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const handleLogout = async () => {
    setIsLoggingOut(true);

    try {
      await logout();
    } finally {
      setIsLoggingOut(false);
    }
  };

  return (
    <section className="space-y-8 mb-16">

      {/* Preferensi Baca */}

      <div>
        <h2 className="text-lg font-semibold text-(--highemphasis)">
          Preferensi Baca
        </h2>

        <div className="mt-6 space-y-4">

          <div className="flex items-center justify-between">

            <div>
              <h3 className="text-sm font-medium text-(--highemphasis)">
                Tema
              </h3>
            </div>

            <div className="flex rounded-xl border border-white/20 p-1">

              <button
                onClick={() => setTheme("light")}
                className={`cursor-pointer rounded-lg px-8 py-2 text-sm transition ${
                  theme === "light"
                    ? "bg-(--primary) text-black"
                    : "text-(--highemphasis)/60"
                }`}
              >
                Terang
              </button>

              <button
                onClick={() => setTheme("dark")}
                className={`cursor-pointer rounded-lg px-8 py-2 text-sm transition ${
                  theme === "dark"
                    ? "bg-(--primary) text-black"
                    : "text-(--highemphasis)/60"
                }`}
              >
                Gelap
              </button>

            </div>

          </div>

          <div className="flex items-center justify-between">

            <div>
              <h3 className="text-sm font-medium text-(--highemphasis)">
                Ukuran Teks
              </h3>
            </div>

            <div className="flex rounded-xl border border-white/20 p-1">

              <button
                onClick={() => setFontSize(16)}
                className={`cursor-pointer rounded-lg px-6 py-2 text-sm transition ${
                  fontSize === 16
                    ? "bg-(--primary) text-black"
                    : "text-(--highemphasis)/60"
                }`}
              >
                16px
              </button>

              <button
                onClick={() => setFontSize(20)}
                className={`cursor-pointer rounded-lg px-6 py-2 text-sm transition ${
                  fontSize === 20
                    ? "bg-(--primary) text-black"
                    : "text-(--highemphasis)/60"
                }`}
              >
                20px
              </button>

            </div>

          </div>

        </div>
      </div>

      {/* Notifikasi */}

      <div>

        <h2 className="text-lg font-semibold text-(--highemphasis)">
          Notifikasi
        </h2>

        <div className="mt-8 space-y-4">

          <div className="flex items-center justify-between">

            <div>
              <h3 className="text-sm font-medium text-(--highemphasis)">
                Email
              </h3>

            </div>

            <button
              onClick={() => setEmailNotification(!emailNotification)}
              className={`relative h-7 w-14 cursor-pointer rounded-full transition ${
                emailNotification
                  ? "bg-(--primary)"
                  : "border border-white/20"
              }`}
            >
              <span
                className={`absolute top-1 h-5 w-5 rounded-full bg-(--primary) transition-all ${
                  emailNotification ? "right-1" : "left-1"
                }`}
              />
            </button>

          </div>

          <div className="flex items-center justify-between">

            <div>
              <h3 className="text-sm font-medium text-(--highemphasis)">
                Berita Terbaru
              </h3>

            </div>

            <button
              onClick={() => setNewsNotification(!newsNotification)}
              className={`relative h-7 w-14 cursor-pointer rounded-full transition ${
                newsNotification
                  ? "bg-(--primary)"
                  : "border border-white/20"
              }`}
            >
              <span
                className={`absolute top-1 h-5 w-5 rounded-full bg-(--primary) transition-all ${
                  newsNotification ? "right-1" : "left-1"
                }`}
              />
            </button>

          </div>

        </div>

      </div>
      
      {/* logout */}
      <div className="w-full">
        <button
          type="button"
          onClick={handleLogout}
          disabled={isLoggingOut}
          className="flex w-full items-center justify-center rounded-lg border border-(--error) px-6 py-3 text-sm font-medium text-(--error) transition hover:bg-(--error) hover:text-white cursor-pointer disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isLoggingOut ? "Keluar..." : "Logout"}
        </button>
      </div>
    </section>
  );
}

export default SettingSection;
