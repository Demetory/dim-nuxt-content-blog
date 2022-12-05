// Returns dynamic image path
const useImage = (image: string): string => {
  const assets = import.meta.glob("~/assets/images/*.svg", {
    eager: true,
    import: "default",
  });
  // @ts-expect-error: wrong type info
  return assets[`/assets/images/${image}`];
};

// Export
export { useImage };
