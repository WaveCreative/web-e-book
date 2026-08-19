import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthShell from "../components/AuthShell";
import AuthFormCard from "../components/AuthFormCard";
import { useAuth } from "../../../app/providers";
import { ApiError } from "../../../lib/api";

function Login() {
  const navigate = useNavigate();

  const { login } = useAuth();

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (
    values: Record<string, string>,
  ) => {
    setLoading(true);
    setError(null);

    try {
      await login({
        email: values.email,
        password: values.password,
      });

      navigate("/landing");
    } catch (err) {
      const message =
        err instanceof ApiError
          ? err.message
          : "Login gagal";

      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthShell>
      <AuthFormCard
        title="Welcome Back"
        description="lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        submitLabel="Sign In"
        loading={loading}
        error={error}
        alternateLabel="Belum punya akun?"
        alternateText="Sign Up"
        alternateHref="/signup"
        onSubmit={handleSubmit}
        fields={[
          {
            label: "Email/Nama Pengguna",
            name: "email",
            type: "email",
            placeholder: "Email",
            autoComplete: "email",
          },
          {
            label: "Kata Sandi",
            name: "password",
            type: "password",
            placeholder: "Password",
            autoComplete: "current-password",
          },
        ]}
      />
    </AuthShell>
  );
}

export default Login;