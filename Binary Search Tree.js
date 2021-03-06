//Nodes that are used to create the tree
class Node {
	constructor(data, left = null, right=null){
		this.data = data;
		this.left = left;
		this.right = right;
	}
}
//Binary Search Tree
class BST {
	constructor(){
		this.root = null;
	}
	add(data){
		const node = this.root;
		if(node === null){
			this.root = new Node(data);
			return;
		} else {
			const searchTree = function(node) {
				if (data < node.data){
					if(node.left === null){
						node.left = new Node(data);
						return;
					} else if (node.left !== null) {
						return searchTree(node.left);
					}
				} else if (data > node.data){
					if (node.right === null){
						node.right = new Node(data);
						return;
					} else if (node.right !== null){
						return searchTree(node.right);
					}
				} else {
					return null;
				}
			};
		return searchTree(node);
		}
	
	}
	findMin() {
		let currentNode = this.root;
		while (currentNode.left !== null){
			currentNode = currentNode.left;
		}
		return currentNode.data;
	}
	findMax() {
		let currentNode = this.root;
		while (currentNode.right !== null){
			currentNode = currentNode.right;
		}
		return currentNode.data;
	}
	find(data){
		let current = this.root;
		while(current){
		if (data === current.data){
			return "Node exists in the tree";
		} 
		if (data < current.data){
			current = current.left;
		} else {
			current = current.right;
		}
		}
		return "Node does not exist in tree";
	}
	remove(data){
		const removeNode = function(node, data){
			if (node === null){
				return null;
			}
			if (data == node.data){
				if (node.left === null && node.right === null){
					return null;
				}
				if (node.left === null){
					return node.right;
				}
				if (node.right === null){
					return node.left;
				}
				var tempNode = node.right;
				while (tempNode.left !== null){
					tempNode = tempNode.left;
				}
				node.data = tempNode.data;
				node.right = removeNode(node.right, tempNode.data);
				return node;
				} else if (data < node.data){
					node.left = removeNode(node.left, data);
					return node;
				} else {
					node.right = removeNode(node.right, data);
					return node;
				}
		}
		this.root = removeNode(this.root, data);
	}
}

const bst = new BST();

bst.add(6);
console.info(bst);
bst.add(9);
console.info(bst);
bst.add(5);
console.info(bst);

console.info(bst);
bst.add(7);
console.info(bst);
bst.add(5);
console.info(bst);

console.info(bst);
bst.add(4);
bst.add(2);
bst.add(17);
console.info(bst);
console.info(bst.findMax());
console.log(bst.findMin());
console.log(bst.find(9));
bst.remove(9);
console.log(bst.find(9));
console.log("Do the children of 9 still exist?");
console.log(bst.find(7));
console.log(bst.find(17));

// Need to comments and add a proper method to print out.
