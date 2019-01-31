import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

// import Components
import Layout from '../components/Layout'

// Styled Components
import media from '../components/styled/Media'
import NavDirective from '../components/styled/NavDirective'

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
  line-height: 2.2rem;
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

const Beliefs = styled.div`
  ${media.desktop`width: 50%;`}
  ${media.tablet`width: 50%;`}
  ${media.phone`width: 100%;`}
`

const Values = styled.div`
  ${media.desktop`width: 25%;`}
  ${media.tablet`width: 50%;`}
  ${media.phone`width: 100%;`}

`

const CTA = styled.h3`
  font-family: acumin-pro, sans-serif;
  font-size: 3em;
  max-width: 500px;
  padding-top: 1.5em;
`

const About = () => (
  <Layout>
    <IntroContainer>
      <Hello>Hello again.</Hello>
      <Me src='../static/img/me.jpg' />
      <p>Yup, your looking at my face. Muy guapo no?</p>

      <SubHeading>
        Earlier I said I help SaaS companies solve problems - how? I do this by <Link href='/product'><NavDirective>designing products</NavDirective></Link> that take your complex business problems and turn them into simple and beautiful interfaces while focusing on what maters most - your customers experience.
      </SubHeading>

      <SubHeading>
        I also build <Link href='/system'><NavDirective>design systems</NavDirective></Link>. A design system is a collection of standards for design and front end code.  This series of UI components will help your team quickly assemble new interfaces with higher efficiency and consistency.
      </SubHeading>

      <SubHeading>
        In my spare time I enjoy spending time with my family, making more things, and filming.
      </SubHeading>
    </IntroContainer>

    <DetailsWrapper>
      <Beliefs>
        <Heading>I Believe</Heading>
        <SubHeading>- Product design should follow a process, be fun and rewarding</SubHeading>
        <SubHeading>- Design shouldnt be difficult or something you dread.</SubHeading>
        <SubHeading>- Every person should have a great experience with a designer.</SubHeading>
      </Beliefs>

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
    <SubHeading>
      <Link href='/contact'><NavDirective brand>Start your Project</NavDirective></Link>
    </SubHeading>
  </Layout>
)

export default About
