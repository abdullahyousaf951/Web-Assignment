import React from 'react'
import { useState } from 'react'

const EditRow = ({ Items, index, setItems, setEditRowN }) => {


    const [Npriority, setNPriority] = useState(0)
  
    const handleEP = (event)=>
    {
        event.preventDefault();
        setNPriority(event.target.value)
    }

    const handleSave = (index)=>
    {
        const newItems = [...Items];
        newItems[index].priority = Npriority;
        setItems(newItems);
        setEditRowN(null);
    }


  return (
    <div>
    <input type='text' id='priority' onChange={handleEP} placeholder='Priority' required></input>
    <button onClick={() => handleSave(index)}>Save</button>
   </div>
  );
}

export default EditRow

