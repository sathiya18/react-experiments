import React, { useState } from 'react'

 
const ContentHooks1 = () => {
 
 
    const [name,setName]=useState("Learn")
function changeWord()
    {
        const names=["Learn","Earn","Give"];
        const num= Math.floor(Math.random()*3);
        setName(names[num]);
    }
  return (
    <main>
        <p>Lets {name} Knowledge</p>
    <button onClick={()=>changeWord()}>Subscribe</button>
   
    </main>
  )
}

export default ContentHooks1