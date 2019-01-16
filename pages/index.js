import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

// Import Components
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
  max-width: 500px;
  padding-top: 6em;
`

const CTA = styled.h3`
  font-family: acumin-pro, sans-serif;
  font-size: 3em;
  max-width: 500px;
  padding-top: 1.5em;
`

const Index = () => (
  <Layout>
    <IntroContainer>
      <Hello>Hello! I'm <Link href='/about'><NavDirective brand>Edward
        </NavDirective></Link>. I am a product designer.</Hello>

      <Details>I help SaaS companies solve problems by visualizing their ideas through good design, and developing them into solutions. I believe in thinking differently, and that less is more.</Details>
    </IntroContainer>

    <Heading>What exactly do you do...</Heading>
    <SubHeading>
      - Create <Link href='/product'><NavDirective brand>Product Designs</NavDirective></Link>
    </SubHeading>
    <SubHeading>
      - Build <Link href='/system'><NavDirective brand>Design Systems</NavDirective></Link>
    </SubHeading>

    <Heading>Current Projects</Heading>
    <SubHeading><NavDirective brand href='https://www.constance.one/'>Constance</NavDirective>, <NavDirective brand href='https://www.boostpoint.com/'>Boostpoint</NavDirective>, Thyme</SubHeading>

    <Heading>What else do I do?</Heading>
    <SubHeading>I write. <Link href='/thoughts'><NavDirective brand>Check it out.</NavDirective></Link></SubHeading>

    <CTA>Let's work together on your idea.</CTA>
    <SubHeading>
      <Link href='/contact'><NavDirective brand>Start your Project</NavDirective></Link>
    </SubHeading>
  </Layout>
)

export default Index