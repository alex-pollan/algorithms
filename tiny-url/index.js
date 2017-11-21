const ShortenService = require('./shorten-service');
const SequentialShortenStrategy = require('./sequential-shorten-strategy');
const InMemoryStore = require('./in-memory-store');

const shortenService = new ShortenService(new SequentialShortenStrategy(new InMemoryStore()));

let shortUrl = shortenService.shorten('http://www.google.com/');
let originalUrl = shortenService.unshorten(shortUrl);
console.log(shortUrl, originalUrl);

//TODO: implement web server & persistency