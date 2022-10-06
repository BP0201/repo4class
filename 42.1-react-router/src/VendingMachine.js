import React from 'react'


import './VendingMachine.css'

import { Link } from 'react-router-dom'




const VendingMachine = () => {
    return (
        <div className="VendingMachine">
            <h1>VENDING MACHINE</h1>
            <p>What would you like?</p>
            <Link to="/chips">Chips</Link>
            <Link to="/water">Water</Link>
            <Link to="/fruit">Fruit</Link>
        </div>
    )
}

export default VendingMachine;