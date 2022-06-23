import React from 'react';
import blogbg from '../assets/images/bg/5.jpg'
import stepbg from '../assets/images/bg/11.jpg'

const Blogs = () => {
    return (
        <div class="pt-10 pb-20" style={{ backgroundImage: `url(${blogbg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <h1 class="pb-10 text-5xl font-bold pl-20">Recent Blogs</h1>
            <div className='hero'>
                <div class="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                    <div class="card w-96 bg-base-100 shadow-xl shadow-blue-500/50 image-full">
                        <figure><img src={stepbg} alt="Shoes" /></figure>
                        <div class="card-body" >
                            <h2 class="card-title">Posts</h2>
                            <p>Coming Soon</p>
                        </div>
                    </div>

                    <div class="card w-96 bg-base-100 shadow-xl shadow-blue-500/50 image-full">
                        <figure><img src={stepbg} alt="Shoes" /></figure>
                        <div class="card-body">
                            <h2 class="card-title">Posts</h2>
                            <p>Coming Soon</p>
                        </div>
                    </div>
                    <div class="card w-96 bg-base-100 shadow-xl shadow-blue-500/50 image-full">
                        <figure><img src={stepbg} alt="Shoes" /></figure>
                        <div class="card-body">
                            <h2 class="card-title">Posts</h2>
                            <p>Coming Soon</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Blogs;

<div >
</div>