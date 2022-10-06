import React from 'react';
import './Chips.css'

import { Link } from 'react-router-dom'

const Chips = () => {
    return (
        <div className="Chips">
            <h1>Out of stock.</h1>
            <Link to="/">Go back</Link>
        </div>
    )
}

export default Chips;