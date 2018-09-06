import React from "react"
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles"

// core components
import GridContainer from "components/Grid/GridContainer.jsx"
import GridItem from "components/Grid/GridItem.jsx"

import featuresStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/featuresStyle.jsx"

function WhySection({ ...props }) {
  const { classes, ...rest } = props
  return (
    <div className="cd-section" {...rest}>
      <div className={classes.container}>
        <div className={classes.features1}>
          <GridContainer>
            <GridItem
              xs={12}
              sm={10}
              md={10}
              className={`${classes.mlAuto} ${classes.mrAuto}`}
            >
              <h2 className={classes.title}>Why work with me?</h2>
              <h3 className={classes.description}>
                I believe in changing the world, <strong>one idea at a time</strong>. I believe that every dream, big or small, has the potential of becoming a reality. I do this with a simple, repeatable process that takes an product from idea to execution. At the end of your journey you will come out with a beautifully designed, easy to use product that is completely focused on your customers true needs and ultimately brings irreplaceable value into their lives.
              </h3>
              <h3 className={classes.description}>
                Need another reason? <strong>I only work with SaaS startups</strong>. Why? These are the people and teams and teams like you, who time and time again continue to push the boundaries of what is possible. Their goals align with my mission and I believe I can bring the most value to this space.
              </h3>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  )
}

export default withStyles(featuresStyle)(WhySection)
