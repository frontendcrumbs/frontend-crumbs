import { ref } from "vue";

export const cards = ref([
    {
      id: 1,
      title: "Navbar",
      slug: "navbar",
      description:
        "A responsive and customizable navigation bar for seamless user navigation.",
      link: "",
      category: "elements",
    },
    {
      id: 2,
      title: "Button",
      slug: "button",
      description:
        "A responsive and customizable navigation bar for seamless user navigation.",
      link: "",
      category: "concepts",
    },
    {
      id: 3,
      title: "Footer",
      slug: "footer",
      description:
        "A responsive and customizable navigation bar for seamless user navigation.",
      link: "",
      category: "elements",
    },
    {
      id: 4,
      title: "Dropdown",
      slug: "dropdown",
      description:
        "A responsive and customizable navigation bar for seamless user navigation.",
      link: "",
      category: "concepts",
    },
    {
      id: 5,
      title: "Sidebar",
      slug: "sidebar",
      description:
        "A responsive and customizable navigation bar for seamless user navigation.",
      link: "",
      category: "elements",
    },
    {
      id: 6,
      title: "Slider",
      slug: "slider",
      description:
        "A responsive and customizable navigation bar for seamless user navigation.",
      link: "",
      category: "concepts",
    },
    {
      id: 7,
      title: "Accordion",
      slug: "accordion",
      description:
        "A responsive and customizable navigation bar for seamless user navigation.",
      link: "",
      category: "elements",
    },
    {
      id: 8,
      title: "Tabs",
      slug: "tabs",
      description:
        "A responsive and customizable navigation bar for seamless user navigation.",
      link: "",
      category: "concepts",
    },
    {
      id: 9,
      title: "Modal",
      slug: "modal",
      description:
        "A responsive and customizable navigation bar for seamless user navigation.",
      link: "",
      category: "concepts",
    },
    {
      id: 10,
      title: "Accordion",
      slug: "accordion",
      description:
        "A responsive and customizable navigation bar for seamless user navigation.",
      link: "",
      category: "elements",
    },
    {
      id: 11,
      title: "Tabs",
      slug: "tabs",
      description:
        "A responsive and customizable navigation bar for seamless user navigation.",
      link: "",
      category: "concepts",
    },
    {
      id: 12,
      title: "Accordion",
      slug: "accordion",
      description:
        "A responsive and customizable navigation bar for seamless user navigation.",
      link: "",
      category: "elements",
    },
    {
      id: 13,
      title: "Tabs",
      slug: "tabs",
      description:
        "A responsive and customizable navigation bar for seamless user navigation.",
      link: "",
      category: "concepts",
    },
    {
      id: 14,
      title: "Accordion",
      slug: "accordion",
      description:
        "A responsive and customizable navigation bar for seamless user navigation.",
      link: "",
      category: "elements",
    },
    {
      id: 15,
      title: "Tabs",
      slug: "tabs",
      description:
        "A responsive and customizable navigation bar for seamless user navigation.",
      link: "",
      category: "concepts",
    },
    {
      id: 16,
      title: "Accordion",
      slug: "accordion",
      description:
        "A responsive and customizable navigation bar for seamless user navigation.",
      link: "",
      category: "elements",
    },
    {
      id: 17,
      title: "Tabs",
      slug: "tabs",
      description:
        "A responsive and customizable navigation bar for seamless user navigation.",
      link: "",
      category: "concepts",
    },
  ]);

  cards.value.forEach((card) => {
    card.link = `/${card.category}/${card.slug}`;
  });