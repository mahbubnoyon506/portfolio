import React from 'react';
import ExpStepper from '../Components/ExpStepper';
import bgImage from '../assets/images/bg/9.jpg'
import stepbg from '../assets/images/bg/11.jpg'
{/* <figure><img src={stepbg} alt="Shoes" /></figure> */ }


const Experience = () => {
    return (
        <div class="" style={{ backgroundImage: `url(${bgImage})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundAttachment: 'fixed', backgroundPosition: 'center'}}>
            <div class="">
                <div class="py-24">
                    <div class="card w-[50vw] bg-base-100 shadow-xl mx-auto text-center image-full">
                        <figure><img src={stepbg} alt="" /></figure>
                        <div class="card-body">
                        <ExpStepper></ExpStepper>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;