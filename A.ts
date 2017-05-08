import BinaryTree from './BinaryTree'

interface Node {
    value: number,
    right: Node,
    left: Node
}


function firstCommonAncestorBT(root: Node, n1: number, n2: number): Node {
    
    let path1: Node[] = [];
    let path2: Node[] = [];

    function findPath(node: Node, path: Node[], n: number): boolean {
        if (node === null) 
        return false;

        path.push(node);

        if(node.value==n) 
        return true;

        if(findPath(node.left,path,n)||findPath(node.right,path,n))
        return true;

        path.pop();
        return false;
    }

    if (!findPath(root, path1, n1) || !findPath(root, path2, n2)) return null;

    let i:number;
   
    for (i = 0; i < path1.length && i < path2.length; i++) {
        if (path1[i] !== path2[i]) break;
    }
    return path1[i - 1];
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
