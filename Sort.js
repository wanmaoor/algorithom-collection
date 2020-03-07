//* ["B3","D2","F1","A9","D12","A2","C1","Z0","B1"]=>["Z0","B1","C1","F1","A2","D2","B3","A9","D12"]
const Sort = arr => {
  let i = arr.length;
  // let temp;
  while (i > 0) {
    for (let j = 0; j < arr.length; j++) {
      // console.log (typeof parseInt(arr[j].substring(1)));
      if (parseInt(arr[j].substring(1)) > parseInt(arr[j+1].substring(1))) {
        // temp = arr[j];
        // arr[j] = arr[j + 1];
        // arr[j + 1] = temp;
        console.log('大于');
      }

    }
      console.log("---");
    i--;
  }
  return arr
};

Sort(["B3", "D2", "F1", "A9", "D12", "A2", "C1", "Z0", "B1"]);
