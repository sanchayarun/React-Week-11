import React from 'react';


const CartItems = ({items}) => {

    const Display = ({ itemName }) => <li>{itemName}</li>
    return ( 
        <ul className="previousSearch">
                            {items.map(item => (
                    <li key={item.id}>{item.name}</li>
                ))}
        </ul>
     );
}

export default CartItems;