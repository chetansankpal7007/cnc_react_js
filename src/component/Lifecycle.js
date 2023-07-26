import React, {useState} from 'react'
import Counter from "./Counter";


export default function Lifecycle() {
    const [flag, setFlag] = useState(false);

  return (
    <div className='m-5'>
        <h1>Lifecycle - </h1>
        <button onClick={()=> {setFlag(!flag)}}>show/hide</button>
     {flag && <Counter></Counter>}
    </div>
  )
}
