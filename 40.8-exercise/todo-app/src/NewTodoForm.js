import React, { useState } from 'react';

const NewTodoForm = ({ addTodo }) => {
    const initialState = {
        todo: ""
    }

    const handleChange = e => {
        const { name, value } = e.target
        setFormData(data => ({
            ...data,
            [name]: value
        }))
    }

    const handleSubmit = e => {
        e.preventDefault();
        addTodo(formData)
        setFormData(initialState)
    }

    const [formData, setFormData] = useState(initialState)
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="todo">Todo</label>
            <input 
                id="todo"
                name="todo"
                type="text"
                value={formData.todo}
                onChange={handleChange}
            />
            <button>Add Todo!</button>
        </form>
    )
}

export default NewTodoForm;