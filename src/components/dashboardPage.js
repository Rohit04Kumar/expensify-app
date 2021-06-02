import React from 'react';
import '../App.css';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
//import chandu from '../images/chandu.jpg';


const DashboardPage = () => (
    <div>
        <ExpenseListFilters />
        <ExpenseList /> 
    </div>
);


export default DashboardPage;