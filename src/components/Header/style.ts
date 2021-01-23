import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Navbar =  styled.nav`
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 70px;
    flex-wrap: nowrap;
    padding: 5px;
`;

export const Brand = styled(Link)`
    text-decoration: none;
    padding: 5px;
    margin-left: 10px;
`;

export const ButtonCart = styled(Link)`
    text-decoration: none;
    padding: 1rem 1rem;
    background-color: blue;
    color: #fff;
    font-size: 1rem;
    display: inline-block;
    margin-right: 15px;
`;