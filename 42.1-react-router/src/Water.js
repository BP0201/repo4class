import React from 'react';
import './Water.css'

import { Link } from 'react-router-dom'

const Water = () => {
    return (
        <div className="Water">
            <h1>Out of stock.</h1>
            <Link to="/">Go back</Link>
        </div>
    )
}

export default Water;