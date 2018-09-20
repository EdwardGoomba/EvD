import React from "react"

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles"

// core components
import GridContainer from "components/Grid/GridContainer"
import GridItem from "components/Grid/GridItem"


import productStyle from "assets/jss/material-kit-pro-react/views/landingPageSections/productStyle.jsx"

import AboutCards from "../Sections/AboutCards"

class HelpSection extends React.Component {
  render() {
    const { classes } = this.props
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={8} md={8}>
            <h2 className={classes.title}>How this Helps You</h2>
            <h3 className={classes.description}>
              Thats great and all... but how does that help you and your business? By working with me you...
            </h3>
          </GridItem>
        </GridContainer>
        <AboutCards />
      </div>
    )
  }
}

export default withStyles(productStyle)(HelpSection)
