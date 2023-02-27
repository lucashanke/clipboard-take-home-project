const crypto = require("crypto");

const createHash = (input) => crypto.createHash("sha3-512").update(input).digest("hex");

exports.deterministicPartitionKey = (event) => {
  const TRIVIAL_PARTITION_KEY = "0";
  const MAX_PARTITION_KEY_LENGTH = 256;

  if (!event) return TRIVIAL_PARTITION_KEY;

  const { partitionKey } = event;
  if (!partitionKey) return createHash(JSON.stringify(event));

  const candidate = typeof partitionKey === "string" ? partitionKey : JSON.stringify(partitionKey);
  if (candidate.length > MAX_PARTITION_KEY_LENGTH) return createHash(candidate);
  
  return candidate;
};