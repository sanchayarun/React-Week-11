import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1 className="titleName">Teddy</h1> 
        <img src="https://i.imgur.com/9Oqst5c.jpg" className="App-photo" alt="logo" />
        <p>
          <ul className="list">
            <li><b>Breed:</b> Havanese/Bichone Frise </li>
            <li><b>Size:</b> Small (under 10kg)</li>
            <li><b>Weight:</b> 8.7kg</li>
          </ul>
        </p>
        <a
          className="App-link"
          href="https://wagwalking.com/breed/havachon"
          target="_blank"
          rel="noopener noreferrer"
        >
          Breed Specific Info
        </a>
      </header>
    </div>
  );
}

export default App;
