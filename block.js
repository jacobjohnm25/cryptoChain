const GENESIS_DATA = {
    timestamp: 1,
    lastHash: '-----',
    hash: 'hash_genesis',
    data: [],
}

const cryptoHash = require('./crypto-hash');

class Block {
    constructor({timestamp, lastHash, hash, data}){
        this.timestamp = timestamp;
        this.lastHash = lastHash;
        this.hash = hash;
        this.data = data;
    }

    static genesis() {
        return new Block(GENESIS_DATA);
    }

    static minedBlock({lastBlock, data}) {
        const timestamp = Date.now();
        const lasthash = lastBlock.hash;

        return new this({
            timestamp,
            lastHash,
            data,
            hash: cryptoHash(timestamp, lastHash, data),
        });
    } 
}

module.exports = Block;
