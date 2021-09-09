/**
 * highestAndLowest - Modify initial string into new one, that start with highest number and and with lowest:
 * @param {string} numbers - the source numbers
 * @returns {string} - returns the new string
 */
export const highestAndLowest = (numbers) => {
  let arr = numbers.split(" ");
  let min = Number(arr[0]);
  let max = Number(arr[0]);
  for (let i = 0; i < arr.length; i++) {
    if (Number(arr[i]) > max) {
      max = Number(arr[i]);
    }
    if (Number(arr[i]) < min) {
      min = Number(arr[i]);
    }
  }
  let answer = [min, max].join(" ");

  return answer;
};
