import React from 'react';
import { useAddItem, useDecreaseItem, useRemoveItem } from "../../store";
import { ICart } from '../../store/atoms'

interface IParamCartButtons {
    item: ICart
}

const CartButtons:React.FC<IParamCartButtons> = ({ item }:IParamCartButtons) => {
    const add = useAddItem();
    const remove = useRemoveItem();
    const decrease = useDecreaseItem();

    return ( 
        <div className="group-buttons">
            <button onClick={() => decrease(item)} title="Decrease"> - </button> 
            <button onClick={() => add(item)} title="Increase"> + </button> 
            <button onClick={() => remove(item)} title="Remove"> x </button> 
        </div>
    )

};

export default CartButtons;