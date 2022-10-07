import React from 'react';

import { Link } from 'react-router-dom'

import './ColorsHome.css'

const ColorsHome = () => {
    return (
        <div className="ColorsHome">
            <h1>COLORS!</h1>
            <h3>Here are some you can choose from:</h3>
            <ul>
                <Link to="/colors/red">Red</Link>
                <Link to="/colors/blue">Blue</Link>
                <Link to="/colors/green">Green</Link>
                <Link to="/colors/purple">Purple</Link>
                <Link to="/colors/yellow">Yellow</Link>
                <Link to="/colors/orange">Orange</Link>
            </ul>
        </div>
    )
}

export default ColorsHome;