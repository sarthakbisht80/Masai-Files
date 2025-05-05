class Node{
    constructor(Data){
        this.Data=Data;
        this.next=null;
        this.prev=null;

    }
};
function linkedList(){

    let head = new Node(12);
  
    let curr = head;

    for(let i=1;i<=5;i++){
    let temp= new Node(i);
         curr.next= temp;
         temp.prev=curr;
         curr=temp;
    }
    return head;
}
let list =linkedList();
