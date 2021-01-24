import React from 'react';
import { useRecoilValue } from 'recoil';
import { HeaderContainer , Navbar, Brand, ButtonCart } from './style'
import { cartState } from '../../store';

const Header:React.FC = () => {
    const { totalQty } = useRecoilValue(cartState);
    return ( 
        <HeaderContainer>
            <Navbar>
                <Brand to="/">
                    <h1>My Courses</h1>
                </Brand>
                <ButtonCart to="cart">
                    Cart: { totalQty }
                </ButtonCart>
            </Navbar>
        </HeaderContainer> 
    )
};

export default Header;