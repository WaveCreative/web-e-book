export const desktopDropdowns = {
  ebook: ["Romance", "Fantasy", "Horror", "Drama", "Edukasi", "Mystery"],
  audiobook: ["Fiksi", "Nonfiksi", "Bisnis", "Self-help", "Horror", "Motivasi"],
};

export const mobileMenuItems = [
  {
    label: "E-Book",
    to: "/catalog",
    children: ["Romance", "Fantasy", "Horror", "Drama", "Edukasi", "Mystery"],
  },
  {
    label: "Audiobook",
    to: "/catalog",
    children: ["Fiksi", "Nonfiksi", "Bisnis", "Self-help", "Horror", "Motivasi"],
  },
  { label: "Flash Sale", href: "#features" },
  { label: "Masuk", to: "/login" },
];

export const searchPlaceholder = "Cari buku, genre, penulis...";
