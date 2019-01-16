import React from 'react'
import styled from 'styled-components'

// Import components
import Header from './Header'
import Footer from './Footer'

// Styled Components
const Container = styled.div`
  width: 80vw;
  margin-left: auto;
  margin-right: auto;
  padding: 0;
`

const Layout = (props) => (
  <Container>
    <Header />
    {props.children}
    <Footer />
  </Container>
)

export default Layout