let countSort = arr => {
  let hashTable = {};
  let max = 0;
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (!hashTable[element]) {
      hashTable[element] = 1;
    } else {
      hashTable[element] += 1;
    }
    if (element > max) {
      max = element;
    }
  }
  for (let j = 0; j <= max; j++) {
    if (j in hashTable) {
      for (let i = 0; i < hashTable[j]; i++) {
        result.push(j);
      }
    }
  }
  return result;
};

console.log(countSort([5, 5, 3, 3, 2, 2, 1, 1, 4]));
