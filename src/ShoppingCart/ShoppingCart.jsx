import React, { useState } from 'react';
import AddItems from './AddItem';
import CartItems from './CartItems';

const ShoppingCart = () => {

   const [itemName, setItemName] = useState("");
   const [items, setItems] = useState([]);

    const newItem = (event) => {
        setItemName(event.target.value);
        
    }

   const submitForm = (event) => {
       // Prevent form submission
        event.preventDefault();
   }

    const handleAdd = () => { 
        // Save item name  state to array 
        setItems(items => [...items, { id: items.length, name: itemName }]);
    }

    return(
       <>
           <AddItems submitHandler={submitForm} newItem={newItem} handleAdd={handleAdd} />
            <CartItems items={items}/> 
       </>
   )
}
export default ShoppingCart;