import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

// Styled Components
import NavDirective from './styled/NavDirective'

// Header
const HeaderWrap = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 2em;
  padding-bottom: 0;
`

// Logo Style
const Logo = styled.h3`
  font-family: acumin-pro, sans-serif;
  font-size: 1.5em;
`

// Nav Style
const Nav = styled.ul`
  font-family: acumin-pro, sans-serif;
  display: flex;
  text-decoration: none;
`

const NavLinks = styled.li`
  padding-left: 1em;
  padding-top: 0.8em;
  text-decoration: none;
  list-style: none;
  font-size: 1.5em;
`

const Header = () => {
  return (
    <HeaderWrap>
      <Logo><Link href='/'><NavDirective>Edward V Design</NavDirective></Link></Logo>
      <Nav>
        {/* <NavLinks>
          <Link href='/about'>about</Link>
        </NavLinks>
        <NavLinks>
          <Link href='/thoughts'>thoughts</Link>
        </NavLinks> */}
        <NavLinks>
          <Link href='/contact'>
            <NavDirective brand>Start your Project</NavDirective>
          </Link>
        </NavLinks>
      </Nav>
    </HeaderWrap>
  )
}

export default Header
