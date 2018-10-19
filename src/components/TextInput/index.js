import React from 'react';
import './input.css';

const TextInput = ({ value , onChange}) => {
    return(
        <input 
            placeholder="Enter task"
            type="text" 
            className="input"
            value={value}
            onChange={onChange}/>
    )
}

export default TextInput
