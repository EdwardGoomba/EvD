import React, { Component } from "react"

// nodejs library that concatenates classes
import classNames from "classnames"

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles"

// @material-ui/icons
// core components
import GridContainer from "components/Grid/GridContainer.jsx"
import GridItem from "components/Grid/GridItem.jsx"

import contactStyle from "assets/jss/material-kit-pro-react/views/aboutUsSections/contactStyle.jsx"

class SectionContact extends Component {
  render() {
    const { classes } = this.props
    return (
      <div className={classes.aboutUs}>
        <GridContainer>
          <GridItem
            xs={10}
            sm={8}
            md={8}
            className={classNames(classes.mrAuto, classes.mlAuto)}
          >
            <h2 className={classNames(classes.title, classes.textCenter)}>
              Want to work with me?
            </h2>
            <h2 className={classNames(classes.title, classes.textCenter)}>Send a message to: ask@edwardvdesign.com</h2>
          </GridItem>
        </GridContainer>
      </div>
    )
  }
}

export default withStyles(contactStyle)(SectionContact)
