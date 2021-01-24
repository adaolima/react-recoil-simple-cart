import React from 'react';


const CartButtons:React.FC = ({ item }) => {
    const add = () => {};
    const remove = () => {};
    const decrease = () => {};

    return ( 
        <div className="group-buttons">
            <button onClick={() => decrease(item)} title="Decrease"> - </button> 
            <button onClick={() => add(item)} title="Increase"> + </button> 
            <button onClick={() => remove(item)} title="Remove"> x </button> 
        </div>
    )

};

export default CartButtons;