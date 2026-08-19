import type { ReactNode } from "react";
import { useAuth } from "../../../app/providers";
import ProfileStub from "./ProfileStub";

interface ProfileSectionPageProps {
  logo: string | React.ComponentType<React.SVGProps<SVGSVGElement>>;
  icon:  string;
  title: string;
  children?: ReactNode;
}

function ProfileSectionPage({ logo, title, icon, children }: ProfileSectionPageProps) {
  const { user } = useAuth();

  if (!user) {
    return null;
  }

  return (
    <ProfileStub user={user} logo={logo} title={title} icon={icon}>
      {children}
    </ProfileStub>
  );
}

export default ProfileSectionPage;
