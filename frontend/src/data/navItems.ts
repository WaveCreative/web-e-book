export const desktopDropdowns = {
  ebook: ["Romance", "Fantasy", "Horror", "Drama", "Edukasi", "Mystery"],
  audiobook: ["Romance", "Fantasy", "Horror", "Drama", "Edukasi", "Mystery"],
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
    children: ["Romance", "Fantasy", "Horror", "Drama", "Edukasi", "Mystery"],
  },
  { label: "Flash Sale", href: "#flash-sale" },
  { label: "Masuk", to: "/login" },
];

export const searchPlaceholder = "Cari buku, genre, penulis...";
