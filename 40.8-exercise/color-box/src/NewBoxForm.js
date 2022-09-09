import React, { useState } from 'react';

const NewBoxForm = ({ addBox }) => {
    const initialState = { 
        backgroundColor: "",
        width: "",
        height: ""
    }
    const [formData, setFormData] = useState(initialState);

    const handleChange = e => {
        const { name, value } = e.target

        setFormData(data => ({
            ...data,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addBox(formData)
        setFormData(initialState)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="backgroundColor">Background Color </label>
            <input 
                id="backgroundColor" 
                type="text"
                name="backgroundColor"
                placeholder="background color"
                value={formData.backgroundColor}  
                onChange={handleChange}
            />
            <label htmlFor="width"> Width </label>
            <input 
                id="width" 
                type="text"
                name="width"
                placeholder="width"
                value={formData.width}  
                onChange={handleChange}
            />
            <label htmlFor="height"> Height </label>
            <input 
                id="height" 
                type="text"
                name="height"
                placeholder="height"
                value={formData.height}  
                onChange={handleChange}
            />
            <button>Add Box</button>

        </form>
    )
}

export default NewBoxForm;