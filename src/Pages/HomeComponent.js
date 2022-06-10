import React from 'react';
import banner from '../assets/images/homebanner.jpg'
import { FaDownload } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Typed from "typed.js";
import { useEffect, useRef } from "react";

const HomeComponent = () => {
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ["Frontend developer", "Backend Developer", "JavaScript Developer"],
            startDelay: 300,
            typeSpeed: 200,
            backSpeed: 100,
            backDelay: 100,
            smartBackspace: true,
            loop: true,
            showCursor: true,
            cursorChar: "!"
        });

        // Destropying
        return () => {
            typed.destroy();
        };
    }, []);


    return (
        <div class="hero min-h-screen" style={{ backgroundImage: `url(${banner})` }}>
            <div class="hero-overlay bg-opacity-80"></div>
            <div class="hero-content text-center text-neutral-content">
                <div class="max-w-md">
                    <div>
                        <h1 class=" text-xl "><small className='text-xl ml-[-280px]'>Hi,I AM</small></h1>
                        <h1 class="mb-5 text-5xl font-bold">Mahbub Noyon</h1>
                    </div>

                    <h3 class="mb-5 text-3xl">I am a <span ref={el}></span> </h3>

                    <Link className='btn btn-primary' to="/resume/Mahbub-Noyon-Resume.pdf" target="_blank" download>Download CV <FaDownload className='ml-2'></FaDownload></Link>
                </div>
            </div>
        </div>
    );
};

export default HomeComponent;