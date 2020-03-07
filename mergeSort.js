let mergeSort= arr => {
  if (arr.length === 1) {
    return arr
  }
  let left = arr.slice(0, Math.floor(arr.length/2))
  console.log("TCL: left", left)
  let right = arr.slice(Math.floor(arr.length/2))
  console.log("TCL: right", right)
  return merge(mergeSort(left), mergeSort(right))
}

let merge = (a, b) => {
  if(a.length === 0) return b;
  if(b.length === 0) return a;
  return a[0] > b[0] ?
    [b[0]].concat(merge(a, b.slice(1))) :
    [a[0]].concat(merge(a.slice(1), b))
}

// console.log(mergeSort([3,7,4,2,6,1,5]));
console.log(mergeSort([2,1]))