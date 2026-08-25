import { useState, type FormEvent } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { ApiError } from "../../../lib/api";
import { useAdminAuth } from "../../../app/providers";

function AdminLogin() {
  const navigate = useNavigate();
  const { login, isReady, isAuthenticated, isAdmin } = useAdminAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await login({ email, password });
      navigate("/admin", { replace: true });
    } catch (caughtError) {
      const message =
        caughtError instanceof ApiError || caughtError instanceof Error
          ? caughtError.message
          : "Login gagal";
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  if (isReady && isAuthenticated && isAdmin) {
    return <Navigate to="/admin" replace />;
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-4 text-white">
      <section className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_18px_50px_rgba(0,0,0,0.2)]">
        <p className="text-xs uppercase tracking-[0.3em] text-(--primary)">
          Admin Access
        </p>
        <h1 className="mt-3 text-3xl font-semibold">Login Admin</h1>
        <p className="mt-2 text-sm text-white/60">
          Masuk menggunakan akun admin. Data dashboard sementara memakai dummy data.
        </p>

        {error ? (
          <div className="mt-5 rounded-2xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-200">
            {error}
          </div>
        ) : null}

        <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
          <label className="block">
            <span className="mb-2 block text-sm text-white/70">Email</span>
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm outline-none placeholder:text-white/30 focus:border-(--primary)"
              placeholder="admin@example.com"
              autoComplete="email"
              disabled={loading}
            />
          </label>

          <label className="block">
            <span className="mb-2 block text-sm text-white/70">Password</span>
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm outline-none placeholder:text-white/30 focus:border-(--primary)"
              placeholder="••••••••"
              autoComplete="current-password"
              disabled={loading}
            />
          </label>

          <button
            type="submit"
            disabled={loading}
            className="mt-2 w-full rounded-2xl bg-(--primary) py-3.5 text-sm font-semibold text-black transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Memeriksa..." : "Masuk ke Admin"}
          </button>
        </form>
      </section>
    </main>
  );
}

export default AdminLogin;
