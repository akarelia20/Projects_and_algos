class Node {
    constructor(data){
        this.data = data;
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.head = null
    }

    addNodeFront(data){
        // create instance of node classs
        let newNode= new Node(data)
        // new instance will be the beginning of the linked list
        newNode.next = this.head
        // then readjust the head pointer in a way that is now pointing to newly created node
        this.head= newNode
        return this
    }

    removeFront(){
        if (this.head == null){
            return this.head
        }
        var toBeRemoved= this.head
        this.head= toBeRemoved.next
        toBeRemoved.next= null
        return this.head
    }

    fonts(){
        if (this.head == null){
            return null
        }
        return this.head.data
    }

    display(){
        let current = this.head
        let result = ""
        // console.log (current.data)
        while(current != null){
            result += `${current.data},`
            current= current.next
        }
        return result
    }
}


SLL = new LinkedList()
SLL.addNodeFront(10)

console.log(SLL.fonts())

SLL.addNodeFront(5)
SLL.addNodeFront(7)

SLL.removeFront()

console.log(SLL.display())
console.log(SLL)
