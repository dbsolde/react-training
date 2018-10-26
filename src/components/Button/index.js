import React from 'react';
import { 
    StyledButton
} from '../../styled/app'

const Button = ({ name, onClick }) => {
    return(
        <StyledButton className="button" onClick={onClick}>{name}</StyledButton>
    )
}

export default Button
