


class BinarySearchTree {
    _root = null

    constructor() {

    }

    add(value: number) {
        let node = {
            value: value,
            left: null,
            right: null
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
                        break;
                    } else {
                        current = current.left;
                    }
                }
                else if (value > current.value) {
                    if (current.right === null) {
                        current.right = node;
                        break;
                    } else {
                        current = current.right;
                    }
                }

            }
        }
    }

    contains(value) {
        let found = false;
        let current = this._root;
        while (!found && current) {
            if (value < current.value) {
                current = current.left;
            }
            else if (value > current.value) {
                current = current.right;
            } else {
                found = true;
            }
        }
        return found
    }

    remove(value) {
    }

    size() {
        let length = 0;
        this.traverse(function () {
            length++;
        })
        return length;
    }

    toArray() {
        var result = [];
        this.traverse(function (node) {
            result.push(node.value);
        });
        return result;
    }


    traverse(callback) {
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
    }
    depth(value) {
        let depth = 0;
        let current = this._root;
        let found=false;

        while (current) {

            if (value < current.value) {
                current = current.left;
            } else if (value > current.value) {
                current = current.right;
            }
            else if(value===current.value){
                found=true;
                break;
            }
            depth++;
            continue;
        }
        return found?depth:null;
    }


}

export default BinarySearchTree;
