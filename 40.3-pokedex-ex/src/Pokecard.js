import React from 'react';
import './Pokecard.css'

const Pokecard = (props) => {
    const img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`
    return (
        <div className="Pokecard">
            <div className="Pokecard-name">{props.name}</div>
            <img className="Pokecard-img" src={img} />
            <div className="Pokecard-type">Type: {props.type}</div>
            <div className="Pokecard-exp">EXP: {props.exp}</div>
        </div>
    )
}



export default Pokecard;