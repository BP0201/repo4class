import React, { useState } from 'react';
import './EightBall.css'

const EightBall = ({ answers }) => {
    const genRandomAnswer = () => {
        let res = Math.floor(Math.random() * answers.length) + 1;
        setAnswer(answers[res].msg)
        setColor(answers[res].color)
    }
    const restart = () => {
        setAnswer(answers[0].msg)
        setColor(answers[0].color)
    }

    const [answer, setAnswer] = useState(answers[0].msg)
    const [color, setColor] = useState(answers[0].color)

    return (
        <div>
            <h1 style={{backgroundColor: color, color: 'white'}}>{answer}</h1>
            <button onClick={genRandomAnswer}>Ask 8BALL</button>
            <button onClick={restart}>Reset</button>
        </div>
    )
}

export default EightBall;