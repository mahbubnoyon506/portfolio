import React from 'react';

const Projects = () => {
    return (
        <div class="hero min-h-screen bg-base-200">
            <div class="hero-content ">
                <div class="max-w-md">
                    <div class="card w-96 bg-base-200 shadow-xl">
                        <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure>
                        <div class="card-body">
                            <h2 class="card-title">
                                Shoes!
                                <div class="badge badge-secondary">NEW</div>
                            </h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div class="card-actions justify-end">
                                <button class="btn btn-sm btn-primary">Live View</button>
                                <button class="btn btn-sm btn-primary">Purchase</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;