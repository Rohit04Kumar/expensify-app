import React from 'react';
import moment from 'moment';
import {SingleDatePicker} from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

const now = moment();
console.log(now.format('MMM Do, YYYY'))

class ExpenseForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            descriaption: props.expense ? props.expense.descriaption : "",
            note: props.expense ? props.expense.note : "",
            amount: props.expense ? (props.expense.amount / 100).toString() :"",
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calenderFocused: false,
            error: ''
        }
    }

onDescriaptionChange = (e) => {
        const descriaption = e.target.value;
        this.setState(() => ({ descriaption }))
    }

    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({ note }))
    }

    onAmountChange = (e) => {
        const amount = e.target.value;

        if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({amount}))
         }
    }

    onDateChange = (createdAt) => {
        if(createdAt){
            this.setState(() => ({ createdAt }))
        }   
    }

    onFocusChange = ({focused}) => {
        this.setState(() => ({ calenderFocused: focused }))
    }

    onFormSubmit = (e) => {
        e.preventDefault();

        if(!this.state.descriaption || !this.state.amount){
            this.setState(() => ({ error: 'Please Enter Description And Amount' }))
        }else{
            this.setState(() => ({ error:'' }))
            this.props.onSubmit({
                descriaption:this.state.descriaption,
                amount: parseFloat(this.state.amount, 10)* 100,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            })
        }
    }

    render() {
        return(
            <div>
            {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onFormSubmit}>
                <input 
                type="text"
                placeholder="Description"
                autoFocus
                value={this.state.descriaption}
                onChange={this.onDescriaptionChange}
            />
            <input 
                type="text"
                placeholder="amount"
                value={this.state.amount}
                onChange={this.onAmountChange}
            />
            <SingleDatePicker 
                date={this.state.createdAt}
                onDateChange={this.onDateChange}
                focused={this.state.calenderFocused}
                onFocusChange={this.onFocusChange}
                numberOfMonths={2}
                isOutsideRange={() => false}
            />
            <textarea
                placeholder="Add a note foor your expense"
                value={this.state.note}
                onChange={this.onNoteChange}
            >
            </textarea>
            <button>Add Expenses</button>
                </form>
            </div>
        )
    }
}


export default ExpenseForm;