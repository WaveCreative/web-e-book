import AuthFormCard from "../components/AuthFormCard";
import AuthShell from "../components/AuthShell";
import MailIcon from "../../../assets/mail.svg";
import LockIcon from "../../../assets/lock.svg";

function Login() {
  return (
    <AuthShell>
      <AuthFormCard
        title="Masuk"
        submitLabel="Masuk"
        googleLabel="Masuk dengan Google"
        fields={[
          { label: "Email", type: "email", placeholder: "Email", icon: MailIcon, },
          { label: "Kata sandi", type: "password", placeholder: "Kata sandi", icon: LockIcon, },
        ]}
        alternateLabel="Belum punya akun?"
        alternateHref="/signup"
        alternateText="Daftar"
      />
    </AuthShell>
  );
}

export default Login;
