// Returns converted date according to time zone
const useDateTZ = (date: Date, tzString: string) => {
  return new Date((typeof date === "string" ? new Date(date) : date).toLocaleString("en-US", { timeZone: tzString }));
};

// Coverts date to roman style
function useDateToRoman(num: number) {
  const digits: string[] = String(+num).split("");
  let result: string = "";
  let iterations: number = 3;

  const key: string[] = [
    "",
    "C",
    "CC",
    "CCC",
    "CD",
    "D",
    "DC",
    "DCC",
    "DCCC",
    "CM",
    "",
    "X",
    "XX",
    "XXX",
    "XL",
    "L",
    "LX",
    "LXX",
    "LXXX",
    "XC",
    "",
    "I",
    "II",
    "III",
    "IV",
    "V",
    "VI",
    "VII",
    "VIII",
    "IX",
  ];

  while (iterations--) {
    let digit: string | undefined = digits!.pop();
    result = (key[+digit! + iterations * 10] || "") + result;
  }

  return Array(+digits.join("") + 1).join("M") + result;
}

// Export
export { useDateTZ, useDateToRoman };
