import React from 'react';
import './list.css';

const List = ({ id, name, deleteItem }) => {
    return (
        <li key={id}>
            {name} 
            <span onClick={ () => deleteItem(id)} >
                [done]
            </span>
        </li>
    )
}

export default List
