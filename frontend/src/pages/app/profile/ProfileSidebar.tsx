import { Link, NavLink } from "react-router-dom";
import { HiPencilSquare  } from "react-icons/hi2";
import type { AuthUser } from "../../../app/providers";
import {
  profileSettingsItems,
  profileSidebarItems,
} from "../../../data/profile";

interface ProfileSidebarProps {
  user: AuthUser;
}

function ProfileSidebar({ user }: ProfileSidebarProps) {
  return (
    <aside className="fixed left-0 top-16 hidden h-[calc(100vh-4rem)] w-85 border-r border-white/5 backdrop-blur-sm px-8 py-10 text-white lg:flex lg:flex-col">

      {/* Profile Card */}
      <Link to="/profile" className="rounded-xl border border-(--primary)/20 bg-(--primary)/15 p-3">
        <div className="flex items-center gap-3">

          <div className="h-8 w-8 overflow-hidden rounded-full border border-white/10 bg-white/10">
            <img
              src={
                user?.avatar ??
                "https://res.cloudinary.com/dgffa1m7j/image/upload/v1782797688/img_3d_at7pmj.svg"
              }
              alt={user.name}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="min-w-0 flex-1">
            <h2 className="truncate text-sm font-medium text-(--primary)/80">
              {user.name}
            </h2>

            <p className="mt-0.5 text-xs text-white/55">
              Pembaca Buku
            </p>
          </div>

          <Link
            to="/profile/setting#profile"
            aria-label="Edit Profile"
            className="rounded-full p-1 transition hover:bg-white/10"
          >
            <HiPencilSquare  className="h-5 w-5 text-(--primary)/80" />
          </Link>

        </div>
      </Link>

      {/* Menu */}
      <div className="mt-7">

        <p className="mb-4 text-xs text-white/80">
          Menu
        </p>

        <nav className="space-y-6 ml-2">

          {profileSidebarItems.map((item) => {

            const Icon = item.icon;

            return (
              <NavLink
                key={item.id}
                to={item.to}
                className={({ isActive }) =>
                  `flex items-center gap-2 rounded-xl px-3 py-3 text-xs transition-colors duration-200 ${
                    isActive
                      ? "bg-(--primary)/15 text-white/80"
                      : "text-white/80 hover:text-white/70"
                  }`
                }
              >
                <Icon className="h-4 w-4 shrink-0" />

                <span className="truncate">
                  {item.label}
                </span>

              </NavLink>
            );

          })}

        </nav>

      </div>

      {/* Setting */}
      <div className="mt-7">

        <p className="mb-4 text-xs text-white/80">
          Pengaturan
        </p>

        <nav className="space-y-6 ml-2">

          {profileSettingsItems.map((item) => {

            const Icon = item.icon;

            return (
              <NavLink
                key={item.id}
                to={item.to}
                className={({ isActive }) =>
                  `flex items-center gap-2 rounded-md px-2 py-2 text-xs transition-colors duration-200 ${
                    isActive
                      ? "bg-(--primary)/15 text-white/80"
                      : "text-white/80 hover:text-white/70"
                  }`
                }
              >
                <Icon className="h-5 w-5 shrink-0" />

                <span className="truncate">
                  {item.label}
                </span>

              </NavLink>
            );

          })}

        </nav>

      </div>

    </aside>
  );
}

export default ProfileSidebar;