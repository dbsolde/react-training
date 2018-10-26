import React from 'react';
import { StyledLi, StyledLiSpan } from '../../styled/app'

const List = ({ id, name, deleteItem }) => {
    return (
        <StyledLi key={id}>
            {name} 
            <StyledLiSpan onClick={ () => deleteItem(id)} >
                [done]
            </StyledLiSpan>
        </StyledLi>
    )
}

export default List
