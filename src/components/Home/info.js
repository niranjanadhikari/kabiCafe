import React from 'react';
import {Link} from 'gatsby';
import Title from '../Globals/Title';

const info = () => {
    return (
        <section className="py-5">
            <div className="container">
                <Title title="Our Story" />
                <div className="row">
                    <div className="col-10 col-sm-8 mx-auto text-center">
                        <p className="lead text-muted mb-5">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio rerum nam, ullam commodi beatae tempora vitae eveniet recusandae cupiditate iusto maiores doloremque corporis, eum quas nostrum laudantium perferendis quis accusamus!

                        </p>
                        <Link to="/about">
                            <button className="btn text-uppercase btn-yellow">
                                About Pgae
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default info
