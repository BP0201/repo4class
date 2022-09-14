import React, { useState } from 'react';
import NewMadlibForm from './NewMadlibForm'
import Story from './Story'
import {v4 as uuid} from 'uuid'

const Madlib = () => {
    const [madlib, setMadlib] = useState([])
    
    const add = (newMadlib) => {
        setMadlib(madlibs => [ ...madlibs, { ...newMadlib, id: uuid() }])
    }
    const remove = id => {
        setMadlib(madlibs => madlibs.filter(m => m.id !== id))
    }

    return (
        <div>
            <h1>Madlibs!</h1>
            <NewMadlibForm add={add} />
            <div>
                {madlib.map(m => <Story id={m.id} key={m.id} noun={m.noun} noun2={m.noun2} adjective={m.adjective} verb={m.verb} color={m.color} handleRemove={remove} />)}
            </div>
        </div>
    )
}

export default Madlib;