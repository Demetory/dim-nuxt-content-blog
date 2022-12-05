// Runs by application start
const InitApp = () => {
  // Setting base css in index.html
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
    ],
  });

  // Shows welcome logo in console
  useConsoleImage(exampleLogo);
};

// Export
export { InitApp };
