import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';


const Navbar = () => {

    return (

        <div>
            <div className="drawer drawer-end">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content bg-transparent ">
                    <div className="flex flex-col items-end mr-5">
                        <div style={{ zIndex: '10', marginTop: '20px', position: 'absolute' }}>
                            <label htmlFor="my-drawer" className="btn btn-square btn-primary">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                        </div>
                    </div>
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side ">
                    <label htmlFor="my-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-10 overflow-y-auto w-80 bg-base-200 text-base-content">
                        <li><NavLink to='/'>Home</NavLink></li>
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