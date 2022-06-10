import React from 'react';
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

const Home = () => {
    return (
        <div>
            {/* <Navbar></Navbar> */}
           <HomeComponent></HomeComponent>
           {/* <About></About> */}
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