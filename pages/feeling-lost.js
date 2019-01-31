import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

// Import Components
import Layout from '../components/Layout'
import NavDirective from '../components/styled/NavDirective'

// Display Styles
const Hello = styled.h1`
  font-family: acumin-pro, sans-serif;
  font-size: 3.5em;
  line-height: 1.3em;
`

const Details = styled.h4`
  font-family: Roboto, sans-serif;
  font-size: 1.4em;
  line-height: 1.8em;
  padding-bottom: 1.6em;
`

const Email = styled.a`
  font-family: roboto, sans-serif;
  font-size: 1.4em;
  font-weight: bold;
  color: #000;
  text-decoration: none;
  padding-bottom: 0.3em;
  border-bottom: 2px solid #000;
`

const Heading = styled.h2`
  font-family: acumin-pro, sans-serif;
  font-size: 3em;
  padding-top: 1.5em;
`

const SubHeading = styled.h3`
  font-family: source-code-pro, monospace;
  font-size: 1.6em;
`

const IntroContainer = styled.div`
  max-width: 1000px;
  padding-top: 6em;
`

const CTA = styled.h3`
  font-family: acumin-pro, sans-serif;
  font-size: 3em;
  max-width: 500px;
  padding-top: 1.5em;
`

const Thoughts = () => (
  <Layout>
    <IntroContainer>
      <Hello>No Money, Few Clients, Feeling Lost</Hello>
        <Details>
          ...coming soon. Notice a theme yet?
        </Details>
    </IntroContainer>
  </Layout>
)

export default Thoughts
