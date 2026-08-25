export type AdminEntityStatus =
  | "Active"
  | "Draft"
  | "Archived"
  | "Pending"
  | "Paid"
  | "Cancelled"
  | "Blocked";

export interface AdminUserRecord {
  id: number;
  name: string;
  email: string;
  role: "admin" | "user";
  status: AdminEntityStatus;
  joinedAt: string;
  avatar?: string | null;
}

export interface AdminBookRecord {
  id: number;
  title: string;
  author: string;
  genre: string;
  price: number;
  stock: number;
  status: AdminEntityStatus;
}

export interface AdminGenreRecord {
  id: number;
  name: string;
  bookCount: number;
  rating: number;
  status: AdminEntityStatus;
}

export interface AdminCollectionRecord {
  id: number;
  title: string;
  genre: string;
  items: number;
  visibility: AdminEntityStatus;
}

export interface AdminReadingRecord {
  id: number;
  user: string;
  book: string;
  progress: number;
  lastActivity: string;
  status: AdminEntityStatus;
}

export interface AdminSubscriptionRecord {
  id: number;
  name: string;
  price: number;
  benefits: number;
  status: AdminEntityStatus;
}

export interface AdminTransactionRecord {
  id: number;
  invoice: string;
  user: string;
  amount: number;
  method: string;
  status: AdminEntityStatus;
  createdAt: string;
}

export const adminUsers: AdminUserRecord[] = [
  {
    id: 1,
    name: "Nadia Putri",
    email: "nadia@example.com",
    role: "user",
    status: "Active",
    joinedAt: "2026-05-26",
  },
  {
    id: 2,
    name: "Wave Admin",
    email: "admin@example.com",
    role: "admin",
    status: "Active",
    joinedAt: "2026-08-01",
  },
  {
    id: 3,
    name: "Alya Putri",
    email: "alya@example.com",
    role: "user",
    status: "Blocked",
    joinedAt: "2026-07-11",
  },
  {
    id: 4,
    name: "Rizky Maulana",
    email: "rizky@example.com",
    role: "user",
    status: "Active",
    joinedAt: "2026-07-19",
  },
  {
    id: 5,
    name: "Dewi Ayusari",
    email: "dewi@example.com",
    role: "user",
    status: "Pending",
    joinedAt: "2026-08-10",
  },
];

export const adminBooks: AdminBookRecord[] = [
  { id: 1, title: "Educational Psychology", author: "Anita Woolfolk", genre: "Edukasi", price: 30000, stock: 48, status: "Active" },
  { id: 2, title: "Layang-Layang Cita", author: "Aziz Ansari", genre: "Drama", price: 30000, stock: 27, status: "Active" },
  { id: 3, title: "Uzumaki", author: "Junji Ito", genre: "Horror", price: 30000, stock: 19, status: "Draft" },
  { id: 4, title: "The Midnight Library", author: "Matt Haig", genre: "Fantasy", price: 45000, stock: 12, status: "Archived" },
  { id: 5, title: "A Little Life", author: "Hanya Yanagihara", genre: "Drama", price: 50000, stock: 9, status: "Active" },
  { id: 6, title: "Bumi Manusia", author: "Pramoedya Ananta Toer", genre: "Edukasi", price: 35000, stock: 15, status: "Active" },
];

export const adminGenres: AdminGenreRecord[] = [
  { id: 1, name: "Romance", bookCount: 900, rating: 4.2, status: "Active" },
  { id: 2, name: "Fantasy", bookCount: 1050, rating: 4.8, status: "Active" },
  { id: 3, name: "Horror", bookCount: 1140, rating: 4.4, status: "Active" },
  { id: 4, name: "Drama", bookCount: 780, rating: 4.5, status: "Active" },
  { id: 5, name: "Edukasi", bookCount: 890, rating: 4.5, status: "Active" },
];

export const adminCollections: AdminCollectionRecord[] = [
  { id: 1, title: "Trending Books", genre: "All", items: 12, visibility: "Active" },
  { id: 2, title: "Koleksi Saya", genre: "All", items: 10, visibility: "Active" },
  { id: 3, title: "Romance Favorites", genre: "Romance", items: 8, visibility: "Draft" },
  { id: 4, title: "Education Spotlight", genre: "Edukasi", items: 6, visibility: "Active" },
];

export const adminReading: AdminReadingRecord[] = [
  { id: 1, user: "Nadia Putri", book: "Educational Psychology", progress: 18, lastActivity: "2026-08-18", status: "Active" },
  { id: 2, user: "Alya Putri", book: "Layang-Layang Cita", progress: 18, lastActivity: "2026-08-17", status: "Active" },
  { id: 3, user: "Rizky Maulana", book: "Uzumaki", progress: 42, lastActivity: "2026-08-16", status: "Pending" },
  { id: 4, user: "Dewi Ayusari", book: "The Midnight Library", progress: 100, lastActivity: "2026-08-10", status: "Archived" },
];

export const adminSubscriptions: AdminSubscriptionRecord[] = [
  { id: 1, name: "Basic", price: 0, benefits: 4, status: "Active" },
  { id: 2, name: "Premium", price: 99000, benefits: 5, status: "Active" },
  { id: 3, name: "Standard", price: 59000, benefits: 4, status: "Draft" },
];

export const adminTransactions: AdminTransactionRecord[] = [
  { id: 1, invoice: "INV-2026-05-12-001", user: "Nadia Putri", amount: 99000, method: "BCA", status: "Paid", createdAt: "12 Mei 2026" },
  { id: 2, invoice: "INV-2026-05-13-002", user: "Alya Putri", amount: 99000, method: "Dana", status: "Paid", createdAt: "13 Mei 2026" },
  { id: 3, invoice: "INV-2026-05-14-003", user: "Rizky Maulana", amount: 99000, method: "OVO", status: "Pending", createdAt: "14 Mei 2026" },
  { id: 4, invoice: "INV-2026-05-15-004", user: "Dewi Ayusari", amount: 59000, method: "Mandiri", status: "Cancelled", createdAt: "15 Mei 2026" },
];
