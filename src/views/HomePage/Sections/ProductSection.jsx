import React from "react"

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles"

// core components
import GridContainer from "components/Grid/GridContainer"
import GridItem from "components/Grid/GridItem"


import productStyle from "assets/jss/material-kit-pro-react/views/landingPageSections/productStyle.jsx"

import ProductCards from "../Sections/ProductCards"

class ProductSection extends React.Component {
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
        <ProductCards />
      </div>
    )
  }
}

export default withStyles(productStyle)(ProductSection)
