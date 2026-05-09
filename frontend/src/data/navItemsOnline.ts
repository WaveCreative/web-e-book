export const desktopDropdowns = [
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
  {
    label: "User",
    children: [
      {label:"Kimkong Official", to:"/user"},
      {label:"Dashboard", to:"/",}, 
      {label:"Logout", to:"/logout",},
    ],
  },
  {
    label: "Profile",
    children: [
      { label: "View Profile", to: "/profile/view" },
      { label: "Edit Profile", to: "/profile/edit" },
    ],
  },
  {
    label: "Settings",
    children: [
      { label: "Account Settings", to: "/settings/account" },
      { label: "Privacy Settings", to: "/settings/privacy" },
    ],
  },
];

export const mobileMenuItems = [
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
  {
    label: "User",
    children: [
      {label:"Kimkong Official", to:"/user"},
      {label:"Dashboard", to:"/",}, 
      {label:"Logout", to:"/logout",},
    ],
  },
  {
    label: "Profile",
    children: [
      { label: "View Profile", to: "/profile/view" },
      { label: "Edit Profile", to: "/profile/edit" },
    ],
  },
  {
    label: "Settings",
    children: [
      { label: "Account Settings", to: "/settings/account" },
      { label: "Privacy Settings", to: "/settings/privacy" },
    ],
  },
  { label: "Flash Sale", href: "#flash-sale", },
];

export const searchPlaceholder = "Cari buku, genre, penulis...";
