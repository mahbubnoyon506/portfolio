import React from 'react';
import projectbg from '../assets/images/bg/4.jpg'
import AllProjects from '../Components/AllProjects.js/Projects'

const Projects = () => {
    return (
        <div className="px-20 pb-10 pt-20" style={{ backgroundImage: `url(${projectbg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
            <h1 className="pb-16 text-5xl font-bold">Recent Projects</h1>
            <AllProjects></AllProjects>
        </div>
    );
};

export default Projects;