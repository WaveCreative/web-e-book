import { ReactNode } from "react";
import type { AuthUser } from "../../../app/providers";
import ProfileSidebar from "./ProfileSidebar";

interface ProfileShellProps {
  user: AuthUser;
  children: ReactNode;
}

function ProfileShell({ user, children }: ProfileShellProps) {
  return (
    <div className="relative min-h-screen text-white">
      <div className="pointer-events-none absolute -left-24 -top-24 h-125 w-125 rounded-full bg-linear-to-tl from-white/10 to-transparent" />
      <ProfileSidebar user={user} />

      <main className="min-w-0 px-4 pt-26 md:pl-86 md:pr-6 lg:pl-92 lg:pr-8">
        <div className="mx-auto w-full max-w-6xl min-w-0">{children}</div>
      </main>
    </div>
  );
}

export default ProfileShell;

