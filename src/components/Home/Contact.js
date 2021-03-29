import React from 'react';
import Title from '../Globals/Title'

export default function Contact() {
    return (
        <section className="contact py-5">
            <Title title="contact us" />
                <div className="row">
                    <div className="col-10 col-sm-8 col-md-6 mx-auto">
                        <form action="https://formspree.io/f/xeqvjdvw" method="POST">
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="text" className="form-control"  name="name" id="name" placeholder="Niranjan Adhikari"/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" className="form-control"  name="email" id="email" placeholder="niranjanadhikari@gmail.com"/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="Description">Description</label>
                                <textarea name="description" id="description" className="form-control" rows="5" placeholder="your description"></textarea>
                            </div>

                            <button type="submit" className="btn btn-yellow btn-block text-capitalize mt-5">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
        </section>
    )
}
