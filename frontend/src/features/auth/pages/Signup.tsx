import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthFormCard from "../components/AuthFormCard";
import AuthShell from "../components/AuthShell";
import MailIcon from "../../../assets/mail.svg";
import LockIcon from "../../../assets/lock.svg";
import UserIcon from "../../../assets/user.svg";
import { useAuth } from "../../../app/providers";
import { ApiError } from "../../../lib/api";

function Signup() {
  const navigate = useNavigate();
  const { register, googleLogin } = useAuth();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (values: Record<string, string>) => {
    setLoading(true);
    setError(null);

    try {
      await register({
        name: values.name ?? "",
        email: values.email ?? "",
        password: values.password ?? "",
      });
      navigate("../../../pages/app/dashboard");
    } catch (err) {
      const message = err instanceof ApiError ? err.message : "Register failed";
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    const email = window.prompt("Masukkan email Google untuk mock register");
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
      navigate("../../");
    } catch (err) {
      const message = err instanceof ApiError ? err.message : "Google register failed";
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthShell>
      <AuthFormCard
        title="Daftar"
        submitLabel="Daftar"
        googleLabel="Daftar dengan Google"
        fields={[
          {
            label: "Nama",
            name: "name",
            type: "text",
            placeholder: "Nama",
            icon: UserIcon,
            autoComplete: "name",
          },
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
            autoComplete: "new-password",
          },
        ]}
        alternateLabel="Sudah punya akun?"
        alternateHref="/login"
        alternateText="Masuk"
        onSubmit={handleSubmit}
        onGoogleClick={handleGoogleLogin}
        error={error}
        loading={loading}
      />
    </AuthShell>
  );
}

export default Signup;
