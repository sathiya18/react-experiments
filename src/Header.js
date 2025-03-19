import React from 'react'

<<<<<<< HEAD
const Header = () => {
    const headerStyle = {
        backgroundColor:'mediumblue',
        color:'white'
    }
  return (
    // <div>Header</div>
    <header style={headerStyle}>
        <h1>To do List</h1>
=======
const Header = ({title="default Props"}) => {
      return (
        <header >
        <h1>{title}</h1>
>>>>>>> ca1b8c6 (Day X: Added Props)
    </header>
  )
}

export default Header