const cryptoHash = require('./crypto-hash');

describe('cryptoHash()', () => {
    it('generates sha256 hashed output', () => {
        expect(cryptoHash('foo'))
        .toEqual('8141d2b17b7344d1c058e0cfaa031768e23bab8eb32613d3345655b37876436c');
    });
});