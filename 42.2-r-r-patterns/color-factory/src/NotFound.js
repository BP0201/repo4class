import React from 'react';

import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div>
            <h1>Could not find the page you were looking for...</h1>
            <Link to="/colors">Click here</Link>
        </div>
    )
}

export default NotFound;