import React, { useState } from 'react';
import { v4 as uuid } from 'uuid'
import Box from './Box'
import NewBoxForm from './NewBoxForm';

const BoxList = () => {
    const [boxes, setBoxes] = useState([])

    const addBox = (box) => {
        let newBox = { ...box, id: uuid() }
        setBoxes(boxes => [...boxes, newBox])
    }

    const removeBox = id => {
        setBoxes(boxes => boxes.filter(box => box.id !== id))
    }

    const boxComponents = boxes.map(box => (
        <Box
          key={box.id}
          id={box.id}
          width={box.width}
          height={box.height}
          backgroundColor={box.backgroundColor}
          handleRemove={removeBox}
        />
    ));

    return (
        <div className="BoxList">
            <h1>Colored Boxes!</h1>
          <NewBoxForm addBox={addBox} />
          {boxComponents}
        </div>
    );
}

export default BoxList;