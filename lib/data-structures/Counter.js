module.exports = class Counter {
    constructor(arr) {
        this.map = new Map();
        for (const el of arr) {
            this.map.set(el, this.get(el) + 1);
        }
    }

    get(el) {
        return this.map.get(el) || 0;
    }

    entries() {
        return Array.from(this.map.entries());
    }
}