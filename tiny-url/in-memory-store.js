const HashMap = require('hashmap');
const Store = require('./store');

class InMemoryStore extends Store {
    constructor() {
        super();
        this.values = new HashMap();
    }

    setValue(key, value) {
        this.values.set(key, value);
    }

    getValue(key) {
        return this.values.get(key);
    }
}

module.exports = InMemoryStore;
