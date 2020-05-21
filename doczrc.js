export default {
  title: "도울정보기술 개발문서 서비스",
  // base: "/docz/"
  // files: ["**/*.{mdx,markdown,png}"],
  ignore: ["README.md"],
  menu: [
    "Getting Started",
    // "Architectures",
    // "Deployments",
    // "Components",
    // "Setup",
    { name: "Architectures", menu: ["Overview", "Backend", "Frontend"] },
    {
      name: "Development Setup",
      menu: [
        "Develop Guide",
        "Proxy Server Squid",
        "Package Manager",
        "Docker",
        "Django",
        "React",
        "GitLab",
        "GitLab-CI",
        "CI/CD Pipeline",
        "Visual Studio Code",
      ],
    },
    { name: "Development", menu: ["Docker", "Django", "React", "개발표준"] },
    {
      name: "Server Settings",
      menu: ["Container", "Nexus3", "Develop & Production"],
    },
    "Components",
  ],
  themeConfig: {
    colors: {
      text: "#333",
      background: "#fff",
      primary: "tomato",
      headers: {
        bg: "tomato",
      },
    },
    fonts: {
      body: "system-ui, sans-serif",
      heading: '"Avenir Next", sans-serif',
      monospace: "D2Coding, Menlo, monospace",
    },
  },
};
