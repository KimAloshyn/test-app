import logo from './logo.svg';
import './App.css';


function App() {
  const handleShowAlert = () => {
    alert("Hello react")
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={handleShowAlert}>Show alert</button>
        <a
          className="App-link"
          href="https://github.com/KimAloshyn/test-app"
        >
          GitHub link
        </a>
      </header>
    </div>
  );
}

export default App;
