// Runs by application start
const InitApp = () => {
  useHead({
    link: [
      {
        rel: "stylesheet",
        href: "/css/reset.css",
      },
      {
        rel: "stylesheet",
        href: "/css/noscript.css",
      },
      {
        rel: "author",
        href: "/humans.txt",
      },
      {
        rel: "manifest",
        href: "/site.webmanifest",
      },
    ],
  });

  useConsoleImage(exampleLogo);
};

// Export
export { InitApp };
