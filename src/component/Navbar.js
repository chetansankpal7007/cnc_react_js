import React, {useState} from 'react'

export default function Navbar(props) {

  const [text, setText] = useState('demo text');

  const clickMe = () => {
    console.log("click function call");
    console.log(text);
    setText("text change")
  }

  const handelOnChange = (events) => {
    console.log(events.target.value);
    setText(events.target.value);
  }


  return (
    <>
    <div className='contener m-5'>

        <textarea value={text} onChange={handelOnChange} />
        <br/>
        <button className='btn btn-primary' onClick={clickMe}>test</button>
        <br/><br/>
        <h3>{text}</h3>
    </div>
    </>
  )
}
