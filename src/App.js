import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Content from './Content';
import { useState } from 'react'
import AddItem from './AddItem';
import SearchItem from './SearchItem';

function App() {
  const [items, setItems]=useState(JSON.parse(localStorage.getItem('todo_list')))

    //[

    // {
    // id:1,
    // checked:true,
    // item:"Practice Coding"
    // },
    // {
    // id:2,
    // checked:false,
    // item:"Play Cricket"
    //  },
    //  {
    // id:3,
    // checked:false,
    // item:"Join PTU AI Club"
    //  }
   // ]
  //);
    
    const [newItem, setNewItem]=useState('')
    const[search,setSearch]=useState('')

    const addItem = (item) => {
      const id= items.length ? items[items.length - 1].id + 1:1;
      const addNewItem = {id,checked:false,item}
      const listItems = [...items,addNewItem]
      setItems(listItems)
      localStorage.setItem("todo_list",JSON.stringify(listItems)) 
    }
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

const handleSubmit = (e) => {
  e.preventDefault()
  if(!newItem) return;
    console.log(newItem)
  //console.log('submitted')
  addItem(newItem)
  setNewItem('')
}
  return (
    <div className="App">
      {
          <>
          <div>
           <Header title="To do List"/> 
           <AddItem 
              newItem={newItem}
              setNewItem={setNewItem}
              handleSubmit={handleSubmit}
           />
           <SearchItem 
              search={search}
              setSearch={setSearch}
           />
           <Content
           // items={items}
           items={items.filter(item => (item.item).toLowerCase().includes(search.toLowerCase()))}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
           />
           <Footer
            length={items.length}
           />
          </div>
          </>
          
      }
    </div>
  );
}

export default App;
