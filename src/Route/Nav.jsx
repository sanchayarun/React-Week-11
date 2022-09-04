import {Link} from 'react-router-dom';
import React from 'react';
const Nav = () => {
    
    return(
    <> 
    <Link to="/">Home</Link>
    <Link to="/login">Login</Link>
    <Link to="/car">Car</Link>
    <Link to="/products">Products</Link>

    </>
    )}
export default Nav;