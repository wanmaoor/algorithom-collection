let createNode = value => ({ value, next: null });
let createList = value => createNode(value);
let appendList = (currentNode, value) => {
  let newNode = createNode(value);
  while (currentNode.next) {
    currentNode = currentNode.next;
  }
  currentNode.next = newNode;
  return currentNode;
};
let removeList = (currentNode, value) => {
  let prev = null;
  while (currentNode.value !== value) {
    prev = currentNode;
    currentNode = currentNode.next;
  }
  prev.next = currentNode.next;
  return currentNode;
};
let traverseList = (list, fn) => {
  while (list !== null) {
    fn(list);
    list = list.next;
  }
};
const list1 = createList(1);
appendList(list1, 2);
appendList(list1, 3);
appendList(list1, 4);
traverseList(list1, x => {
  console.log(x.value);
});
