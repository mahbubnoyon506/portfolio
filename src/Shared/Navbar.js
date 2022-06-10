import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';


const Navbar = () => {

    return (

        <div>
            <div class="drawer drawer-end">
                <input id="my-drawer" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content bg-transparent ">
                    <div class="flex flex-col items-end mr-5">
                        <div style={{ zIndex: '10', marginTop: '20px', position: 'absolute' }}>
                            <label for="my-drawer" class="btn btn-square btn-primary">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                        </div>
                    </div>
                    <Outlet></Outlet>
                </div>
                <div class="drawer-side ">
                    <label for="my-drawer" class="drawer-overlay"></label>
                    <ul class="menu p-10 overflow-y-auto w-80 bg-base-200 text-base-content">
                        {/* <button class="btn btn-circle btn-outline">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                        </button> */}
                        {/* <!-- Sidebar content here --> */}
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/about'>About</NavLink></li>
                        <li><NavLink to='/skills'>Skills</NavLink></li>
                        <li><NavLink to='/projects'>Projects</NavLink></li>
                        <li><NavLink to='/education'>Education</NavLink></li>
                        <li><NavLink to='/experience'>Experience</NavLink></li>
                        <li><NavLink to='/blogs'>Blogs</NavLink></li>
                        <li><NavLink to='/contact'>Contact</NavLink></li>
                        <li><NavLink to='/contact'>Contact</NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;