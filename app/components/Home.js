import React from 'react'
import styled from 'styled-components'

// Display Styles
const Hello = styled.h1`
  font-family: acumin-pro, sans-serif;
  font-size: 3.5em;
  line-height: 1.3em;
`

const Details = styled.h4`
  font-family: roboto, sans-serif;
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
  max-width: 500px;
  padding-top: 6em;
`

const CTA = styled.h3`
  font-family: acumin-pro, sans-serif;
  font-size: 3em;
  max-width: 500px;
  padding-top: 1.5em;
`

const Home = () => {
  return (
    <div>
      <IntroContainer>
        <Hello>Hello! I'm Edward. I am a product designer.</Hello>

        <Details>I help businesses and startups solve problems by visualizing their ideas through good design, and developing them into solutions. I believe in thinking differently, and that less is more. Enough about me though, how can I help you?</Details>
        <Email href='mailto:ask@edwardvdesign.com'>ask@edwardvdesign.com</Email>
      </IntroContainer>

      <Heading>Current Projects</Heading>
      <SubHeading><a href='https://www.constance.one/'>Constance</a>, <a href='https://www.boostpoint.com/'>Boostpoint</a>, Thyme</SubHeading>

      <Heading>What else do I do?</Heading>
      <SubHeading>I write. Check it out.</SubHeading>

      <CTA>Let's work together on your idea.</CTA>
      <SubHeading>Email</SubHeading>
      <Email href='mailto:ask@edwardvdesign.com'>ask@edwardvdesign.com</Email>
    </div>
  )
}

export default Home
