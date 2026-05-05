import AuthFormCard from "../components/AuthFormCard";
import AuthShell from "../components/AuthShell";
import MailIcon from "../../../assets/mail.svg";
import LockIcon from "../../../assets/lock.svg";
import UserIcon from "../../../assets/user.svg";

function Signup() {
  return (
    <AuthShell>
      <AuthFormCard
        title="Daftar"
        submitLabel="Daftar"
        googleLabel="Daftar dengan google"
        fields={[
          { label: "Nama", type: "text", placeholder: "Nama", icon: MailIcon },
          { label: "Email", type: "email", placeholder: "Email", icon: MailIcon },
          { label: "Kata sandi", type: "password", placeholder: "Kata sandi", icon: LockIcon },
        ]}
        alternateLabel="Sudah punya akun?"
        alternateHref="/login"
        alternateText="Masuk"
      />
    </AuthShell>
  );
}

export default Signup;
