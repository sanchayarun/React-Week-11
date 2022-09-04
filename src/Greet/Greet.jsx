import React, { useEffect } from 'react';

const Greet = ({ name }) => {
const message = `Hello, ${name}!`;

useEffect(() => {
    console.log(`Running useEffect ${name}`);
    document.title = `Greetings to ${name}`; 
}, [name]);

return <h1>{message}</h1>;
}

export default Greet;