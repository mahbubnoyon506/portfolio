import React from 'react';
import banner from '../assets/images/project-profile.png'
import { FaDownload } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Typed from "typed.js";
import { useEffect, useRef } from "react";


const HomeComponent = () => {

    const el = useRef(null);
    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ["Frontend developer", "Backend Developer"],
            startDelay: 300,
            typeSpeed: 60,
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
        <>
            <div className="hero min-h-screen" style={{ backgroundImage: `url(${banner})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                    <h1 className=" text-xl "><small className='text-xl'>Hi, I'M</small></h1>
                        <h1 className="mb-5 text-5xl text-primary font-bold " style={{ textShadow: '5px 5px 5px #000000' }}>Mahbub Noyon</h1>
                        <h3 className="mb-5 text-3xl">I'm a <span ref={el}></span> </h3>
                        <Link className='btn btn-primary btn-outline' to="/resume/Mahbub-Noyon-Resume.pdf" target="_blank" download>Download CV <FaDownload className='ml-2'></FaDownload></Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomeComponent;