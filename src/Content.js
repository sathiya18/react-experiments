import React from 'react'

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
    <button onClick ={ handleClick2('FSD')}>Register</button>
    {/* <button onClick ={() => handleClick2('cse')}>Register</button> */}
    {/* <button onClick ={(e) => handleClick3(e)}>Register2</button> */}
   
    
    </main>
  )
}

export default Content