import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

// Import components
import Layout from '../components/Layout'
import NavDirective from '../components/styled/NavDirective'

// Styled Components
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
  max-width: 480px;
  padding-top: 5em;
`

const DetailsContainer = styled.div`
  max-width: 650px;
`

const Contact = () => (
  <Layout>
    <IntroContainer>
      <Hello>Nice to meet you!</Hello>

      <Details>
        So your interested in working with me on a <Link href='/product'><NavDirective brand>product design</NavDirective></Link> or <Link href='/system'><NavDirective brand>design system</NavDirective></Link> project?<hr></hr>
        To get started, send me an email with the following:
      </Details>
    </IntroContainer>
    <DetailsContainer>
      <Details>
        Your Name<br />
        Email Address<br />
        What your interested in: (Product, System)<br />
        Info about your project:<br />
        (Web app? Mobile app? Project Stage? Timeline? Budget?)
      </Details>
    Literally just copy and past that right up there into this email below.
    </DetailsContainer>
    <Email href='mailto:ask@edwardvdesign.com'>ask@edwardvdesign.com</Email>
    <Heading>What else do I do?</Heading>
    <SubHeading>
      I write.
      <Link href='/thoughts'><NavDirective brand> Check it out.</NavDirective></Link>
    </SubHeading>
  </Layout>
)

export default Contact
