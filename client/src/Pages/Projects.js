import React from 'react';
import { Link } from 'react-router-dom';
import projectbg from '../assets/images/bg/4.jpg'
import project1 from '../assets/images/projects/JohnDeere.png'
import project2 from '../assets/images/projects/Honda-Auto-Parts-Warehouse.png'
import project3 from '../assets/images/projects/DavidLouise.png'
import AllProjects from '../Components/AllProjects.js/Projects'

const Projects = () => {
    return (
        <div class="px-20 pb-10 pt-20" style={{ backgroundImage: `url(${projectbg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
            <h1 class="pb-16 text-5xl font-bold">Recent Projects</h1>
            <AllProjects></AllProjects>
            {/* <div class="">
                <div class="grid gap-5 md:grid-cols-3 ">
                    <div class="card w-96 shadow-blue-500/50 shadow-xl image-full">
                        <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure>
                        <div class="card-body">
                            <h2 class="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div class="card-actions justify-end">
                                <Link to='/projectdetail' class="btn btn-primary">Details</Link>
                            </div>
                        </div>
                    </div>
                    <div class="card w-96 shadow-blue-500/50 shadow-xl image-full">
                        <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure>
                        <div class="card-body">
                            <h2 class="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div class="card-actions justify-end">
                                <Link to='/projectdetail' class="btn btn-primary">Details</Link>
                            </div>
                        </div>
                    </div>
                    <div class="card w-96 shadow-blue-500/50 shadow-xl image-full">
                        <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure>
                        <div class="card-body">
                            <h2 class="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div class="card-actions justify-end">
                                <Link to='/projectdetail' class="btn btn-primary">Details</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            {/* <div class="grid gap-10 lg:grid-cols-3 md:grid-cols-2">
                <div class="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src={project1} class="max-w-sm rounded-lg shadow-2xl" alt='' /></figure>
                    <div class="card-body">
                        <div className=''>
                            <h1 class="text-2xl font-bold pb-3">Manufacturer Company</h1>
                            <div>
                                <ul>
                                    <li>OverView: This site is manufacturer-based.</li>
                                    <li>Featured:Firebase authentication, Dashboard for user and admin</li>
                                </ul>
                            </div>
                            <div>
                                <h2 className='pb-3 border-b-2 border-indigo-500 '>Used Technology: </h2>
                                <div className='flex justify-evenly  pt-4'>
                                    <button className=' px-5 py-2 bg-info mr-2'>HTML/CSS</button>
                                    <button className=' px-5 py-2 bg-info mr-2'>React</button>
                                    <button className=' px-5 py-2 bg-info mr-2'>JWT</button>
                                </div>
                                <div className='flex justify-evenly border-b-2 border-indigo-500 py-4'>
                                    <button className=' px-5 py-2 bg-info mr-2'>Express</button>
                                    <button className=' px-5 py-2 bg-info mr-2'>MongoDB</button>
                                    <button className=' px-5 py-2 bg-info mr-2'>Stripe</button>
                                </div>
                            </div>
                            <div className='py-5'>
                                <button className='btn btn-outline btn-primary btn-sm mr-2'>Live View</button>
                                <button className='btn btn-outline btn-primary btn-sm'>Explore More</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src={project2} class="max-w-sm rounded-lg shadow-2xl" alt='' /></figure>
                    <div class="card-body">
                        <div className=''>
                            <h1 class="text-2xl font-bold">Warehouse Management</h1>
                            <div>
                                <ul>
                                    <li>OverView: This site is about warehouse management.</li>
                                    <li>Featured: Firebase authentication, Dashboard for user and admin</li>
                                </ul>
                            </div>
                            <div>
                                <h2 className='pb-3 border-b-2 border-indigo-500 '>Used Technology: </h2>
                                <div className='flex justify-evenly  pt-4'>
                                    <button className=' px-5 py-2 bg-info mr-2'>HTML/CSS</button>
                                    <button className=' px-5 py-2 bg-info mr-2'>React</button>
                                    <button className=' px-5 py-2 bg-info mr-2'>Express</button>
                                </div>
                                <div className='flex justify-evenly border-b-2 border-indigo-500 py-4'>
                                    <button className=' px-5 py-2 bg-info mr-2'>MongoDB</button>
                                    <button className=' px-5 py-2 bg-info mr-2'>Stripe</button>
                                    <button className=' px-5 py-2 bg-info mr-2'>JWT</button>
                                </div>
                            </div>
                            <div className='py-5'>
                                <button className='btn btn-outline btn-primary btn-sm mr-2'>Live View</button>
                                <button className='btn btn-outline btn-primary btn-sm'>Explore More</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src={project3} class="max-w-sm rounded-lg shadow-2xl" alt='' /></figure>
                    <div class="card-body">
                        <div className=''>
                            <h1 class="text-2xl font-bold">Fitness Trainer</h1>
                            <div>
                                <ul>
                                    <li>OverView: This site is about warehouse management.</li>
                                    <li>Featured: Firebase authentication, Dashboard for user and admin</li>
                                </ul>
                            </div>
                            <div>
                                <h2 className='pb-3 border-b-2 border-indigo-500 '>Used Technology: </h2>
                                <div className='flex justify-evenly  pt-4'>
                                    <button className=' px-5 py-2 bg-info mr-2'>HTML/CSS</button>
                                    <button className=' px-5 py-2 bg-info mr-2'>React</button>
                                    <button className=' px-5 py-2 bg-info mr-2'>Express</button>
                                </div>
                                <div className='flex justify-evenly border-b-2 border-indigo-500 py-4'>
                                    <button className=' px-5 py-2 bg-info mr-2'>MongoDB</button>
                                    <button className=' px-5 py-2 bg-info mr-2'>Stripe</button>
                                    <button className=' px-5 py-2 bg-info mr-2'>JWT</button>
                                </div>
                            </div>
                            <div className='py-5'>
                                <button className='btn btn-outline btn-primary btn-sm mr-2'>Live View</button>
                                <button className='btn btn-outline btn-primary btn-sm'>Explore More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default Projects;