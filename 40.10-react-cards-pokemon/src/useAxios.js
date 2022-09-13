import React, { useState } from 'react';
import axios from 'axios';
import uuid from 'uuid';

const useAxios = (url) => {
    const [data, setData] = useState([])
    const addData = async (strToAddToURL = null) => {
        if (strToAddToURL !== null) {
            url += strToAddToURL
        }
        const res = await axios.get(url)
        setData(data => [ ...data, { ...res.data, id: uuid() }])
    }
    const clearData = () => {
        setData([])
    }
    return [data, addData, clearData]
}

export default useAxios;