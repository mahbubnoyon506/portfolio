import React, { useState } from 'react';
import Navbar from '../Shared/Navbar';
import About from './About';
import Skills from './Skills';
import HomeComponent from './HomeComponent';
import Projects from './Projects';
import Education from './Education';
import Experience from './Experience';
import Blogs from './Blogs';
import Contact from './Contact';
import Footer from '../Shared/Footer';
import { useEffect } from 'react';
import Loading from '../Components/Loading';

const Home = () => {
    const [isloading, setIsloading] = useState(true);

    useEffect( () => {
        const loadData = async () => {
           await new Promise((r) => setTimeout(r, 2000));
           setIsloading((loading) => !loading);
        };
        loadData();
    }, [])
    if(isloading){
        // return <Loading></Loading>
    }

    return (
        <div>

            {/* <Navbar></Navbar> */}
           <HomeComponent></HomeComponent>
           <Skills></Skills>
           <Projects></Projects>
           <Education></Education>
           {/* <Experience></Experience> */}
           <Blogs></Blogs>
           <Contact></Contact>
           <Footer></Footer>
        </div>
    );
};

export default Home;