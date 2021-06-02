import React from 'react';
import {connect} from 'react-redux';
import getVisibleExpenses from '../selectors/Expenses';
import ExpenseListItem from './ExpenseListItem';

const ExpenseList = (props) => (
 <div>
    <h1>Expensify</h1>
    {props.expenses.map((expense) =>{
        return <ExpenseListItem key={expense.id} {...expense}/>
    })}
   
 </div>
);

const mapStateToProps = (state) => {
    return{
        expenses: getVisibleExpenses(state.expenses, state.filters)
    }
};

export default connect(mapStateToProps)(ExpenseList)