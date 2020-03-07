// function nonUniqueElements(data) {
//   let obj = {};
//   let newArr = [];
//   data.forEach(item => {
//     obj[item] = obj[item] + 1 || 1;
//   });
//   for (const key in obj) {
//     if (obj.hasOwnProperty(key)) {
//       const element = obj[key];
//       if (element >= 2) {
//         for (let index = 0; index < element; index++) {
//           newArr.push(parseInt(key));
//         }
//       }
//     }
//   }
//   console.log(newArr);
//   return newArr;
// }

function nonUniqueElements(data) {
  let obj = {};
  data.forEach(item => {
    obj[item] = obj[item] + 1 || 1;
  });
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const element = obj[key];
      if (element === 1) {
        let index = data.indexOf(parseInt(key));
        data.splice(index, 1);
      }
    }
  }
  console.log(data);
  return data;
}

// nonUniqueElements([1, 2, 3, 1, 3]);
// nonUniqueElements([1, 2, 3, 4, 5]);
// nonUniqueElements([5, 5, 5, 5, 5]);
// nonUniqueElements([10, 9, 10, 10, 9, 8]);

function median(arr) {
  let sortArr = arr.sort((a, b) => a - b);
  if (sortArr.length % 2 === 1) {
    const index = Math.floor(sortArr.length / 2);
    return sortArr[index];
  } else {
    const rightIndex = Math.floor(sortArr.length / 2);
    const leftIndex = rightIndex - 1;
    return (sortArr[leftIndex] + sortArr[rightIndex]) / 2;
  }
}

// console.log(median([1, 2, 3, 4, 5]));
// console.log(median([3, 1, 2, 5, 3]));
// console.log(median([1, 300, 2, 200, 1]));
// console.log(median([3, 6, 20, 99, 10, 15]));

function countNeighbours(arr, col, row) {
  let count = 0;
  function addOne() {
    count += 1;
  }
  let cells = [
    arr[col - 1][row],
    arr[col - 1][row + 1],
    arr[col - 1][row - 1],
    arr[col + 1][row - 1],
    arr[col][row - 1],
    arr[col + 1][row],
    arr[col + 1][row + 1],
    arr[col][row + 1]
  ];
  if (col - 1 < 0) {
    console.log(123);
    cells.splice(0, 5);
  } else if (col - 1 < 0 && row - 1 > 0) {
    cells.splice(0, 3);
  }

  cells.forEach(cell => {
    if (cell === 1) {
      addOne();
    }
  });
  console.log(count);
  return count;
}
countNeighbours(
  [
    [1, 0, 0, 1, 0],
    [0, 1, 0, 0, 0],
    [0, 0, 1, 0, 1],
    [1, 0, 0, 0, 0],
    [0, 0, 1, 0, 0]
  ],
  1,
  2
);
countNeighbours(
  [
    [1, 0, 0, 1, 0],
    [0, 1, 0, 0, 0],
    [0, 0, 1, 0, 1],
    [1, 0, 0, 0, 0],
    [0, 0, 1, 0, 0]
  ],
  0,
  0
);
