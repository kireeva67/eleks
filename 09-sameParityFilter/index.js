export const sameParityFilter = (arr = []) => {
  let isFirstEven = false;
  if (arr[0] % 2 === 0) {
    isFirstEven = true;
  }
  let answerEven = [];
  let answerOdd = [];
  for (let ch = 0; ch < arr.length; ch++) {
    if (arr[ch] % 2 === 0) {
      answerEven.push(arr[ch]);
    } else {
      answerOdd.push(arr[ch]);
    }
  }
  let answer = isFirstEven ? answerEven : answerOdd;
  return answer;
};
