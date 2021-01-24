import styled from 'styled-components';

export const Card = styled.div`
    width: 250px;
    padding: 0rem 1rem 1rem;
    border: 1px solid lightgrey;
    margin: .5rem;
    border-radius: 5px;
    box-shadow: 2px 2px 15px #DDD;
    transition: .1s ease;
    &:hover {
        transform: scale(1.03)
    }
    .title {
        margin-bottom: .5rem;
        font-size:1.5rem;
    }
    & button {
        display:flex;
        margin-left: auto;
        background-color: #83f52c;
        padding: .5rem .7rem;
        font-weight:bold;
        border:none;
        color: #2f4c1a;
        cursor: pointer;
        &:hover {
            background-color: #52c900;
        }
        &:focus {
            outline-color: #589c26;
            boder-color: #589c26;
        }
    }
`;


