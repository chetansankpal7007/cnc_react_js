import React from 'react'

function Car (props) {
    return <h3 className='m-4'>Car Brand - {props.brand}</h3>
}

function Bike (props) {
  return <h3>Bike {props.bikebrand}</h3>
}

export default function List() {

  const cars = ['BMW', 'Ford', 'AUDI'];
  const bikes = ['Hounda', 'FZ', 'TVS', 'CBZ'];
  return (
    <>
      <div>
        {cars.map((carItem)=> <Car brand={carItem}></Car> )}
      </div>
      <div className='m-5'>
          {bikes.map( (bikeItem) => <Bike bikebrand={bikeItem}></Bike>       )}
      </div>
    </>
  )
}
