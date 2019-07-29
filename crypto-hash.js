const crypto = require('crypto');

const cryptoHash = () => {
    const hash = crypto.createHash('sha256');
    console.log('hash', hash);
    hash.update(inputs.sort().join(''));
    return hash.digest('hex');
};

module.exports = cryptoHash;