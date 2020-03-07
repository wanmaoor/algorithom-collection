const createTree = value => ({ value, children: null, parent: null });
const addChild = (node, value) => {
  const newNode = {
    value,
    children: null,
    parent: node
  };
  node.children = node.children || [];
  node.children.push(newNode);
  return newNode;
};
const travel = (node, fn) => {
  fn(node);
  if (!node.children) {
    return;
  }
  node.children.forEach(item => {
    travel(item, fn);
  });
};
const removeNode = node => {
  const siblings = node.parent.children;
  let index = 0;
  for (let i = 1; i < siblings.length; i++) {
    if (siblings[i] === node) {
      index = i;
    }
  }
  siblings.splice(index, 1);
};
const tree = createTree(10);
const node2 = addChild(tree, 20);
addChild(tree, 30);
addChild(tree, 40);
addChild(tree, 50);
addChild(node2, 201);
addChild(node2, 202);
const node23 = addChild(node2, 203);

// console.dir(tree);
travel(tree, tree => {
  console.log(tree.value);
});
removeNode(node23);
console.log(tree);
console.log(node2);
