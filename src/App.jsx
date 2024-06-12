import { useReducer } from 'react'
import './App.css'

function counterReducer(state, action) {
console.log(action);

switch (action.type) {
  case 'increment': {
    return{
    count: state.count + 1
    };
  }

  case 'decrement': {
    return{
      count: state.count -1
    };
  }
  default: {
    return state;

  }
}
  

}

function App() {
  const [state, dispatch] = useReducer(counterReducer,{count:0});

  return (
    <>
      <h1> Reducer Counter</h1>

      <h2>Counter: {state.count}</h2>
      <div>
        <button onClick={()=> dispatch({type: 'increment'})}>Increment</button>
        <button onClick={()=> dispatch({type: 'decrement'})}>Decrement</button>
      </div>
    </>
  )
}

export default App
