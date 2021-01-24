import React from 'react'
import { Helmet } from 'react-helmet';
import CartButtons from '../../components/CartButtons';
import { useRecoilValue } from "recoil";
import { ICart } from "../../store/atoms"
import {cart, cartState} from "../../store";

const Cart:React.FC = () => { 
    const cartItems = useRecoilValue(cart);
    const { totalCost} = useRecoilValue(cartState);
    return( 
        <>
            <Helmet>
                <title> Your Cart </title>
                <meta name="description" content="These amazing courses almost yours." />
            </Helmet>
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Course</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {cartItems.map((item:ICart) => (
                        <tr key={item.id}>
                            <td className="actions">
                                <CartButtons item={item} />
                            </td>
                            <td>{item.id}</td>
                            <td>{item.price}</td>
                            <td>{item.qty}</td>
                            <td>{item.qty * item.price}</td>

                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan={5} style={{ textAlign: "right"}}>
                            Total:
                        </td>
                        <td>${totalCost}</td>
                    </tr>
                </tfoot>
            </table>
        </>
    )
};

export default Cart;