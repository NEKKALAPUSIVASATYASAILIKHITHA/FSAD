//import logo from './logo.svg';
import './App.css';
//import Third from './project/third';
//import Hi from './project/second';
import He from './project/compofun';
function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
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
      </header> */}
     {/* <>
  <Hi />
  <Third />
    </>*/}
    <He name='kiki'/>
    <He name='keer'/>
  
    </div>
  ); 
}

export default App;
