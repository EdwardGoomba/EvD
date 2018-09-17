import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// core components
import Header from "components/Header/Header.jsx";
import Button from "components/CustomButtons/Button.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
// sections of this Page
import WhySection from "./Sections/WhySection";
import AboutSection from "./Sections/AboutSection";
import ProductSection from "./Sections/ProductSection"
import HelpSection from "./Sections/HelpSection"
import WorkedWith from "./Sections/WorkedWith"
import Contact from "./Sections/Contact"

import headersStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/headersStyle.jsx";

import bg from "assets/img/bg.jpg";

function HomePage({ ...props }) {
  const { classes, ...rest } = props;
  return (
    // we've set the className to cd-section so we can make smooth scroll to it
    <div className="cd-section" {...rest}>
      <div>
        <Header
          absolute
          brand="Edward V Design"
          color="transparent"
          links={
            <div className={classes.collapse}>
              <List className={classes.list + " " + classes.mlAuto}>
                <ListItem className={classes.listItem}>
                  <Button
                    color="transparent"
                    href="https://twitter.com/EdwardGoomba"
                    target="_blank"
                    className={`${classes.navLink} ${classes.navLinkJustIcon}`}
                  >
                    <i className={"fab fa-twitter"} />
                  </Button>
                </ListItem>
                <ListItem className={classes.listItem}>
                  <Button
                    color="transparent"
                    href="https://github.com/EdwardGoomba"
                    target="_blank"
                    className={`${classes.navLink} ${classes.navLinkJustIcon}`}
                  >
                    <i className={"fab fa-github"} />
                  </Button>
                </ListItem>
                <ListItem className={classes.listItem}>
                  <Button
                    color="transparent"
                    href="https://www.instagram.com/EdwardVDesign"
                    target="_blank"
                    className={`${classes.navLink} ${classes.navLinkJustIcon}`}
                  >
                    <i className={"fab fa-instagram"} />
                  </Button>
                </ListItem>
              </List>
            </div>
          }
        />
        <div
          className={classes.pageHeader}
          style={{ backgroundImage: `url("${bg}")` }}
        >
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={6} md={6}>
                <h1 className={classes.title}>Change the world, one idea at a time.</h1>
                <h4>
                  From launching new products to adding new features, all you need is the courage to get started.
                </h4>
                <br />
                {/* <Button
                  color="danger"
                  size="lg"
                  href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                  target="_blank"
                  rel=""
                >
                  <i className="fas fa-ticket-alt" />
                  Order Now
                </Button> */}
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
      <AboutSection />
      <WhySection />
      <ProductSection />
      <HelpSection />
      <WorkedWith />
      <Contact />
    </div>
  );
}

export default withStyles(headersStyle)(HomePage);
