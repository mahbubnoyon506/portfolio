import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <div class="drawer drawer-mobile">
                <input id="my-drawer" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content">
                    <div class="flex flex-col items-end mr-5">
                        <label for="my-drawer" class="btn btn-square btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>
                    <Outlet></Outlet>
                </div>
                <div class="drawer-side ">
                    <label for="my-drawer" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/about'>About</NavLink></li>
                        <li><NavLink to='/skills'>Skills</NavLink></li>
                        <li><NavLink to='/projects'>Projects</NavLink></li>
                        <li><NavLink to='/education'>Education</NavLink></li>
                        <li><NavLink to='/experience'>Experience</NavLink></li>
                        <li><NavLink to='/blogs'>Blogs</NavLink></li>
                        <li><NavLink to='/contact'>Contact</NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;