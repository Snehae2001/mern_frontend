import React from 'react'

const Services = () => {
    return (
        <div>
            <section id='service'>
                <div className='container my-5 py-5'>
                    <div className="row">
                        <div className="col-12">
                            <h3 className="fs-5">Our Sevices</h3>
                            <h1 className="display-6">Our<b>Awesome</b>Services</h1>
                            {/* <hr className='w-25 mx-auto' /> */}
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-4">
                            <div class="card p-3 " >

                                <div class="card-body text-center">
                                    <i className='fa fa-cogs fa-4x mb-4 text-primary'>  </i>
                                    <h5 class="card-title mb-3 fs-4 fw-bold">Highly Customizable</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div class="card p-3 " >

                                <div class="card-body text-center">
                                    <i className='fa fa-mobile fa-4x mb-4 text-primary'>  </i>
                                    <h5 class="card-title mb-3 fs-4 fw-bold">Fully responsive layout</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div class="card p-3 " >

                                <div class="card-body text-center">
                                    <i className='fa fa-users fa-4x mb-4 text-primary'>  </i>
                                    <h5 class="card-title mb-3 fs-4 fw-bold">users Customizable</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mt-5">
                            <div class="card p-3 " >

                                <div class="card-body text-center">
                                    <i className='fa fa-laptop fa-4x mb-4 text-primary'>  </i>
                                    <h5 class="card-title mb-3 fs-4 fw-bold">Creative design</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4  mt-5">
                            <div class="card p-3 " >

                                <div class="card-body text-center">
                                    <i className='fa fa-file-code-o fa-4x mb-4 text-primary'>  </i>
                                    <h5 class="card-title mb-3 fs-4 fw-bold">Unique and clean</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mt-5">
                            <div class="card p-3 " >

                                <div class="card-body text-center">
                                    <i className='fa fa-star-half-o fa-4x mb-4 text-primary'>  </i>
                                    <h5 class="card-title mb-3 fs-4 fw-bold">star and half</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>


                    </div>

                </div>
            </section>
        </div>
    )
}

export default Services
