import React, { useState } from 'react'

export default function FormValidetio() {
const [fName, setFname] = useState('');
const [lName, setLname] = useState('');
const [FNameValid, setFnameValid] = useState(false);
const [lNameValid, setLnameValid] = useState(false);
const [isSubmit, setIsSubmit] = useState(false);

function checkValid () {
  
  if(isSubmit && fName.length<4) {
    setFnameValid(true);
  } else {
    setFnameValid(false);
  }

  if(isSubmit && lName.length < 4) {
    setLnameValid(true);
  } else {
    setLnameValid(false);
  }

}

function onSubmit () {
  setIsSubmit(true);
  checkValid();
}
  
  return (
    <div className='m-5'>
      <h1>Form Validetion</h1>
      <form >
        <input type='text' onChange={(e)=> {setFname(e.target.value); checkValid();}}  placeholder='Enter First name' />
        <br/><br/>
         <samp>{FNameValid ?  'Enter Valid Valid First Name' : ''} </samp>
        <br/><br/>
        <input type='text' onChange={(e)=> {setLname(e.target.value); checkValid(); }}  placeholder='Enter last name' /><br/><br/>
        <samp>{lNameValid ?  'Enter Valid Valid Last Name' : ''} </samp>
        <br/><br/>
        <input className='bttn' type='button' onClick={onSubmit} value='Submit'></input>
      </form>
    </div>
  )
}
