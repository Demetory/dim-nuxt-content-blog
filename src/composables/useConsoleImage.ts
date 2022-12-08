// Core
import { Buffer } from "buffer";

// Converts Image to Binary
const svgToData = (image: string) => {
  return `data:image/svg+xml;base64,${Buffer.from(image).toString("base64")}`;
};

// Show Image in the Console
const useConsoleImage = (image: string) => {
  /* eslint-disable no-console */
  console.log(
    "%c ",
    `
    background-image: url(${svgToData(image)});
    padding-bottom: 100px;
    padding-left: 100px;
    margin: 20px;
    background-size: contain;
    background-position: center center;
    background-repeat: no-repeat;
    `
  );
};

// Export
export { useConsoleImage };
