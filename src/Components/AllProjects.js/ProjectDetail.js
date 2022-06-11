import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProjectDetail = () => {
    const {id} = useParams()
    const [project, setProject] = useState([]);

    useEffect( () => {
        fetch(`projects.json/${id}`)
        .then(res => res.json())
        .then(data => {
            setProject(data)})
    }, [id])   
    return (
        <div className=' '>
            <div className="">
                <div class="card lg:card-side bg-base-100 shadow-xl m-10">
                    <figure><img src="https://api.lorem.space/image/album?w=400&h=400" alt="Album" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">New album is released! {project.id}</h2>
                        <p>Overview:Click the button to listen on Spotiwhy app.</p>
                        <p>Feature:Click the button to listen on Spotiwhy app.</p>
                        <p>Used Technologies:Click the button to listen on Spotiwhy app.</p>
                        <p>GitHub Client Code:Click the button to listen on Spotiwhy app.</p>
                        <p>GitHub Server Code:Click the button to listen on Spotiwhy app.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetail;