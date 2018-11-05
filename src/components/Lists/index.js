import React from 'react';
import List from '../List'
import './lists.css';

const Lists = ({ data, deleteItem }) => (
    <ul className="lists">
        {data && data.map( (list) => {
            return (
                <List 
                    key={list.id}
                    title={list.title} 
                    id={list.id}
                    completed={list.completed}
                    deleteItem={deleteItem}
                />
            )
        })}
    </ul>
)

export default Lists
