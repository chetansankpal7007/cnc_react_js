import React from 'react'

const age = 10;  
export default function Condition() {
  return (
    <div>
      {age>18 && 
        <h1>  Valid for voting - Condition</h1>
      } 
      {
        age < 18 && 
        <h1>
           Not Valid for voting - Condition
        </h1>
      } 
      
    </div>
  )
}
