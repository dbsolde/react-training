import React from 'react';
import List from '../List'
import { StyledLists } from '../../styled/app'

const Lists = ({ data, deleteItem }) => {
    return(
        <StyledLists>
            {data && data.map( (list) =>
                <List 
                    name={list.name} 
                    id={list.id} 
                    deleteItem={deleteItem}
                />
            )}
        </StyledLists>
    )
}

export default Lists
