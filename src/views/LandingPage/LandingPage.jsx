import React from "react"
// nodejs library that concatenates classes
import classNames from "classnames"
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"

// core components
import Footer from "components/Footer/Footer.jsx"
import GridContainer from "components/Grid/GridContainer.jsx"
import GridItem from "components/Grid/GridItem.jsx"
import Parallax from "components/Parallax/Parallax.jsx"
import Card from "components/Card/Card.jsx"
import CardHeader from "components/Card/CardHeader.jsx"

import landingPageStyle from "assets/jss/material-kit-pro-react/views/landingPageStyle.jsx"

import me from "assets/img/leme.jpg"

// Sections for this page
import SectionProduct from "./Sections/SectionProduct.jsx"

class LandingPage extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0)
    document.body.scrollTop = 0
  }
  render() {
    const { classes } = this.props
    return (
      <div>
        <Parallax image={require("assets/img/bg.jpg")} filter="dark">
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={6} md={6}>
                <h1 className={classes.title}>Hi, I'm Edward.</h1>
                <h4>
                  I am a product designer living in Lancaster, PA. I am not an agency or a firm or even a freelancer. I am a normalish human who runs a <strong>company of one</strong> - Edward V Design - and loves coffee, my family and my work.
                </h4>
                <h4>
                  Keep reading to get to know more about what I do and how that can help you.
                </h4>
                <br />
              </GridItem>
              <GridItem xs={12} sm={6} md={6}>
                <Card blog plain>
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
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <SectionProduct />
          </div>
        </div>
        <Footer
          content={
            <div>
              <div className={classes.left}>
                <List className={classes.list}>
                  <ListItem className={classes.inlineBlock}>
                    <a
                      href="https://www.edwardvdesign.com/"
                      className={classes.block}
                    >
                      Edward V Design
                    </a>
                  </ListItem>
                </List>
              </div>
              <div className={classes.right}>
                &copy; {1900 + new Date().getYear()}.
              </div>
            </div>
          }
        />
      </div>
    )
  }
}

export default withStyles(landingPageStyle)(LandingPage)
