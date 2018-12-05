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
  max-width: 1000px;
  padding-top: 6em;
`

const CTA = styled.h3`
  font-family: acumin-pro, sans-serif;
  font-size: 3em;
  max-width: 500px;
  padding-top: 1.5em;
`

const About = () => {
  return (
    <div>
      <IntroContainer>
        <Hello>About</Hello>

        <SubHeading>
          I am a huge fan of helping businesses and startups express their ideas through good design. Usability and design make or break a company. Seeing a company grow and succeed through the power of design inspires me to do my best work everytime.
        </SubHeading>

        <SubHeading>
          My minimalistic approach to design and my intentional focus on less allows me to quickly craft a core product. The sooner its out the door, the sooner we get real feedback - thats when the fun begins.
        </SubHeading>

        <SubHeading>
          In my spare time I enjoy spending time with my family, making more things, and filming.
        </SubHeading>
      </IntroContainer>
    </div>
  )
}

export default About
