import React from 'react';
import { Provider } from 'react-redux';
import AppRouter from './routes/AppRouter';
import {addExpense} from './actions/Expenses';
import {setTextFilter} from './actions/Filters';
import getVisibleExpenses from './selectors/Expenses';
import configureStore from './store/configureStore';
import './App.css';

const store = configureStore();

const App = () => (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

export default App;