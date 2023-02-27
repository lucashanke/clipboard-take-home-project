const crypto = require("crypto");

const { deterministicPartitionKey } = require('./dpk');

const createHash = (input) => crypto.createHash("sha3-512").update(input).digest("hex");

describe('deterministicPartitionKey', () => {
  it('returns the literal \'0\' when given no input', () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe('0');
  });

  describe('when input has no partitionKey field', () => {
    it('hashes stringified input and returns it', () => {
      const event = { id: 1, name: 'event name' };
      const result = deterministicPartitionKey(event);
      expect(result).toEqual(createHash(JSON.stringify(event)));
    });
  });

  describe('when input has a partitionKey field', () => {
    describe('when partitionKey is a string', () => {
      it('returns it if its length does not exceed 256 characters', () => {
        const smallKey = 'key'
        const result = deterministicPartitionKey({
          partitionKey: smallKey
        });
        expect(result).toEqual(smallKey);
      });

      it('hashes it and returns if its length exceeds 256 characters', () => {
        const tooBigKey = '01234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789'
        const result = deterministicPartitionKey({
          partitionKey: tooBigKey
        });
        expect(result).toEqual(createHash(tooBigKey));
      });
    });

    describe('when partitionKey is not a string', () => {
      it('returns stringfied partitionKey when does not exceed 256 characters', () => {
        const smallKey = { key: 'key' }
        const result = deterministicPartitionKey({
          partitionKey: smallKey
        });
        expect(result).toEqual(JSON.stringify(smallKey));
      });

      it('hashes stringfied partitionKey and returns if its length exceeds 256 characters', () => {
        const tooBigKey = {
          key: '01234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789'
        }
        const result = deterministicPartitionKey({
          partitionKey: tooBigKey
        });
        expect(result).toEqual(createHash(JSON.stringify(tooBigKey)));
      });
    });
  });
});
