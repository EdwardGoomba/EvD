import React from "react"

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles"

// core components
import GridContainer from "components/Grid/GridContainer.jsx"
import GridItem from "components/Grid/GridItem.jsx"
import Card from "components/Card/Card.jsx"
import CardBody from "components/Card/CardBody.jsx"

import styles from "assets/jss/material-kit-pro-react/views/componentsSections/sectionCards.jsx"

class HelpCards extends React.Component {
  render() {
    const { classes, ...rest } = this.props
    return (
      <div {...rest} className="cd-section" id="cards">
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={6} md={6} lg={4}>
              <Card color="info">
                <CardBody>
                  <h4 className={classes.cardTitleWhite}>
                    Get an experienced guy who has worked on all aspects of the product phase numerous times. This helps streamline the process and draws on experience to eliminate issues as they start to pop up.
                  </h4>
                </CardBody>
              </Card>

              <Card color="success">
                <CardBody>
                  <h4 className={classes.cardTitleWhite}>
                    Have someone who can convey design ideas both to marketing teams, and to developers eliminating the frustrations that come from a mismatched campaign and delivered product.
                  </h4>
                </CardBody>
              </Card>

            </GridItem>

            <GridItem xs={12} sm={6} md={6} lg={4}>

              <Card color="warning">
                <CardBody>
                  <h4 className={classes.cardTitleWhite}>
                    Have a reliable plan and steps in place instead of guessing and trying to invent the wheel with your existing team.
                  </h4>
                </CardBody>
              </Card>

              <Card color="danger">
                <CardBody color>
                  <h4 className={classes.cardTitleWhite}>
                    Add a pretty rad designer to your team, who really loves what he does and the process behind it.
                  </h4>
                </CardBody>
              </Card>

            </GridItem>

            <GridItem xs={12} sm={6} md={6} lg={4}>

              <Card color="success">
                <CardBody>
                  <h4 className={classes.cardTitleWhite}>
                    Don't have to sacrifice ideas as they come to the table and instead can focus on executing them, ultimately building more trust with your clients and customers.
                  </h4>
                </CardBody>
              </Card>

              <Card color="info">
                <CardBody>
                  <h4 className={classes.cardTitleWhite}>
                    Might have to increase your coffee budget.. which leads to increasing office coffee consumption, and lets face it - you cant go wrong with more coffee. Its a win.
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

export default withStyles(styles)(HelpCards)
