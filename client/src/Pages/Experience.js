import React from 'react';
import bgImage from '../assets/images/bg/9.jpg'
import stepbg from '../assets/images/bg/11.jpg'


const Experience = () => {
    return (
        <div className="" style={{ backgroundImage: `url(${bgImage})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundAttachment: 'fixed', backgroundPosition: 'center'}}>
            <div className="">
                <div className="py-24">
                    <div className="card w-[50vw] bg-base-100 shadow-xl mx-auto text-center image-full">
                        <figure><img src={stepbg} alt="" /></figure>
                        <div className="card-body">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;