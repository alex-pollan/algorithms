class Store {
    setValue(key, value) {
        throw new Error('Abstract implementation');
    }

    getValue(key) {
        throw new Error('Abstract implementation');
    }
}

module.exports = Store;
