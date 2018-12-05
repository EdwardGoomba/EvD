import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import styled from 'styled-components'

// Import components
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Blog from './components/Blog'
import Footer from './components/Footer'

// Styled Components

// Container
const Container = styled.div`
  width: 80vw;
  margin-left: auto;
  margin-right: auto;
  padding: 0;
`

const App = () => {
  return (
    <Router>
      <Container>
        <Header />

        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/blog' component={Blog} />

        <Footer />
      </Container>
    </Router>
  )
}

export default App
