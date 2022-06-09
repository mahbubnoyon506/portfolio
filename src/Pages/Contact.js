import React from 'react';
import { FaEnvelope, FaPhone } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { MdMyLocation } from "react-icons/md";

const Contact = () => {
    return (
        <div class="min-h-screen bg-base-200 py-12 px-5 ">
            <div class="md:grid gap-5 grid-cols-2">
                <div class="pl-5 ">
                    <h1 class="">Get in Touch</h1>
                    <h1 class="text-4xl font-bold">Contact</h1>
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
                <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-200">
                    <div class="card-body">
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Name" class="input input-bordered" />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="Email" class="input input-bordered" />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Subject</span>
                            </label>
                            <input type="text" placeholder="Subject" class="input input-bordered" />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Your Text</span>
                            </label>
                            <textarea type="text" placeholder="textarea" class="input input-bordered" />
                        </div>
                        <div class="form-control mt-2">
                            <button class="btn btn-primary">Submit</button>
                        </div>
                        <div>
                            <a href="https://form.jotform.com/221593578733062"></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;