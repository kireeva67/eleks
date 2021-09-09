/**
 * largestPairSum - Returns sum of highest and lowest values in array:
 * @param {array} numbers - the array of numbers
 * @returns {number} - returns the new number
 */
export const largestPairSum = (numbers) => {
  let firstMax = Math.max(...numbers);
  numbers.splice(numbers.indexOf(firstMax), 1);
  let secondMax = Math.max(...numbers);
  let sum = firstMax + secondMax;
  return sum;
};
