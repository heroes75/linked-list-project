class Node {
    constructor(value = null, next = null) {
        this.value= value;
        this.next  = next
    }
    
}

class LinkedList {
    constructor() {
        this.Head;
        this.node;
        //this.a;
        //this.value;
        //this.next
    }
    append(value) {
        
        let node = new Node(value);

        if (this.Head === undefined && this.node === undefined) {
            let node = new Node(value);
            this.Head = new Node(value, this.node)
            return
        }

        //let head = this;
        //console.log(head);
        
        //while(head.next !== null) {
        //    head = head.next;
        //}

        //head.next = node;
        console.log("this.head", this.Head);
        let tmp = this.Head;
        while(tmp.next !== null) {
            tmp = tmp.next;
        }

        tmp.next = node;
        
    }

    prepend(value) {
        let heads = this;
        let node = new Node(value, heads);
        console.log("before", heads);
        
        //head = { value: node.value, next: this};
        console.log({heads});
        
        //head.value = node.value;
        //try with this in start to end
        this.Head = {value: value, next: this.Head};
        //node.next = head;
        //head = new Node(value, head);
        //head.next = head
        //head.value = node.value;
        console.log("end", heads);
    }

    

    size() {
        let tmp = this.Head;
        let size = 0;
        if(tmp === undefined) {
            console.log(0)
            return 
        }

        if(tmp !== undefined) size++;

        while (tmp.next !== null) {
            tmp = tmp.next
            size++;
        }
        console.log(size);
        
        return size
    }

    head() {
        let tmp = this.Head
        console.log(tmp)
        return tmp
    } 

    tail() {
        let tmp = this.Head;
        if(tmp === undefined) return {}
        while (tmp.next !== null) {
            tmp = tmp.next
        }
        console.log("tail",tmp);
        return tmp
    }
    
    at(index) {
        let tmp = this.Head;
        if (index < 0 || index > this.size() - 1) return {};
        let pointer = 0;
        while (pointer !== index) {
            tmp = tmp.next;
            pointer++
        }
        console.log("at index", tmp);
        
        return tmp
    }

    pop() {
        let tmp = this.Head;
        if(this.size() === 1) {
            this.Head = undefined
            console.log(tmp)
            return
        }
        while (tmp.next.next !== null) {
            tmp = tmp.next;

        }
        console.log(tmp)
        tmp.next = null
        //.log(this.at(4))
    }

    contains(value) {
        let tmp = this.Head;
        while (tmp !== null) {
            if (tmp.value === value) {
                console.log(true)
                return true
            }
            tmp = tmp.next;
        }
        console.log(false)
        return false
    }

    find(value) {
        let tmp = this.Head;
        let index = 0;
        while (tmp !== null) {
        if (tmp.value === value) {
                console.log(index)
                return index
            }
            index++;
            tmp = tmp.next
        }
        console.log(null)
        return null
    }
}

let list = new LinkedList();
list.size();
list.append("value");
//list.pop()
console.log(list);
list.size();
list.append("value1");
console.log(list);
list.size();
list.append("value2");
console.log(list);
list.size();
list.append("value3");
list.size();
//list.append("value4");
//list.append("value5");
list.prepend("value0")
list.size();
list.head();
list.tail();
list.at(5);
list.pop();
list.size();
list.contains("value");
list.find("value6");

console.log(list);
console.log(list.Head.next.next);
console.log(list.Head.next);