class Node {
    constructor(value = null, next = null) {
        this.value= value;
        this.next  = next
    }
    
}

class LinkedList {
    constructor() {
        this.value;
        this.next
    }
    append(value) {
        
        let node = new Node(value);

        if (this.value === undefined && this.next === undefined) {
            let node = new Node(value);
            this.value = node.value;
            this.next = node.next;
            return
        }

        let head = this;
        console.log(head);
        
        while(head.next !== null) {
            head = head.next;
        }

        head.next = node;
        
    }
    prepend(value) {
        let head = this;
        let node = new Node(value, head);
        console.log("before", head);
        
        //head = { value: node.value, next: this};
        console.log({head});
        
        //head.value = node.value;
        //try with this in start to end
        this.head = node;
        //node.next = head;
        //head = new Node(value, head);
        //head.next = head
        //head.value = node.value;
        console.log("end", head);
    }
}

let list = new LinkedList();
list.append("value");
console.log(list);
list.append("value1");
console.log(list);
//console.log(list.next);
//list.append("value2");
console.log(list);
//list.append("value3");
//list.append("value4");
//list.append("value5");
list.prepend("value0")

console.log(list)