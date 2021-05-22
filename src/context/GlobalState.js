import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer.js'
const initialState = {
    transactions : [
        {id : 1, text : 'First', amount : 220},
        {id : 2, text : 'Second', amount : -100},
        {id : 3, text : 'Third', amount : 50},
    ]    
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    function deleteTransaction(id){
        dispatch({
            type : 'DELETE_TRANSACTION',
            payload : id
        });
    }

    function addTransaction(transaction){
        dispatch({
            type : 'ADD_TRANSACTION',
            payload : transaction
        });
    }


    return (
        <GlobalContext.Provider value={{
            transactions : state.transactions,
            deleteTransaction,
            addTransaction
        }}>
            {children}
        </GlobalContext.Provider>
    )
}