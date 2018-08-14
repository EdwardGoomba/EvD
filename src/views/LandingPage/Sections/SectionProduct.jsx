import React from "react"

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles"

// core components
import GridContainer from "components/Grid/GridContainer"
import GridItem from "components/Grid/GridItem"
import SectionCards from "./SectionCards"
import SectionHelp from './SectionHelp'
import SectionBrands from './SectionBrands'

import productStyle from "assets/jss/material-kit-pro-react/views/landingPageSections/productStyle.jsx"

class SectionProduct extends React.Component {
  render() {
    const { classes } = this.props
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={8} md={8}>
            <h2 className={classes.title}>What I Do</h2>
            <h3 className={classes.description}>
              Product designer... what the heck does that even mean? In a nutshell - I help you find, research and validate a problem, and ultimately design, build, test, and ship the solution.
            </h3>
          </GridItem>
        </GridContainer>

        <SectionCards />

        <GridContainer justify="center">
          <GridItem xs={12} sm={8} md={8}>
            <h2 className={classes.title}>How this Helps You</h2>
            <h3 className={classes.description}>
              Thats great and all... but how does that help you and your business? By working with me you...
            </h3>
          </GridItem>
        </GridContainer>

        <SectionHelp />

        <GridContainer justify="center">
          <GridItem xs={12} sm={8} md={8}>
            <h2 className={classes.title}>I have Already Worked With</h2>
            <h3 className={classes.description}>
              The following teams and startups to achieve their product vision.
            </h3>
          </GridItem>
        </GridContainer>

        <SectionBrands />

        <GridContainer justify="center">
          <GridItem xs={12} sm={8} md={8}>
            <h2 className={classes.title}>Want to work with me?</h2>
            <h3 className={classes.description}>
              Send a message to:
            </h3>
            <h3 className={classes.title}>ask@edwardvdesign.com</h3>
          </GridItem>
        </GridContainer>
      </div>
    )
  }
}

export default withStyles(productStyle)(SectionProduct)
