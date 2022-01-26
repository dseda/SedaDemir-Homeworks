import { line1, line2, line3 } from "./lines.js";

const hasSubString = (word) => {
  if (word.split("").every((letter) => line1.includes(letter))) {
    return word;
  } else if (word.split("").every((letter) => line2.includes(letter))) {
    return word;
  } else if (word.split("").every((letter) => line3.includes(letter))) {
    return word;
  }
  return false;
};

const findLine = (arr) => {
  const wordsFound = arr.filter((word) => hasSubString(word));
  return wordsFound.length > 0
    ? `[${arr.join(", ")}] => [${wordsFound.join(", ")}]`
    : `[${arr.join(", ")}] => Kelimeler satır değiştirmeden yazılamaz`;
};

console.log(findLine(["asli", "menekşe", "çöz", "giresun"]));
console.log(findLine(["seda", "kahve"]));
