/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number | undefined} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export function trimSymbols(string, size) {
  if (size === 0) {
    return "";
  }
  let answer = "";
  for (let ch = 0; ch < string.length; ch++) {
    if (answer.slice(-1) != string[ch]) {
      answer += string[ch];
      continue;
    }
    let lastSymbols = answer.slice(-size);
    if (lastSymbols === string[ch].repeat(size)) {
      continue;
    }
    answer += string[ch];
  }
  return answer;
}
