import { useState, type FormEvent } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FiUser,
  FiMail,
  FiLock,
  FiEye,
  FiEyeOff,
} from "react-icons/fi";
import {
  FcGoogle
} from "react-icons/fc";
import {
  FaFacebookF,
  FaApple
} from "react-icons/fa";

interface AuthField {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  autoComplete?: string;
}

interface AuthFormCardProps {
  title: string;
  description: string;
  submitLabel: string;
  fields: AuthField[];
  alternateLabel: string;
  alternateHref: string;
  alternateText: string;
  loading?: boolean;
  error?: string | null;
  onSubmit: (values: Record<string, string>) => Promise<void> | void;
}

function AuthFormCard({
  title,
  description,
  submitLabel,
  fields,
  alternateHref,
  alternateLabel,
  alternateText,
  loading = false,
  error,
  onSubmit,
}: AuthFormCardProps) {
  const location = useLocation();

  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (
    e: FormEvent<HTMLFormElement>,
  ) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);

    const values = Object.fromEntries(
      form.entries(),
    ) as Record<string, string>;

    await onSubmit(values);
  };

  const renderIcon = (name: string) => {
    switch (name) {
      case "name":
        return <FiUser size={18} />;

      case "email":
        return <FiMail size={18} />;

      case "password":
        return <FiLock size={18} />;

      default:
        return <FiUser size={18} />;
    }
  };

  return (
    <div className="w-full">

      <h2 className="text-2xl text-center font-bold">
        {title}
      </h2>

      <p className="mt-3 text-sm text-center leading-6 text-white">
        {description}
      </p>

      {/* Tabs */}

      <div className="mt-10 w-90 mx-auto flex rounded-xl border border-(--border)/20 bg-white/5 p-1">

        <Link
          to="/login"
          className={`flex-1 rounded-lg py-3 text-center text-sm transition ${
            location.pathname === "/login"
              ? "bg-(--mediumemphasis) font-semibold text-white"
              : "text-white/60"
          }`}
        >
          Sign In
        </Link>

        <Link
          to="/signup"
          className={`flex-1 rounded-lg py-3 text-center text-sm transition ${
            location.pathname === "/signup"
              ? "bg-(--mediumemphasis) font-semibold text-white"
              : "text-white/60"
          }`}
        >
          Sign Up
        </Link>

      </div>

      {error && (
        <div className="mt-5 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
          {error}
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="mt-8 space-y-5"
      >

        {fields.map((field) => {

          const isPassword =
            field.type === "password";

          return (
            <div key={field.name}>

              <label>
                <span className="mb-2 block text-sm font-medium text-white/60">
                  {field.label}
                </span>
              </label>

              <div className="flex items-center rounded-2xl border border-white/10 bg-white/5 px-5 py-4">

                <span className="mr-4 text-white/50">
                  {renderIcon(field.name)}
                </span>
                
                <input
                  name={field.name}
                  type={
                    isPassword
                      ? showPassword
                        ? "text"
                        : "password"
                      : field.type
                  }
                  placeholder={field.placeholder}
                  autoComplete={field.autoComplete}
                  disabled={loading}
                  className="flex-1 bg-transparent text-sm outline-none placeholder:text-white/35"
                />

                {isPassword && (
                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword(!showPassword)
                    }
                  >
                    {showPassword ? (
                      <FiEyeOff
                        size={18}
                        className="text-white/50"
                      />
                    ) : (
                      <FiEye
                        size={18}
                        className="text-white/50"
                      />
                    )}
                  </button>
                )}

              </div>

            </div>
          );
        })}

        <div className="flex justify-end">

          <button
            type="button"
            className="text-xs text-(--primary) hover:underline"
          >
            Lupa Password?
          </button>

        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-2xl bg-(--primary) py-4 text-sm font-semibold text-black transition hover:opacity-90"
        >
          {loading ? "Loading..." : submitLabel}
        </button>

      </form>

      <div className="my-8 flex items-center gap-3">

        <div className="h-px flex-1 bg-white/10" />

        <span className="text-xs text-white/40">
          atau lanjut dengan
        </span>

        <div className="h-px flex-1 bg-white/10" />

      </div>

      <div className="flex gap-4">

        <button className="flex h-14 flex-1 items-center justify-center rounded-2xl border border-white/10 bg-white/5 transition hover:border-(--primary)">
          <FcGoogle size={24} />
        </button>

        <button className="flex h-14 flex-1 items-center justify-center rounded-2xl border border-white/10 bg-white/5 transition hover:border-(--primary)">
          <FaFacebookF
            size={20}
            className="text-blue-500"
          />
        </button>

        <button className="flex h-14 flex-1 items-center justify-center rounded-2xl border border-white/10 bg-white/5 transition hover:border-(--primary)">
          <FaApple size={22} />
        </button>

      </div>

      <p className="mt-8 text-center text-sm text-white/50">

        {alternateLabel}{" "}

        <Link
          to={alternateHref}
          className="font-semibold text-(--primary)"
        >
          {alternateText}
        </Link>

      </p>

    </div>
  );
}

export default AuthFormCard;