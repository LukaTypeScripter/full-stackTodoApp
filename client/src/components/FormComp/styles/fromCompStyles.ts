import styled from "styled-components";

export const AddInp = styled.input<{darkTheme:boolean}>`
   -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    border: none;
    background-color: white;
    color: gray;
    font-size: 1rem;
    padding: 0 0.5rem;
    outline: none;
 
    background-color: ${props => props.darkTheme ? "hsl(235, 21%, 11%)" : ""};
   
`
export const Form = styled.form<{darkTheme:boolean}>`
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
    color: var(hsl(0, 0%, 98%));
    height: 2.9rem;
    padding: 0.5rem 0rem 0.5rem 1rem;
    margin-bottom: 25px;
    z-index: 999;
    background-color: white;
    background-color: ${props => props.darkTheme ? "hsl(235, 21%, 11%)" : ""};
    @media (min-width: 56.88rem){
        height: 3.5rem;
    }
   
   


`