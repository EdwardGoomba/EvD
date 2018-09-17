import React from "react"

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles"

// core components
import GridContainer from "components/Grid/GridContainer"
import GridItem from "components/Grid/GridItem"


import productStyle from "assets/jss/material-kit-pro-react/views/landingPageSections/productStyle.jsx"

class WorkedWith extends React.Component {
  render() {
    const { classes } = this.props
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={8} md={8}>
            <h2 className={classes.title}>I have Already Worked With</h2>
            <h3 className={classes.description}>
              The following teams and startups to achieve their product vision.
            </h3>
          </GridItem>
        </GridContainer>
      </div>
    )
  }
}

export default withStyles(productStyle)(WorkedWith)
