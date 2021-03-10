class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

module.exports = class SinglyLinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }

    push(value) {
        const node = new Node(value);
        if (!this.head) {
            this.head = node;
        } else {
            this.tail.next = node;
        }
        this.tail = node;
        this.length++;

        return node;
    }

    pop() {
        if (!this.length) return null;

        let cur = this.head;
        let newTail = cur;
        while (cur.next) {
            newTail = cur;
            cur = cur.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;

        if (!this.length) {
            this.head = null;
            this.tail = null;
        }

        return cur;
    }

    unshift(value) {
        const node = new Node(value, this.head);
        this.head = node;
        if (!this.tail) {
            this.tail = node;
        }
        this.length++;

        return node;
    }

    shift() {
        if (!this.length) return null;

        const head = this.head;
        this.head = this.head.next;
        this.length--;
        if (!this.length) {
            this.tail = null;
        }
        return head;
    }

    get(index) {
        if (index < 0 || index >= this.length) return null;

        let i = 0;
        let cur = this.head;
        while (i < index) {
            cur = cur.next;
            i++;
        }
        return cur;
    }

    set(index, value) {
        const node = this.get(index);
        if (!node) return false;
        node.value = value;
        return true;
    }

    insert(index, value) {
        if (index < 0 || index > this.length) return false;
        if (index === 0) {
            this.unshift(value);
        } else if (index === this.length) {
            this.push(value);
        } else {
            const preNode = this.get(index - 1);
            const newNode = new Node(value, preNode.next);
            preNode.next = newNode;
            this.length++;
        }

        return true;
    }

    remove(index) {
        if (index < 0 || index >= this.length) return null;
        if (index === 0) {
            return this.shift();
        } else if (index === this.length - 1) {
            return this.pop();
        }

        const preNode = this.get(index - 1);
        const removed = preNode.next;
        preNode.next = preNode.next.next;
        this.length--;

        return removed;
    }

    reverse() {
        let cur = this.head;
        while (cur) {
            cur = cur.next;
        }

        return this;
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
};
