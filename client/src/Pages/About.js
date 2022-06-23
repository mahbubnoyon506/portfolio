import React from 'react';
import bgImage from '../assets/images/bg/1.jpg'

const About = () => {
    return (
        <div class="hero bg-base-200" style={{ backgroundImage: `url(${bgImage})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div class="hero-content flex-col px-10">
                {/* <img src="https://api.lorem.space/image/movie?w=260&h=400" class="w-50 rounded-lg shadow-2xl" /> */}
                <div className='md:pr-20 '>
                    <h1 class="text-5xl font-bold">I'm Mahbub Noyon</h1>
                    <p class="py-6">I'm a professional Web Designer and Developer and an expert in Front End Development with React JS. I am capable to make a mobile-friendly and faster responsive website. You can also get unique ideas about UX/UI Design from me. I have completed 30+ projects for various local clients. Also, I have expertise in creating an eCommerce website. I love my profession and building websites with my best efforts. I am also passionate to make Web Applications using React JS and Node JS</p>
                    <button class="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default About;