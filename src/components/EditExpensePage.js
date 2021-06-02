import React from 'react';
import {connect} from 'react-redux';
import { editExpanse, removeExpanses } from '../actions/Expenses';
import ExpenseForm from './ExpenseForm';

const EditExpensePage = (props) => {
    return(
    <div>
        <ExpenseForm 
            expense={props.expense}
            onSubmit={(expense) => {
                props.dispatch(editExpanse(props.expense.id, expense));
                props.history.push('/')
                console.log('updated', expense)
            }}
        />
        <button
            onClick={() => {
                props.dispatch(removeExpanses({ id: props.expense.id }))
                props.history.push('/')
            }}
        >Remove</button>
    </div>
    );
}

const mapStateToProps = (state, props) => {
    return {
        expense : state.expenses.find((expense) => expense.id === props.match.params.id)
       };
}

export default connect(mapStateToProps)(EditExpensePage);