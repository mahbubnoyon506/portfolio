import React from 'react';
import projectbg from '../../assets/images/bg/5.jpg'
import { Link } from 'react-router-dom';

const Project = ({ project }) => {
    const { name, image, featured, _id} = project;
    return (
        <div class="card w-96 bg-base-100 shadow-xl shadow-blue-500/50 image-full">
            <figure><img src={projectbg} alt="Shoes" /></figure>
            <div class="card-body">
                <img src={image} alt="" />
                <h2 class="card-title">{name}</h2>
                <ul>
                    <li>&#9885; {featured[0]}</li>
                    <li>&#9885; {featured[1]}</li>
                    <li>&#9885; {featured[2]}</li>
                </ul>
                <div>
                    <Link to={`/projectdetail/${_id}`} className='btn btn-outline btn-primary btn-sm'>Explore More</Link>
                </div>
            </div>
        </div>
    );
};

export default Project;