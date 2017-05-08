import BinaryTree from './BinaryTree'

interface Node{
    value:number,
    right:Node,
    left:Node
}

function firstCommonAncestorBT(root:Node, n1: number, n2: number):Node {
    let n1found:boolean = false;
    let n2found:boolean = false;
    function inOrder(node:Node, n1: number, n2: number):Node {
        if (node === null) return null;
        var val:number = node.value;
        if (n1 == val) {
            n1found = true;
            return node;
        }
        else if (n2 == val) {
            n2found = true;
            return node;
        }
        var left = inOrder(node.left, n1, n2);
        var right = inOrder(node.right, n1, n2);
        if (left && right) {
            return node;
        }
        return left !== null ? left : right;
    }
    function find(node:Node, val:number):boolean {
        if (node === null) return false;
        if (node.value == val || find(node.left, val) || find(node.right, val))
            return true;
        return false;
    }
    var result:Node = inOrder(root, n1, n2);
    if (n1found && n2found || n1found && find(result, n2) || n2found && find(result, n1))
        return result;
    else return null;
}

let BT = new BinaryTree();

BT.add(5);//         5
BT.add(3);//       /   \
BT.add(2);//     3       7
BT.add(4);//    / \     / \
BT.add(7);//   2   4   6   8
BT.add(6);//
BT.add(8);//

console.log('FCA(2,4) = ', firstCommonAncestorBT(BT._root, 2, 4));
console.log('FCA(2,6) = ', firstCommonAncestorBT(BT._root, 2, 6));
console.log('FCA(2,7) = ', firstCommonAncestorBT(BT._root, 2, 7));
console.log('FCA(2,3) = ', firstCommonAncestorBT(BT._root, 2, 3));
console.log('FCA(2,10) = ', firstCommonAncestorBT(BT._root, 2, 10));
