import React from 'react'
import Tod from './Tod'; 
import { Provider } from 'react-redux';
import {store} from './store'
const Practice = () => {
  return (
    <div>
      <h2>Practice</h2>
      <Provider store={store}>
        <Tod/>
      </Provider>
    </div>
  )
}

export default Practice