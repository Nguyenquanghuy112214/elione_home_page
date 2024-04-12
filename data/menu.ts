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
      ],
    },
    {
      title: "Tin tức sự kiện",
      children: [
        {
          title: "Tiếng Anh ABC",
          path: "/news",
        },
      ],
    },
    {
      title: "Học online",
      path: "/online",
      children: [
        {
          title: "Tiếng Anh Ielts",
        },
      ],
    },
    {
      title: "Thương hiệu elione",
    },
    {
      title: "Tuyển dụng",
    },
  ];