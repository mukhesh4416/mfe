import { Counter, useLocalStorage } from '../../shared/src';
import './App.css'
import React, {useState} from 'react'



function App() {
    const [flag, setFlag] = useLocalStorage('flag', true);
    const [count, setCount] = useState(0);

  const abc = ()=>{
    console.log(flag)
    setFlag(!flag)
    setCount((c)=>c+1)
  }
  
  return (
    <>
      <h6>CRM</h6>
       <Counter count={count}/>
       <button onClick={()=>{abc()}}>Click</button>
    </>
  )
}

export default App
