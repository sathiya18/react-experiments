import React from 'react'
import { useState } from 'react'
import { FaTrashAlt } from "react-icons/fa";

const ContentDesign = () => {
    const [items, setItems]=useState([
        {
        id:1,
        checked:true,
        item:"Practice Coding"
        },
        {
        id:2,
        checked:false,
        item:"Play Cricket"
         },
         {
        id:3,
        checked:false,
        item:"Join PTU AI Club"
         }
        ]);
        // const numbers=[-2,-1,0,1,2]
        // const itemss=numbers.map(n => ({number:n}))
    //    const itemss=numbers.filter(n => n>=0)
        //   const itemss=numbers.filter(n => n>=0).map(n => ({number:n}))
        //   console.log(itemss)
        const handleCheck =(id) => {
            const listItems=items.map((item) =>
            item.id===id ? {...item,checked:!item.checked}:
            item)
            setItems(listItems)
        }  
   return (
    <main>
        <ul>
            {items.map((item) =>(
                <li className="item" key={item.id}>
                    <input
                        type="checkbox"
                        onChange={()=> handleCheck(item.id)}
                        checked={item.checked}
                    />
                    <label>{item.item}</label>
                    {/* <button>Delete</button> */}
                    <FaTrashAlt
                     role="button"
                     tabIndex="0"
                    />
                </li>                  
        ))}
        </ul>
    </main>
  )
}

export default ContentDesign