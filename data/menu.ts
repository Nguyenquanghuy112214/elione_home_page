interface MenuItem {
  title: string;
  path?: string;
  pathParent?: string;
  children?: MenuItem[];
}

export const menu: MenuItem[] = [
  {
    title: "Giới thiệu",
    path: "/",
  },
  {
    title: "Chương trình học",
    pathParent: "/program",

    children: [
      {
        path: "/program",
        title: "Trại Hè Tiếng Anh 2024",
      },
      {
        title: "Tiếng Anh ABC",
        path: "/news",
      },
      {
        title: "Tiếng Anh Ielts",
      },
    ],
  },
  {
    title: "Tin tức sự kiện",
  },
  {
    title: "Học online",
    path: "/online",
  },
  {
    title: "Thương hiệu elione",
  },
  {
    title: "Tuyển dụng",
  },
];
