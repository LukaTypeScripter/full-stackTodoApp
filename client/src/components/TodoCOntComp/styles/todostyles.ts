import styled from "styled-components";
import checkIcon from '../../../images/icon-check.svg'
export const TodoCont = styled.div`
 -webkit-box-shadow: 1px 8px 10px var(--shadow-color), 2px 5px 7px var(--shadow-color), 1px 7px 4px var(--shadow-color);
    box-shadow: 1px 8px 10px var(--shadow-color), 2px 5px 7px var(--shadow-color), 1px 7px 4px var(--shadow-color);
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
export const DelateImg = styled.img`
    width: 15px;
  
`