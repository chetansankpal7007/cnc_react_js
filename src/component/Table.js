import React from 'react'
import "./Table.css";
function StdTab (props)  {
    // return <h2>{props.data.name } {props.data.contact}</h2>
    return <tr >
            <td >{props.data.name }</td>
            <td>{props.data.contact}</td>    
            </tr>
}
export default function Table() {
    // const std3 = {name: 'Chetan', contact: '99999999'}
    // const std1 = {name: 'Mahesh', contact: '876699999'}
    // const std2 = {name: 'Rahul', contact: '877777799'}

    const std= [
        {name: 'Chetan', contact: '99999999'},
        {name: 'Mahesh', contact: '876699999'},
        {name: 'Rahul', contact: '877777799'},
        {name: 'Ganesh', contact: '38874774'}
    ]


  return (
    <div className='m-5'>
      <h1>Table Component</h1>
      <table>
        <tr>
            <td>
                name
            </td>
            <td>
                Contact
            </td>
        </tr>

         {std.map((stdItem) => <StdTab data={stdItem}></StdTab>)}
      </table>
    </div>
  )
}
