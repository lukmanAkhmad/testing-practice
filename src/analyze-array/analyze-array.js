function analyzeArray(arrOfNum) {
  if (arrOfNum.length === 0) return "Array is empty";

  const average = averageArrOfNum(arrOfNum);
  const min = minArrOfNum(arrOfNum);
  const max = maxArrOfNum(arrOfNum);
  const length = arrOfNum.length;
  const obj = { average, min, max, length };

  return obj;
}

const averageArrOfNum = (arr) => {
  const arrLength = arr.length;
  let sum = 0;

  arr.forEach((el) => {
    sum += el;
  });

  return sum / arrLength;
};

const minArrOfNum = (arr) => {
  const ascendingSort = arr.sort((a, b) => a - b);

  return ascendingSort[0];
};

const maxArrOfNum = (arr) => {
  const decendingSort = arr.sort((a, b) => b - a);

  return decendingSort[0];
};

export { analyzeArray };
