import React from 'react'

const Header = () => {
    const headerStyle = {
        backgroundColor:'mediumblue',
        color:'white'
    }
  return (
    // <div>Header</div>
    <header style={headerStyle}>
        <h1>To do List</h1>
    </header>
  )
}

export default Header