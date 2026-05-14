import React from 'react'

const initialState = [];

const cartReducer = (state = initialState,action) => {
    switch(action.type){
        case "ADD_TO_CART":
            return [...state,action.payload]
        case "REMOVE_FROM_CART":
            return state.filter(item => item.id !== action.payload)
        case "INCREASE_QTY":
            return state.map(item =>
                item.id === action.payload
                    ? { ...item, qty: item.qty + 1 }
                    : item
            )
        case "DECREASE_QTY":
            return state.map(item =>
                item.id === action.payload && item.qty > 1
                    ? { ...item, qty: item.qty - 1 }
                    : item
            )
        default:
            return state
      
    }
}

export default cartReducer  