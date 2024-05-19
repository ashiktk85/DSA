class Node{
  constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
  }
}

class BST{
  constructor() {
      this.root = null;
  }

  insert(value){
      const newNode=new Node(value);
      if(!this.root){
          this.root = newNode;
      }
      else{
          let curr = this.root;
          while(true){
              if(value<curr.value){
                  if(!curr.left){
                      curr.left = newNode;
                  }
                  curr = curr.left;
              }else if(value>curr.value){
                  if(!curr.right){
                      curr.right = newNode;
                  }
                  curr = curr.right;
              }else{
                  break;
              }
          }
      }
  }

  remove(value){
      function removeNode(node,value){
          if(!node){
              return null;
          }else{
              if(value<node.value){
                  node.left = removeNode(node.left,value);
                  return node;
              }
              else if(value>node.value){
                  node.right = removeNode(node.right,value);
                  return node;
              }else{
                  if(!node.left&&!node.right){
                      return null;
                  }
                  if(!node.left){
                      return node.right;
                  }
                  if(!node.right){
                      return node.left;
                  }
                  let temp = node.right;
                  while(!temp.left){
                      temp = temp.left;
                  }
                  node.value = temp.value;
                  node.right = removeNode(node.right,temp.value);
                  return node;
              }
          }
      }
      this.root = removeNode(this.root,value);
  }

  search(value){
      let curr = this.root;
      let found = false;
      if(!curr){
          return null;
      }else{
          while(curr&&!found){
              if(value<curr.value){
                  curr = curr.left;
              }
              else if(value>curr.value){
                  curr= curr.right;
              }else{
                  found = true;
              }
          }
          if(!found) return false;
          return curr;
      }
  }
  BFS(){
      let curr=this.root;
      let queue = [curr];
      let result = [];
      while(queue.length){
          curr = queue.shift();
          result.push(curr);
          if(curr.left){
              queue.push(curr.left);
          }
          if(curr.right){
              queue.push(curr.right);
          }
      }
      return result;
  }

  isBST(){
      function bstCheck(node,min,max){
          if(!node){
              return true;
          }
          if(min && node.value<=min.value){
              return false;
          }
          if(max && node.value>=max.value){
              return false;
          }
          return bstCheck(node.left,min,node)&&bstCheck(node.right,node,max);
      }
      return bstCheck(this.root,null,null);
  }

  findHeight(curr){
      if(!curr){
          return -1;
      }
      else{
          let left = this.findHeight(curr.left);
          let right = this.findHeight(curr.right);
          return Math.max(left,right)+1;
      }
  }

  isBalanced(){
      function height(curr){
          if(!curr){
              return 0;
          }
          let left = height(curr.left);
          let right = height(curr.right);
          if(left===-1||right===-1||Math.abs(left-right)>1){
              return -1;
          }
          return Math.max(left,right)+1;
      }
      let h = height(this.root);
      if(h===-1) return false;
      else return true;
  }

  isBstChecker(){
      let stack = [];
      let prev = null;
      let curr=this.root;
      while(stack.length||curr){
          while(curr){
              stack.push(curr);
              curr = curr.left;
          }
          curr = stack.pop();
          if(prev&&curr.value<=prev.value){
              return false;
          }
          prev = curr;
          curr = curr.right;
      }
      return true;
  }

  findDepth(curr,value,depth=0){
      if(!curr){
          return -1;
      }
      else if(curr.value==value){
          return depth;
      }
      else{
          const left = this.findDepth(curr.left,value,depth+1);
          if(left!==-1){
              return left;
          }
          return this.findDepth(curr.right,value,depth+1);
      }
  }
}

const bst = new BST();
bst.insert(26);
bst.insert(10);
bst.insert(3);
bst.insert(4);
bst.insert(6);
bst.insert(3);
console.log(bst.findDepth(bst.root,26));
   