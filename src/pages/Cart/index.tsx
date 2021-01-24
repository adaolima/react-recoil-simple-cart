import React from 'react'
import { Helmet } from 'react-helmet';

const Cart:React.FC = () => ( 
    <>
        <Helmet>
            <title> Your Cart </title>
            <meta name="description" content="These amazing courses almost yours." />
        </Helmet>
        <h1>Cart</h1> 
    </>
);

export default Cart;