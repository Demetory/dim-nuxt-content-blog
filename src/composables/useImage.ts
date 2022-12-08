// Returns dynamic image path
const useImage = (image: string): any => {
  const assets = import.meta.glob("~/assets/images/*.svg", {
    eager: true,
    import: "default",
  });

  return assets[`/assets/images/${image}`];
};

// Export
export { useImage };
