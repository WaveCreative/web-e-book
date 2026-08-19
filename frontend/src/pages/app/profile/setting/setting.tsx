import { useState } from "react";
import SettingSection from "./SettingSection";
import ProfileSection from "./ProfileSection";

type Tab = "setting" | "profile";

function Settings() {
  const [activeTab, setActiveTab] = useState<Tab>("setting");

  return (
    <section className="space-y-8">

      <div className="mt-10 ml-5">
        <div className="flex gap-8">

          <button
            type="button"
            onClick={() => setActiveTab("setting")}
            className={`relative cursor-pointer pb-4 text-sm font-medium transition ${
              activeTab === "setting"
                ? "text-(--primary)"
                : "text-(--highemphasis)/60 hover:text-(--highemphasis)"
            }`}
          >
            Pengaturan

            {activeTab === "setting" && (
              <span className="absolute inset-x-0 bottom-2 h-0.5 rounded-full bg-(--primary)" />
            )}
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("profile")}
            className={`relative cursor-pointer pb-4 text-sm font-medium transition ${
              activeTab === "profile"
                ? "text-(--primary)"
                : "text-(--highemphasis)/60 hover:text-(--highemphasis)"
            }`}
          >
            Profile Saya

            {activeTab === "profile" && (
              <span className="absolute inset-x-0 -bottom-px h-0.5 rounded-full bg-(--primary)" />
            )}
          </button>

        </div>
      </div>

      {activeTab === "setting" ? (
        <SettingSection />
      ) : (
        <ProfileSection />
      )}
    </section>
  );
}

export default Settings;