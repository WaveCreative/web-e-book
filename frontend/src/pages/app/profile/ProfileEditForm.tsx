// import { FormEvent, useState } from "react";
// import { Link } from "react-router-dom";
// import { PencilLine, User, Mail, Image } from "lucide-react";
// import type { AuthUser } from "../../../app/providers";

// interface ProfileEditFormProps {
//   user: AuthUser;
// }

// function ProfileEditForm({ user }: ProfileEditFormProps) {
//   const [formState, setFormState] = useState({
//     name: user.name,
//     email: user.email,
//     avatar: user.avatar ?? "",
//   });

//   const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//   };

//   return (
//     <section className="mt-6 rounded-[1.5rem] border border-white/10 bg-white/5 p-5 text-white">
//       <div className="flex items-center justify-between gap-4">
//         <div>
//           <h1 className="text-2xl font-semibold">Edit Profile</h1>
//           <p className="mt-1 text-sm text-white/55">
//             Perubahan data disiapkan untuk backend berikutnya.
//           </p>
//         </div>

//         <Link
//           to="/profile"
//           className="rounded-xl border border-white/10 bg-black/25 px-4 py-2 text-sm text-white/80 transition hover:bg-white/5"
//         >
//           Kembali
//         </Link>
//       </div>

//       <form onSubmit={handleSubmit} className="mt-6 space-y-4">
//         <label className="block space-y-2">
//           <span className="text-sm text-white/55">Nama</span>
//           <div className="flex items-center rounded-xl border border-white/12 bg-black/35 px-4 py-3">
//             <User className="mr-3 h-4 w-4 text-white/55" />
//             <input
//               value={formState.name}
//               onChange={(event) =>
//                 setFormState((prev) => ({ ...prev, name: event.target.value }))
//               }
//               className="w-full bg-transparent text-sm text-white outline-none placeholder:text-white/30"
//             />
//           </div>
//         </label>

//         <label className="block space-y-2">
//           <span className="text-sm text-white/55">Email</span>
//           <div className="flex items-center rounded-xl border border-white/12 bg-black/35 px-4 py-3">
//             <Mail className="mr-3 h-4 w-4 text-white/55" />
//             <input
//               value={formState.email}
//               onChange={(event) =>
//                 setFormState((prev) => ({ ...prev, email: event.target.value }))
//               }
//               className="w-full bg-transparent text-sm text-white outline-none placeholder:text-white/30"
//             />
//           </div>
//         </label>

//         <label className="block space-y-2">
//           <span className="text-sm text-white/55">Avatar URL</span>
//           <div className="flex items-center rounded-xl border border-white/12 bg-black/35 px-4 py-3">
//             <Image className="mr-3 h-4 w-4 text-white/55" />
//             <input
//               value={formState.avatar}
//               onChange={(event) =>
//                 setFormState((prev) => ({ ...prev, avatar: event.target.value }))
//               }
//               placeholder="Kosongkan jika belum ada"
//               className="w-full bg-transparent text-sm text-white outline-none placeholder:text-white/30"
//             />
//           </div>
//         </label>

//         <button
//           type="submit"
//           className="inline-flex items-center gap-2 rounded-xl bg-(--primary) px-5 py-3 text-sm font-semibold text-black transition hover:opacity-90"
//         >
//           <PencilLine className="h-4 w-4" />
//           Simpan
//         </button>
//       </form>
//     </section>
//   );
// }

// export default ProfileEditForm;

