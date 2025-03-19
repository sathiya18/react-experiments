import React from 'react'

import { FaTrashAlt } from 'react-icons/fa'

const Content = ({items,setItems,handleCheck,handleDelete}) => {
    
   return (
    <main>
        {(items.length)? (
        <ul>
            {items.map((item) =>(
                <li className="item" key={item.id}>
                    <input
                        type="checkbox"
                        onChange={()=> handleCheck(item.id)}
                        checked={item.checked}
                    />
                    <label
                      style={(item.checked)?
                      {textDecoration:"line-through"}:null }
                      onDoubleClick={()=> handleCheck(item.id)}>{item.item}</label>
                    {/* <button>Delete</button> */}
                    <FaTrashAlt
                     role="button"
                     onClick={() => handleDelete(item.id)}
                     tabIndex="0"
                    />
                </li>                  
        ))}
        </ul>
        ) : (
            <p style={{marginTop:'2rem', color:"rosybrown"}}>Your List is Empty</p>
        )}
    </main>
  )
}

export default Content