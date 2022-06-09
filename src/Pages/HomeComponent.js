import React from 'react';
import banner from '../assets/images/homebanner.jpg'
import { FaDownload } from "react-icons/fa";
import { Link } from 'react-router-dom';


const HomeComponent = () => {
    return (
        <div class="hero min-h-screen" style={{backgroundImage: `url(${banner})`}}>
        <div class="hero-overlay bg-opacity-60"></div>
        <div class="hero-content text-center text-neutral-content">
            <div class="max-w-md">
                <h1 class="mb-5 text-5xl font-bold">Mahbub Noyon</h1>
                <h3 class="mb-5 text-3xl ">MERN Stack Developer</h3>
                <Link className='btn btn-primary' to="/resume/Mahbub-Noyon-Resume.pdf" target="_blank" download>Download CV <FaDownload className='ml-2'></FaDownload></Link>   
            </div>
        </div>
    </div>
    );
};

export default HomeComponent;