import React from 'react'
import PropTypes from 'prop-types';

import Img from "gatsby-image";


function Product({ product }) {
    return (
        <div className="col-10 col-sm-8 col-md-6 col-lg-4 my-3">
            <div className="card" style={{ minHeight : "100%" }}>
                <Img fluid={product.image.fluid}
                className="card-img-top" />
                <div className="card-body text-center">
                    <h6>{product.title}</h6>
                    <h6>{product.price}</h6>
                    <button className="btn btn-yellow mt-3 text-capitalize snipcart-add-item"
                      data-item-id={product.id}
                      data-item-price={product.price}
                      data-item-url="https://kabicafe.netlify.app/"
                      data-item-image={product.image.fluid.src}
                      data-item-name={product.title}
                    >
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Product



Product.propTypes = {
    product: PropTypes.any,
  }
