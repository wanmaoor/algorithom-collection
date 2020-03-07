let quickSort = numbers => {
  if (numbers.length <= 1) return numbers;
  let left = [];
  let right = [];
  let pivotIndex = Math.floor(numbers.length / 2);
  let pivot = numbers.splice(pivotIndex, 1)[0];
  for (let i = 0; i < numbers.length; i++) {
    numbers[i] < pivot ? left.push(numbers[i]) : right.push(numbers[i]);
  }
  return quickSort(left).concat([pivot], quickSort(right));
};

console.log(quickSort([4, 2, 3, 5, 1]));
