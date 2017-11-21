class ShortenStrategy {
    getKey(url) {
        throw new Error('Abstract implementation');
    }

    getUrl(key) {
        throw new Error('Abstract implementation');
    }
}

module.exports = ShortenStrategy;
