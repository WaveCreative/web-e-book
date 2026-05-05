import { ReactNode } from "react";

interface AuthShellProps {
  children: ReactNode;
}

function AuthShell({ children }: AuthShellProps) {
  return (
    <div className="min-h-screen bg-black text-white">
      <main className="mx-auto flex w-full max-w-6xl items-center justify-center px-6 py-45 md:py-30">
        {children}
      </main>
    </div>
  );
}

export default AuthShell;
