import React from 'react';
import { ICart } from '../../store/atoms';
import { Card } from './sytle';

interface ICartNoQty {
    id: string
    price: number
}

interface ICardProduct {
    course: ICartNoQty
    addItem: (arg: ICart) => void
}

const CardProduct:React.FC<ICardProduct> = ({ course, addItem}) => {
    return (
        <Card>
            <h4>
                {course.id} / ${course.price}
            </h4>
            <button
                className="button"
                onClick={() => addItem(course as ICart)}
            >
                Add
            </button>
        </Card>  
    )
};

export default CardProduct;