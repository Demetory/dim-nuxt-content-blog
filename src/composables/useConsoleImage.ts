// Core
import { Buffer } from "buffer";

// Converts Image to Binary
const svgToData = (image: string) => {
  return `data:image/svg+xml;base64,${Buffer.from(image).toString("base64")}`;
};

// Shows Image in Console
const useConsoleImage = (image: string) => {
  console.log(
    "%c ",
    `
    background-image: url(${svgToData(image)});
    padding-bottom: 64px;
    padding-left: 64px;
    margin: 8px;
    background-size: contain;
    background-position: center center;
    background-repeat: no-repeat;
    `
  );
};

// Export
export { useConsoleImage };
