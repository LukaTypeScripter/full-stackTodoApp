import styled from "styled-components";


export const Header = styled.header`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    padding-top: 0.3rem;
    background-color: transparent;
    margin-bottom: 20px;
`

export const HeaderText = styled.h1`
font-size: 1.8rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 7px;
    color: white;
    @media (min-width: 56.88rem){
        font-size: 2.2rem;
    }
`
export const Button = styled.button`
    border: none;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    background-color: transparent;
`