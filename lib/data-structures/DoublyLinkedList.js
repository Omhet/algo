class Node {
    constructor(value, next = null, prev = null) {
        this.value = value;
        this.next = next;
        this.prev = prev;
    }
}

module.exports = class DoublyLinkedList {
    constructor(head = null, tail = null) {
        this.length = 0;
        this.head = head;
        this.tail = tail;
    }

    push(value) {
        const node = new Node(value);

        if (this.length === 0) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }

        this.length++;

        return node;
    }

    pop() {
        if (this.length === 0) return null;

        const removed = this.tail;

        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
        }

        this.length--;

        return removed;
    }

    unshift(value) {
        const node = new Node(value);

        if (this.length === 0) {
            this.head = node;
            this.tail = node;
        } else {
            this.head.prev = node;
            node.next = this.head;
            this.head = node;
        }

        this.length++;

        return node;
    }

    shift() {
        if (this.length === 0) return null;

        const removed = this.head;

        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.prev = null;
        }

        this.length--;

        return removed;
    }

    get(index) {
        if (index < 0 || index >= this.length) return null;

        let node; 
        if (index < this.length / 2) {
            node = this.head;
            let i = 0;
            while (i !== index) {
                node = node.next;
                i++;
            }
        } else {
            node = this.tail;
            let i = this.length - 1;
            while (i !== index) {
                node = node.prev;
                i--;
            }
        }
       

        return node;
    }

    set(index, value) {
        const node = this.get(index);
        if (!node) return null;
        node.value = value;
        return node;
    }

    insert(index, value) {
        if (index < 0 || index > this.length) return null;

        if (index === 0) return this.unshift(value);
        if (index === this.length) return this.push(value);

        const prevNode = this.get(index - 1);
        const nextNode = prevNode.next;
        const node = new Node(value, nextNode, prevNode);
        prevNode.next = node;
        nextNode.prev = node;

        this.length++;

        return node;
    }

    remove(index) {
        if (index < 0 || index >= this.length) return null;

        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.pop();

        const node = this.get(index);
        const prevNode = node.prev;
        const nextNode = node.next;
        prevNode.next = nextNode;
        nextNode.prev = prevNode;

        this.length--;

        return node;
    }

    toArray() {
        const arr = [];
        let cur = this.head;
        while (cur) {
            arr.push(cur.value);
            cur = cur.next;
        }
        return arr;
    }

    toReversedArray() {
        const arr = [];
        let cur = this.tail;
        while (cur) {
            arr.push(cur.value);
            cur = cur.prev;
        }
        return arr;
    }
};
