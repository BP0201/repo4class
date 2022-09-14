import React from 'react';
import useFields from './useFields';
import './NewMadlibForm.css'

const NewMadlibForm = ({ add }) => {
    const [formData, handleChange, resetForm] = useFields({
        noun: '',
        noun2: '',
        adjective: '',
        verb: '',
        color: ''
      })

      const validateData = () => {
        if (formData.noun === '') {
            return false
        }
        if (formData.noun2 === '') {
            return false
        }
        if (formData.color === '') {
            return false
        }
        if (formData.adjective === '') {
            return false
        }
        if (formData.verb === '') {
            return false
        }
        return true
      }

      const handleSubmit = e => {
        if (validateData()) {
        e.preventDefault();
        add(formData)
        resetForm();
        }
      }

    return (
        <form onSubmit={handleSubmit}>
            <input 
            type="text"
            id="noun"
            name="noun"
            placeholder='noun'
            value={formData.noun}
            onChange={handleChange}
            />
            <input 
            type="text"
            id="noun2"
            name="noun2"
            placeholder='noun 2'
            value={formData.noun2}
            onChange={handleChange}
            />
            <input 
            type="text"
            id="adjective"
            name="adjective"
            placeholder='adjective'
            value={formData.adjective}
            onChange={handleChange}
            />
            <input 
            type="text"
            id="verb"
            name="verb"
            placeholder='verb in past tense'
            value={formData.verb}
            onChange={handleChange}
            />
            <input 
            type="text"
            id="color"
            name="color"
            placeholder='color'
            value={formData.color}
            onChange={handleChange}
            />
            <button>Create Madlib</button>
        </form>


    )
}

export default NewMadlibForm;