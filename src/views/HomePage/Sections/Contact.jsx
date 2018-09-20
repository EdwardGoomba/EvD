import React from "react"

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles"

// core components
import GridContainer from "components/Grid/GridContainer"
import GridItem from "components/Grid/GridItem"


import productStyle from "assets/jss/material-kit-pro-react/views/landingPageSections/productStyle.jsx"

class Contact extends React.Component {
  render() {
    const { classes } = this.props
    return (
      <div className={classes.section}>
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

export default withStyles(productStyle)(Contact)
