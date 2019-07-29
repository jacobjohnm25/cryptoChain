const Block = require('./block.js');

const GENESIS_DATA = {
    timestamp: 1,
    lastHash: '-----',
    hash: 'hash_genesis',
    data: [],
}
const cryptoHash = require('./crypto-hash');


const props = {
    timestamp: 'a-date',
    lastHash: 'foo-lastHash',
    hash: 'foo-hash',
    data: ['foo-data', 'blockChain'],
}
describe('Works Fine', ()=>{
    const block = new Block({
        timestamp: props.timestamp,
        lastHash: props.lastHash,
        hash: props.hash,
        data: props.data,
    });

    it('Has lastHash, timestamp, hash and data property', ()=> {
        expect(block.timestamp).toEqual(props.timestamp);
        expect(block.lastHash).toEqual(props.lastHash);
        expect(block.hash).toEqual(props.hash);
        expect(block.data).toEqual(props.data);
    });
});

describe('Genesis()', ()=>{
    const genesisBlock = Block.genesis();
    it('has Genesis Block', ()=>{
        expect(genesisBlock).toBeInstanceOf(Block);
        expect(genesisBlock).toEqual(GENESIS_DATA);
    });
});

describe('minedBlock()', () => {
    const lastBlock = Block.genesis();
    const data = 'minde data';
    const minedBlock = Block.mineBlock({lastBlock, data});
    it('returns a Block instance', () => {
        expect(minedBlock).toBeInstanceOf(Block);
    });

    it('sets `lastHash` to be last blocks `hash`', () => {
        expect(minedBlock.lasthash).toEqual(lastBlock.hash);
    });

    it('sets the `data`', () => {
        expect(minedBlock.data).toEqual(data);
    });

    it('sets a `timestamp`', () => {
        expect(minedBlock.timestamp).not.toEqual(undefined);
    });

    it('creates a SHA-256 `hash` based on proper inputs', () => {
        expect(minedBlock.hash).toEqual(cryptoHash(minedBlock.timestamp, lastBlock.hash, data));
    });
});