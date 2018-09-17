import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";

import teamsStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/teamsStyle.jsx";

import me from "assets/img/leme.jpg"

function AboutSection({ ...props }) {
  const { classes, ...rest } = props;
  return (
    <div className="cd-section" {...rest}>
      <div className={classes.team}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={6} md={6}>
              <h2 className={classes.title}>Hi. I am Edward.</h2>
              <h3 className={classes.description}>
                I am a product designer living in Lancaster, PA. I am not an agency or a firm or even a freelancer. I am a normalish human who runs a <strong>company of one</strong> - Edward V Design - and loves coffee, my family and my work.
              </h3>
            </GridItem>
            <GridItem xs={12} sm={6} md={6}>
              <Card profile plain className={classes.card3}>
                <CardHeader image plain>
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <img src={me} alt="..." />
                  </a>
                  <div
                    className={classes.coloredShadow}
                    style={{
                      backgroundImage: `url(${me})`,
                      opacity: "1"
                    }}
                  />
                </CardHeader>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}

export default withStyles(teamsStyle)(AboutSection);
