import React from "react"

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles"

// core components
import GridContainer from "components/Grid/GridContainer.jsx"
import GridItem from "components/Grid/GridItem.jsx"
import Card from "components/Card/Card.jsx"
import CardBody from "components/Card/CardBody.jsx"

import styles from "assets/jss/material-kit-pro-react/views/componentsSections/sectionCards.jsx"

class SectionCards extends React.Component {

  render() {
    const { classes, ...rest } = this.props
    return (
      <div {...rest} className="cd-section" id="cards">
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={6} md={6} lg={4}>
              <Card color="info">
                <CardBody color>
                  <h5 className={classes.cardCategorySocialWhite}>
                  </h5>
                  <h4 className={classes.cardTitleWhite}>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      Get an experienced guy who has worked on all aspects of the product phase numerous times. This helps streamline the process and draws on experience to eliminate issues as they start to pop up.
                    </a>
                  </h4>
                </CardBody>
              </Card>

              <Card>
                <CardBody>
                  <h5 className={classes.cardCategory}>
                  </h5>
                  <h4 className={classes.cardTitle}>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      Have someone who can convey design ideas both to marketing teams, and to developers eliminating the frustrations that come from a mismatched campaign and delivered product.
                    </a>
                  </h4>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={6} md={6} lg={4}>
              <Card>
                <CardBody>
                  <h5 className={classes.cardCategory}>
                  </h5>
                  <h4 className={classes.cardTitle}>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      Have a reliable plan and steps in place instead of guessing and trying to invent the wheel with your existing team.
                    </a>
                  </h4>
                </CardBody>
              </Card>
              <Card color="success">
                <CardBody color>
                  <h5 className={classes.cardCategorySocialWhite}>
                  </h5>
                  <h4 className={classes.cardTitleWhite}>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      Add a pretty rad designer to your team, who really loves what he does and the process behind it.
                    </a>
                  </h4>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={6} md={6} lg={4}>
              <Card color="warning">
                <CardBody color>
                  <h5 className={classes.cardCategorySocialWhite}>
                  </h5>
                  <h4 className={classes.cardTitleWhite}>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      Don't have to sacrifice ideas as they come to the table and instead can focus on executing them, ultimately building more trust with your clients and customers.
                    </a>
                  </h4>
                </CardBody>
              </Card>
              <Card>
                <CardBody>
                  <h5 className={classes.cardCategory}>
                  </h5>
                  <h4 className={classes.cardTitle}>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      Might have to increase your coffee budget.. which leads to increasing office coffee consumption, and lets face it - you cant go wrong with more coffee. Its a win.
                    </a>
                  </h4>
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(SectionCards)
