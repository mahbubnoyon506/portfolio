import React from 'react';
import EducationalStat from '../Components/EducationalStat';


const Education = () => {
    return (
        <div class="hero min-h-screen bg-base-200">
            <div class="hero-content text-center">
                <div class="max-w-md">
                    <div class="card w-96 bg-base-100 shadow-xl">
                        <div class="card-body">
                            <EducationalStat></EducationalStat>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Education;