import React from 'react'
import styled from 'styled-components'

import Bear from '../img/evd-logo.png'

// Footer
const FooterWrap = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 9em;
  padding-bottom: =3em;
`

// Logo Style
const Logo = styled.h3`
  font-family: acumin-pro, sans-serif;
  font-size: 1.5em;
`
const LogoImg = styled.img`
  width: 10%;
  height: 10%;
`

// Nav Style
const Nav = styled.ul`
  font-family: source-code-pro, sans-serif;
  display: flex;
  text-decoration: none;
`

const NavLinks = styled.li`
  padding-left: 2em;
  padding-top: 1em;
  text-decoration: none;
  list-style: none;
`

const NavDirective = styled.a`
  text-decoration: none;
  color: #000;
`

const Footer = () => {
  return (
    <FooterWrap>
      <LogoImg src={Bear} />
      <Nav>
        <NavLinks><NavDirective href='https://twitter.com/EdwardGoomba'>twitter</NavDirective></NavLinks>
        <NavLinks><NavDirective href='https://www.instagram.com/edwardvdesign/'>instagram</NavDirective></NavLinks>
      </Nav>
    </FooterWrap>
  )
}

export default Footer
