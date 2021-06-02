import uuid from 'uuid';

// Add Expenses

export const addExpense = (
    {
      descriaption='',
      note='',
      amount=0, 
      createdAt=0
    }= {}
      ) => ({
      type: 'ADD-EXPENSE',
      expenses: {
        id: uuid(),
        descriaption,
        note,
        amount,
        createdAt
      }
    });
    
export const removeExpanses = ({ id }) => ({
      type:'REMOVE_EXPENSE',
      id
    });
    
export const editExpanse = (id, update) => ({
      type: 'EDIT_EXPENSE',
      id,
      update
    });