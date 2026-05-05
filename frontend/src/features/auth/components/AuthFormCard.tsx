import { Link } from "react-router-dom";
import {useState} from "react";
import GoogleIcon from "../../../assets/google-icon-logo-svgrepo-com.svg";
import EyeIcon from "../../../assets/eye.svg";
import EyeOffIcon from "../../../assets/eye-off.svg";

interface AuthField {
  label: string;
  type: string;
  placeholder: string;
  icon: any;
}

interface AuthFormCardProps {
  title: string;
  submitLabel: string;
  googleLabel?: string;
  fields: AuthField[];
  alternateLabel: string;
  alternateHref: string;
  alternateText: string;
}

function AuthFormCard({
  title,
  submitLabel,
  googleLabel,
  fields,
  alternateLabel,
  alternateHref,
}: AuthFormCardProps) {
  return (
    <section className="w-full max-w-sm rounded-2xl border border-white/20 bg-white/[0.03] px-6 py-6 shadow-[0_0_0_1px_rgba(255,255,255,0.04)] backdrop-blur-sm">
      <h1 className="text-center text-xl font-semibold text-white">{title}</h1>

      <form className="mt-6 space-y-3">
        {fields.map((field) => {
          const Icon = field.icon;
          const isPassword = field.type === "password";
          const [showPassword, setShowPassword] = useState(false);
          return (
          <label key={field.label} className="block">
            <div className="flex items-center rounded-lg border border-white bg-black/30 px-3 py-2 text-white">
              {Icon && <img src={Icon} className="mr-2 invert h-4 w-4" /> }
              <input
                type= { isPassword && showPassword ? "text" : field.type }
                placeholder={field.placeholder}
                className="w-full bg-transparent text-xs text-white placeholder:text-white focus:outline-none"
              />
              {isPassword && (
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="shrink-0"
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

      <Link to={alternateHref} className="flex text-center justify-end text-[10px] text-white underline underline-offset-2">
        {alternateLabel}{" "}
      </Link>

        <button
          type="submit"
          className="inline-flex w-full items-center justify-center rounded-lg bg-white px-4 py-2 text-xs font-semibold text-black transition hover:bg-white/90"
        >
          {submitLabel}
        </button>
      </form>

        <div className="flex mt-5 items-center justify-center text-[10px] text-white/45">
          <span>Atau {submitLabel} dengan</span>
        </div>

      <button
        type="button"
        className="mt-4 inline-flex w-full items-center justify-center rounded-lg border border-white/20 bg-transparent px-4 py-2 text-[10px] font-medium text-white/80 transition hover:border-white/35 hover:text-white"
      >
        <img src={GoogleIcon} className="mr-2 h-4 w-4" />
        {googleLabel}
      </button>
    </section>
  );
}

export default AuthFormCard;
