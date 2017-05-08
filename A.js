"use strict";
exports.__esModule = true;
var BinaryTree_1 = require("./BinaryTree");
function firstCommonAncestorBT(root, n1, n2) {
    var path1 = [];
    var path2 = [];
    function findPath(node, path, n) {
        if (node === null)
            return false;
        path.push(node);
        if (node.value == n)
            return true;
        if (findPath(node.left, path, n) || findPath(node.right, path, n))
            return true;
        path.pop();
        return false;
    }
    if (!findPath(root, path1, n1) || !findPath(root, path2, n2))
        return null;
    var i;
    for (i = 0; i < path1.length && i < path2.length; i++) {
        if (path1[i] !== path2[i])
            break;
    }
    return path1[i - 1];
}
var BT = new BinaryTree_1["default"]();
BT.add(5); //         5
BT.add(3); //       /   \
BT.add(2); //     3       7
BT.add(4); //    / \     / \
BT.add(7); //   2   4   6   8
BT.add(6); //
BT.add(8); //
console.log('FCA(2,4) = ', firstCommonAncestorBT(BT._root, 2, 4));
console.log('FCA(2,6) = ', firstCommonAncestorBT(BT._root, 2, 6));
console.log('FCA(2,7) = ', firstCommonAncestorBT(BT._root, 2, 7));
console.log('FCA(2,3) = ', firstCommonAncestorBT(BT._root, 2, 3));
console.log('FCA(2,10) = ', firstCommonAncestorBT(BT._root, 2, 10));
