import React from 'react';
// import Navbar from '../pages/Share/Navbar';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div>
            {/* <Navbar></Navbar> */}
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;