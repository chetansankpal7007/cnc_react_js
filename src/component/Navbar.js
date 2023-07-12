import React from 'react'
import Invalid from './Invalid';
import Valid from './Valid';
const age=30;
export default function Navbar(props) {
  

    if (age > 18) {
      return <Valid></Valid>
    } else {
      return <Invalid></Invalid>
    }
      
  
}

