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
export const Img = styled.img`
    width: 26px;
    height: 26px;
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
//  export const AddTodo = styled.button`
//      height: 2.9rem;
//     width: 2.9rem;
//     background-color: inherit;
//     border: none;
//     border-top-right-radius: inherit;
//     border-bottom-right-radius: inherit;
//     font-size: 2.5rem;
//     font-weight: 400;
//     color: black;

//  `


export const Todos = styled.ul`
list-style: none;
`

export const DragTExt = styled.p`
margin-top: 2rem;
    text-align: center;
    color: hsl(236, 9%, 61%);
    opacity: 0.8;
    font-size: 0.9rem;

`
