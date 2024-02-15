import React, { useState } from 'react'


const Contact = () => {


    const [msg, setMsg] = useState({

        name: "",
        email: "",
        message: ""

    });

    const handleChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;

        setMsg({ ...msg, [name]: value });


    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const { name, email, message } = msg;
        try {
            const res = await fetch('/message', {
                method: 'POST',
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    name, email, message
                })

            })

            if (res.status === 400 || !res) {
                window.alert("Message not send !!! Try agan Later")
            }
            else {
                window.alert("Message Send");
                setMsg({
                    name: "",
                    email: "",
                    message: ""
                })

            }
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div>
            <section id='contact'>
                <div className='container my-5 py-5' >
                    <div className="row mb-5">
                        <div className="col-12">
                            <h3 className="fs-5">Contact us</h3>
                            <h1 className="display-6">Have<b>Some Question?</b></h1>

                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <img src="/assets/contact.jpg" alt="Contact" className='w-100' />
                    </div>
                    <div className="col-md-6 ">
                        <form onSubmit={handleSubmit} method='POST'>
                            <div class="mb-3">
                                <label for="name" class="form-label">Your Name</label>
                                <input type="text" class="form-control" id="name" placeholder="John Smith"
                                    name='name'
                                    value={msg.name}
                                    onChange={handleChange} />
                            </div>
                            <div class="mb-3">
                                <label for="email" class="form-label">Your email</label>
                                <input type="email" class="form-control" id="email" placeholder="John123@gmail.com"
                                    name='email'
                                    value={msg.email}
                                    onChange={handleChange} />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">Your message</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"
                                    name='message'
                                    value={msg.message}
                                    onChange={handleChange}></textarea>
                            </div>
                            <button type='submit' className='btn btn-outline-primary'> Send Message <i className='fa fa-paper-plane ms-2 w-100'></i></button>
                        </form>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default Contact
