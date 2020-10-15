class SinglyLinkedList  {
	 constructor() {
        this.store = [];
        this.head = null;
        this.tail = null;
        this.length = 0;
        this.count = -1;
    }
    
   
    pop() { 
        if(this.store.length){
            let popNode = this.store[this.count];
            this.store = this.store.slice(0,this.count);
            this.length = this.store.length;
            this.count--;
            return popNode.val;
        }
        return undefined;
    }

    unshift(value) {
        let node = new Node(value);
        this.store.unshift(node);
        this.loop(this);
        this.count++;
        return this;
    }

    shift()  {
        if(this.store.length){
            let shiftNode = this.store[0];
            this.store.splice(0,1);
            this.loop(this);
            this.length = this.store.length;
            this.count--;
            return shiftNode.val;
        }
        return undefined;
    }

    set(index,value) {
        for(let i = 0; i<=this.store.length-1;i++) {
            if(i === index) {
                this.store[i].val = value;
                this.loop(this);
                return true;
            }
        }
        return false;
    }

    get(index) {
       for(let i = 0; i <= this.store.length-1;i++){
           if(i === index) {
               return this.store[i].val;
           }
       }
       return null;
    }

    insert(index, node) {
        let newNode = new Node(node);
        this.store.splice(index,0,newNode);
        this.loop(this);
        this.count++;
        return this.length;
    }

    remove(index) {
        let removed;
        let temp = [];
        for(let i = 0; i<=this.store.length-1;i++){
            if(i === index) {
                removed = this.store[i];
                continue;
            }
            temp.push(this.store[i]);
        }
        this.store = [...temp];
        this.loop(this);
        this.count--;
        return removed.val;
    }

    reverse() {
        this.store.reverse();
        this.loop(this);
        return this.store;
    }
     push(val) {
        this.count++;
        let node = new Node(val);
        this.store[this.count] = node;
        this.loop(this);
        return this;
    }
    loop(obj) {
        obj.head = this.store[0];
        for(let i = 1; i<this.store.length;i++){
            this.store[i-1].next = this.store[i];
                     if(i === this.store.length - 1){
                     obj.tail = this.store[i];       
                 }
             }
             obj.length = this.store.length;
    }
}
class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}