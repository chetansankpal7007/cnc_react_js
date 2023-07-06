import React, {useState} from 'react'

export default function Navbar(props) {

  const [text, setText] = useState('demo');
  const [showText, setShowText] = useState('');  
  const [mystyle, setStyle] = useState({
    color: 'black',
    backgroundColor: 'white'

  });

  const clickMe = () => {
    setShowText(text);
  }

  const textChange = (event) => {
    let textValue = event.target.value;
    setText(textValue);
  }

  const changeStyle = () => {
    if(mystyle.color === 'white') {
      setStyle(
        {
          color: 'black',
          backgroundColor: 'white'
        }
      )
    } else {
      setStyle(
        {
          color: 'white',
          backgroundColor: 'black'
        }
      )
    }
    

  }

  return (
    <>
    <div className='container m-5'>
      <h1>Use State</h1>
      <textarea rows='8' onChange={textChange}></textarea>
      <br/>
      <button className='btn btn-primary' onClick={clickMe}>button</button>
      <div className="container" >
        <h2 >Data</h2>
        <p>{showText}</p>
      </div>
    </div>
    <div className="container">
      <h1 style={mystyle}>Hi this is React Class</h1>
      <button className='btn btn-primary my-3' onClick={changeStyle}>Change style</button>
    </div>
    </>
  )
}
