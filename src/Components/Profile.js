import React from 'react';
import profile from '../assets/images/myphoto.jpg'

const Profile = () => {
    return (
        <div>
            <div class="avatar">
                <div class="w-24 rounded-full">
                    <img src={profile} />
                </div>
            </div>
        </div>
    );
};

export default Profile;