function quickSort2(arr){
	return arr.length > 1 ? [
		...quickSort2(arr.filter(item => item < arr[0])),
		...quickSort2(arr.filter(item => item === arr[0])),
		...quickSort2(arr.filter(item => item >arr[0]))
	] : arr
}

console.log(quickSort2([2,4,3,7,6,87,9]))
