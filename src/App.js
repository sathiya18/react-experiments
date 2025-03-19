import logo from './logo.svg';
import './App.css';
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

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
