import React from 'react'
import "./Table.css";
import { useState } from 'react'
const std = [
    {nameItem: 'Chetan', conatctItem: '55555555'},
    {nameItem: 'Ganesh', conatctItem: '666743456'},
    {nameItem: 'Rahul', conatctItem: '456456456'},
    {nameItem: 'mahesh', conatctItem: '4556767678'},
    {nameItem: 'Rahul 2', conatctItem: '67867833'},
]
function StdTab (props)  {
const deleteItem = (index) => {
    std.splice(index, 1);
    console.log(std);
}

return <tr >
            <td >{props.data.nameItem }</td>
            <td>{props.data.conatctItem}</td>  
            <td><input type='button' value='Delete' onClick={deleteItem(props.itemIndex)}></input></td>  
            </tr>
}

export default function Table() {


 const [name, setName] = useState('');
 const [contact, setContact] = useState('');
//  const [std, setStd] = useState([{nameItem: 'Rahul', conatctItem: '877777799'}]);
 
 
//  const save= () => {
//     let tempStd= std;
//     let obj= {nameItem: name, conatctItem: contact}
//     tempStd.push(obj);
//     setStd(tempStd);
//     console.log(std);
//  }

  return (
    <div className='m-5'>
        <form >
            <input type="text" id="name" onChange={(e)=> setName(e.target.value)} placeholder="Name"/><br/><br/>
            <input type="text" id="contact" onChange={(e)=> setContact(e.target.value)} placeholder="Conatact No"/><br/><br/>
            <input type='button' value='save'></input>
        </form>

      <h1>Table Component</h1>
      <table>
        <tr>
            <td>
                Name
            </td>
            <td>
                Contact
            </td>
            <td>
                Delete
            </td>
        </tr>

         {std.map((stdItem, index) => <StdTab data={stdItem} itemIndex={index}></StdTab>)}
      </table>
    </div>
  )
}
