import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthFormCard from "../components/AuthFormCard";
import AuthShell from "../components/AuthShell";
import MailIcon from "../../../assets/mail.svg";
import LockIcon from "../../../assets/lock.svg";
import { useAuth } from "../../../app/providers";
import { ApiError } from "../../../lib/api";

function Login() {
  const navigate = useNavigate();
  const { login, googleLogin } = useAuth();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (values: Record<string, string>) => {
    setLoading(true);
    setError(null);

    try {
      await login({
        email: values.email ?? "",
        password: values.password ?? "",
      });
      navigate("../../../pages/app/Landing.tsx");
    } catch (err) {
      const message = err instanceof ApiError ? err.message : "Login failed";
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    const email = window.prompt("Masukkan email Google untuk mock login");
    if (!email) return;

    const name = window.prompt("Masukkan nama Google", email.split("@")[0]);
    if (!name) return;

    const avatar = window.prompt("Masukkan avatar URL (opsional)") || null;

    setLoading(true);
    setError(null);

    try {
      await googleLogin({
        google_token: "mock-google-token",
        name,
        email,
        avatar,
      });
      navigate("../../../pages/app/dashboard");
    } catch (err) {
      const message = err instanceof ApiError ? err.message : "Google login failed";
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthShell>
      <AuthFormCard
        title="Masuk"
        submitLabel="Masuk"
        googleLabel="Masuk dengan Google"
        fields={[
          {
            label: "Email",
            name: "email",
            type: "email",
            placeholder: "Email",
            icon: MailIcon,
            autoComplete: "email",
          },
          {
            label: "Kata sandi",
            name: "password",
            type: "password",
            placeholder: "Kata sandi",
            icon: LockIcon,
            autoComplete: "current-password",
          },
        ]}
        alternateLabel="Belum punya akun?"
        alternateHref="/signup"
        alternateText="Daftar"
        onSubmit={handleSubmit}
        onGoogleClick={handleGoogleLogin}
        error={error}
        loading={loading}
      />
    </AuthShell>
  );
}

export default Login;
