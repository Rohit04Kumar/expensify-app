import {createStore, combineReducers} from 'redux';
import expensesReducers from '../reducers/ExpensesReducers';
import filterReducers from '../reducers/FilterReducers';

export default () => {
    const store = createStore(combineReducers({
        expenses: expensesReducers,
        filters: filterReducers
      }),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
      );
      return store;
}

