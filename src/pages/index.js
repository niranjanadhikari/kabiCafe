import * as React from "react"
import {graphql} from "gatsby";
import PropTypes from 'prop-types';


import Layout from "../components/layout"
import SEO from "../components/seo"

import BackgroundSection from '../components/Globals/BackgroundSection';
import Info from '../components/Home/info';
import Menu from '../components/Home/Menu';
import Products from '../components/Home/Products';
import Contact from '../components/Home/Contact';



const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <BackgroundSection img={data.img.childImageSharp.fluid}
    title="Kabi Cafe"
    styleClass="default-background"
    />
    <Info />
    <Menu items={data.menu} />
    <Products />
    <Contact />
  </Layout>
)

export const query = graphql`
{
  img: file(relativePath: {eq: "default-background.jpg"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
   menu:allContentfulCoffeeItem{
    edges{
      node{
        id
        title
        description{
          description
        }
        price
        category
        image{
          fixed(width: 50, height: 50){
            ...GatsbyContentfulFixed_tracedSVG
          }
        }
      }	
    }
  } 

}

`

IndexPage.propTypes = {
  data: PropTypes.any,
}

export default IndexPage
