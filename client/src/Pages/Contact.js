import React from 'react';
import { FaEnvelope, FaPhone } from "react-icons/fa";
import { MdMyLocation } from "react-icons/md";
import contactbg from '../assets/images/bg/1.jpg'

const Contact = () => {
    return (
        <div className="py-20 px-20" style={{ backgroundImage: `url(${contactbg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="">
                <div className="md:grid grid-cols-2">
                    <div className="">
                        <h1 className="">Get in Touch</h1>
                        <h1 className="text-5xl font-bold">Contact</h1>
                        <p className='text-xl pt-10'>Do you have any query or discussion? Contact with Us.</p>
                        <div>
                            <div className='flex items-center my-5'>
                                <div className='bg-base-200 p-4 mr-5'><FaEnvelope className='text-4xl text-primary'></FaEnvelope></div>
                                <div>
                                    <p>mahbubnoyon506@gmail.com</p>
                                </div>
                            </div>
                            <div className='flex items-center my-5'>
                                <div className='bg-base-200 p-4 mr-5'><MdMyLocation className='text-4xl text-primary'></MdMyLocation></div>
                                <div>
                                    <p>Kawlar, Airport Dhaka-1230</p>
                                </div>
                            </div>
                            <div className='flex items-center my-5'>
                                <div className='bg-base-200 p-4 mr-5'><FaPhone className='text-4xl text-primary'></FaPhone></div>
                                <div>
                                    <p>+8801687874697</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card flex-shrink-0 w-full shadow-2xl bg-glass">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="Email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Subject</span>
                                </label>
                                <input type="text" placeholder="Subject" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Text</span>
                                </label>
                                <textarea type="text" placeholder="textarea" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-2">
                                <button className="btn btn-primary">Submit</button>
                            </div>
                            <div>
                                <a href="https://form.jotform.com/221593578733062"></a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Contact;