import React, { Component } from "react"

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles"

// core components
import GridContainer from "components/Grid/GridContainer.jsx"
import GridItem from "components/Grid/GridItem.jsx"

import typographyStyle from "assets/jss/material-kit-pro-react/views/componentsSections/typographyStyle.jsx"

import mynt from 'assets/img/brands/mynt.jpg'
import renit from 'assets/img/brands/renit.jpg'
import authentise from 'assets/img/brands/authentise.png'
import warhammer from 'assets/img/brands/warhammer.jpg'

class BrandsCards extends Component {
  render() {
    const { classes } = this.props
    return (
      <div className={classes.container}>
        <GridContainer>
          <GridItem xs={12} sm={4} md={3} >
            <img
              src={mynt}
              alt="..."
              className={
                classes.imgRaised +
                " " +
                classes.imgRounded +
                " " +
                classes.imgFluid
              }
            />
            <h3 className={classes.title}>Mynt</h3>
          </GridItem>

          <GridItem xs={12} sm={4} md={3} >
            <img
              src={renit}
              alt="..."
              className={
                classes.imgRaised +
                " " +
                classes.imgRounded +
                " " +
                classes.imgFluid
              }
            />
            <h3 className={classes.title}>Renit</h3>
          </GridItem>

          <GridItem xs={12} sm={4} md={3} >
            <img
              src={authentise}
              alt="..."
              className={
                classes.imgRaised +
                " " +
                classes.imgRounded +
                " " +
                classes.imgFluid
              }
            />
            <h3 className={classes.title}>Authentise</h3>
          </GridItem>

          <GridItem xs={12} sm={4} md={3} >
            <img
              src={warhammer}
              alt="..."
              className={
                classes.imgRaised +
                " " +
                classes.imgRounded +
                " " +
                classes.imgFluid
              }
            />
            <h3 className={classes.title}>Warhammer</h3>
          </GridItem>
        </GridContainer>
      </div>

    )
  }
}

export default withStyles(typographyStyle)(BrandsCards)
