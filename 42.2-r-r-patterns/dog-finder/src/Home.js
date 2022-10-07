import React from 'react';

import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <h1>The Dogs</h1>
            <Link to="/dogs/duke">
                <img src="../dog-pics/duke.jpg" alt="Duke"></img>
            </Link>
            <Link to="/dogs/perry">
                <img src="../dog-pics/perry.jpg" alt="Perry"></img>
            </Link>
            <Link to="/dogs/tubby">
                <img src="../dog-pics/tubby.jpg" alt="Tubby"></img>
            </Link>
            <Link to="/dogs/whiskey">
                <img src="../dog-pics/whiskey.jpg" alt="Whiskey"></img>
            </Link>
        </div>
    )
}

export default Home;