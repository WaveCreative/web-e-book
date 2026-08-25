import { useMemo } from "react";
import {
  BadgeDollarSign,
  BookOpenText,
  CircleCheckBig,
  CircleDashed,
  Clock3,
  LayoutDashboard,
  Users,
} from "lucide-react";
import SectionCard from "../../components/ui/SectionCard";
import {
  adminBooks,
  adminGenres,
  adminTransactions,
  adminUsers,
} from "../../data/adminEntities";

type DashboardMetric = {
  label: string;
  value: string;
  note: string;
  icon: typeof Users;
};

type ControlItem = {
  entity: string;
  source: string;
  adminAction: string;
  status: "Ready" | "Pending";
};

const controlItems: ControlItem[] = [
  {
    entity: "Hero / Landing",
    source: "frontend/src/pages/landing/sections/HeroSection.tsx",
    adminAction: "Manage headline and CTA content",
    status: "Ready",
  },
  {
    entity: "Trending Books",
    source: "frontend/src/pages/landing/sections/TrandingBooks.tsx",
    adminAction: "Curate books shown on landing",
    status: "Ready",
  },
  {
    entity: "Categories / Genre",
    source: "frontend/src/pages/landing/sections/Kategori.tsx",
    adminAction: "Edit category cards and copy",
    status: "Ready",
  },
  {
    entity: "Subscription",
    source: "frontend/src/pages/landing/sections/Subscription.tsx",
    adminAction: "Manage plan cards and benefit lists",
    status: "Pending",
  },
  {
    entity: "Testimonials",
    source: "frontend/src/pages/landing/sections/Testimonials.tsx",
    adminAction: "Review user quotes and rating blocks",
    status: "Pending",
  },
  {
    entity: "FAQ",
    source: "frontend/src/pages/landing/sections/FAQ.tsx",
    adminAction: "Maintain Q&A entries and newsletter CTA",
    status: "Pending",
  },
  {
    entity: "Profile Modules",
    source: "frontend/src/pages/app/profile/*",
    adminAction: "Manage reading, collection, langganan, transaksi, help",
    status: "Ready",
  },
  {
    entity: "Auth",
    source: "frontend/src/features/auth/*",
    adminAction: "Keep login/signup experience aligned",
    status: "Pending",
  },
];

const activityItems = [
  {
    label: "Auth UI",
    detail: "Login and signup already exist in the user app and can be mirrored for admin.",
    value: "Ready",
  },
  {
    label: "Profile UI",
    detail: "Reading, koleksi, langganan, transaksi, setting, and helpcenter are available.",
    value: "Ready",
  },
  {
    label: "Content sections",
    detail: "Landing sections are already componentized and suitable for admin editing.",
    value: "Ready",
  },
  {
    label: "Theme tokens",
    detail: "Color, typography, and spacing are centralized in CSS variables.",
    value: "Ready",
  },
];

function Dashboard() {
  const dashboardMetrics: DashboardMetric[] = useMemo(
    () => [
      {
        label: "Users",
        value: String(adminUsers.length),
        note: "Akun login yang disimulasikan di admin.",
        icon: Users,
      },
      {
        label: "Books",
        value: String(adminBooks.length),
        note: "Konten buku yang dipakai di frontend user.",
        icon: BookOpenText,
      },
      {
        label: "Genres",
        value: String(adminGenres.length),
        note: "Kategori utama yang muncul di katalog.",
        icon: LayoutDashboard,
      },
      {
        label: "Transactions",
        value: String(adminTransactions.length),
        note: "Riwayat subscription yang disimulasikan.",
        icon: BadgeDollarSign,
      },
    ],
    [],
  );

  return (
    <div className="space-y-6">
      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {dashboardMetrics.map((metric) => {
          const Icon = metric.icon;

          return (
            <article
              key={metric.label}
              className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-[0_18px_50px_rgba(0,0,0,0.2)]"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-sm text-white/60">{metric.label}</p>
                  <h3 className="mt-2 text-3xl font-semibold tracking-tight">
                    {metric.value}
                  </h3>
                </div>

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-(--primary)/15 text-(--primary)">
                  <Icon className="h-5 w-5" />
                </div>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-white/55">
                {metric.note}
              </p>
            </article>
          );
        })}
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.5fr_1fr]">
        <SectionCard
          title="Frontend Feature Map"
          description="Area admin mengikuti fitur yang benar-benar muncul di web user."
        >
          <div className="overflow-hidden rounded-2xl border border-white/10">
            <table className="min-w-full text-left">
              <thead className="bg-white/5">
                <tr className="text-xs uppercase tracking-[0.2em] text-white/45">
                  <th className="px-4 py-3 font-medium">Entity</th>
                  <th className="px-4 py-3 font-medium">Source</th>
                  <th className="px-4 py-3 font-medium">Admin Action</th>
                  <th className="px-4 py-3 font-medium">Status</th>
                </tr>
              </thead>
              <tbody>
                {controlItems.map((item) => (
                  <tr key={item.entity} className="border-t border-white/5">
                    <td className="px-4 py-4">
                      <p className="font-medium text-white">{item.entity}</p>
                    </td>
                    <td className="px-4 py-4 text-sm text-white/55">
                      {item.source}
                    </td>
                    <td className="px-4 py-4 text-sm text-white/70">
                      {item.adminAction}
                    </td>
                    <td className="px-4 py-4">
                      <span
                        className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium ${
                          item.status === "Ready"
                            ? "bg-emerald-400/15 text-emerald-300"
                            : "bg-amber-400/15 text-amber-300"
                        }`}
                      >
                        {item.status === "Ready" ? (
                          <CircleCheckBig className="h-3.5 w-3.5" />
                        ) : (
                          <CircleDashed className="h-3.5 w-3.5" />
                        )}
                        {item.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </SectionCard>

        <SectionCard
          title="Operational Notes"
          description="Ringkasan scope frontend yang menjadi fokus admin."
        >
          <div className="space-y-3">
            {activityItems.map((item) => (
              <article
                key={item.label}
                className="rounded-2xl border border-white/10 bg-black/20 p-4"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h4 className="font-medium text-white">{item.label}</h4>
                    <p className="mt-1 text-sm leading-relaxed text-white/55">
                      {item.detail}
                    </p>
                  </div>

                  <span
                    className={`rounded-full px-3 py-1 text-xs font-medium ${
                      item.value === "Ready"
                        ? "bg-emerald-400/15 text-emerald-300"
                        : "bg-amber-400/15 text-amber-300"
                    }`}
                  >
                    {item.value}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <SectionCard
          title="Admin Quick Actions"
          description="Aksi cepat untuk mengelola konten frontend."
        >
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              "Update trending books",
              "Review genre cards",
              "Adjust profile content",
              "Refresh subscription cards",
            ].map((label) => (
              <button
                key={label}
                type="button"
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-left text-sm font-medium text-white/80 transition hover:border-(--primary)/40 hover:bg-(--primary)/10 hover:text-white"
              >
                {label}
              </button>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          title="System Snapshot"
          description="Status area frontend yang sudah direncanakan untuk admin."
        >
          <div className="space-y-4">
            <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
              <div className="flex items-center gap-3">
                <Clock3 className="h-4 w-4 text-(--primary)" />
                <span className="text-sm text-white/70">Last audited scope</span>
              </div>
              <span className="text-sm font-medium text-white">2026-08-25</span>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
              <div className="flex items-center gap-2 text-sm text-white/70">
                <BookOpenText className="h-4 w-4 text-(--primary)" />
                <span>
                  Admin mengikuti struktur frontend user, backend tetap dipakai untuk auth saja.
                </span>
              </div>
              <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-[74%] rounded-full bg-(--primary)" />
              </div>
            </div>
          </div>
        </SectionCard>
      </section>
    </div>
  );
}

export default Dashboard;
