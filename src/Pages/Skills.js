import React from 'react';

const Skills = () => {
    return (
        <div class="hero min-h-screen bg-base-200">
            <div class="hero-content ">
                <div class="max-w-md">
                    <h3 class=" ">Speciality</h3>
                    <h1 class="text-5xl font-bold">Skills</h1>
                    <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <div>
                        <div>
                            <div className='flex justify-between'>
                                <p>HTML/CSS</p>
                                <p>80%</p>
                            </div>
                            <progress class="progress progress-success  bg-base-100" value="80" max="100"></progress>
                        </div>
                        <div>
                            <div className='flex justify-between'>
                                <p>HTML/CSS</p>
                                <p>80%</p>
                            </div>
                            <progress class="progress progress-success  bg-base-100" value="80" max="100"></progress>
                        </div>
                        <div>
                            <div className='flex justify-between'>
                                <p>HTML/CSS</p>
                                <p>80%</p>
                            </div>
                            <progress class="progress progress-success  bg-base-100" value="80" max="100"></progress>
                        </div>
                        <div>
                            <div className='flex justify-between'>
                                <p>HTML/CSS</p>
                                <p>80%</p>
                            </div>
                            <progress class="progress progress-success  bg-base-100" value="80" max="100"></progress>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;