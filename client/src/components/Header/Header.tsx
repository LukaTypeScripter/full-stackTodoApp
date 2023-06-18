import React from 'react'
import { Button, HeaderText, Img,Header } from '../styles/mainPage'
import moon  from '../../images/icon-moon.svg'
import ligth  from '../../images/icon-sun.svg'
interface Props {
    darkTheme:boolean
    setDarkTheme:React.Dispatch<React.SetStateAction<boolean>>
}
function HeadersComp(p:Props) {
        const { darkTheme,setDarkTheme} = p;
  return (
    <>
           <Header>
          <HeaderText>ToDo</HeaderText>
          <Button onClick={() => setDarkTheme(!darkTheme)}>
            {darkTheme ? <Img src={moon} alt="" /> : <Img src={ligth} alt="" />}
          </Button>
        </Header>
          </>
  )
}

export default HeadersComp