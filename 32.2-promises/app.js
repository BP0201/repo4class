let url = 'http://numbersapi.com'


/***************/// 1 ///******************/

// axios.get(`${url}/21`)
// .then(res => console.log(res))

/***************/// 2 ///******************/

// axios.get(`${url}/21`)
// .then(res => console.log(res))
// .then(res => {
//     axios.get(`${url}/22`)
//     .then(res => console.log(res))
// })

/***************/// 3 ///******************/

// axios.get(`${url}/21`)
// .then(res => console.log(res.data))

// axios.get(`${url}/21`)
// .then(res => console.log(res.data))

// axios.get(`${url}/21`)
// .then(res => console.log(res.data))

// axios.get(`${url}/21`)
// .then(res => console.log(res.data))


/***************/// PART 2 ///******************/

baseURL = 'http://deckofcardsapi.com/api/deck'


// axios.get('http://deckofcardsapi.com/api/deck/new/draw/?count=1')
// .then(res => console.log(`Your card is a ${res.data.cards[0].value} of ${res.data.cards[0].suit}`))

/***************/// 2 ///******************/

// let firstCard = null
//   $.getJSON(`${baseURL}/new/draw/`)
//     .then(data => {
//       firstCard = data.cards[0]
//       let deckId = data.deck_id
//       // return the promise so you can chain a second one
//       return $.getJSON(`${baseURL}/${deckId}/draw/`)
//     })
//     .then(data => {
//       let secondCard = data.cards[0];
//       [firstCard, secondCard].forEach(function(card) {
//         console.log(
//           `${card.value} OF ${card.suit}`
//         )
//       })
//     })

/***************/// 3 ///******************/

let deckId = null;
let $btn = $('#btn');
let $cardArea = $('#card-area');

  $.getJSON(`${baseURL}/new/shuffle/`).then(data => {
    deckId = data.deck_id;
    $btn.show();
  });

  $btn.on('click', function() {
    $.getJSON(`${baseURL}/${deckId}/draw/`).then(data => {
      let cardSrc = data.cards[0].image;
      $cardArea.append(
        $('<img>', {
          src: cardSrc
        })
      );
      if (data.remaining === 0) $btn.remove();
    });
  });
