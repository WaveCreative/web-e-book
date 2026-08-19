import { useAuth } from "../../../app/providers";
import ProfileShell from "./ProfileShell";
import ProfileStats from "./ProfileStats";
import RecommendedBooksRow from "./RecommendedBooksRow";

function Profile() {
  const { user } = useAuth();

  if (!user) {
    return null;
  }

  return (
    <ProfileShell user={user}>
      <section className="space-y-6">
        <div className="pt-1">
          <h1 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            Selamat membaca {user.name}
          </h1>
        </div>

        <ProfileStats />

        <RecommendedBooksRow />
      </section>
    </ProfileShell>
  );
}

export default Profile;

