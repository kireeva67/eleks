// TODO: rename function, maybe array-of-arrays

export const chunk = (arr = [], size = 0) => {
  let newArr = [];
  let amount = Math.trunc(arr.length / size) + 1;
  let counter = 0;
  for (let i = 0; i < amount; i++) {
    let littleArr = [];
    for (let ch = 0; ch < size; ch++) {
      littleArr.push(arr[counter]);
      counter++;
      if (counter >= arr.length) {
        break;
      }
    }
    if (littleArr[0] !== undefined) {
      newArr.push(littleArr);
    }
  }
  return newArr;
};
