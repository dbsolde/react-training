import React from 'react';
import { StyledInput } from '../../styled/input'

export default  ({ value , onChange}) => {
    return(
        <StyledInput 
            placeholder="Enter task"
            type="text" 
            className="input"
            value={value}
            onChange={onChange} />
    )
}

