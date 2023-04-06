import React from 'react'
import { useState } from 'react'
import EditRow from './EditRow'

export default function MyTable() {

  const [Items, setItems] = useState([], {
    name: "",
    priority: ""
  })

  const [EditRowN, setEditRowN] = useState(null)

  const [name_, setName] = useState(0)
  const [priority_, setPriority] = useState(0)


  const handleOnChangeN = (event)=>{
    event.preventDefault();
    setName(event.target.value)
  }
  
  const handleOnChangeP = (event)=>{
    event.preventDefault();
    setPriority(event.target.value)
  }

  const handleOnClick = (event)=>{
    event.preventDefault();
    
    const newItem = {
      name: name_,
      priority: priority_ 
    }

    const newSet = [...Items, newItem];
    setItems(newSet);
  }

  const handleEdit = (event, Item)=>{
    event.preventDefault();
    setEditRowN(Item.name)
  }

  const handleRemove = (index)=>
  {
        const newItems = [...Items];
        newItems.splice(index,1)
        setItems(newItems);
  }

  const handleMove = (index)=>
  {
      const newItems = [...Items];
      const copy = newItems.splice(index,1);
      newItems.unshift(copy[0]);
      setItems(newItems);
  }


  return (
    <div>
      <div>
          <div className='Add'>
              <input type='text' id='name' onChange={handleOnChangeN} placeholder='Name' required></input>
              <input type='text' id='priority' onChange={handleOnChangeP} placeholder='Priority' required></input>
              <button onClick={handleOnClick}>Add</button>
          </div>
      </div>

      {Items.length > 0 &&
        <div id="table">
            <table id="table">
                <tr>
                    <th>Priority</th>
                    <th>Name</th>
                    <th>Actions</th>
                </tr>
                <tbody>
                  {Items.map((Item, index) => (
                    EditRowN === Item.name ? (
                     <EditRow Items={Items} index ={index} setItems={setItems} setEditRowN={setEditRowN} />
                    ) : (
                      <tr key={index}>
                      <td>{Item.priority}</td>
                      <td>{Item.name}</td>
                      <td><button onClick={(event)=>handleEdit(event,Item)}>Update Priority</button></td>
                      <td><button onClick={(event)=>handleMove(index)}>Move to Top</button></td>
                      <td><button onClick={(event)=>handleRemove(index)}>Remove</button></td>
                      </tr>
                    )
                  ))}
                </tbody>
            </table>    
        </div>
      }

    </div>
  )
}
