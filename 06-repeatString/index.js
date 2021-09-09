/**
 * repeatString - Duplicates every char in the string some times according to char index
 * @param {string} str - the string
 * @returns {string} - returns the new string
 */
export const repeatString = (str = "") => {
  let arr = str.toLowerCase().split("");
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let item = arr[i].repeat(i + 1);
    item = item.replace(item[0], item[0].toUpperCase());
    newArr.push(item);
  }
  let answer = newArr.join("-");
  return answer;
};
