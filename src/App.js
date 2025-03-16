import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
// function changeWord()
// {
//  const names=["learn","Earn","Give"];
//  const num= Math.floor(Math.random()*3);
//  return (names[num]);

// }

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
