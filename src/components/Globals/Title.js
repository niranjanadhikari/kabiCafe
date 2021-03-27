import React from 'react';
import PropTypes from 'prop-types';

const Title = ({ title }) => {
    return (
        <div>
            <div className="row">
                <div className="col text-center mb-3">
                <h1 className="display-4 text-capitalize font-weight-bold">{title}</h1>
                </div>
            </div>
        </div>
    )
}

export default Title

Title.propTypes = {
    title: PropTypes.string
}
