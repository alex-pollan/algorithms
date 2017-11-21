const ShortenStrategy = require('./shorten-strategy');

class ShortenerService {
    constructor(shortenStrategy) {
        if (!(shortenStrategy instanceof ShortenStrategy)) {
            throw new Error('Expected instance of ShortenStrategy');
        }

        this.shortenStrategy = shortenStrategy;
    }

    shorten(url) {
        return `http://tinier.com/${this.shortenStrategy.getKey(url)}`;
    }

    unshorten(url) {
        if (url.endsWith('/')) {
            url = url.substr(url.length - 1);
        }

        const fragments = url.split('/');

        if (fragments.length === 0) {
            return url;
        }

        const key = fragments[fragments.length - 1];

        return this.shortenStrategy.getUrl(key);
    }
}

module.exports = ShortenerService;
