"use strict";
exports.__esModule = true;
var BinaryTree_1 = require("./BinaryTree");
function firstCommonAncestorBT(root, n1, n2) {
    var n1found = false;
    var n2found = false;
    function inOrder(node, n1, n2) {
        if (node === null)
            return null;
        var val = node.value;
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
    function find(node, val) {
        if (node === null)
            return false;
        if (node.value == val || find(node.left, val) || find(node.right, val))
            return true;
        return false;
    }
    var result = inOrder(root, n1, n2);
    if (n1found && n2found || n1found && find(result, n2) || n2found && find(result, n1))
        return result;
    else
        return null;
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
