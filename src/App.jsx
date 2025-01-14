import { useState } from 'react'  
 const App = () => {

  let [count, setCount] =useState(0)

  const addOne = () => setCount(count+1);
  const restOne = () => setCount(count-1);
  const setZero = () => setCount(0);

  return <>
  <h3>Count: {count}</h3>
  <button onClick={addOne}>+1</button>
  <button onClick={restOne}>-1</button>
  <button onClick={setZero}>Set to Zero</button>
  </>
 } 

 export default App;