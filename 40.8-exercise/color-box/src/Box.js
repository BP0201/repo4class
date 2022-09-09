import React from 'react';
import './Box.css'

const Box = ({ id, backgroundColor = "blue", width, height, handleRemove }) => {
    const remove = () => handleRemove(id);
    return (
        <div 
        className="Box" 
        style={{ 
            backgroundColor,
            width: `${width}px`, 
            height: `${height}px` }}
        >
        <button onClick={remove}>X</button>
        </div>
    )
}

export default Box;