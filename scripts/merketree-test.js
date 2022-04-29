const merkleTree = require("merkletreejs");
const { MerkleTree } = merkleTree
const SHA256 = require('crypto-js/sha256')

async function main() {
  const leaves = ['a', 'b', 'c'].map(x => SHA256(x))
  const tree = new MerkleTree(leaves, SHA256)
  const root = tree.getRoot().toString('hex')
  const leaf = SHA256('a')
  const proof = tree.getProof(leaf, 0)
  console.log(tree.verify(proof, leaf, root)) // true

  // const badLeaves = ['a', 'x', 'c'].map(x => SHA256(x))
  // const badTree = new MerkleTree(badLeaves, SHA256)
  const badLeaf = SHA256('x')
  const badProof = tree.getProof(badLeaf, 0)
  console.log(tree.verify(badProof, leaf, root)) // false
}
main();