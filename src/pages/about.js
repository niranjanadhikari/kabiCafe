import * as React from "react"
import {graphql} from "gatsby";


import Layout from "../components/layout"
import SEO from "../components/seo"

import BackgroundSection from '../components/Globals/BackgroundSection';
import Info from '../components/Home/info';
import PropTypes from 'prop-types';


const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <BackgroundSection img={data.img.childImageSharp.fluid}
    title="About Us"
    styleClass="about-background"
    />
    <Info />
  </Layout>
)

export const query = graphql`
{
  img: file(relativePath: {eq: "about-background.jpeg"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}

`

IndexPage.propTypes = {
  data: PropTypes.any,
}

export default IndexPage
