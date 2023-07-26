import React, {useState} from 'react'
import "./Table.css";

export default function DaynamicArray() {

    const [name, setName] = useState('');
    const [contact, setConatc] = useState('');    
    const [info, setinfo] = useState([]);

  const save = () => {
    console.log(name, contact);
    const temp = info;
    const obj = {nameKey: name, contactKey: contact}
    temp.push(obj);
    setinfo(temp)
    setConatc('');
    setName('');
  }


  const deleteItem = (index) =>  {
    const temp = info;
    temp.splice(index, 1);
    setinfo(temp)
     setConatc('1'); 
     setTimeout(() => {
       setConatc(''); 
     }, 100);
      console.log(info);
  }
  return (
    <div className='m-5'>
        <h1>Hi</h1>
        <form >
            <input type="text" id="name" value={name} onChange={(e) =>setName(e.target.value) } placeholder="Name"/><br/><br/>
            <input type="text" id="contact" value={contact} onChange={(e)=> setConatc(e.target.value)} placeholder="Conatact No"/><br/><br/>
            <input type='button' onClick={save}  value='save'></input>
        </form>
        <table>
            <thead>
                <tr>
                    <td>Name</td>
                    <td>Contact No</td>
                    <td>Delete</td>
                </tr>
            </thead>

            <tbody>
                {info.map((infoitem, index) => 
                <tr key={index}>
                    <td>{infoitem.nameKey}</td>
                    <td>{infoitem.contactKey}</td>
                    <td><input type="button"   onClick={() => deleteItem(index)} value={index +' - Delete'} /></td>
                </tr>)}
            </tbody>

        </table>
      
    </div>
  )
}
