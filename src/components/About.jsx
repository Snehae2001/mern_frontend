import React from 'react'

const About = () => {
    return (
        <div>
            <section id="about">
                <div className='container my-5 py-5'>
                    <div className='row'>
                        <div className='col-md-6 '>
                            <img src="/assets/about1.jpg" alt="About" className='w-75 mt-0'></img>
                        </div>
                        <div className="col-md-6">
                            <h3 className="fs-5">About Us</h3>
                            <h1 className='display-6'>Who<b>We</b>Are</h1>
                            <hr />
                            <p className='lead'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Qui laborum pariatur eveniet quasi autem incidunt rerum, voluptas vel
                                officia omnis necessitatibus vitae ipsum debitis corrupti dolore
                                laudantium nobis aspernatur at est animi similique suscipit.
                                Quibusdam, impedit animi iste quisquam libero ab cum. Maxime,
                                rerum officiis quos sit nam molestias beatae Lorem ipsum,
                                dolor sit amet consectetur adipisicing elit. Cumque
                                inventore a rem accusantium officia corrupti, dolorum
                                totam obcaecati dignissimos nemo impedit consequuntur
                                at quibusdam amet.</p>
                            <button className='btn btn-primary rounded-pill px-4 py-2 '>Get Started</button>
                            <button className='btn btn-outline-primary rounded-pill px-4 py-2 ms-2'>Contact us</button>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About
