import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface AuthShellProps {
  children: ReactNode;
}

const AUTH_IMAGE =
  "https://res.cloudinary.com/YOUR_CLOUD/image/upload/v123456/auth-illustration.webp";

function AuthShell({ children }: AuthShellProps) {
  return (
    <section className="min-h-screen bg-black text-white">
      <div className="mx-auto flex min-h-screen max-w-7xl items-center justify-between gap-16 px-8 lg:px-16">

        {/* LEFT */}
        <Link to="/" className="absolute left-8 top-8 text-2xl font-bold tracking-wide">
          Ebook.com
        </Link>

        <div className="flex w-full mt-24 max-w-md flex-col">
          {children}
        </div>

        {/* RIGHT */}

        <div className="hidden flex-1 items-center justify-center lg:flex">

          <img
            src={AUTH_IMAGE}
            alt="Auth Illustration"
            className="h-auto w-full max-w-2xl object-contain select-none"
            draggable={false}
          />

        </div>

      </div>
    </section>
  );
}

export default AuthShell;