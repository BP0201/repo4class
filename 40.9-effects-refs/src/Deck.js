import React, { useState, useEffect, useRef } from 'react';
import Card from './Card'
import axios from 'axios'

const Deck = () => {
    const [deck, setDeck] = useState(null)
    const [drawn, setDrawn] = useState([])
    const [autoDraw, setAutoDraw] = useState(false)
    const timerRef = useRef();

    useEffect(() => {
        async function createDeck() {
            const res = await axios.get('http://deckofcardsapi.com/api/deck/new/shuffle/')
            setDeck(res.data)
        }
        createDeck()
    }, [setDeck])

    useEffect(() => {
        async function drawCard() {
            const res = await axios.get(`http://deckofcardsapi.com/api/deck/${deck.deck_id}/draw/?count=1`)

            if (res.data.remaining === 0) {
                alert("No cards remaining!")
                setAutoDraw(false)
            }

            const card = res.data.cards[0]

            setDrawn(d => [
                ...d,
                {
                  id: card.code,
                  name: card.suit + " " + card.value,
                  image: card.image
                }
            ]);
        }
        if (autoDraw && !timerRef.current) {
            timerRef.current = setInterval(async () => {
              await drawCard();
            }, 100);
          }
      
          return () => {
            clearInterval(timerRef.current);
            timerRef.current = null;
          };
    }, [deck, setAutoDraw, autoDraw])

    const toggleAutoDraw = () => {
        setAutoDraw(auto => !auto);
      };

    const cards = drawn.map(c => (
            <Card image={c.image} key={c.id} />
    ))

    return (
        <div>
            <h1>Deck of Cards!</h1>
            <button onClick={toggleAutoDraw}>{autoDraw ? "Stop" : "Begin"} Drawing</button>
            <div>{cards}</div>
        </div>
    )
}


export default Deck;