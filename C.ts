import BinaryTree from './BinaryTree'

interface Node {
    value: number,
    right: Node,
    left: Node,
    parent:Node
}

class BinaryTreeWParent extends BinaryTree{
     add(value: number) {
        let node = {
            value: value,
            left: null,
            right: null,
            parent:null
        }
        if (this._root === null) {
            this._root = node;
        }
        else {
            let current = this._root;
            while (current) {
                if (value < current.value) {
                    if (current.left === null) {
                        current.left = node;
                        current.left.parent=current;
                        break;
                    } else {
                        current = current.left;
                    }
                }
                else if (value > current.value) {
                    if (current.right === null) {
                        current.right = node;
                        current.right.parent=current;
                        break;
                    } else {
                        current = current.right;
                    }
                }
            }
        }
    }
}





function firstCommonAncestorBT(root: Node, n1: number, n2: number): Node {

  

    let depthN1: number = BT.depth(n1);
    let depthN2: number = BT.depth(n2);
    let left:Node,right:Node;
    BT.traverse(function(node:Node){
        if (node.value===n1)
        left=node;
        if(node.value===n2)
        right=node;
    })
    while(depthN1!=depthN2){
        if(depthN1>depthN2){
            left=left.parent;
            depthN1--;
        }
        else{
            right=right.parent;
            depthN2--;
        }
    }
    while(left!==right){
        right=right.parent;
        left=left.parent;
    }
    return left;
}


let BT = new BinaryTreeWParent();


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
