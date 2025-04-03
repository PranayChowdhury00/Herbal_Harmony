import React from 'react';
import { TbFlowerFilled } from 'react-icons/tb';
import { NavLink } from 'react-router-dom';

const links = (
  <>
    <li className='text-black font-bold hover:text-[#16C172]'>
      <NavLink to='/' className={({ isActive }) => isActive ? 'text-[#16C172]' : ''}>Home</NavLink>
    </li>
    <li className='text-black font-bold hover:text-[#16C172]'>
      <NavLink to='/about' className={({ isActive }) => isActive ? 'text-[#16C172]' : ''}>About</NavLink>
    </li>
    <li className='text-black font-bold hover:text-[#16C172]'>
      <NavLink to='/services' className={({ isActive }) => isActive ? 'text-[#16C172]' : ''}>Services</NavLink>
    </li>
    <li className='text-black font-bold hover:text-[#16C172]'>
      <NavLink to='/howItWork' className={({ isActive }) => isActive ? 'text-[#16C172]' : ''}>How It Works</NavLink>
    </li>
    <li className='text-black font-bold hover:text-[#16C172]'>
      <NavLink to='/contact' className={({ isActive }) => isActive ? 'text-[#16C172]' : ''}>Contact</NavLink>
    </li>
  </>
);

const Navbar = () => {
  return (
    <div className=" rounded-4xl h-24 navbar  z-20 bg-base-100 shadow-sm  max-w-7xl  mx-auto">
      <div className="navbar-start">
        <div className="dropdown z-50">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> 
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> 
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            {links}
          </ul>
        </div>
        <a href='/' className="btn btn-ghost  text-[#214F4B] flex items-center font-bold">
          <TbFlowerFilled className='md:text-4xl text-2xl'/> Herbal Harmony
        </a>
      </div>
      <div className="navbar-center ml-24 hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links}
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn md:text-xl  bg-[#214F4B] rounded-2xl text-white md:font-medium">Booking</a>
      </div>
    </div>
  );
};

export default Navbar;
