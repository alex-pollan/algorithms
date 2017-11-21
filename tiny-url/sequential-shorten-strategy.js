const ShortenStrategy = require('./shorten-strategy');
const Store = require('./store');

const KEY_LENGTH = 6;
const CHARS = '0123456789ABZDEFGHIJKLMNSOPQRSTUWXYZabcdefghijklmnopqrstuwxyz';
const BASE = CHARS.length;
const MAX_ID = Math.pow(BASE, KEY_LENGTH) - 1;

class SequentialShortenStrategy extends ShortenStrategy {
    constructor(store) {
        super();
        if (!(store instanceof Store)) {
            throw new Error('Expected instance of Store');
        }

        this.current = 0;
        this.store = store;
    }

    getKey(url) {
        const id = this.getNewId();
        const key = this.idToKey(id);
        this.store.setValue(id, url);
        return key;
    }

    getUrl(key) {
        if (key.length !== KEY_LENGTH) {
            return null;
        }

        return this.store.getValue(this.keyToId(key));
    }

    getNewId() {
        this.current++;
        return this.current;
    }

    idToKey(id) {
        if (id > MAX_ID) {
            throw new Error('Max keys reached');
        }

        return this.toBase61(id).padStart(KEY_LENGTH, '0');
    }

    keyToId(key) {
        return this.fromBase61(key);
    }

    toBase61(value) {
        let str = '';
        let remainder = value;

        while (remainder > 0) {
            let rest = remainder % BASE;
            remainder = Math.trunc(remainder / BASE);
            str = CHARS[rest] + str;
        }

        return str;
    }

    fromBase61(value) {
        let base10Value = CHARS.indexOf(value.charAt(value.length - 1));

        for (let i = 0; i < value.length - 1; i++) {
            base10Value += Math.pow(BASE, value.length - i - 1) * CHARS.indexOf(value.charAt(i));
        }

        return base10Value;
    }
}

module.exports = SequentialShortenStrategy;
