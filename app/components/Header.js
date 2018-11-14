import React from 'react'
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
  text-decoration: none;
  list-style: none;
`

const NavDirective = styled.a`
  text-decoration: none;
  color: #000;
`

const Header = () => {
  return (
    <HeaderWrap>
      <Logo>Edward V Design</Logo>
      <Nav>
        {/* <NavLinks><NavDirective href='/about'>about</NavDirective></NavLinks>
        <NavLinks><NavDirective href='/blog'>blog</NavDirective></NavLinks> */}
        <NavLinks><NavDirective href='mailto:ask@edwardvdesign.com'>contact</NavDirective></NavLinks>
      </Nav>
    </HeaderWrap>
  )
}

export default Header
