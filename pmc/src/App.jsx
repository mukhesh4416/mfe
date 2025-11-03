import { Counter } from '../../shared/src';
import './App.css'
import React, {useState} from 'react'



function App() {
    const [count, setCount] = useState(0);

  const abc = ()=>{
    setCount((c)=>c+2)
  }
  
  return (
    <>
      <button onClick={()=>{abc()}}>Click</button>
      <Counter count={count}/>
    </>
  )
}

export default App
