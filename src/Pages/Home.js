import React from 'react';
import Navbar from '../Shared/Navbar';
import About from './About';
import HomeComponent from './HomeComponent';

const Home = () => {
    return (
        <div>
            {/* <Navbar></Navbar> */}
           <HomeComponent></HomeComponent>
           <About></About>
        </div>
    );
};

export default Home;