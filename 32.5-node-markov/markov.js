/** Textual markov chain generator */


class MarkovMachine {

  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter(c => c !== "");
    this.makeChains();
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {
    // TODO
    let chains = new Map()

    for (let i = 0; i < this.words.length; i++) {
      let word = this.words[i]
      let nextWord = this.words[i + 1] || null

      if (chains.has(word)) chains.get(word).push(nextWord);
      else chains.set(word, [nextWord])
    }
    this.chains = chains
  }


  static choice(ar) {
    return ar[Math.floor(Math.random() * ar.length)];
  }
  /** return random text from chains */

  makeText(numWords = 100) {
    // TODO
//     let arr = []
//     let chainLength = this.chains.size
//     const randIdx = Math.floor(Math.random() * chainLength)

//     for (let chain of this.chains.keys()) {
//       arr.push(chain)
//     }

//     let start = arr[randIdx]
//     let next = this.chains.get(start)
//     let nextVal;

//     if (next.length > 1) {
//       let randNum = Math.floor(Math.random() * next.length)
//       nextVal = next[randNum]
//     }

//     let res = []

//     for (let i = 0; i < numWords; i++) {
//       if (nextVal) {
//         res.push(start)
//         res.push(nextVal)
//         nextVal = this.chains.get(nextVal)
//         if (nextVal.length > 1) nextVal = nextVal[randNum]

//       } else {
//         res.push(start)
//         res.push(next)
//         next = this.chains.get(next)
//         if (next.length > 1) {next = next[randNum]}
//     }
//   }
//   return res.join(' ')
//  }
  let keys = Array.from(this.chains.keys());
  let key = MarkovMachine.choice(keys);
  let out = [];

// produce markov chain until reaching termination word
  while (out.length < numWords && key !== null) { 
    out.push(key);
    key = MarkovMachine.choice(this.chains.get(key));
  }

  return out.join(" ");
  }
}

module.exports = {
  MarkovMachine
}