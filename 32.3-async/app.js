numURL = 'http://numbersapi.com'

async function getNum(num) {
    let res = await axios.get(`${numURL}/${num}`)
    console.log(res.data)
}


async function getNums() {
    let nums = await Promise.all([
    axios.get(`${numURL}/1`),
    axios.get(`${numURL}/2`),
    axios.get(`${numURL}/3`)
    ])
    console.log(nums[0].data)
    console.log(nums[1].data)
    console.log(nums[2].data)
}


async function numFacts(num) {
    let res = await Promise.all([
    axios.get(`${numURL}/${num}`),
    axios.get(`${numURL}/${num}`),
    axios.get(`${numURL}/${num}`),
    axios.get(`${numURL}/${num}`)
    ])
    console.log(res[0].data)
    console.log(res[1].data)
    console.log(res[2].data)
    console.log(res[3].data)
}

//**************************// PART 2 */
cardURL = 'http://deckofcardsapi.com/api/deck'

const deck = {
    async init() {
        let res = await axios.get(`${cardURL}/new/`)
        this.deckId = res.data.deck_id
    },
    async shuffle() {
        let res = await axios.get(`${cardURL}/${this.deckId}/shuffle/`)
    },
    async draw() {
        let res = await axios.get(`${cardURL}/${this.deckId}/draw/?count=1`)
        console.log(`Drew a ${res.data.cards[0].value.toLowerCase()} of ${res.data.cards[0].suit.toLowerCase()}`)
    }
}

async function setup() {
    let $btn = $('button');
    let $cardArea = $('#card-area');

    let deckData = await $.getJSON(`${cardURL}/new/shuffle/`);
    $btn.show().on('click', async function() {
      let cardData = await $.getJSON(`${cardURL}/${deckData.deck_id}/draw/`);
      let cardSrc = cardData.cards[0].image;
      $cardArea.append(
        $('<img>', {
          src: cardSrc
        })
      );
      if (cardData.remaining === 0) $btn.remove();
    });
  }
  setup();