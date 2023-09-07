import React from 'react'
import { decrementCounter, incrementCounter } from './slice'
import { useDispatch, useSelector } from 'react-redux'

function App() {

    const dispatch = useDispatch()
    const init = useSelector((state) => {return state.counterRed})
    
  return (
    <div>
        <h2>Counter Using Redux</h2>
        <button onClick={() => dispatch(incrementCounter())}>Increment</button>
        <p>{init.counter}</p>
        <button onClick={() => dispatch(decrementCounter())}>Decrement</button>
    </div>
  )
}

export default App