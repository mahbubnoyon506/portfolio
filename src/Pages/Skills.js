
import React from 'react';
import skillbg from '../assets/images/bg/2.jpg'
import stepbg from '../assets/images/bg/11.jpg'
import html from '../assets/images/skill/1.png'
import css from '../assets/images/skill/13.svg'
import javascript from '../assets/images/skill/3.png'
import react from '../assets/images/skill/2.png'
import node from '../assets/images/skill/8.svg'
import mongodb from '../assets/images/skill/5.svg'
import github from '../assets/images/skill/6.png'
import firebase from '../assets/images/skill/7.png'
import rq from '../assets/images/skill/9.svg'
import rr from '../assets/images/skill/10.svg'
import stripe from '../assets/images/skill/11.svg'
import tw from '../assets/images/skill/12.svg'


const Skills = () => {

    return (
        <div class="py-20 px-20" style={{ backgroundImage: `url(${skillbg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
            <div className="md:grid gap-5 grid-cols-2">
                <div className='my-auto md:pr-5'>
                    <h1 class="text-5xl font-bold">About</h1>
                    <p class="py-6">I'm a professional Web Designer and Developer and an expert in Front End Development with React JS. I am capable to make a mobile-friendly and faster responsive website. You can also get unique ideas about UX/UI Design from me. I have completed 30+ projects for various local clients. Also, I have expertise in creating an eCommerce website. I love my profession and building websites with my best efforts. I am also passionate to make Web Applications using React JS and Node JS</p>
                </div>
                <div>
                    <h1 class="pb-5 text-xl font-bold">My Core Strength</h1>
                    <div className='grid gap-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2'>
                        <div class="card bg-base-100 shadow-xl shadow-blue-500/50 image-full">
                            <figure><img src={stepbg} alt="Shoes" /></figure>
                            <div class="card-body">
                                <div class="tooltip tooltip-primary" data-tip="HTML">
                                    <img src={html} alt="" />
                                </div>
                            </div>
                        </div>
                        <div class="card bg-base-100 shadow-xl shadow-blue-500/50 image-full">
                            <figure><img src={stepbg} alt="Shoes" /></figure>
                            <div class="card-body">
                                <div class="tooltip tooltip-primary" data-tip="CSS">
                                    <img src={css} alt="" />
                                </div>
                            </div>
                        </div>
                        <div class="card bg-base-100 shadow-xl shadow-blue-500/50 image-full">
                            <figure><img src={stepbg} alt="Shoes" /></figure>
                            <div class="card-body">
                                <div class="tooltip tooltip-primary" data-tip="JavaScript">
                                    <img src={javascript} alt="" />
                                </div>
                            </div>
                        </div>
                        <div class="card bg-base-100 shadow-xl shadow-blue-500/50 image-full">
                            <figure><img src={stepbg} alt="Shoes" /></figure>
                            <div class="card-body">
                                <div class="tooltip tooltip-primary" data-tip="React">
                                    <img src={react} alt="" />
                                </div>
                            </div>
                        </div>
                        <div class="card bg-base-100 shadow-xl shadow-blue-500/50 image-full">
                            <figure><img src={stepbg} alt="Shoes" /></figure>
                            <div class="card-body">
                                <div class="tooltip tooltip-primary" data-tip="NodeJs">
                                    <img src={node} alt="" />
                                </div>
                            </div>
                        </div>
                        <div class="card bg-base-100 shadow-xl shadow-blue-500/50 image-full">
                            <figure><img src={stepbg} alt="Shoes" /></figure>
                            <div class="card-body">
                                <div class="tooltip tooltip-primary" data-tip="MongoDB">
                                    <img src={mongodb} alt="" />
                                </div>
                            </div>
                        </div>
                        <div class="card bg-base-100 shadow-xl shadow-blue-500/50 image-full">
                            <figure><img src={stepbg} alt="Shoes" /></figure>
                            <div class="card-body">
                                <div class="tooltip tooltip-primary" data-tip="Firebase">
                                    <img src={firebase} alt="" />
                                </div>
                            </div>
                        </div>
                        <div class="card bg-base-100 shadow-xl shadow-blue-500/50 image-full">
                            <figure><img src={stepbg} alt="Shoes" /></figure>
                            <div class="card-body">
                                <div class="tooltip tooltip-primary" data-tip="ReactQuery">
                                    <img src={rq} alt="" />
                                </div>
                            </div>
                        </div>
                        <div class="card bg-base-100 shadow-xl shadow-blue-500/50 image-full">
                            <figure><img src={stepbg} alt="Shoes" /></figure>
                            <div class="card-body">
                                <div class="tooltip tooltip-primary" data-tip="ReactRouter">
                                    <img src={rr} alt="" />
                                </div>
                            </div>
                        </div>
                        <div class="card bg-base-100 shadow-xl shadow-blue-500/50 image-full">
                            <figure><img src={stepbg} alt="Shoes" /></figure>
                            <div class="card-body">
                                <div class="tooltip tooltip-primary" data-tip="Stripe">
                                    <img src={stripe} alt="" />
                                </div>
                            </div>
                        </div>
                        <div class="card bg-base-100 shadow-xl shadow-blue-500/50 image-full">

                            <figure><img src={stepbg} alt="Shoes" /></figure>
                            <div class="card-body">
                                <div class="tooltip tooltip-primary" data-tip="Tailwind">
                                    <img src={tw} alt="" />
                                </div>
                            </div>
                        </div>
                        <div class="card bg-base-100 shadow-xl shadow-blue-500/50 image-full">
                            <figure><img src={stepbg} alt="Shoes" /></figure>
                            <div class="card-body">
                                <div class="tooltip tooltip-primary" data-tip="GitHub">
                                    <img src={github} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Skills;