import React from 'react';

import Skills from './Skills';
import HomeComponent from './HomeComponent';
import Projects from './Projects';
import Education from './Education';

import Blogs from './Blogs';
import Contact from './Contact';
import Footer from '../Shared/Footer';


const Home = () => {

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