/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    let total = 0
    const toVisit = [this]
    while(toVisit.length) {
      let current = toVisit.pop()
      if (!total) {
        if (!current.root) return 0;
        total = total + current.root.val
      } else {
        total = total + current.val;
      }
      if (current.root) {
        for (let child of current.root.children) {
          toVisit.push(child)
        }
      } else {
      for (let child of current.children) {
        toVisit.push(child)
      }
    }
    }
    return total;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    let total = 0
    const toVisit = [this]
    while(toVisit.length) {
      let current = toVisit.pop()
      if (current.root) {
        if (current.root.val % 2 === 0) {
          total++
        }
      } else {
        if (current.val % 2 === 0) {
          total++
        }
      }
      if (current.root) {
        for (let child of current.root.children) {
          toVisit.push(child)
        }
      } else if (current.children) {
      for (let child of current.children) {
        toVisit.push(child)
      }
    } 
    }
    return total;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    let total = 0
    const toVisit = [this]
    while(toVisit.length) {
      let current = toVisit.pop()
      if (current.root) {
        if (current.root.val > lowerBound) {
          total++
        }
      } else {
        if (current.val > lowerBound) {
          total++
        }
      }
      if (current.root) {
        for (let child of current.root.children) {
          toVisit.push(child)
        }
      } else if (current.children) {
      for (let child of current.children) {
        toVisit.push(child)
      }
    } 
    }
    return total;
  }
}

// const tree = new Tree(new TreeNode(1, [new TreeNode (2, [new TreeNode(4)]), new TreeNode (3, [new TreeNode(5)])]))
// console.log(tree.sumValues());

module.exports = { Tree, TreeNode };
