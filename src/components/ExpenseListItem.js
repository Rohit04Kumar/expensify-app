import React from 'react';
import {Link} from 'react-router-dom';

const ExpenseListItem = ({dispatch, id, descriaption, amount, createdAt}) => (
    <div>
        <Link to={`/edit/${id}`}>
            <h3>{descriaption}</h3>
        </Link>
            <p>{amount}- {createdAt}</p>
    </div>
);


export default ExpenseListItem;