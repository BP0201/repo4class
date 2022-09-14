import React from 'react';

const Story = ({ id, noun, noun2, color, adjective, verb, handleRemove }) => {
    const remove = () => handleRemove(id)
    return (
        <p>
            There was a {color} {noun} that {verb} a {adjective} {noun2}.
            <button onClick={remove}>X</button>
        </p>
    )
}

export default Story;