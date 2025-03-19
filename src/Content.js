import React from 'react'
<<<<<<< HEAD
function changeWord()
{
 const names=["learn","Earn","Give"];
 const num= Math.floor(Math.random()*3);
 return (names[num]);

} 

const handleClick = () => {
console.log("Thanks for Registration")
}

const handleClick2 = (name) => {
    console.log(`Thanks for Registration ${name}`)
    }
const handleClick3 = (e) => {
        console.log(e.target)
        console.log(e.target.innerText)
        }
const Content = () => {
  return (
    <main>
    <div>Lets {changeWord()} Knowledge
    <p  onDoubleClick={() => handleClick2("FSD")}>Hello</p></div>
    {/* <button onClick ={handleClick}>Register</button> */}
    {/* <button onClick ={ handleClick2('cse')}>Register</button> */}
    {/* <button onClick ={() => handleClick2('cse')}>Register</button> */}
    <button onClick ={(e) => handleClick3(e)}>Register2</button>
   
    
=======

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
>>>>>>> ca1b8c6 (Day X: Added Props)
    </main>
  )
}

export default Content