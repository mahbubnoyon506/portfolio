import React, { useEffect, useState } from 'react';
import Project from './Project'

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect( () => {
        fetch('projects.json')
        .then(res => res.json())
        .then(data => {
            setProjects(data)})
    }, [])
    return (
        <div className=' grid gap-10 md:grid-cols-2 lg:grid-cols-3'>
            {
                projects.map( (project, index) => <Project key={project.id} project={project} index={index}></Project>)
            }
        </div>
    );
};

export default Projects;