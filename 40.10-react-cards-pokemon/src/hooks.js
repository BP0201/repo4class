import React, { useState } from 'react';

const useFlip = (initialState = false) => {
    const [status, setStatus] = useState(initialState)
    const flip = () => {
        setStatus(status => !status)
    }
    return [status, flip]
}

export default useFlip;