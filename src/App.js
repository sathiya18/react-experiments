import logo from './logo.svg';
import './App.css';
<<<<<<< HEAD
<<<<<<< HEAD
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
// function changeWord()
// {
//  const names=["learn","Earn","Give"];
//  const num= Math.floor(Math.random()*3);
//  return (names[num]);

// }
=======
>>>>>>> de52a8c (Initialize project using Create React App)
=======
import Header from './Header';
import Footer from './Footer';
import Content from './Content';
import { useState } from 'react'
>>>>>>> ca1b8c6 (Day X: Added Props)

function App() {
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
    
    const handleCheck =(id) => {
        const listItems=items.map((item) =>
        item.id===id ? {...item,checked:!item.checked}:
        item)
        setItems(listItems)
        localStorage.setItem("todo_list",JSON.stringify(listItems)) 

    }  

const handleDelete = (id) => {
    const listItems=items.filter((item) => 
     item.id!=id)
    setItems(listItems)  
    localStorage.setItem("todo_list",JSON.stringify(listItems)) 
}
  return (
    <div className="App">
<<<<<<< HEAD
<<<<<<< HEAD
      {
      /* <h1 style={{ color: "blue", textAlign: "center" }}>
        Hello, this is a dynamically created heading!
      </h1>
      <p>Let {changeWord()} Knowledge</p> */
      
          <>
          <Header />
          <Content />
          <Footer/>
          </>
          
      }
=======
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
>>>>>>> de52a8c (Initialize project using Create React App)
=======
      {
          <>
          <div>
           <Header /> 
           <Content
            items={items}
            setItems={setItems}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
           />
           <Footer
            length={items.length}
           />
          </div>
          </>
          
      }
>>>>>>> ca1b8c6 (Day X: Added Props)
    </div>
  );
}

export default App;
