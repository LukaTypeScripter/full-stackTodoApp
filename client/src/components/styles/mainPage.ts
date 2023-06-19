import styled from "styled-components";
import checkIcon from '../../images/icon-check.svg'
import mobileDark from '../../images/bg-mobile-dark.jpg'
import mobileLight from '../../images/bg-mobile-light.jpg'

import DekstopDark from '../../images/bg-desktop-dark.jpg'
import DekstopLigth from '../../images/bg-desktop-light.jpg'
export const Container = styled.main<{darkTheme:boolean}>`
width: inherit;
    min-height: inherit;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    min-height:100vh;
    background-image: url(${props => props.darkTheme ? mobileDark : mobileLight});
    background-repeat: no-repeat;
    background-position: top left;
    background-size: contain;
    background-color: ${props => props.darkTheme ? "hsl(235, 21%, 11%)" : "hsl(236, 33%, 92%)"};
    @media (min-width: 56.88rem){
            background-image: url(${props => props.darkTheme ? DekstopDark : DekstopLigth});
    }
   
`
export const Main = styled.section`
    width: 90%;
    min-height: 90vh;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    overflow: hidden;
    *{
        width: 100%;
    border-radius: 4px;
    }
    @media (min-width: 56.88rem){

        width: 35%;
    padding: 3rem 0;
    }



`

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

export const Img = styled.img`
    width: 26px;
    height: 26px;
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

export const Round = styled.span<{darkTheme:boolean,checked:boolean}>`
    width: 25px;
    height: 25px;
    border: 2px solid   ${props => props.darkTheme ? "hsl(233, 14%, 35%)" : "#d2d3db"};
    border-radius: 50%;

   background-color: ${props => props.darkTheme ? "hsl(235, 24%, 19%)" : ""};
 
   background-image: ${props =>
    props.checked ? `url(${checkIcon}), -webkit-gradient(linear, left top, left bottom, from(#57ddff), to(#c058f3))` : ''};
  background-image: ${props =>
    props.checked ? `url(${checkIcon}), linear-gradient(#57ddff, #c058f3)` : ''};
  background-repeat: no-repeat;
  background-position: center;
  width: 25px;
  height: 25px;
   
`
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
 export const AddTodo = styled.button`
     height: 2.9rem;
    width: 2.9rem;
    background-color: inherit;
    border: none;
    border-top-right-radius: inherit;
    border-bottom-right-radius: inherit;
    font-size: 2.5rem;
    font-weight: 400;
    color: black;

 `

 export const TodoCont = styled.div`
 -webkit-box-shadow: 1px 8px 10px var(--shadow-color), 2px 5px 7px var(--shadow-color), 1px 7px 4px var(--shadow-color);
    box-shadow: 1px 8px 10px var(--shadow-color), 2px 5px 7px var(--shadow-color), 1px 7px 4px var(--shadow-color);
 `

export const Todos = styled.ul`
list-style: none;
`

export const TodoItem = styled.div<{checked:boolean,darkTheme:boolean}>`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: space-evenly;
    -ms-flex-pack: space-evenly;
    justify-content: space-evenly;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    height: 2.9rem;
    background-color:white;
    
    padding: 0.5rem 0.5rem 0.5rem 1rem;
    -webkit-transition: all 500ms ease;
    transition: all 500ms ease;
    border-bottom: 1px solid ${props => props.darkTheme ? "hsl(233, 14%, 35%)" : "hsl(233, 11%, 84%)"};
    text-decoration: ${props => props.checked ? "line-through" : ''};
    -webkit-text-decoration-color: ${props => props.checked ? "	#424242" : ''};
    text-decoration-color: ${props => props.checked ? "	#424242" : ''};
    text-decoration-thickness: ${props => props.checked ? "	2px" : ''};
    opacity: ${props => props.checked ? "	0.5" : ''};
    background-color: ${props => props.darkTheme ? "hsl(235, 21%, 11%)" : ""};
    @media (min-width: 56.88rem){
        height: 3.5rem;
    }

  

  
`

export const Label = styled.label<{darkTheme:boolean}>`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    width: 35px;
    height: 25px;
    position: relative;
    background-color: white;
    border: 1px solid ${props => props.darkTheme ? "hsl(235, 21%, 11%)":"white"};
    border-radius: 50%;
    cursor: pointer;

    background-color: ${props => props.darkTheme ? "hsl(235, 21%, 11%)" : ""};
    width: 26px;
    height: 26px;
    background-color: hsl(0, 0%, 98%);
    border-radius: 50%;
/* &:hover{
    background-image: -webkit-gradient(linear, left top, left bottom, from(#57ddff), to(#c058f3));
    background-image: linear-gradient(#57ddff, #c058f3);
} */


`

export const TodoLi = styled.li<{darkTheme:boolean}>`
    -webkit-box-flex: 1;
    -ms-flex: 1 0 12.6rem;
    flex: 1 0 12.6rem;
    padding-left: 1rem;
    color:${props => props.darkTheme ? "hsl(0, 0%, 73%)" : "hsl(0, 0%, 26%)" };
    font-size: 0.8rem;
    cursor: pointer;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    @media (min-width: 56.88rem){
        font-size: 1rem;
    }

   

`
export const DElateBtn = styled.button`
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
export const DelateImg = styled.img`
    width: 15px;
  
`

export const InpChecked = styled.input`
width: 0;
    height: 0;
    opacity: 0;
    position: absolute;
    cursor: pointer;
    &:checked {
        background-image: url(${checkIcon}), -webkit-gradient(linear, left top, left bottom, from(#57ddff), to(#c058f3));
    background-image: url(${checkIcon}), linear-gradient(#57ddff, #c058f3);
     background-repeat: no-repeat; 
    background-position: center; 
     width: 25px; 
     height: 25px;
    }
`

export const DragTExt = styled.p`
margin-top: 2rem;
    text-align: center;
    color: hsl(236, 9%, 61%);
    opacity: 0.8;
    font-size: 0.9rem;

`
