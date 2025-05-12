class Node {
    constructor(value) {
        this.value= value;
        this.next  = null
    }
    
}

class LinkedList {
    constructor() {
        this.value;
        this.next
    }
    append(value) {
        let node = new Node(value);
        let nextEnd = this.next
        if (this.value === undefined && this.next === undefined) {
            this.value = node.value;
            this.next = node.next;
            return
        } 
        console.log({nextEnd});
        while (nextEnd !== null) {
            nextEnd = this.next.next;
        }
        nextEnd = node;
        console.log(nextEnd);
        
    }
}

let list = new LinkedList();
list.append("value");
console.log(list);
list.append("value1");
console.log(list);
list.append("value2");
console.log(list);

