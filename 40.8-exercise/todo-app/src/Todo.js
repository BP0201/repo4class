import React from 'react';

const Todo = ({ id, todo, handleRemove }) => {
    const remove = () => handleRemove(id)
    return (
        <li>
            {todo}
            <button onClick={remove}>X</button>
        </li>
    )
}

export default Todo;