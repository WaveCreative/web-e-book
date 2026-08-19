import type { ReactNode } from "react";
import type { AuthUser } from "../../../app/providers";
import ProfileShell from "./ProfileShell";

interface ProfileStubProps {
  user: AuthUser;
  logo: string | React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  icon: string;
  children?: ReactNode;
}

function ProfileStub({ user, logo, title, icon, children }: ProfileStubProps) {
  const Logo = logo;

  return (
    <ProfileShell user={user}>
      <section>
        <div className="flex items-center gap-2">
        {typeof logo === "string" ? (
          <p>{logo}</p>
        ) : (
          <Logo className="h-4 w-4 text-(--primary)"/>
        )}

        <p className="text-sm text-(--primary)">{icon}</p>
        </div>
        <h1 className="mt-2 text-2xl font-semibold">{title}</h1>
        {children}
      </section>
    </ProfileShell>
  );
}
export default ProfileStub;

