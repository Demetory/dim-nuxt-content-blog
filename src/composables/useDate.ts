// Returns converted date according to time zone
const useDateTZ = (date: Date, tzString: string) => {
  return new Date((typeof date === "string" ? new Date(date) : date).toLocaleString("en-US", { timeZone: tzString }));
};

// Export
export { useDateTZ };
