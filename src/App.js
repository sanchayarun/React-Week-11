import './App.css';
import Footer from './Footer/Footer.jsx';
import MyComponent from './Component/MyComponent';
import ContactComponent from './Prop_Component/contactComponent';

function App() {
  const address = {
    postcode: "W5",
    city: "London"
  }

  return (
    <>
    <div className="App">
      <header className="App-header">
        <h1 className="titleName">Teddy</h1> 
        <p className= "address">{address.postcode}, {address.city}</p>
        <img src="https://i.imgur.com/9Oqst5c.jpg" className="App-logo" alt="teddy photo" />
        <p >
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
        <MyComponent /> 
      </header>
      <div className="App-contact" > <ContactComponent /></div>
      </div>
      
      <div className = "App-footer">   
          <Footer /> 
      </div>
 
    </>
    
    
  );
}




export default App;
