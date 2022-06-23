import React, { useEffect, useState } from 'react';
import Loading from '../Loading';
import Project from './Project'

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [isloading, setIsloading] = useState(true)

    useEffect( () => {
        fetch('https://obscure-mesa-79291.herokuapp.com/projects')
        .then(res => res.json())
        .then(data => {
            setProjects(data)
            setIsloading(false)
        })
    }, [])
    if(isloading){
        return <Loading></Loading>
    }
    return (
        <div className=' grid gap-10 md:grid-cols-2 lg:grid-cols-3'>
            {
                projects.map( (project, index) => <Project key={project._id} project={project} index={index}></Project>)
            }
        </div>
    );
};

export default Projects;