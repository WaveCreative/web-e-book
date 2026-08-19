import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthShell from "../components/AuthShell";
import AuthFormCard from "../components/AuthFormCard";
import { useAuth } from "../../../app/providers";
import { ApiError } from "../../../lib/api";

function Signup() {
  const navigate = useNavigate();

  const { register } = useAuth();

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (
    values: Record<string, string>,
  ) => {
    setLoading(true);
    setError(null);

    try {
      await register({
        name: values.name,
        email: values.email,
        password: values.password,
      });

      navigate("/landing");
    } catch (err) {
      const message =
        err instanceof ApiError
          ? err.message
          : "Register gagal";

      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthShell>
      <AuthFormCard
        title="Create Account 🚀"
        description="Buat akun Ebook.com dan nikmati ribuan koleksi ebook yang siap menemani aktivitas membaca kamu."
        submitLabel="Sign Up"
        loading={loading}
        error={error}
        alternateLabel="Sudah punya akun?"
        alternateText="Sign In"
        alternateHref="/login"
        onSubmit={handleSubmit}
        fields={[
          {
            name: "name",
            type: "text",
            placeholder: "Full Name",
            autoComplete: "name",
          },
          {
            name: "email",
            type: "email",
            placeholder: "Email",
            autoComplete: "email",
          },
          {
            name: "password",
            type: "password",
            placeholder: "Password",
            autoComplete: "new-password",
          },
        ]}
      />
    </AuthShell>
  );
}

export default Signup;