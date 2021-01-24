import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.header`
    height:70px;
    padding: .5rem;
    margin-bottom: 1rem;
`;

export const Navbar =  styled.nav`
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    flex-wrap: nowrap;
    padding: 5px;
    border-bottom: 1px solid lightgrey;
`;

export const Brand = styled(Link)`
    text-decoration: none;
    padding: 5px;
    &:hover {
        opacity: .7;
    }
`;

export const ButtonCart = styled(Link)`
    text-decoration: none;
    padding: 1rem 1rem;
    background-color: blue;
    color: #fff;
    font-size: 1rem;
    font-weight: bold;
    display: inline-block;
    &:hover {
        opacity: .7;
    }
`;