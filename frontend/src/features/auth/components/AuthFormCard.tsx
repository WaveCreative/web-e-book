import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import GoogleIcon from "../../../assets/google-icon-logo-svgrepo-com.svg";
import EyeIcon from "../../../assets/eye.svg";
import EyeOffIcon from "../../../assets/eye-off.svg";

interface AuthField {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  icon: string;
  autoComplete?: string;
}

interface AuthFormCardProps {
  title: string;
  submitLabel: string;
  googleLabel?: string;
  fields: AuthField[];
  alternateLabel: string;
  alternateHref: string;
  alternateText: string;
  onSubmit: (values: Record<string, string>) => Promise<void> | void;
  onGoogleClick?: () => Promise<void> | void;
  error?: string | null;
  loading?: boolean;
}

function AuthFormCard({
  title,
  submitLabel,
  googleLabel,
  fields,
  alternateLabel,
  alternateHref,
  alternateText,
  onSubmit,
  onGoogleClick,
  error,
  loading = false,
}: AuthFormCardProps) {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const values = Array.from(formData.entries()).reduce<Record<string, string>>(
      (acc, [key, value]) => {
        acc[key] = String(value);
        return acc;
      },
      {}
    );

    await onSubmit(values);
  };

  return (
    <section className="w-full max-w-sm rounded-2xl border border-white/20 bg-white/[0.03] px-6 py-6 shadow-[0_0_0_1px_rgba(255,255,255,0.04)] backdrop-blur-sm">
      <h1 className="text-center text-xl font-semibold text-white">{title}</h1>

      {error && (
        <div className="mt-4 rounded-xl border border-red-500/30 bg-red-500/10 px-3 py-2 text-xs text-red-200">
          {error}
        </div>
      )}

      <form className="mt-6 space-y-3" onSubmit={handleSubmit}>
        {fields.map((field) => {
          const isPassword = field.type === "password";

          return (
            <label key={field.name} className="block">
              <div className="flex items-center rounded-lg border border-white bg-black/30 px-3 py-2 text-white">
                <img src={field.icon} alt="" className="mr-2 h-4 w-4 invert" />
                <input
                  name={field.name}
                  type={isPassword && showPassword ? "text" : field.type}
                  placeholder={field.placeholder}
                  autoComplete={field.autoComplete}
                  className="w-full bg-transparent text-xs text-white placeholder:text-white focus:outline-none"
                  disabled={loading}
                />
                {isPassword && (
                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="shrink-0"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    <img
                      src={showPassword ? EyeIcon : EyeOffIcon}
                      alt=""
                      className="h-4 w-4 invert opacity-60"
                    />
                  </button>
                )}
              </div>
            </label>
          );
        })}

        <Link
          to={alternateHref}
          className="flex justify-end text-[10px] text-white underline underline-offset-2"
        >
          {alternateLabel} {alternateText}
        </Link>

        <button
          type="submit"
          disabled={loading}
          className="inline-flex w-full items-center justify-center rounded-lg bg-white px-4 py-2 text-xs font-semibold text-black transition hover:bg-white/90 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {loading ? "Memproses..." : submitLabel}
        </button>
      </form>

      <div className="mt-5 flex items-center justify-center text-[10px] text-white/45">
        <span>Atau {submitLabel} dengan</span>
      </div>

      <button
        type="button"
        onClick={onGoogleClick}
        disabled={loading || !onGoogleClick}
        className="mt-4 inline-flex w-full items-center justify-center rounded-lg border border-white/20 bg-transparent px-4 py-2 text-[10px] font-medium text-white/80 transition hover:border-white/35 hover:text-white disabled:cursor-not-allowed disabled:opacity-70"
      >
        <img src={GoogleIcon} alt="" className="mr-2 h-4 w-4" />
        {googleLabel ?? `Masuk dengan Google`}
      </button>
    </section>
  );
}

export default AuthFormCard;
