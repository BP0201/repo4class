import React from 'react';

import { useParams, Link, redirect } from 'react-router-dom'
import dogs from './dogInfo'

const Dog = () => {
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    const { name } = useParams();
    let dogObj;
    let newName = capitalizeFirstLetter(name);
    for (let obj of dogs) {
        if (obj.name === newName) {
            dogObj = obj;
        }
    }

    if (!dogObj) {
        return redirect("/dogs")
    }

    let dogFacts = dogObj.facts;

    return (
        <div className="Dog">
            <h1>{dogObj.name}</h1>
            <img src={dogObj.src} alt={dogObj.name}></img>
            <ul>
                <li>
                    {dogFacts[0]}
                </li>
                <li>
                    {dogFacts[1]}
                </li>
                <li>
                    {dogFacts[2]}
                </li>
            </ul>
            <Link to="/dogs">Go back</Link>
        </div>
    )
}

export default Dog;