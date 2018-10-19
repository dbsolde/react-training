import React from 'react';
import List from '../List'
import './lists.css';

const Lists = ({ data, deleteItem }) => {
    return(
        <ul className="lists">
            {data && data.map( (list) =>
                <List 
                    name={list.name} 
                    id={list.id} 
                    deleteItem={deleteItem}
                />
            )}
        </ul>
    )
}

export default Lists
