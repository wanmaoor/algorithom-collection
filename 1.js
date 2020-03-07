// 用递归算法实现，数组长度为5且元素的随机数在2-32间不重复的值

let num = 0;
let arr = [];
function x() {
  if (num < 4 ) {
    num += 1;
    x();
  }
  const n = parseInt((Math.random() * 30 + 2).toString());
  if (arr.indexOf(n) === -1) {
    arr.push(n);
  }
  return arr;
}

console.log(x());
