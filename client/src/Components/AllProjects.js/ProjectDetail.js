import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import projectDetail from '../../assets/images/bg/5.jpg'
import Navbar from '../../Shared/Navbar';
import Loading from '../Loading';

const ProjectDetail = () => {
    const { id } = useParams()
    const [project, setProject] = useState([]);
    const [isloading, setIsloading] = useState(true)

    useEffect(() => {
        fetch(`https://obscure-mesa-79291.herokuapp.com/projects/${id}`)
            .then(res => {
                return res.json()
            })
            .then(data => {
                setProject(data)
                setIsloading(false)
            })
    }, [id])

    if(isloading){
        return <Loading></Loading>
    }

    const { name, subImage, overview, featured, technology, links } = project

    return (

        <div className=''>
            {/* <div className='absolute mr-[-300px] z-10'>
                <Navbar></Navbar>
            </div> */}
            <div class="min-h-screen flex items-center px-20" style={{ backgroundImage: `url(${projectDetail})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
                <div class=" md:grid gap-10 grid-cols-2">
                    <div>
                        <Link className='btn btn-outline btn-sm btn-primary my-3' to='/'>Back To Home</Link>
                        <Carousel className=''>
                            <div className=''>
                                <img src={subImage?.first} alt='' />
                            </div>
                            <div className=''>
                                <img src={subImage?.second} alt='' />
                            </div>
                            <div className=''>
                                <img src={subImage?.third} alt='' />
                            </div>
                        </Carousel>
                    </div>
                    <div>
                        <h1 class="text-3xl font-bold">{name}</h1>
                        <p className='text-xl text-semibold py-3'>Overview: <span className='text-base'>{overview}</span></p>
                        <div className='flex'>
                            <h2 className='text-xl text-semibold'>Featured: </h2>
                            <ul >
                                {
                                    featured?.map((feature, index) => <li key={index}> &#10030; {feature}</li>)
                                }
                            </ul>
                        </div>
                        <div className='flex py-3'>
                            <h2 className='text-xl text-semibold'>Technologies: </h2>
                            <p>
                                {
                                    technology?.map((t, index) => <span key={index}>&#9672;{t}  </span>)
                                }
                            </p>
                        </div>
                        <a className='btn btn-sm btn-outline btn-primary mr-2' href={`${links?.liveLink}`}>Live site</a>
                        <a className='btn btn-sm btn-outline btn-primary mr-2' href={`${links?.clientCode}`}>Live site</a>
                        <a className='btn btn-sm btn-outline btn-primary' href={`${links?.serverCode}`}>Live site</a>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ProjectDetail;