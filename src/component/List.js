import React from 'react'

function Car (props) {
    return <h3>{props.brand}</h3>
}

export default function List() {

  const cars = ['BMW', 'Rord', 'AUDI'] 
  return (
    <div>
      {cars.map((carItem)=> <Car brand={carItem}></Car> )}
    </div>
  )
}
