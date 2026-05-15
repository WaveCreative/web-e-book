type DesktopDropdownChild = {
  label: string;
  to: string;
};

type DesktopDropdownItem = {
  label: string;
  to?: string;
  children: DesktopDropdownChild[];
};

type MobileMenuChild = {
  label: string;
  to?: string;
  href?: string;
};

type MobileMenuItem = {
  label: string;
  to?: string;
  href?: string;
  children?: MobileMenuChild[];
  variant?: "default" | "plain";
};


export const desktopDropdowns: DesktopDropdownItem[]  = [
  {
    label: "E-Book",
    to: "/book",
    children: [
      {label:"Romance", to:"/book/romance",},
      {label:"Fantasy", to:"/book/fantasy",},
      {label:"Horror", to:"/book/horror",},
      {label:"Edukasi", to:"/book/edukasi",},
      {label:"Mystery", to:"/book/mystery",},
    ],
  },
  {
    label: "Audiobook",
    to: "/audio",
    children: [
      {label:"Romance", to:"/audio/romance",},
      {label:"Fantasy", to:"/audio/fantasy",},
      {label:"Horror", to:"/audio/horror",},
      {label:"Edukasi", to:"/audio/edukasi",},
      {label:"Mystery", to:"/audio/mystery",},
    ],
  },
];

export const mobileMenuItems: MobileMenuItem[]  = [
  {
    label: "E-Book",
    to: "/book",
    children: [
      {label:"Romance", to:"/book/romance",},
      {label:"Fantasy", to:"/book/fantasy",},
      {label:"Horror", to:"/book/horror",},
      {label:"Edukasi", to:"/book/edukasi",},
      {label:"Mystery", to:"/book/mystery",},
    ],
  },
  { label: "Flash Sale", href: "#flash-sale", },
  {
    label: "Audiobook",
    to: "/audio",
    children: [
      {label:"Romance", to:"/audio/romance",},
      {label:"Fantasy", to:"/audio/fantasy",},
      {label:"Horror", to:"/audio/horror",},
      {label:"Edukasi", to:"/audio/edukasi",},
      {label:"Mystery", to:"/audio/mystery",},
    ],
  },
];

export const searchPlaceholder = "Cari buku, genre, penulis...";
