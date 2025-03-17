import React from 'react' 
import { useState } from 'react'

const ContentHooks = () => {
   
    function changeWord()
    {
        const names=["learn","Earn","Give"];
        const num= Math.floor(Math.random()*3);
        return (names[num]);
    } 

    function namee(){
        console.log("visit ptuniv.edu.in")
    }
    const [count,setCount]=useState(99);
    const [name,setName]=useState(namee())
    // const [name,setName]=useState(() => namee())
    function incrementFunction(){
        // setCount(count + 1)
        //check what happens
        // setCount(count + 1)
        // setCount(count + 1)
        setCount((count) => {return count + 1})
        setCount((count) => {return count + 1})
        setCount((count) => {return count + 1})

    }
    function decrementFunction(){
        setCount(count - 1)
    }
  return (
    <main>
        <p>Lets Learn Knowledge</p>
    <button onClick={()=>changeWord()}>Subscribe</button>
    <button onClick={decrementFunction}>-</button>
    <span>{count}</span>
    <button onClick={incrementFunction}>+</button>
    </main>
  )
}

export default ContentHooks