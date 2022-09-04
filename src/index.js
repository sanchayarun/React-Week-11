import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from './Login/Login';
import Car from './Car/Car';
import ProductList from './ProductTable/ProductTable';
import ShoppingCart from './ShoppingCart/ShoppingCart';
import LessText from './LessText/LessText';
import Greet from './Greet/Greet';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Greet name = "Teddy"/>
    <Login />
    <Car />
    <ProductList />
    <ShoppingCart />
    <LessText text = "Hooks are a new addition in React 16.8 which let you use state and other React features without writing a class - or hook into them." maxLength={15} />
    <App />
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
