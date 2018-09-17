import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import Info from "components/Typography/Info.jsx";
import Warning from "components/Typography/Warning.jsx";
import Rose from "components/Typography/Rose.jsx";

import styles from "assets/jss/material-kit-pro-react/views/componentsSections/sectionCards.jsx";

import define from "assets/img/do/define.jpg"
import build from "assets/img/do/build.jpg"
import deliver from "assets/img/do/deliver.jpg"

class ProductCards extends React.Component {

  render() {
    const { classes, ...rest } = this.props;
    return (
      <div {...rest} className="cd-section" id="cards">
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={4} md={4}>
              <Card blog>
                <CardHeader image>
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <img src={define} alt="..." />
                  </a>
                  <div
                    className={classes.coloredShadow}
                    style={{
                      backgroundImage: `url(${define})`,
                      opacity: "1"
                    }}
                  />
                </CardHeader>
                <CardBody>
                  <Warning>
                    <h5 className={classes.cardCategory}>1. DEFINE</h5>
                  </Warning>
                  <h4 className={classes.cardTitle}>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      Ideas. Users. Problems. User Stories.
                    </a>
                  </h4>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <Card blog>
                <CardHeader image>
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <img src={build} alt="..." />
                  </a>
                  <div
                    className={classes.coloredShadow}
                    style={{
                      backgroundImage: `url(${build})`,
                      opacity: "1"
                    }}
                  />
                </CardHeader>
                <CardBody>
                  <Rose>
                    <h5 className={classes.cardCategory}>2. BUILD</h5>
                  </Rose>
                  <h4 className={classes.cardTitle}>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      Wireframes. Mockups. Prototypes. Roadmaps.
                    </a>
                  </h4>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <Card blog>
                <CardHeader image>
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <img src={deliver} alt="..." />
                  </a>
                  <div
                    className={classes.coloredShadow}
                    style={{
                      backgroundImage: `url(${deliver})`,
                      opacity: "1"
                    }}
                  />
                </CardHeader>
                <CardBody>
                  <Info>
                    <h5 className={classes.cardCategory}>3. DELIVER</h5>
                  </Info>
                  <h4 className={classes.cardTitle}>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      Ship. Test. Track. Evaluate. Iterate.
                    </a>
                  </h4>
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(ProductCards);
