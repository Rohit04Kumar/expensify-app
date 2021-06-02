import React from 'react';
import { Provider } from 'react-redux';
import AppRouter from './routes/AppRouter';
import {addExpense} from './actions/Expenses';
import {setTextFilter} from './actions/Filters';
import getVisibleExpenses from './selectors/Expenses';
import configureStore from './store/configureStore';
import './App.css';

const store = configureStore();

store.dispatch(addExpense({descriaption: 'Water Bill', createdAt: 100, amount: 4000}))
store.dispatch(addExpense({descriaption: 'Gas Bill', createdAt: 200, amount: 10000}))
store.dispatch(addExpense({descriaption: 'Rent Bill', createdAt: 500, amount: 9000}))
store.dispatch(setTextFilter('water'));

setTimeout(() => {
    store.dispatch(setTextFilter('bill'));
}, 3000)

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses)

const App = () => (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

export default App;