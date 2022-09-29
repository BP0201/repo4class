class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    const newNode = new Node (val);

    if (!this.root) {
     this.root = newNode
     return this.root;
    }

    let current = this;
    if (current.root) current = current.root;

    while (current) {
      if (newNode.val > current.val) {
        if (!current.right) {
          current.right = newNode;
          return this.root;
        }
        current = current.right;
      } else if (newNode.val < current.val) {
        if (!current.left) {
          current.left = newNode;
          return this.root;
        }
        current = current.left;
      }
    }
    return this.root;
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, current = this.root) {
    if (!this.root) {
      this.root = new Node(val);
      return this;
    }
    
    if (current.val > val) {
      if (current.left === null) {
        current.left = new Node (val);
        return this;
      }
      return this.insertRecursively(val, current.left)
    } else {
      if (current.right === null) {
        current.right = new Node (val);
        return this
      }
      return this.insertRecursively(val, current.right)
    }
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let current = this;
    if (current.root) current = current.root;
    while (current) {
      if (current.val === val) return current;
      current = current.val > val ? current.left : current.right
    }
    return undefined;
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, current = this.root) {
    if (this.root === null) return undefined;

    if (current.val > val) {
      if (current.left === null) return undefined;
      return this.findRecursively(val, current.left)
    } else if (current.val < val) {
      if (current.right === null) return undefined;
      return this.findRecursively(val, current.right)
    }
    return current;
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    let data = [];
    let current = this.root;

    function traverse(node) {
      data.push(node.val); // visit
      node.left && traverse(node.left); // go left if there's a left
      node.right && traverse(node.right); // go right if there's a right
    }

    traverse(current);
    return data;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    let data = [];
    let current = this.root;

    function traverse(node) {
      node.left && traverse(node.left); // go left if there's a left
      data.push(node.val); // visit
      node.right && traverse(node.right); // go right if there's a right
    }

    traverse(current);
    return data;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    let data = [];
    let current = this.root;

    function traverse(node) {
      node.left && traverse(node.left); // go left if there's a left
      node.right && traverse(node.right); // go right if there's a right
      data.push(node.val); // visit
    }

    traverse(current);
    return data;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    let node = this.root;
    let queue = [];
    let data = [];

    queue.push(node);

    while (queue.length) {
      node = queue.shift();
      data.push(node.val);
      if (node.left) {
        queue.push(node.left)
      }
      if (node.right) {
        queue.push(node.right)
      }
    }
    return data;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    
  }
}

const E = new Node ("E")
const A = new Node ("A")
const B = new Node ("B")
const D = new Node ("D")
const F = new Node ("F")
const G = new Node ("G")

E.left = B;
E.right = G;
G.left = F;
B.left = A;
B.right = D;

const tree = new BinarySearchTree(E)
// console.log(tree.dfsPreOrder())

module.exports = BinarySearchTree;
