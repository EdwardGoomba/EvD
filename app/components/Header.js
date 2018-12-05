import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

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
  font-size: 1.2em;
`

const NavDirective = styled.a`
  text-decoration: none;
  color: #000;
`

const Header = () => {
  return (
    <HeaderWrap>
      <Logo><NavDirective href='/'>Edward V Design</NavDirective></Logo>
      <Nav>
        <NavLinks>
          <Link to='/about'>about</Link>
        </NavLinks>
        <NavLinks>
          <Link to='/blog'>blog</Link>
        </NavLinks>
        <NavLinks><NavDirective href='mailto:ask@edwardvdesign.com'>contact</NavDirective></NavLinks>
      </Nav>
    </HeaderWrap>
  )
}

export default Header
