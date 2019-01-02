import React from 'react'
import styled from 'styled-components'

// Images
import me from '../img/me.jpg'

// Styled Components
import media from './Media'

const Hello = styled.h1`
  font-family: acumin-pro, sans-serif;
  font-size: 3.5em;
  line-height: 1.3em;
`

const Me = styled.img`
  max-width: 600px;
`

const Details = styled.h4`
  font-family: roboto, sans-serif;
  font-size: 1.4em;
  padding-bottom: 1.6em;
  color: #747474;
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

const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`

const Skills = styled.div`
  width: 40%;
  ${media.desktop`width: 40%;`}
  ${media.tablet`width: 40%;`}
  ${media.phone`width: 100%;`}
`

const Values = styled.div`
  width: 40%;
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
        <Me src={me} />
        <p>Yup, your looking at my face. Muy guapo no?</p>

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

      <DetailsWrapper>
        <Skills>
          <Heading>Skills</Heading>
          <SubHeading>User experience design (ux)</SubHeading>
          <Details>Make it easy and intuitive to do what you want.</Details>

          <SubHeading>Web and user interface design (ui)</SubHeading>
          <Details>Websites, apps, you name it...</Details>

          <SubHeading>Web and app development</SubHeading>
          <Details>Im a front end developer - I build the stuff you see.</Details>

          {/* <SubHeading>Roadmapping</SubHeading>
          <Details>Sometimes, you just need to see where your going.</Details> */}
        </Skills>

        <Values>
          <Heading>Values</Heading>
          <SubHeading>Adventure</SubHeading>
          <SubHeading>Balance</SubHeading>
          <SubHeading>Happiness</SubHeading>
          <SubHeading>Hard Word</SubHeading>
          <SubHeading>Openness</SubHeading>
        </Values>
      </DetailsWrapper>

      <CTA>Let's work together on your idea.</CTA>
      <SubHeading>Email</SubHeading>
      <Email href='mailto:ask@edwardvdesign.com'>ask@edwardvdesign.com</Email>

    </div>
  )
}

export default About
