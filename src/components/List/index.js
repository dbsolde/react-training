import React from 'react';
import './list.css';

const List = ({ id, title, completed, deleteItem }) => {
    return (
        <li key={id}>
            {title} 
            <span onClick={ () => deleteItem(id)} >
                [done]
            </span>
        </li>
    )
}

export default List
