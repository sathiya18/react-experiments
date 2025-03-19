import React from 'react'

<<<<<<< HEAD
const Footer = () => {
    const year = new Date();
  return (
    <footer>copyright &copy; {year.getFullYear()}</footer>
=======
const Footer = ({length}) => {
   
  return (
    <footer>{length} List  {length<=1?"item":"items"}</footer>
>>>>>>> ca1b8c6 (Day X: Added Props)
  )
}

export default Footer