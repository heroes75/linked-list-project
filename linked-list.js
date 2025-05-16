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
    }
    append(value) {
        
        let node = new Node(value);

        if (this.Head === undefined && this.node === undefined) {
            this.Head = new Node(value, this.node)
            return
        }

        
        let tmp = this.Head;
        while(tmp.next !== null) {
            tmp = tmp.next;
        }

        tmp.next = node;
        
    }

    prepend(value) {
        this.Head = {value: value, next: this.Head};
    }

    

    size() {
        let tmp = this.Head;
        let size = 0;
        if(tmp === undefined) {
            return 0
        }

        if(tmp !== undefined) size++;

        while (tmp.next !== null) {
            tmp = tmp.next
            size++;
        }
        
        return size
    }

    head() {
        let tmp = this.Head
        return tmp
    } 

    tail() {
        let tmp = this.Head;
        if(tmp === undefined) return {}
        while (tmp.next !== null) {
            tmp = tmp.next
        }
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
        
        return tmp
    }

    pop() {
        let tmp = this.Head;
        if(this.size() === 1) {
            this.Head = undefined
            return
        }
        while (tmp.next.next !== null) {
            tmp = tmp.next;

        }
        tmp.next = null
    }

    contains(value) {
        let tmp = this.Head;
        while (tmp !== null) {
            if (tmp.value === value) {
                return true
            }
            tmp = tmp.next;
        }
        return false
    }

    find(value) {
        let tmp = this.Head;
        let index = 0;
        while (tmp !== null) {
        if (tmp.value === value) {
                return index
            }
            index++;
            tmp = tmp.next
        }
        return null
    }

    toString() {
        let tmp = this.Head;
        let str = "";
        if(tmp === undefined) return str = "()";
        while (tmp.next !== null) {
            str += `( ${tmp.value} ) -> `
            
            tmp = tmp.next
        }
        return str += `( ${tmp.value} ) -> ${tmp.next}`
    }

    insertAt(value, index) {
        let tmp = this.Head;
        let pointer = 0;
        if(index === 0) {
            this.prepend(value);
            return
        }
        while (pointer !== index - 1) {
            tmp = tmp.next;
            pointer ++;
        }
        tmp.next = new Node(value, tmp.next)
    }

    removeAt(index) {
        let tmp = this.Head;
        let pointer = 0;
        if(index === 0) {
            this.Head = this.Head.next;
            return
        }
        while (pointer < index - 1) {
            tmp = tmp.next;
            pointer ++;
        }
        tmp.next = tmp.next.next;
    }
}


export default LinkedList;
