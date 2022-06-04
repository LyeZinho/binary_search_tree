/*
Bynary Search Tree
*/

//Explaination

//Create a new node
tree = {
    // 
    root: null,
    //Add a value to the tree
    insert: function(value) {
        //if the tree is empty create a new node
        if (this.root === null) {
            //create a new node
            this.root = {
                //value of the node
                value: value,
                //left and right children
                left: null,
                right: null
            };
        } else {
            // if the tree is not empty add the value to the tree
            this.insertNode(this.root, value);
        }
    },
    //Add a node to the tree
    insertNode: function(node, value) {
        // if the value is less than the node value add it to the left
        if (value < node.value) {
            // if the left child is null add the node to the left
            if (node.left === null) {
                //create a new node
                node.left = {
                    value: value,
                    left: null,
                    right: null
                };
            } else {
                // if the left child is not null add the node to the left
                this.insertNode(node.left, value);
            }
        } else {
            // if the value is greater than the node value add it to the right	
            if (node.right === null) {
                // create a new node
                node.right = {
                    value: value,
                    left: null,
                    right: null
                };
            } else {
                // if the right child is not null add the node to the right
                this.insertNode(node.right, value);
            }
        }
    }
}


tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(3);
tree.insert(7);
tree.insert(13);
tree.insert(17);

// console.log(search(tree.root, 10));
function printTree(node) {
    // if the node is not null print the node value
    if (node !== null) {
        // print the node value
        printTree(node.left);
        // print the node value
        console.log(node.value);
        // print the node value
        printTree(node.right);
    }
}

printTree
(tree.root);



//search for a value in the tree

function search(node, value) {
    // if the node is not null and the value is equal to the node value return the node
    if (node === null) {
        return false;
    } else if (value < node.value) {
        // if the value is less than the node value search the left child
        return search(node.left, value);
    } else if (value > node.value) {
        // if the value is greater than the node value search the right child
        return search(node.right, value);
    } else {
        // if the value is equal to the node value return the node
        return true;
    }
}


