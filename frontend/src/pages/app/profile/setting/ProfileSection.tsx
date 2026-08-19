import { useRef } from "react";
import { useAuth } from "../../../../app/providers";

function ProfileSection() {
  const { user } = useAuth();

  const fileRef = useRef<HTMLInputElement>(null);

  return (
    <section id="profile" className="mt-8 mb-8">

      <div className="space-y-2">
        <h2 className="text-lg font-semibold text-(--highemphasis)">
          Personal Info
        </h2>

        <p className="text-sm text-(--highemphasis)/60">
          Update foto dan data diri kamu.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-2 justify-between gap-y-4">

        {/* Username */}

        <label className="text-sm text-(--highemphasis)">
          Username
        </label>

        <input
          defaultValue={user?.name}
          className="h-12 rounded-lg border border-(--border) bg-transparent px-4 outline-none transition focus:border-(--primary)"
        />

        {/* Email */}

        <label className="text-sm text-(--highemphasis)">
          Email
        </label>

        <input
          defaultValue={user?.email}
          className="h-12 rounded-lg border border-(--border) bg-transparent px-4 outline-none transition focus:border-(--primary)"
        />

        {/* Password */}

        <label className="text-sm text-(--highemphasis)">
          Password
        </label>

        <div className="grid grid-cols-2 gap-4">

          <input
            type="password"
            placeholder="Kata Sandi"
            className="h-12 rounded-lg border border-(--border) bg-transparent px-4 outline-none transition focus:border-(--primary)"
          />

          <input
            type="password"
            placeholder="Konfirmasi Kata sandi"
            className="h-12 rounded-lg border border-(--border) bg-transparent px-4 outline-none transition focus:border-(--primary)"
          />

        </div>

        {/* Upload */}

        <label className="text-sm text-(--highemphasis)">
          Foto Kamu
        </label>

        <div className="flex items-center p-1 border border-(--border) rounded-lg gap-4">

          <button
            type="button"
            onClick={() => fileRef.current?.click()}
            className="rounded-lg bg-white/40 px-6 py-3 text-sm transition hover:bg-white/35"
          >
            Choose Upload photo
          </button>

          <span className="text-sm text-(--highemphasis)/50">
            File.jpg
          </span>

          <input
            ref={fileRef}
            type="file"
            hidden
          />

        </div>

      </div>

      <div className="mt-10 flex justify-end gap-3">

        <button
          type="button"
          className="rounded-lg border border-(--styled) px-8 py-3 text-sm text-(--styled) transition hover:bg-(--styled)/10"
        >
          Batal
        </button>

        <button
          type="submit"
          className="rounded-lg bg-(--styled) px-8 py-3 text-sm text-white transition hover:opacity-90"
        >
          Simpan
        </button>

      </div>

    </section>
  );
}

export default ProfileSection;