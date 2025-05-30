import React from 'react';
import { Link, NavLink } from 'react-router';


const Navbar = () => {
    const navLinks=<>
        <NavLink to='/'><li className='mr-3'>Home</li></NavLink>
        <NavLink to='/'><li className='mr-3'>About</li></NavLink>
        <NavLink to='/'><li className='mr-3'>Contact</li></NavLink>
        <NavLink to='/'><li className='mr-3'>Properties</li></NavLink>
    </>
    return (
        <div className="navbar shadow-md bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {navLinks}
                    </ul>
                </div>
                <Link to='/' className='text-5xl text-green-700 font-bold'>Green Acre</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn mr-3">Login</a>
                <a className="btn bg-green-600 text-white">SignUp</a>
            </div>
        </div>
    );
};

export default Navbar;
