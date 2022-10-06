import React from 'react';
import './Fruit.css'

import { Link } from 'react-router-dom'

const Fruit = () => {
    const fruits = ['🍎','🍐','🍊','🍌','🍉','🍇']
    const randomSelect = (arr) => {
        return arr[(Math.floor(Math.random() * arr.length))]
    }
    return (
        <div className="Fruit">
            <h1>Here, have some of this. {randomSelect(fruits)}</h1>
            <Link to="/">Go back</Link>
        </div>
    )
}

export default Fruit;