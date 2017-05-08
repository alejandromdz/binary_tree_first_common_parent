"use strict";
exports.__esModule = true;
var BinarySearchTree = (function () {
    function BinarySearchTree() {
        this._root = null;
    }
    BinarySearchTree.prototype.add = function (value) {
        var node = {
            value: value,
            left: null,
            right: null
        };
        if (this._root === null) {
            this._root = node;
        }
        else {
            var current = this._root;
            while (current) {
                if (value < current.value) {
                    if (current.left === null) {
                        current.left = node;
                        break;
                    }
                    else {
                        current = current.left;
                    }
                }
                else if (value > current.value) {
                    if (current.right === null) {
                        current.right = node;
                        break;
                    }
                    else {
                        current = current.right;
                    }
                }
            }
        }
    };
    BinarySearchTree.prototype.contains = function (value) {
        var found = false;
        var current = this._root;
        while (!found && current) {
            if (value < current.value) {
                current = current.left;
            }
            else if (value > current.value) {
                current = current.right;
            }
            else {
                found = true;
            }
        }
        return found;
    };
    BinarySearchTree.prototype.remove = function (value) {
    };
    BinarySearchTree.prototype.size = function () {
        var length = 0;
        this.traverse(function () {
            length++;
        });
        return length;
    };
    BinarySearchTree.prototype.toArray = function () {
        var result = [];
        this.traverse(function (node) {
            result.push(node.value);
        });
        return result;
    };
    BinarySearchTree.prototype.toString = function () {
    };
    BinarySearchTree.prototype.traverse = function (callback) {
        function inOrder(node) {
            if (node) {
                if (node.left !== null)
                    inOrder(node.left);
                callback.call(this, node);
                if (node.right !== null)
                    inOrder(node.right);
            }
        }
        inOrder(this._root);
    };
    return BinarySearchTree;
}());
exports["default"] = BinarySearchTree;
