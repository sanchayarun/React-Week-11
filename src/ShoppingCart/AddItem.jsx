import React from 'react';

const AddItems = ({ submitHandler, newItem, handleAdd }) => {
    return (
        <form onSubmit={submitHandler}>
            <input
                placeholder="Enter item:"
                type="text"
                onChange={newItem}
            />
            <button
                type="button"
                onClick={handleAdd}
            >
                Add Item to Cart
          </button>
        </form>
    );
}

export default AddItems;