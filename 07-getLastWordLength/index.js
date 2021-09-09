export const getLastWordLength = (str) => {
  let newStr = str.trim();
  let lastWordLength = newStr.slice(
    newStr.lastIndexOf(" ") + 1,
    newStr.length
  ).length;
  return lastWordLength;
};
