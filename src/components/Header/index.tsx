import React from 'react';
import { Navbar, Brand, ButtonCart } from './style'

const Header:React.FC = () => {
    const totalQty = 2;
    return ( 
        <header>
            <Navbar>
                <Brand to="/">
                    <h1>My Courses</h1>
                </Brand>
                <ButtonCart to="cart">
                    Cart: { totalQty }
                </ButtonCart>
            </Navbar>
        </header> 
    )
};

export default Header;