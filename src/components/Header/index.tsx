import React from 'react';
import { Link } from "react-router-dom"

const Header:React.FC = () => {
    return ( 
        <header>
            <nav className="navbar">
                <Link className="nabar__brand" to="/">
                    <h1>My store</h1>
                </Link>
                <Link className="navbar__button button primary" to="cart">
                </Link>
            </nav>
        </header> 
    )
};

export default Header;